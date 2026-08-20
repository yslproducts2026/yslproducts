import csv, re, json

# Category name mapping: CSV category -> JS category key
CAT_MAP = {
    "beds-sofas": "bedsSofas",
    "wood-paper-laminated": "woodPaper",
    "wood-solid-veneer": "woodSolid",
    "chairs": "chairs",
    "dining": "dining",
    "upholstery": "upholstery",
    "relaxing": "relaxing",
}

# Build CSV lookup: js_key + name_lower -> data
inv = {}
with open("products_template.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        cat = (row.get("category") or "").strip()
        js_cat = CAT_MAP.get(cat, cat)
        name = (row.get("name") or "").strip()
        if not js_cat or not name: continue
        key = js_cat + "|||" + name.lower()
        inv[key] = {
            "name": name, "sku": (row.get("sku") or "").strip(),
            "img": "images/" + cat + "/" + (row.get("image") or "").strip(),
            "material": (row.get("material") or "").strip(),
            "color": (row.get("color") or "").strip(),
            "dimensions": (row.get("dimensions") or "").strip(),
            "desc": (row.get("description") or "").strip()
        }
with open("product_inventory.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        cat = (row.get("Category") or "").strip().lower()
        js_cat = CAT_MAP.get(cat, cat)
        name = (row.get("Card Name") or "").strip()
        if not js_cat or not name: continue
        key = js_cat + "|||" + name.lower()
        inv[key] = {
            "name": name, "sku": (row.get("SKU") or "").strip(),
            "img": (row.get("Image Path") or "").strip(),
            "material": (row.get("Card Spec") or "").strip(),
            "color": (row.get("Color") or "").strip(),
            "dimensions": (row.get("Dimensions") or "").strip(),
            "desc": (row.get("Description") or "").strip()
        }

# Parse HTML pages
products = {}
for page, cat in [("chairs.html","chairs"),("dining.html","dining"),("beds-sofas.html","bedsSofas"),("upholstery.html","upholstery"),("wood-paper-laminated.html","woodPaper"),("wood-solid-veneer.html","woodSolid"),("relaxing-chairs.html","relaxing")]:
    with open(page, encoding="utf-8") as f:
        content = f.read()
    pattern = r'<div class="card"><img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"[^>]*><div class="card-name">([^<]+)</div><div class="card-spec">([^<]*)</div></div>'
    matches = re.findall(pattern, content)
    prod_list = []
    for src, alt, card_name, card_spec in matches:
        key = cat + "|||" + alt.lower()
        csv_data = inv.get(key, {})
        prod_list.append({
            "name": alt,
            "sku": csv_data.get("sku", alt),
            "img": src,
            "material": csv_data.get("material", card_spec),
            "color": csv_data.get("color", "Various"),
            "dimensions": csv_data.get("dimensions", ""),
            "desc": csv_data.get("desc", "")
        })
    products[cat] = prod_list
    print(cat + ": " + str(len(prod_list)) + " products")

# Generate modal.js
js = ["(function(){","var P={"]
for cat in ["chairs","dining","bedsSofas","upholstery","woodPaper","woodSolid","relaxing"]:
    items = products.get(cat, [])
    if not items: continue
    js.append("  " + cat + ":[")
    for p in items:
        obj = json.dumps({"name":p["name"],"sku":p["sku"],"img":p["img"],"material":p["material"],"color":p["color"],"dimensions":p["dimensions"],"desc":p["desc"]}, ensure_ascii=False)
        js.append("    " + obj + ",")
    js.append("  ],")
js.append("};")
js += [
'var cat=document.body.dataset.category||"";',
"var ov=null,cb=null;",
"function ensureModal(){",
"  if(ov)return;",
'  ov=document.createElement("div");',
'  ov.id="yslModalOverlay";',
'  ov.className="modal-overlay";',
"""  ov.innerHTML='<div class="modal-dialog"><button class="modal-close" id="yslModalClose">&times;</button><div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div><div class="modal-body"><h2 id="yslModalName"></h2><div class="modal-sku" id="yslModalSku"></div><table><tbody id="yslModalSpecs"></tbody></table><p class="modal-desc" id="yslModalDesc"></p><a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a></div></div>';""",
"  document.body.appendChild(ov);",
'  cb=document.getElementById("yslModalClose");',
"}",
"function openModal(p){",
"  ensureModal();",
'  document.getElementById("yslModalImg").src=p.img;',
'  document.getElementById("yslModalImg").alt=p.name;',
'  document.getElementById("yslModalName").textContent=p.name;',
'  document.getElementById("yslModalSku").textContent="SKU: "+p.sku;',
'  var h="<tr><td>Material</td><td>"+p.material+"</td></tr><tr><td>Color</td><td>"+p.color+"</td></tr><tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";',
'  document.getElementById("yslModalSpecs").innerHTML=h;',
'  document.getElementById("yslModalDesc").textContent=p.desc||"";',
'  ov.classList.add("active");',
'  document.body.style.overflow="hidden";',
"}",
'function closeModal(){if(!ov)return;ov.classList.remove("active");document.body.style.overflow="";}',
'document.addEventListener("DOMContentLoaded",function(){',
"  ensureModal();",
'  if(cb)cb.addEventListener("click",closeModal);',
'  if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeModal();});',
'  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});',
'  if(cat&&P[cat]){',
'    var cards=document.querySelectorAll(".card");',
"    var items=P[cat];",
"    for(var i=0;i<cards.length&&i<items.length;i++){",
'      (function(card,p){card.addEventListener("click",function(){openModal(p);});})(cards[i],items[i]);',
"    }",
"  }",
"});",
"]});",
]

with open("js/modal.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js) + "\n")
print("Done! Total: " + str(sum(len(v) for v in products.values())) + " products")
