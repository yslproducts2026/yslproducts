// build_details.js - Generates product detail pages + rewrites category pages.
// Source of truth: js/modal.js (var P). Run: node build_details.js
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const src = fs.readFileSync(path.join(ROOT, 'js/modal.js'), 'utf8');
const m = src.match(/var P=(\{[\s\S]*?\n\});/);
const P = eval('(' + m[1] + ')');

const CATS = {
  chairs:      { label: 'Chairs', page: 'chairs.html' },
  dining:      { label: 'Dining', page: 'dining.html' },
  bedsSofas:   { label: 'Beds & Sofas', page: 'beds-sofas.html' },
  upholstery:  { label: 'Upholstery', page: 'upholstery.html' },
  woodPaper:   { label: 'Wood Paper Laminated', page: 'wood-paper-laminated.html' },
  woodSolid:   { label: 'Wood Solid Veneer', page: 'wood-solid-veneer.html' },
  relaxing:    { label: 'Relaxing Chairs', page: 'relaxing-chairs.html' },
};

const esc = s => String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function slug(s){
  let s2 = String(s).trim()
    .replace(/&/g,' and ')
    .replace(/[^A-Za-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');
  return s2 || 'item';
}

const NAV = `
<nav>
<div class="nav-inner">
<a href="../index.html" class="nav-logo">
<img loading="lazy" src="../logo.png" alt="YSL Logo" style="height:32px;vertical-align:middle">
<span>YSL Products</span>
</a>
<div class="nav-links">
<a href="../index.html">Home</a>
<a href="../chairs.html">Chairs</a>
<a href="../dining.html">Dining</a>
<a href="../relaxing-chairs.html">Relaxing Chairs</a>
<a href="../upholstery.html">Upholstery</a>
<a href="../beds-sofas.html">Beds &amp; Sofas</a>
<a href="../wood-paper-laminated.html">Wood Paper Laminated</a>
<a href="../wood-solid-veneer.html">Wood Solid Veneer</a>
</div>
</div>
</nav>`;

const FOOTER = `
<footer>
<div class="footer-grid">
<div class="footer-col">
<img loading="lazy" src="../logo.png" class="logo" alt="YSL Logo">
<p>Your Smart Life - Premium furniture manufacturer delivering quality and style worldwide.</p>
</div>
<div class="footer-col">
<h4>Quick Links</h4>
<a href="../index.html">Home</a>
<a href="../chairs.html">Chairs</a>
<a href="../dining.html">Dining</a>
<a href="../relaxing-chairs.html">Relaxing Chairs</a>
<a href="../upholstery.html">Upholstery</a>
<a href="../beds-sofas.html">Beds &amp; Sofas</a>
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
</footer>`;

function badges(p){
  const b = [];
  const mat = p.material || '';
  if (/electric/i.test(mat)) b.push('<span class="badge badge-electric">Electric</span>');
  else if (/manual/i.test(mat)) b.push('<span class="badge badge-manual">Manual</span>');
  if (/recliner|sofa bed|lounge|relax/i.test(p.name + ' ' + (catLabel(p)))) b.push('<span class="badge badge-hot">Popular</span>');
  return b.join('');
}
function catLabel(p){ return ''; }

function parseDims(p){
  const d = (p.dimensions||'').trim();
  if (!d) return null;
  const parts = d.split(/,|;/).map(s=>s.trim()).filter(Boolean);
  const main = parts[0] || '';
  const extra = parts.slice(1).join(', ');
  const nums = main.replace(/cm/i,'').match(/[\d.]+/g);
  let w=null, h=null, dep=null;
  if (nums && nums.length >= 3){
    w = nums[0]; dep = nums[1]; h = nums[2];
  }
  return { w, h, dep, raw: main, extra: extra };
}

function detailPage(catKey, p){
  const cat = CATS[catKey];
  const dims = parseDims(p);
  const cards = [];
  if (dims){
    cards.push(['Width', dims.w ? dims.w + ' cm' : '\u2014']);
    cards.push(['Depth', dims.dep ? dims.dep + ' cm' : '\u2014']);
    cards.push(['Height', dims.h ? dims.h + ' cm' : '\u2014']);
    if (dims.extra) cards.push(['Seat', dims.extra.replace(/^Seat:/i,'').trim()]);
  }
  cards.push(['Material', p.material || '\u2014']);
  cards.push(['Color', p.color || '\u2014']);
  if ((p.desc||'').trim()) cards.push(['Notes', p.desc.trim()]);

  const related = P[catKey].filter(x => x.sku !== p.sku).slice(0,4);
  const relatedHtml = related.map(r => `
<a href="${slug(r.sku)}.html" class="related-card">
<img loading="lazy" src="../${esc(r.img)}" alt="${esc(r.name)}">
<div class="related-name">${esc(r.name)}</div>
<div class="related-spec">${esc(r.material)}</div>
</a>`).join('');

  const subject = encodeURIComponent('Inquiry: ' + p.name + ' (' + p.sku + ')');
  const body = encodeURIComponent('Product: ' + p.name + '\nSKU: ' + p.sku + '\nMaterial: ' + (p.material||'') + '\n\nI\'m interested in this product. Please provide pricing and availability.');
  const mailto = 'mailto:hansen@yslproducts.cc.cd?subject=' + subject + '&body=' + body;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${esc(p.name)} (${esc(p.sku)}) - ${esc(p.material)} - YSL Products Co., Ltd.">
<title>${esc(p.name)} - ${esc(cat.label)} - YSL Products</title>
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/detail.css">
</head>
<body>
${NAV}
<main class="detail-page">
<nav class="breadcrumb" aria-label="Breadcrumb">
<div class="container"><a href="../index.html">Home</a> <a href="../${cat.page}">${esc(cat.label)}</a> <span>${esc(p.name)}</span></div>
</nav>

<section class="detail-hero">
<div class="container detail-hero-grid">
<div class="detail-gallery">
<div class="main-image"><img id="mainImg" src="../${esc(p.img)}" alt="${esc(p.name)}" loading="eager" onerror="handleImageError(this)"></div>
</div>
<div class="detail-info">
${badges(p) ? `<div class="detail-badges">${badges(p)}</div>` : ''}
<h1 class="detail-title">${esc(p.name)}</h1>
<div class="detail-sku">SKU: ${esc(p.sku)}</div>
<div class="detail-meta">
<span class="meta-item"><strong>Category:</strong> ${esc(cat.label)}</span>
<span class="meta-item"><strong>Material:</strong> ${esc(p.material || '\u2014')}</span>
<span class="meta-item"><strong>Color:</strong> ${esc(p.color || '\u2014')}</span>
</div>
<div class="detail-description">
<h3>Description</h3>
<p>${esc(p.desc || 'Premium factory-made furniture by YSL Products Co., Ltd. Contact us for pricing, availability, and OEM/ODM options.')}</p>
</div>
<div class="detail-actions">
<a href="${esc(mailto)}" class="btn btn-primary btn-lg">Inquire Now</a>
<a href="../${cat.page}" class="btn btn-secondary btn-lg">&larr; Back to ${esc(cat.label)}</a>
</div>
</div>
</div>
</section>

<section class="detail-specs">
<div class="container">
<h3 class="specs-heading">Specifications</h3>
<div class="spec-grid">
${cards.map(([l,v]) => `<div class="spec-card"><h4>${esc(l)}</h4><p>${esc(v)}</p></div>`).join('\n')}
</div>
</div>
</section>

${relatedHtml ? `<section class="related-products">
<div class="container">
<h2>Related Products</h2>
<div class="related-grid">${relatedHtml}</div>
</div>
</section>` : ''}
</main>
${FOOTER}
<script src="../js/detail.js"></script>
</body>
</html>
`;
}

let total = 0;
for (const catKey of Object.keys(P)){
  const dir = path.join(ROOT, catKey);
  fs.mkdirSync(dir, { recursive: true });
  for (const p of P[catKey]){
    const file = path.join(dir, slug(p.sku) + '.html');
    fs.writeFileSync(file, detailPage(catKey, p));
    total++;
  }
}
console.log('Wrote', total, 'detail pages.');

// --- Rewrite category pages: wrap each card in <a class="card-link"> ---
// Match by image src (stable) rather than data-sku (can differ between modal.js and HTML)
const catPageMap = {
  chairs:'chairs.html', dining:'dining.html', bedsSofas:'beds-sofas.html',
  upholstery:'upholstery.html', woodPaper:'wood-paper-laminated.html',
  woodSolid:'wood-solid-veneer.html', relaxing:'relaxing-chairs.html'
};
for (const catKey of Object.keys(P)){
  const file = path.join(ROOT, catPageMap[catKey]);
  let html = fs.readFileSync(file, 'utf8');
  let changed = 0;
  for (const p of P[catKey]){
    // Find the card div by image src, wrap it in <a class="card-link">
    const imgSrc = p.img.replace(/[.*+?^${}()|[\\]]/g, '\\$&');
    // Already wrapped?
    if (html.includes('card-link" href="' + catKey + '/' + slug(p.sku) + '.html"')) continue;
    // Build: <a class="card-link" href="CAT/SLUG.html">CARD_HTML</a>
    // Card pattern: <div class="card" data-sku="X"><img ... src="IMGSRC" ...>...</div>
    const cardRe = new RegExp(
      '<div class="card"(?: data-sku="[^"]*")?><img[^>]*src="' + imgSrc + '"[^>]*>(?:[^<]|<(?!/div>))*</div>',
      'g'
    );
    if (cardRe.test(html)) {
      html = html.replace(cardRe,
        m => '<a class="card-link" href="' + catKey + '/' + slug(p.sku) + '.html">' + m + '</a>');
      changed++;
    } else {
      console.log('  WARN: no card match for', catKey, p.sku, p.img);
    }
  }
  fs.writeFileSync(file, html);
  console.log(catKey + ': wrapped', changed, 'cards in', catPageMap[catKey]);
}

// Add card-link CSS to style.css if missing
let styleCss = fs.readFileSync(path.join(ROOT,'css/style.css'),'utf8');
if (!styleCss.includes('.card-link')){
  styleCss += `\n/* Card links to detail pages */\n.card-link{display:block;text-decoration:none;color:inherit}\n.card-link:hover .card{transform:translateY(-4px);box-shadow:var(--shadow-lg)}\n.card-link .card{cursor:pointer}\n`;
  fs.writeFileSync(path.join(ROOT,'css/style.css'), styleCss);
  console.log('Updated css/style.css with .card-link rules.');
}
