import re, csv, json, os

SITE = r"D:\website\yslproducts"

def extract_cards_from_html(filepath):
    html = open(filepath, encoding="utf-8").read()
    cards = re.findall(r'<div class="card"><img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"[^>]*><div class="card-name">([^<]+)</div><div class="card-spec">([^<]*)</div></div>', html)
    return cards

def read_csv_rows(path):
    with open(path, encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))

t1 = read_csv_rows(os.path.join(SITE, "products_template.csv"))
t2 = read_csv_rows(os.path.join(SITE, "product_inventory.csv"))

csv_lookup = {}
for row in t1 + t2:
    sku = (row.get("sku") or row.get("SKU") or "").strip()
    if sku:
        csv_lookup[sku] = row

page_files = {
    "chairs": "chairs.html",
    "dining": "dining.html",
    "bedsSofas": "beds-sofas.html",
    "upholstery": "upholstery.html",
    "woodPaper": "wood-paper-laminated.html",
    "woodSolid": "wood-solid-veneer.html",
    "relaxing": "relaxing-chairs.html",
}

all_prods = {}
for cat_js, page_file in page_files.items():
    html_path = os.path.join(SITE, page_file)
    if not os.path.exists(html_path):
        print(cat_js + ": no HTML file")
        continue
    cards = extract_cards_from_html(html_path)
    products = []
    for img, name, spec in cards:
        name = name.strip()
        sku = name
        row = csv_lookup.get(sku, {})
        p = {
            "name": name,
            "sku": sku,
            "img": img,
            "material": spec.strip() or (row.get("material") or row.get("Card Spec") or "").strip(),
            "color": (row.get("color") or row.get("Color") or "").strip(),
            "dimensions": (row.get("dimensions") or row.get("Dimensions") or "").strip(),
            "desc": (row.get("description") or row.get("Description") or "").strip(),
        }
        products.append(p)
    all_prods[cat_js] = products
    print(cat_js + ": " + str(len(products)) + " products")

lines = []
lines.append("(function(){")
lines.append("var P={")
items = list(all_prods.items())
for idx, (k, v) in enumerate(items):
    comma = "," if idx < len(items) - 1 else ""
    json_str = json.dumps(v, ensure_ascii=False, indent=2)
    lines.append("  " + k + ": " + json_str + comma)
lines.append("};")

modal = """var cat=document.body.dataset.category||"";
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
});"""
lines.append(modal)
lines.append("})();")

out_path = os.path.join(SITE, "js", "modal.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("modal.js written!")
