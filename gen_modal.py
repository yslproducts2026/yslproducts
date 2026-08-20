import csv, re, json

# Build CSV lookup
inv = {}
with open("products_template.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        cat = (row.get("category") or "").strip()
        name = (row.get("name") or "").strip()
        if not cat or not name: continue
        key = cat.lower() + "|||" + name.lower()
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
        name = (row.get("Card Name") or "").strip()
        if not cat or not name: continue
        key = cat + "|||" + name.lower()
        inv[key] = {
            "name": name, "sku": (row.get("SKU") or "").strip(),
            "img": (row.get("Image Path") or "").strip(),
            "material": (row.get("Card Spec") or "").strip(),
            "color": (row.get("Color") or "").strip(),
            "dimensions": (row.get("Dimensions") or "").strip(),
            "desc": (row.get("Description") or "").strip()
        }

# Parse each HTML page
products = {}
for page, cat in [("chairs.html","chairs"),("dining.html","dining"),("beds-sofas.html","bedsSofas"),("upholstery.html","upholstery"),("wood-paper-laminated.html","woodPaper"),("wood-solid-veneer.html","woodSolid"),("relaxing-chairs.html","relaxing")]:
    with open(page, encoding="utf-8") as f:
        content = f.read()
    # Match: <div class="card"><img ... src="..." alt="..."><div class="card-name">...
    pattern = r'<div class="card"><img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"[^>]*><div class="card-name">([^<]+)</div><div class="card-spec">([^<]*)</div></div>'
    matches = re.findall(pattern, content)
    prod_list = []
    for src, alt, card_name, card_spec in matches:
        key = cat.lower() + "|||" + alt.lower()
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

# Write modal.js
js_lines = ['(function(){', 'var P={']
for cat in ["chairs","dining","bedsSofas","upholstery","woodPaper","woodSolid","relaxing"]:
    items = products.get(cat, [])
    if not items: continue
    js_lines.append("  " + cat + ":[")
    for p in items:
        obj = json.dumps({"name":p["name"],"sku":p["sku"],"img":p["img"],"material":p["material"],"color":p["color"],"dimensions":p["dimensions"],"desc":p["desc"]}, ensure_ascii=False)
        js_lines.append("    " + obj + ",")
    js_lines.append("  ],")
js_lines.append("};")
js_lines.append('var cat=document.body.dataset.category||"";')
js_lines.append("var ov=null,cb=null;")
js_lines.append("function ensureModal(){")
js_lines.append("  if(ov)return;")
js_lines.append('  ov=document.createElement("div");')
js_lines.append('  ov.id="yslModalOverlay";')
js_lines.append('  ov.className="modal-overlay";')
js_lines.append("""  ov.innerHTML='<div class="modal-dialog"><button class="modal-close" id="yslModalClose">&times;</button><div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div><div class="modal-body"><h2 id="yslModalName"></h2><div class="modal-sku" id="yslModalSku"></div><table><tbody id="yslModalSpecs"></tbody></table><p class="modal-desc" id="yslModalDesc"></p><a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a></div></div>';""")
js_lines.append("  document.body.appendChild(ov);")
js_lines.append('  cb=document.getElementById("yslModalClose");')
js_lines.append("}")
js_lines.append("function openModal(p){")
js_lines.append("  ensureModal();")
js_lines.append('  document.getElementById("yslModalImg").src=p.img;')
js_lines.append('  document.getElementById("yslModalImg").alt=p.name;')
js_lines.append('  document.getElementById("yslModalName").textContent=p.name;')
js_lines.append('  document.getElementById("yslModalSku").textContent="SKU: "+p.sku;')
js_lines.append('  var h="<tr><td>Material</td><td>"+p.material+"</td></tr><tr><td>Color</td><td>"+p.color+"</td></tr><tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";')
js_lines.append('  document.getElementById("yslModalSpecs").innerHTML=h;')
js_lines.append('  document.getElementById("yslModalDesc").textContent=p.desc||"";')
js_lines.append('  ov.classList.add("active");')
js_lines.append('  document.body.style.overflow="hidden";')
js_lines.append("}")
js_lines.append('function closeModal(){if(!ov)return;ov.classList.remove("active");document.body.style.overflow="";}')
js_lines.append('document.addEventListener("DOMContentLoaded",function(){')
js_lines.append("  ensureModal();")
js_lines.append('  if(cb)cb.addEventListener("click",closeModal);')
js_lines.append('  if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeModal();});')
js_lines.append('  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});')
js_lines.append('  if(cat&&P[cat]){')
js_lines.append('    var cards=document.querySelectorAll(".card");')
js_lines.append("    var items=P[cat];")
js_lines.append("    for(var i=0;i<cards.length&&i<items.length;i++){")
js_lines.append('      (function(card,p){card.addEventListener("click",function(){openModal(p);});})(cards[i],items[i]);')
js_lines.append("    }")
js_lines.append("  }")
js_lines.append("});")
js_lines.append("})();")

with open("js/modal.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines) + "\n")
print("Done! Total products: " + str(sum(len(v) for v in products.values())))
