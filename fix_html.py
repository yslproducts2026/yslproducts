import os, re, csv

SITE = r"D:\website\yslproducts"

# Build SKU -> image mapping from CSV
def read_csv(path):
    with open(path, encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))

t1 = read_csv(os.path.join(SITE, "products_template.csv"))
t2 = read_csv(os.path.join(SITE, "product_inventory.csv"))

# Build lookup: image_filename -> sku
img_to_sku = {}
for row in t1 + t2:
    img = (row.get("image") or row.get("Image Path") or "").strip()
    sku = (row.get("sku") or row.get("SKU") or "").strip()
    if img and sku:
        img_to_sku[img] = sku

# Also build name -> sku lookup
name_to_sku = {}
for row in t1 + t2:
    name = (row.get("name") or row.get("Card Name") or "").strip()
    sku = (row.get("sku") or row.get("SKU") or "").strip()
    if name and sku:
        name_to_sku[name] = sku

pages = ["chairs.html", "dining.html", "beds-sofas.html", "upholstery.html",
         "wood-paper-laminated.html", "wood-solid-veneer.html", "relaxing-chairs.html"]

for pf in pages:
    path = os.path.join(SITE, pf)
    html = open(path, encoding="utf-8").read()
    original = html
    
    # Add data-sku to each card
    def add_sku(match):
        img_match = re.search(r'src="([^"]+)"', match.group(0))
        alt_match = re.search(r'alt="([^"]+)"', match.group(0))
        img = img_match.group(1) if img_match else ""
        alt = alt_match.group(1) if alt_match else ""
        
        # Try to find SKU from image path or alt text
        sku = img_to_sku.get(img) or name_to_sku.get(alt)
        if sku:
            return match.group(0).replace('<div class="card">', '<div class="card" data-sku="' + sku + '">', 1)
        return match.group(0)
    
    html = re.sub(r'<div class="card">', add_sku, html)
    
    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        count = html.count('data-sku="')
        print(pf + ": added " + str(count) + " data-sku attributes")
    else:
        print(pf + ": no changes")
