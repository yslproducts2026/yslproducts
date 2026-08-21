import re, csv, os

SITE = r"D:\website\yslproducts"

def read_csv(path):
    with open(path, encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))

t1 = read_csv(os.path.join(SITE, "products_template.csv"))
t2 = read_csv(os.path.join(SITE, "product_inventory.csv"))

# Build lookups
img_to_sku = {}
for row in t1 + t2:
    img = (row.get("image") or row.get("Image Path") or "").strip()
    sku = (row.get("sku") or row.get("SKU") or "").strip()
    if img and sku:
        fname = img.split("/")[-1] if "/" in img else img
        img_to_sku[fname] = sku

name_to_sku = {}
for row in t1 + t2:
    name = (row.get("name") or row.get("Card Name") or "").strip()
    sku = (row.get("sku") or row.get("SKU") or "").strip()
    if name and sku:
        name_to_sku[name] = sku

print("Image->SKU:", len(img_to_sku))
print("Name->SKU:", len(name_to_sku))

pages = ["chairs.html", "dining.html", "beds-sofas.html", "upholstery.html",
         "wood-paper-laminated.html", "wood-solid-veneer.html", "relaxing-chairs.html"]

for pf in pages:
    path = os.path.join(SITE, pf)
    html = open(path, encoding="utf-8").read()
    original = html
    
    # Find all card divs and add data-sku
    def replace_card(m):
        full = m.group(0)
        # Extract src and alt
        src_m = re.search(r'src="([^"]+)"', full)
        alt_m = re.search(r'alt="([^"]+)"', full)
        if not src_m or not alt_m:
            return full
        img_src = src_m.group(1)
        alt_text = alt_m.group(1)
        fname = img_src.split("/")[-1] if "/" in img_src else img_src
        sku = img_to_sku.get(fname) or name_to_sku.get(alt_text)
        if sku:
            # Replace <div class="card"> with <div class="card" data-sku="...">
            return full.replace('<div class="card">', '<div class="card" data-sku="' + sku + '">', 1)
        return full
    
    # Match the full card div
    html = re.sub(r'<div class="card">.*?</div>\s*</div>', replace_card, html, flags=re.DOTALL)
    
    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        count = html.count('data-sku="')
        print(pf + ": " + str(count) + " data-sku added")
    else:
        print(pf + ": no change")
