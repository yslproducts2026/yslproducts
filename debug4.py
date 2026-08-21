import re, os
SITE = r"D:\website\yslproducts"
html = open(os.path.join(SITE, "chairs.html"), encoding="utf-8").read()
print("HTML length:", len(html))
print("Has card:", 'class="card"' in html)
print("Has data-sku:", 'data-sku' in html)

# Check raw content around first card
idx = html.find('class="card"')
print("Context:", repr(html[idx:idx+200]))

# Try regex
html2 = html.replace("\n", "")
print("\nAfter newline removal, length:", len(html2))
idx2 = html2.find('class="card"')
print("Context after remove:", repr(html2[idx2:idx2+200]))

pattern = r'<div class="card"><img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"[^>]*><div class="card-name">([^<]+)</div><div class="card-spec">([^<]*)</div></div>'
matches = re.findall(pattern, html2)
print("\nRegex matches:", len(matches))
if matches:
    print("First match:", matches[0])
