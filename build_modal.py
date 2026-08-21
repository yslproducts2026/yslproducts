import csv, json

CAT_MAP = {
    'chairs': 'chairs',
    'dining': 'dining',
    'beds-sofas': 'bedsSofas',
    'upholstery': 'upholstery',
    'wood-paper-laminated': 'woodPaper',
    'wood-solid-veneer': 'woodSolid',
    'relaxing': 'relaxing',
}

def read_csv(path):
    rows = []
    with open(path, encoding='utf-8-sig') as f:
        for r in csv.DictReader(f):
            rows.append(r)
    return rows

t1 = read_csv(r'D:\website\yslproducts\products_template.csv')
t2 = read_csv(r'D:\website\yslproducts\product_inventory.csv')

all_prods = {}
seen = set()
for row in t1 + t2:
    cat_raw = (row.get('category') or row.get('Category','')).strip()
    key = CAT_MAP.get(cat_raw)
    if not key:
        continue
    sku = (row.get('sku') or row.get('SKU','')).strip()
    if sku in seen:
        continue
    seen.add(sku)
    img = (row.get('image') or row.get('Image Path','')).strip()
    if not img.startswith('images/'):
        img = 'images/' + img
    p = {
        'name': (row.get('name') or row.get('Card Name','')).strip(),
        'sku': sku,
        'img': img,
        'material': (row.get('material') or row.get('Card Spec','')).strip(),
        'color': (row.get('color') or row.get('Color','')).strip(),
        'dimensions': (row.get('dimensions') or row.get('Dimensions','')).strip(),
        'desc': (row.get('description') or row.get('Description','')).strip(),
    }
    all_prods.setdefault(key, []).append(p)

for k, v in all_prods.items():
    print(f'{k}: {len(v)} products')

lines = []
lines.append('(function(){')
lines.append('var P={')
items = list(all_prods.items())
for idx, (k, v) in enumerate(items):
    comma = ',' if idx < len(items) - 1 else ''
    json_arr = json.dumps(v, ensure_ascii=False, indent=2)
    lines.append(f'  {k}: [{json_arr},]{comma}')
lines.append('};')

modal_js = '''var cat=document.body.dataset.category||"";
var ov=null,cb=null;
function ensureModal(){
  if(ov)return;
  ov=document.createElement("div");
  ov.id="yslModalOverlay";
  ov.className="modal-overlay";
  ov.innerHTML='<div class="modal-dialog"><button class="modal-close" id="yslModalClose">&times;</button><div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div><div class="modal-body"><h2 id="yslModalName"></h2><div class="modal-sku" id="yslModalSku"></div><table><tbody id="yslModalSpecs"></tbody></table><p class="modal-desc" id="yslModalDesc"></p><a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a></div></div>';
  document.body.appendChild(ov);
  cb=document.getElementById("yslModalClose");
}
function openModal(p){
  ensureModal();
  document.getElementById("yslModalImg").src=p.img;
  document.getElementById("yslModalImg").alt=p.name;
  document.getElementById("yslModalName").textContent=p.name;
  document.getElementById("yslModalSku").textContent="SKU: "+p.sku;
  var h="";
  h+="<tr><td>Material</td><td>"+p.material+"</td></tr>";
  h+="<tr><td>Color</td><td>"+p.color+"</td></tr>";
  h+="<tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";
  document.getElementById("yslModalSpecs").innerHTML=h;
  document.getElementById("yslModalDesc").textContent=p.desc||"";
  ov.classList.add("active");
  document.body.style.overflow="hidden";
}
function closeModal(){if(!ov)return;ov.classList.remove("active");document.body.style.overflow="";}
document.addEventListener("DOMContentLoaded",function(){
  ensureModal();
  if(cb)cb.addEventListener("click",closeModal);
  if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeModal();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
  if(cat&&P[cat]){
    var cards=document.querySelectorAll(".card");
    var items=P[cat];
    for(var i=0;i<cards.length&&i<items.length;i++){
      (function(card,p){card.addEventListener("click",function(){openModal(p);});})(cards[i],items[i]);
    }
  }
});'''

lines.append(modal_js)
lines.append('})();')

with open(r'D:\website\yslproducts\js\modal.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('modal.js written!')
