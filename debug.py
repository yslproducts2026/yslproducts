import re

SITE = r"D:\website\yslproducts"

# Count cards in each HTML
for page in ["chairs.html","dining.html","beds-sofas.html","upholstery.html","wood-paper-laminated.html","wood-solid-veneer.html","relaxing-chairs.html"]:
    html = open(os.path.join(SITE, page), encoding="utf-8").read().replace("\n", "") if "os" in dir() else ""
    # just count card divs
    count = html.count('<div class="card">')
    print(page + ": " + str(count) + " cards")

import os
for page in ["chairs.html","dining.html","beds-sofas.html","upholstery.html","wood-paper-laminated.html","wood-solid-veneer.html","relaxing-chairs.html"]:
    html = open(os.path.join(SITE, page), encoding="utf-8").read().replace("\n", "")
    count = html.count('<div class="card">')
    print(page + ": " + str(count) + " cards")
