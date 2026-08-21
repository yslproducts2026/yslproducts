import csv, re, json

# ============================================================
# 1. Build lookup from CSVs (normalize paths to match HTML)
# ============================================================
inv = {}  # normalized_img_path -> {full data}

def norm_path(p):
    """Normalize path: lowercased, no underscores in folder names, no spaces around slashes."""
    return p.lower().replace("_", "-")

with open("products_template.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        cat = (row.get("category") or "").strip()
        img = (row.get("image") or "").strip()
        if not img or not img.endswith((".jpg",".jpeg",".png",".webp")):
            continue
        full = "images/" + cat + "/" + img
        inv[norm_path(full)] = {
            "name": (row.get("name") or "").strip(),
            "sku": (row.get("sku") or "").strip(),
            "img": full,
            "material": (row.get("material") or "").strip(),
            "color": (row.get("color") or "").strip(),
            "dimensions": (row.get("dimensions") or "").strip(),
            "desc": (row.get("description") or "").strip()
        }

with open("product_inventory.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        img = (row.get("Image Path") or "").strip()
        if not img:
            continue
        inv[norm_path(img)] = {
            "name": (row.get("Card Name") or "").strip(),
            "sku": (row.get("SKU") or "").strip(),
            "img": img,
            "material": (row.get("Card Spec") or "").strip(),
            "color": (row.get("Color") or "").strip(),
            "dimensions": (row.get("Dimensions") or "").strip(),
            "desc": (row.get("Description") or "").strip()
        }

# ============================================================
# 2. Read each HTML page and extract product info
# ============================================================
pages = [
    ("chairs.html", "chairs"),
    ("dining.html", "dining"),
    ("beds-sofas.html", "bedsSofas"),
    ("upholstery.html", "upholstery"),
    ("wood-paper-laminated.html", "woodPaper"),
    ("wood-solid-veneer.html", "woodSolid"),
    ("relaxing-chairs.html", "relaxing"),
]

products = {}
for page, cat in pages:
    with open(page, encoding="utf-8") as f:
        c = f.read()
    # Extract: src, alt, card-name, card-spec
    pattern = r'<div class="card"><img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"[^>]*><div class="card-name">([^<]+)</div><div class="card-spec">([^<]*)</div></div>'
    matches = re.findall(pattern, c)
    prod_list = []
    for src, alt, card_name, card_spec in matches:
        data = inv.get(norm_path(src), {})
        prod_list.append({
            "name": alt,
            "sku": data.get("sku", alt),
            "img": src,
            "material": data.get("material", card_spec),
            "color": data.get("color", "Various"),
            "dimensions": data.get("dimensions", ""),
            "desc": data.get("desc", "")
        })
    products[cat] = prod_list
    print(cat + ": " + str(len(prod_list)) + " products")

# ============================================================
# 3. Generate modal.js
# ============================================================
js = "(function(){\nvar P={\n"
cats_order = ["chairs","dining","bedsSofas","upholstery","woodPaper","woodSolid","relaxing"]
for cat in cats_order:
    items = products.get(cat, [])
    if not items:
        continue
    js += "  " + cat + ":[\n"
    for p in items:
        js += "    " + json.dumps(p, ensure_ascii=False) + ",\n"
    js += "  ],\n"

js += "};\n"
js += 'var cat=document.body.dataset.category||"";\n'
js += "var ov=null,cb=null;\n"
js += "function ensureModal(){\n"
js += "  if(ov)return;\n"
js += '  ov=document.createElement("div");\n'
js += '  ov.id="yslModalOverlay";\n'
js += '  ov.className="modal-overlay";\n'
js += """  ov.innerHTML='<div class="modal-dialog"><button class="modal-close" id="yslModalClose">&times;</button><div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div><div class="modal-body"><h2 id="yslModalName"></h2><div class="modal-sku" id="yslModalSku"></div><table><tbody id="yslModalSpecs"></tbody></table><p class="modal-desc" id="yslModalDesc"></p><a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a></div></div>';\n"""
js += "  document.body.appendChild(ov);\n"
js += '  cb=document.getElementById("yslModalClose");\n'
js += "}\n"
js += "function openModal(p){\n"
js += "  ensureModal();\n"
js += '  document.getElementById("yslModalImg").src=p.img;\n'
js += '  document.getElementById("yslModalImg").alt=p.name;\n'
js += '  document.getElementById("yslModalName").textContent=p.name;\n'
js += '  document.getElementById("yslModalSku").textContent="SKU: "+p.sku;\n'
js += '  var h="<tr><td>Material</td><td>"+p.material+"</td></tr><tr><td>Color</td><td>"+p.color+"</td></tr><tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";\n'
js += '  document.getElementById("yslModalSpecs").innerHTML=h;\n'
js += '  document.getElementById("yslModalDesc").textContent=p.desc||"";\n'
js += '  ov.classList.add("active");\n'
js += '  document.body.style.overflow="hidden";\n'
js += "}\n"
js += 'function closeModal(){if(!ov)return;ov.classList.remove("active");document.body.style.overflow="";}\n'
js += 'document.addEventListener("DOMContentLoaded",function(){\n'
js += "  ensureModal();\n"
js += '  if(cb)cb.addEventListener("click",closeModal);\n'
js += '  if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeModal();});\n'
js += '  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});\n'
js += '  if(cat&&P[cat]{\n'
js += '    var cards=document.querySelectorAll(".card");\n'
js += "    var items=P[cat];\n"
js += "    for(var i=0;i<cards.length&&i<items.length;i++){\n"
js += '      (function(card,p){card.addEventListener("click",function(){openModal(p);});})(cards[i],items[i]);\n'
js += "    }\n"
js += "  }\n"
js += "});\n"
js += "})();\n"

with open("js/modal.js", "w", encoding="utf-8") as f:
    f.write(js)

# Count products with dimensions
with_dims = 0
total = 0
for cat in cats_order:
    for p in products.get(cat, []):
        total += 1
        if p["dimensions"]:
            with_dims += 1
print("Total: " + str(total) + " products, " + str(with_dims) + " with dimensions")
print("modal.js written OK")
