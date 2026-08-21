import os, re
SITE = r"D:\website\yslproducts"
js = open(os.path.join(SITE, "js", "modal.js"), encoding="utf-8").read()
pages = {"chairs":"chairs.html","dining":"dining.html","bedsSofas":"beds-sofas.html","upholstery":"upholstery.html","woodPaper":"wood-paper-laminated.html","woodSolid":"wood-solid-veneer.html","relaxing":"relaxing-chairs.html"}
for cat, pf in pages.items():
    html = open(os.path.join(SITE, pf), encoding="utf-8").read().replace("\n", "")
    card_count = html.count('<div class="card">')
    # Count products in JS for this category
    pattern = cat + r':\[\s*'
    idx = js.index(pattern)
    rest = js[idx+len(pattern):]
    next_match = re.search(r'\n  \w+:\[\s*', rest)
    chunk = rest[:next_match.start()] if next_match else rest
    js_count = chunk.count('"name"')
    match_str = "OK" if card_count == js_count else "MISMATCH"
    print(f"{cat}: HTML={card_count} JS={js_count} {match_str}")
total_html = sum(open(os.path.join(SITE, pf), encoding="utf-8").read().replace("\n","").count('<div class="card">') for pf in pages.values())
total_js = js.count('"name"')
print(f"Total: HTML={total_html} JS={total_js}")
