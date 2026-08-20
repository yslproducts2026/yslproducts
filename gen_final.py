import re, os

def extract_products(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    imgs = re.findall(r'src="([^"]+)"', content)
    names = re.findall(r'card-name">([^<]+)</div>', content)
    specs = re.findall(r'card-spec">([^<]+)</div>', content)
    product_imgs = [i for i in imgs if i.startswith("images/")]
    products = []
    for i in range(min(len(product_imgs), len(names), len(specs))):
        name = names[i].strip().replace(chr(10), " ").replace(chr(13), " ")
        spec = specs[i].strip().replace(chr(10), " ").replace(chr(13), " ")
        products.append({
            "name": name,
            "sku": name,
            "img": product_imgs[i],
            "material": spec,
            "color": "Various",
            "dimensions": "",
            "desc": ""
        })
    return products

products = {}
products["chairs"] = extract_products("chairs.html")
products["dining"] = extract_products("dining.html")
products["bedsSofas"] = extract_products("beds-sofas.html")
products["upholstery"] = extract_products("upholstery.html")
products["woodPaper"] = extract_products("wood-paper-laminated.html")
products["woodSolid"] = extract_products("wood-solid-veneer.html")
products["relaxing"] = extract_products("relaxing-chairs.html")

for k, v in products.items():
    print(f"{k}: {len(v)}")

# Build modal.js
lines = []
lines.append("(function(){")
lines.append("var products = {")

cat_list = list(products.items())
for idx, (cat, items) in enumerate(cat_list):
    lines.append(f"  {cat}: [")
    for p in items:
        def esc(s):
            return s.replace("\\", "\\\\").replace('"', '\\"').replace(chr(10), " ").replace(chr(13), " ")
        name_esc = esc(p["name"])
        sku_esc = esc(p["sku"])
        img_esc = esc(p["img"])
        mat_esc = esc(p["material"])
        color_esc = esc(p["color"])
        dim_esc = esc(p["dimensions"])
        desc_esc = esc(p["desc"])
        lines.append(f'    {{name:"{name_esc}",sku:"{sku_esc}",img:"{img_esc}",material:"{mat_esc}",color:"{color_esc}",dimensions:"{dim_esc}",desc:"{desc_esc}"}},')
    if idx < len(cat_list) - 1:
        lines.append("  ],")
    else:
        lines.append("  ]")

lines.append("};")
lines.append('var currentCategory = document.body.dataset.category || "";')
lines.append("")
lines.append('var overlay = null;')
lines.append('var closeBtn = null;')
lines.append("")
lines.append('function ensureModal() {')
lines.append('  if (overlay) return;')
lines.append('  overlay = document.createElement("div");')
lines.append('  overlay.id = "yslModalOverlay";')
lines.append('  overlay.className = "modal-overlay";')
lines.append('  overlay.innerHTML = ""')
lines.append("    + '<button class=\"modal-close\" id=\"yslModalClose\">&times;</button>'")
lines.append("    + '<div class=\"modal-image-wrap\"><img id=\"yslModalImg\" src=\"\" alt=\"\"></div>'")
lines.append("    + '<div class=\"modal-body\">'")
lines.append("    + '<h2 id=\"yslModalName\"></h2>'")
lines.append("    + '<div class=\"modal-sku\" id=\"yslModalSku\"></div>'")
lines.append("    + '<table><tbody id=\"yslModalSpecs\"></tbody></table>'")
lines.append("    + '<p class=\"modal-desc\" id=\"yslModalDesc\"></p>'")
lines.append("    + '<a href=\"#contact\" class=\"modal-cta\" id=\"yslModalCTA\">Inquire About This Product</a>'")
lines.append("    + '</div>';")
lines.append('  document.body.appendChild(overlay);')
lines.append('  closeBtn = document.getElementById("yslModalClose");')
lines.append('}')
lines.append("")
lines.append('function openModal(product) {')
lines.append('  ensureModal();')
lines.append('  document.getElementById("yslModalImg").src = product.img;')
lines.append('  document.getElementById("yslModalImg").alt = product.name;')
lines.append('  document.getElementById("yslModalName").textContent = product.name;')
lines.append('  document.getElementById("yslModalSku").textContent = "SKU: " + product.sku;')
lines.append('  var specsHTML = "<tr><td>Material</td><td>" + product.material + "</td></tr>"')
lines.append('    + "<tr><td>Color</td><td>" + product.color + "</td></tr>"')
lines.append('    + "<tr><td>Dimensions</td><td>" + product.dimensions + "</td></tr>";')
lines.append('  document.getElementById("yslModalSpecs").innerHTML = specsHTML;')
lines.append('  document.getElementById("yslModalDesc").textContent = product.desc;')
lines.append('  overlay.classList.add("active");')
lines.append('  document.body.style.overflow = "hidden";')
lines.append('}')
lines.append("")
lines.append('function closeModal() {')
lines.append('  if (!overlay) return;')
lines.append('  overlay.classList.remove("active");')
lines.append('  document.body.style.overflow = "";')
lines.append('}')
lines.append("")
lines.append('document.addEventListener("DOMContentLoaded", function() {')
lines.append('  ensureModal();')
lines.append('  if (closeBtn) closeBtn.addEventListener("click", closeModal);')
lines.append('  if (overlay) overlay.addEventListener("click", function(e) { if (e.target === overlay) closeModal(); });')
lines.append('  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });')
lines.append('  if (currentCategory && products[currentCategory]) {')
lines.append('    var cards = document.querySelectorAll(".card");')
lines.append('    var items = products[currentCategory];')
lines.append('    for (var i = 0; i < cards.length && i < items.length; i++) {')
lines.append('      (function(card, p) {')
lines.append('        card.addEventListener("click", function() { openModal(p); });')
lines.append('      })(cards[i], items[i]);')
lines.append('    }')
lines.append('  }')
lines.append('});')
lines.append("})();")

content = "\n".join(lines) + "\n"
with open("js/modal.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone! {len(lines)} lines")

# Verify
names = re.findall(r'name:"([^"]+)"', content)
print(f"Total products: {len(names)}")
imgs = re.findall(r'img:"([^"]+)"', content)
missing = [img for img in imgs if not os.path.exists(img)]
print(f"Images: {len(imgs)}, Missing: {len(missing)}")
