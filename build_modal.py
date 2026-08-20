import csv

products = {}
seen = set()

with open("products_template.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        cat = (row.get("category") or "").strip()
        name = (row.get("name") or "").strip()
        if not cat or not name: continue
        key = (cat, name.lower())
        if key in seen: continue
        seen.add(key)
        products.setdefault(cat, []).append({
            "name": name,
            "sku": (row.get("sku") or "").strip(),
            "img": "images/" + cat + "/" + (row.get("image") or "").strip(),
            "material": (row.get("material") or "").strip(),
            "color": (row.get("color") or "").strip(),
            "dimensions": (row.get("dimensions") or "").strip(),
            "desc": (row.get("description") or "").strip()
        })

with open("product_inventory.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        cat = (row.get("Category") or "").strip().lower()
        name = (row.get("Card Name") or "").strip()
        if not cat or not name: continue
        key = (cat, name.lower())
        if key in seen: continue
        seen.add(key)
        products.setdefault(cat, []).append({
            "name": name,
            "sku": (row.get("SKU") or "").strip(),
            "img": (row.get("Image Path") or "").strip(),
            "material": (row.get("Card Spec") or "").strip(),
            "color": (row.get("Color") or "").strip(),
            "dimensions": (row.get("Dimensions") or "").strip(),
            "desc": (row.get("Description") or "").strip()
        })

print("Final counts:")
for cat in sorted(products):
    items = products[cat]
    print(f"  {cat}: {len(items)}")
    for p in items:
        print(f"    - {p['name']} | dims='{p['dimensions']}'")
