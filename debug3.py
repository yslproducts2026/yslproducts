import re, csv, os
SITE = r"D:\website\yslproducts"
html = open(os.path.join(SITE, "chairs.html"), encoding="utf-8").read()
print("First 200:", repr(html[:200]))
print()

# Find a card
m = re.search(r'<div class="card">', html)
if m:
    print("Found card at", m.start())
    print("Context:", repr(html[m.start():m.start()+200]))
    print()
    
    # Check what comes after <div class="card">
    after = html[m.start():m.start()+200]
    print("Has <img after card?", "<img" in after)
    print("Has newline?", "\n" in after)
    print("Raw bytes after card:", repr(after[19:40]))

# Try different regex patterns
patterns = [
    r'<div class="card">\s*<img',
    r'<div\s+class="card">\s*<img',
    r'<div[^>]*class="card"[^>]*>\s*<img',
]
for p in patterns:
    matches = re.findall(p, html)
    print(f"Pattern {p}: {len(matches)} matches")
