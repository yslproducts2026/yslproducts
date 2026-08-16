# -*- coding: utf-8 -*-
import csv
import os

def generate_product_html(csv_file, output_dir):
    products = {}
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            category = row['category'].strip().lower()
            if category not in products:
                products[category] = []
            products[category].append({
                'name': row['name'].strip(),
                'sku': row['sku'].strip(),
                'img': row['image'].strip(),
                'material': row['material'].strip(),
                'color': row['color'].strip(),
                'dimensions': row['dimensions'].strip(),
                'desc': row['description'].strip()
            })
    
    category_map = {
        'chairs': 'chairs', 'dining': 'dining', 'upholstery': 'upholstery',
        'beds-sofas': 'beds-sofas', 'wood-paper-laminated': 'wood-paper-laminated',
        'wood-solid-veneer': 'wood-solid-veneer'
    }
    
    for cat_key, items in products.items():
        if cat_key not in category_map:
            continue
        cat_name = category_map[cat_key]
        title_map = {'chairs': 'Chairs', 'dining': 'Dining', 'upholstery': 'Upholstery',
                     'beds-sofas': 'Beds & Sofas', 'wood-paper-laminated': 'Wood Paper Laminated',
                     'wood-solid-veneer': 'Wood Solid Veneer'}
        page_title = title_map.get(cat_name, cat_name) + ' Collection'
        
        cards_html = '\n'.join([
            f'<div class="card">\n<img loading="lazy" src="images/{cat_name}/{i["img"]}" alt="{i["name"]}">\n<div class="card-name">{i["name"]}</div>\n<div class="card-spec">{i["material"]}</div>\n</div>'
            for i in items
        ])
        
        html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="YSL Products {page_title} - Premium furniture from China.">
<title>{page_title} - YSL Products Co., Ltd.</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body data-category="{cat_name}">
<nav>
<div class="nav-inner">
<a href="index.html" class="nav-logo"><span>YSL Products</span></a>
<div class="nav-links">
<a href="index.html">Home</a>
<a href="chairs.html">Chairs</a>
<a href="dining.html">Dining</a>
<a href="upholstery.html">Upholstery</a>
<a href="beds-sofas.html">Beds & Sofas</a>
<a href="wood-paper-laminated.html">Wood Paper Laminated</a>
<a href="wood-solid-veneer.html">Wood Solid Veneer</a>
</div>
</div>
</nav>
<header class="page-header"><h1>{page_title}</h1></header>
<div class="grid">
{cards_html}
</div>
<footer>
<div class="footer-grid">
<div class="footer-col">
<img loading="lazy" src="logo.png" class="logo" alt="YSL Logo">
<p>Your Smart Life ? Premium furniture manufacturer delivering quality and style worldwide.</p>
</div>
<div class="footer-col">
<h4>Quick Links</h4>
<a href="index.html">Home</a>
<a href="chairs.html">Chairs</a>
<a href="dining.html">Dining</a>
<a href="upholstery.html">Upholstery</a>
<a href="beds-sofas.html">Beds & Sofas</a>
</div>
<div class="footer-col">
<h4>Contact</h4>
<p>Email: hansen@yslproducts.cc.cd</p>
<p>Tel: +86-15868213949</p>
<p>WhatsApp: +86-15868213949</p>
</div>
</div>
<div class="footer-bottom">
<p>&copy; 2026 YSL Products Co., Ltd. All rights reserved.</p>
</div>
<div class="footer-actions">
<a href="https://mail.yslproducts.bond" class="action-btn action-btn-primary">Email</a>
<a href="https://tv.yslproducts.cc.cd" class="action-btn action-btn-outline">IPTV</a>
<a href="https://vpn.yslproducts.dpdns.org" class="action-btn action-btn-outline">VPN</a>
</div>
</footer>
<script src="js/modal.js"></script>
</body>
</html>'''
        
        with open(os.path.join(output_dir, f"{cat_name}.html"), 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Generated: {cat_name}.html ({len(items)} products)")
    
    # Generate modal.js
    js = "/* ===== YSL Products - Modal & Product Data ===== */\n(function(){\n"
    js += "  var products = {\n"
    for cat_key, items in products.items():
        if cat_key not in category_map: continue
        cat_name = category_map[cat_key]
        js += f"    {cat_name}: [\n"
        for item in items:
            js += f'''      {{ name:"{item['name']}", sku:"{item['sku']}", img:"images/{cat_name}/{item['img']}", material:"{item['material']}", color:"{item['color']}", dimensions:"{item['dimensions']}", desc:"{item['desc']}" }},\n'''
        js = js.rstrip(',\n') + "\n    ],\n"
    js = js.rstrip(',\n') + "\n  };\n\n"
    js += """  var currentCategory = document.body.dataset.category || '';
  var modalHTML = '<div class="modal-overlay" id="modalOverlay"><div class="modal-dialog"><button class="modal-close" id="modalClose">&times;</button><div class="modal-image-wrap"><img id="modalImg" src="" alt=""></div><div class="modal-body"><h2 id="modalName"></h2><div class="modal-sku" id="modalSku"></div><table><tbody id="modalSpecs"></tbody></table><p class="modal-desc" id="modalDesc"></p><a href="#contact" class="modal-cta" id="modalCTA" onclick="document.getElementById(\'modalOverlay\').classList.remove(\'active\')">Inquire About This Product</a></div></div></div>';
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  var overlay = document.getElementById('modalOverlay');
  var closeBtn = document.getElementById('modalClose');
  function openModal(product) {
    document.getElementById('modalImg').src = product.img;
    document.getElementById('modalImg').alt = product.name;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalSku').textContent = 'SKU: ' + product.sku;
    var specsHTML = '<tr><td>Material</td><td>' + product.material + '</td></tr><tr><td>Color</td><td>' + product.color + '</td></tr><tr><td>Dimensions</td><td>' + product.dimensions + '</td></tr>';
    document.getElementById('modalSpecs').innerHTML = specsHTML;
    document.getElementById('modalDesc').textContent = product.desc;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { overlay.classList.remove('active'); document.body.style.overflow = ''; }
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
  if (currentCategory && products[currentCategory]) {
    var cards = document.querySelectorAll('.card');
    var items = products[currentCategory];
    cards.forEach(function(card, i) { if (i < items.length) card.addEventListener('click', (function(p) { return function() { openModal(p); }; })(items[i])); });
  }
})();
"""
    with open(os.path.join(output_dir, "js", "modal.js"), 'w', encoding='utf-8') as f:
        f.write(js)
    print("Generated: js/modal.js")
    return products

if __name__ == "__main__":
    products = generate_product_html("products_template.csv", ".")
    print(f"\nDone! {len(products)} categories generated.")
