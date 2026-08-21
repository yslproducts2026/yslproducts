import csv, re
html_imgs = {}
for page in ['chairs.html','dining.html','beds-sofas.html','upholstery.html','wood-paper-laminated.html','wood-solid-veneer.html','relaxing-chairs.html']:
    with open(page, encoding='utf-8') as f:
        c = f.read()
    for m in re.findall(r'src="([^"]+)"', c):
        if m.startswith('images/'):
            html_imgs[m] = page
print('Unique HTML image paths: ' + str(len(html_imgs)))
for img, page in sorted(html_imgs.items()):
    print('  ' + img + ' in ' + page)
