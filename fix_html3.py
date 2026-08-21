import os, re, csv

SITE = r"D:\website\yslproducts"

def read_csv(path):
    with open(path, encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))

t1 = read_csv(os.path.join(SITE, "products_template.csv"))
t2 = read_csv(os.path.join(SITE, "product_inventory.csv"))

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

pages = ["chairs.html", "dining.html", "beds-sofas.html", "upholstery.html",
         "wood-paper-laminated.html", "wood-solid-veneer.html", "relaxing-chairs.html"]

for pf in pages:
    path = os.path.join(SITE, pf)
    html = open(path, encoding="utf-8").read()
    original = html
    
    # Normalize: remove newlines within card divs for matching, then restore
    # Actually, just use a more flexible regex
    def add_sku(match):
        full = match.group(0)
        # Extract src and alt from the match
        img_m = re.search(r'src="([^"]+)"', full)
        alt_m = re.search(r'alt="([^"]+)"', full)
        if not img_m or not alt_m:
            return full
        img_src = img_m.group(1)
        alt_text = alt_m.group(1)
        fname = img_src.split("/")[-1] if "/" in img_src else img_src
        sku = img_to_sku.get(fname) or name_to_sku.get(alt_text)
        if sku:
            # Insert data-sku into the card div
            return re.sub(r'<div class="card">', '<div class="card" data-sku="' + sku + '">', full, count=1)
        return full
    
    # Match card divs that may span multiple lines
    html = re.sub(r'<div class="card">\s*<img', add_sku, html)
    
    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        count = html.count('data-sku="')
        print(pf + ": " + str(count) + " data-sku added")
    else:
        print(pf + ": no change")
