import csv, re

html_products = {}
for page, cat in [("chairs.html","chairs"),("dining.html","dining"),("beds-sofas.html","beds-sofas"),("upholstery.html","upholstery"),("wood-paper-laminated.html","wood-paper-laminated"),("wood-solid-veneer.html","wood-solid-veneer"),("relaxing-chairs.html","relaxing")]:
    with open(page, encoding="utf-8") as f:
        content = f.read()
    names = re.findall(r"alt=\"([^\"]+)\"", content)
    names = [n for n in names if n not in ["YSL Logo"]]
    html_products[cat] = names
    print(cat + ": " + str(len(names)) + " products in HTML")

# Build CSV lookup
inv = {}
with open("product_inventory.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        name = (row.get("Card Name") or "").strip().lower()
        inv[name] = row
with open("products_template.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        name = (row.get("name") or "").strip().lower()
        inv[name] = row

# Check each category
for cat, names in html_products.items():
    missing = []
    for n in names:
        if n.lower() not in inv:
            missing.append(n)
    if missing:
        print(cat + " MISSING from CSV: " + str(missing))
    else:
        print(cat + ": all found in CSV")

# Check chairs specifically for FG330010/FG330040
print()
print("Chairs HTML names:", html_products.get("chairs", []))
