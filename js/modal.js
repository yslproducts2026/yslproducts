/* ===== YSL Products - Modal & Product Data ===== */
(function(){
  /* ===== Product Database ===== */
  var products = {
    chairs: [
      { name:"Modern Dining Chair", sku:"YDC-001", img:"images/chairs/page_23_img_01.jpg", material:"Solid Wood + Fabric", color:"Beige/Light Wood", dimensions:"45×50×85 cm", desc:"Elegant modern dining chair featuring a curved backrest and cushioned seat. Perfect for dining rooms and meeting spaces." },
      { name:"Classic Wooden Armchair", sku:"YAC-002", img:"images/chairs/page_23_img_02.jpg", material:"Solid Oak Wood", color:"Natural Oak", dimensions:"58×55×90 cm", desc:"Classic wooden armchair with carved details and ergonomic armrests. Timeless design for living rooms and lounges." },
      { name:"Leather Office Chair", sku:"YOC-003", img:"images/chairs/page_23_img_03.jpg", material:"PU Leather + Metal Frame", color:"Black", dimensions:"60×58×100 cm", desc:"Premium office chair with high-back support, padded armrests, and smooth-rolling casters. Ideal for executive offices." },
      { name:"Velvet Accent Chair", sku:"YVC-004", img:"images/chairs/page_23_img_04.jpg", material:"Velvet Fabric + Metal Legs", color:"Dark Green", dimensions:"65×60×82 cm", desc:"Luxurious velvet accent chair with gold-tone metal legs. A statement piece for contemporary interiors." },
      { name:"Scandinavian Dining Chair", sku:"YSC-005", img:"images/chairs/page_23_img_05.jpg", material:"Beech Wood + Fabric", color:"Light Grey/Natural", dimensions:"48×52×80 cm", desc:"Minimalist Scandinavian-style dining chair with clean lines and comfortable padded seat. Lightweight and stackable." },
      { name:"Tufted Wingback Chair", sku:"YTC-006", img:"images/chairs/page_23_img_06.jpg", material:"Linen Fabric + Wood Frame", color:"Cream", dimensions:"70×65×95 cm", desc:"Classic tufted wingback chair with nailhead trim. Adds sophistication to any living room or bedroom corner." },
      { name:"Industrial Bar Stool", sku:"YBS-007", img:"images/chairs/page_23_img_07.jpg", material:"Metal Frame + Wood Seat", color:"Black/Walnut", dimensions:"40×40×75 cm", desc:"Industrial-style bar stool with solid wood seat and powder-coated metal frame. Perfect for kitchen islands and bars." },
      { name:"Ergonomic Mesh Chair", sku:"YEM-008", img:"images/chairs/page_23_img_08.jpg", material:"Mesh + Nylon Frame", color:"Black", dimensions:"62×60×105 cm", desc:"Breathable ergonomic mesh chair with lumbar support and adjustable headrest. Designed for all-day comfort." },
      { name:"Mid-Century Lounge Chair", sku:"YML-009", img:"images/chairs/page_23_img_09.jpg", material:"Walnut Wood + Wool Fabric", color:"Grey/Walnut", dimensions:"68×70×78 cm", desc:"Iconic mid-century lounge chair with angled wooden legs and premium wool upholstery. Timeless design classic." },
      { name:"Folding Chair Set", sku:"YFC-010", img:"images/chairs/page_23_img_10.jpg", material:"Steel Frame + PP Plastic", color:"White", dimensions:"45×48×80 cm", desc:"Versatile folding chairs suitable for events, conferences, and extra seating. Lightweight and easy to store." },
      { name:"Recliner Armchair", sku:"YRA-011", img:"images/chairs/page_23_img_11.jpg", material:"PU Leather + Wood Base", color:"Brown", dimensions:"75×80×105 cm", desc:"Comfortable recliner armchair with adjustable backrest and footrest. Perfect for home theaters and relaxation." },
      { name:"Kids Study Chair", sku:"YKC-012", img:"images/chairs/page_23_img_12.jpg", material:"PP Plastic + Steel Frame", color:"Blue", dimensions:"38×38×70 cm", desc:"Ergonomic kids study chair with height-adjustable seat. Colorful and durable design for children`s rooms." },
      { name:"Banquet Chair", sku:"YBC-013", img:"images/chairs/page_23_img_13.jpg", material:"Steel Frame + Fabric", color:"Gold/Cream", dimensions:"48×52×92 cm", desc:"Elegant banquet chair with padded seat and decorative metal frame. Ideal for weddings, hotels, and event venues." },
      { name:"Rocking Chair", sku:"YRC-014", img:"images/chairs/page_23_img_14.jpg", material:"Solid Wood", color:"Natural Wood", dimensions:"60×90×100 cm", desc:"Classic wooden rocking chair with curved runners and high back. Brings warmth and comfort to any porch or nursery." }
    ],
    dining: [
      { name:"6-Seater Dining Set", sku:"YDS-001", img:"images/Dining/page_24_img_01.jpg", material:"Solid Wood + Tempered Glass", color:"Walnut", dimensions:"160×90×75 cm (Table)", desc:"Complete 6-seater dining set with a tempered glass-top table and matching chairs. Modern family dining solution." },
      { name:"Extendable Dining Table", sku:"YDT-002", img:"images/Dining/page_24_img_02.jpg", material:"Solid Oak Wood", color:"Natural Oak", dimensions:"140-200×90×75 cm", desc:"Versatile extendable dining table with butterfly leaf mechanism. Seats 4-8 people comfortably." },
      { name:"Marble-Top Dining Set", sku:"YDM-003", img:"images/Dining/page_24_img_03.jpg", material:"Marble + Stainless Steel", color:"White Marble/Silver", dimensions:"150×90×75 cm (Table)", desc:"Luxury marble-top dining set with stainless steel base and matching upholstered chairs. Statement dining collection." },
      { name:"Round Pedestal Table", sku:"YDR-004", img:"images/Dining/page_24_img_04.jpg", material:"Solid Wood", color:"Dark Walnut", dimensions:"120×120×75 cm", desc:"Classic round dining table with carved pedestal base. Creates an intimate dining experience for 4-6 people." },
      { name:"Buffet Sideboard", sku:"YDB-005", img:"images/Dining/page_24_img_05.jpg", material:"Engineered Wood + Veneer", color:"White", dimensions:"150×45×85 cm", desc:"Elegant buffet sideboard with ample storage. Three drawers and two cabinets for dinnerware and linens." },
      { name:"Compact Dining Set", sku:"YDC-006", img:"images/Dining/page_24_img_06.jpg", material:"MDF + Steel Frame", color:"Black/Wood", dimensions:"120×70×75 cm (Table)", desc:"Space-saving 4-seater dining set ideal for apartments and small dining areas. Modern minimalist design." },
      { name:"Farmhouse Dining Table", sku:"YDF-007", img:"images/Dining/page_24_img_07.jpg", material:"Reclaimed Wood", color:"Rustic Brown", dimensions:"180×95×78 cm", desc:"Rustic farmhouse dining table crafted from reclaimed wood. Each piece has unique grain and character." },
      { name:"Glass Dining Table", sku:"YDG-008", img:"images/Dining/page_24_img_08.jpg", material:"Tempered Glass + Chrome", color:"Clear/Silver", dimensions:"140×80×75 cm", desc:"Contemporary glass dining table with chrome legs. Light and airy design that makes spaces feel larger." }
    ],
    upholstery: [
      { name:"3-Seater Sofa", sku:"YUS-001", img:"images/upholstery/3s.jpg", material:"Linen Fabric + Solid Wood Frame", color:"Light Grey", dimensions:"210×85×85 cm", desc:"Spacious 3-seater sofa with high-density foam cushions. Clean lines and tapered legs for modern living rooms." },
      { name:"Oversized Armchair", sku:"YUA-002", img:"images/upholstery/bigboy.jpg", material:"Velvet Fabric + Wood Frame", color:"Teal", dimensions:"95×90×85 cm", desc:"Extra-large comfortable armchair perfect for reading nooks and lounging. Deep seat with plush cushioning." },
      { name:"Nordic Sofa", sku:"YUN-003", img:"images/upholstery/Nordic.jpg", material:"Wool Blend Fabric + Wood Legs", color:"Charcoal", dimensions:"195×80×80 cm", desc:"Nordic-inspired compact sofa with slender legs and tailored upholstery. Ideal for Scandinavian-style interiors." },
      { name:"Chesterfield Sofa", sku:"YUC-004", img:"images/upholstery/page_06_img_01.jpg", material:"PU Leather + Wood Frame", color:"Dark Brown", dimensions:"220×90×80 cm", desc:"Classic Chesterfield sofa with deep button tufting and rolled arms. Timeless luxury for formal living spaces." },
      { name:"Sectional Sofa", sku:"YUS-005", img:"images/upholstery/page_06_img_02.jpg", material:"Fabric Blend + Wood Frame", color:"Beige", dimensions:"280×180×85 cm", desc:"L-shaped sectional sofa with chaise lounge. Modular design adaptable to various room layouts." },
      { name:"Ottoman Pouf", sku:"YUO-006", img:"images/upholstery/page_06_img_04.jpg", material:"Cotton Fabric + EPS Filling", color:"Mustard Yellow", dimensions:"45×45×40 cm", desc:"Versatile ottoman pouf that serves as extra seating, footrest, or decorative accent. Lightweight and portable." },
      { name:"Wingback Bed Frame", sku:"YUW-007", img:"images/upholstery/page_08_img_01.jpg", material:"Velvet + Solid Wood Frame", color:"Navy Blue", dimensions:"160×210×120 cm", desc:"Luxurious upholstered bed frame with tall wingback headboard. Creates a grand focal point in master bedrooms." },
      { name:"Platform Bed", sku:"YUP-008", img:"images/upholstery/page_08_img_02.jpg", material:"Linen Fabric + Wood Slats", color:"Light Grey", dimensions:"150×200×100 cm", desc:"Modern platform bed with upholstered headboard. No box spring needed — slatted base provides excellent support." },
      { name:"Dining Chair Set", sku:"YUD-009", img:"images/upholstery/page_08_img_05.jpg", material:"Fabric + Solid Wood Legs", color:"Grey/Walnut", dimensions:"48×52×88 cm", desc:"Set of 2 upholstered dining chairs with curved backrests. Comfortable seating that complements any dining table." },
      { name:"Accent Chair", sku:"YUA-010", img:"images/upholstery/page_12_img_01.jpg", material:"Fabric + Metal Legs", color:"Blush Pink", dimensions:"62×58×80 cm", desc:"Stylish accent chair with slim metal legs. Adds a pop of color and personality to bedrooms and living spaces." },
      { name:"Loveseat", sku:"YUL-011", img:"images/upholstery/page_12_img_02.jpg", material:"Chenille Fabric + Wood Frame", color:"Sage Green", dimensions:"160×80×80 cm", desc:"Cozy 2-seater loveseat with soft chenille upholstery. Perfect size for apartments and small living areas." }
    ],
    bedsSofas: [
      { name:"Queen Size Bed", sku:"YQB-001", img:"images/beds-sofas/bed.jpg", material:"Solid Wood + MDF Headboard", color:"White", dimensions:"160×210×110 cm", desc:"Elegant queen-size bed with tall upholstered headboard. Sturdy construction with wooden slats for mattress support." },
      { name:"Sofa Bed with Storage", sku:"YSB-002", img:"images/beds-sofas/sofabed with storage.jpg", material:"Fabric + Metal Mechanism", color:"Dark Grey", dimensions:"200×90×85 cm (Sofa)", desc:"Multi-functional sofa bed with built-in storage compartment. Easily converts from sofa to bed for overnight guests." },
      { name:"2-Seater Sofa Bed", sku:"YSS-003", img:"images/beds-sofas/2s sofa bed.jpg", material:"PU Leather + Steel Frame", color:"Brown", dimensions:"160×85×85 cm (Sofa)", desc:"Compact 2-seater sofa bed with click-clack mechanism. Ideal for home offices and guest rooms." },
      { name:"Wooden Bed Frame", sku:"YWB-004", img:"images/beds-sofas/bed position.jpg", material:"Solid Pine Wood", color:"Natural Pine", dimensions:"150×200×90 cm", desc:"Classic wooden bed frame with slatted headboard. Simple, sturdy, and timeless design for any bedroom." },
      { name:"Twin Bed Frame", sku:"YTB-005", img:"images/beds-sofas/bed positon2.jpg", material:"Engineered Wood + Veneer", color:"Espresso", dimensions:"100×200×85 cm", desc:"Compact twin bed frame perfect for kids rooms and guest bedrooms. Durable finish with rounded corners for safety." },
      { name:"Chaise Sofa", sku:"YCS-006", img:"images/beds-sofas/sofa position.jpg", material:"Velvet + Wood Frame", color:"Emerald Green", dimensions:"180×160×85 cm", desc:"Elegant L-shaped chaise sofa with rolled arm design. Luxurious velvet upholstery makes a bold statement." }
    ],
    woodPaper: [
      { name:"TV Entertainment Unit", sku:"YTV-001", img:"images/Wood_Paper_Laminated/page_25_img_01.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"180×40×50 cm", desc:"Modern TV entertainment unit with cable management and storage cabinets. Sleek white laminate finish." },
      { name:"Bookshelf", sku:"YBS-002", img:"images/Wood_Paper_Laminated/page_25_img_02.jpg", material:"MDF + Paper Laminate", color:"Oak Pattern", dimensions:"80×30×180 cm", desc:"5-tier bookshelf with adjustable shelves. Versatile storage for books, decor, and office supplies." },
      { name:"Computer Desk", sku:"YCD-003", img:"images/Wood_Paper_Laminated/page_25_img_03.jpg", material:"MDF + Steel Frame", color:"White/Wood Grain", dimensions:"120×60×75 cm", desc:"Modern computer desk with spacious work surface and sturdy steel legs. Ideal for home offices." },
      { name:"Shoe Cabinet", sku:"YSC-004", img:"images/Wood_Paper_Laminated/page_25_img_04.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"80×35×110 cm", desc:"Slim shoe cabinet with tilt-out compartments. Stores up to 12 pairs while saving hallway space." },
      { name:"Coffee Table", sku:"YCT-005", img:"images/Wood_Paper_Laminated/page_25_img_05.jpg", material:"MDF + Paper Laminate", color:"Marble Pattern", dimensions:"110×60×45 cm", desc:"Elegant coffee table with marble-pattern laminate top. Lower shelf provides extra storage and display space." },
      { name:"Wardrobe", sku:"YWR-006", img:"images/Wood_Paper_Laminated/page_26_img_01.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"120×55×200 cm", desc:"2-door wardrobe with hanging rail and shelf. Clean design with brushed metal handles." },
      { name:"Chest of Drawers", sku:"YDR-007", img:"images/Wood_Paper_Laminated/page_26_img_02.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"80×45×90 cm", desc:"5-drawer chest with smooth metal runners. Ample storage for clothes and bedroom essentials." }
    ],
    woodSolid: [
      { name:"Solid Oak Dining Table", sku:"YSO-001", img:"images/Wood_Solid_Veneer/page_27_img_01.jpg", material:"Solid Oak Wood", color:"Natural Oak", dimensions:"180×90×78 cm", desc:"Premium solid oak dining table with natural grain finish. Built to last generations with dovetail joinery." },
      { name:"Walnut Coffee Table", sku:"YWC-002", img:"images/Wood_Solid_Veneer/page_27_img_02.jpg", material:"Solid Walnut Wood", color:"Dark Walnut", dimensions:"130×70×42 cm", desc:"Handcrafted walnut coffee table with live edge design. Each piece showcases unique natural wood character." },
      { name:"Mahogany Console Table", sku:"YMC-003", img:"images/Wood_Solid_Veneer/page_27_img_03.jpg", material:"Mahogany Wood + Veneer", color:"Mahogany", dimensions:"140×35×80 cm", desc:"Elegant mahogany console table with carved legs and drawer. Perfect for entryways and hallways." },
      { name:"Teak Sideboard", sku:"YTS-004", img:"images/Wood_Solid_Veneer/page_27_img_04.jpg", material:"Teak Wood + Veneer", color:"Teak Brown", dimensions:"160×45×80 cm", desc:"Premium teak sideboard with 3 doors and adjustable shelves. Rich wood grain with natural oil finish." },
      { name:"Cherry Wood Desk", sku:"YCD-005", img:"images/Wood_Solid_Veneer/page_27_img_05.jpg", material:"Cherry Wood + Veneer", color:"Cherry", dimensions:"140×65×76 cm", desc:"Executive desk crafted from cherry wood with leather inlay top. Includes 3 drawers and cable management." },
      { name:"Rosewood Display Cabinet", sku:"YRC-006", img:"images/Wood_Solid_Veneer/page_27_img_06.jpg", material:"Rosewood + Glass", color:"Rosewood", dimensions:"90×40×180 cm", desc:"Elegant display cabinet with glass doors and LED lighting. Showcases collectibles while protecting from dust." }
    ]
  };

  var currentCategory = document.body.dataset.category || '';

  /* ===== Modal Functions ===== */
  var modalHTML = ''
    + '<div class="modal-overlay" id="modalOverlay">'
    + '  <div class="modal-dialog">'
    + '    <button class="modal-close" id="modalClose">&times;</button>'
    + '    <div class="modal-image-wrap"><img id="modalImg" src="" alt=""></div>'
    + '    <div class="modal-body">'
    + '      <h2 id="modalName"></h2>'
    + '      <div class="modal-sku" id="modalSku"></div>'
    + '      <table><tbody id="modalSpecs"></tbody></table>'
    + '      <p class="modal-desc" id="modalDesc"></p>'
    + '      <a href="#contact" class="modal-cta" id="modalCTA" onclick="document.getElementById(\'modalOverlay\').classList.remove(\'active\')">Inquire About This Product</a>'
    + '    </div>'
    + '  </div>'
    + '</div>';

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  var overlay = document.getElementById('modalOverlay');
  var closeBtn = document.getElementById('modalClose');

  function openModal(product) {
    document.getElementById('modalImg').src = product.img;
    document.getElementById('modalImg').alt = product.name;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalSku').textContent = 'SKU: ' + product.sku;
    var specsHTML = '<tr><td>Material</td><td>' + product.material + '</td></tr>'
      + '<tr><td>Color</td><td>' + product.color + '</td></tr>'
      + '<tr><td>Dimensions</td><td>' + product.dimensions + '</td></tr>';
    document.getElementById('modalSpecs').innerHTML = specsHTML;
    document.getElementById('modalDesc').textContent = product.desc;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ===== Bind product cards ===== */
  if (currentCategory && products[currentCategory]) {
    var cards = document.querySelectorAll('.card');
    var items = products[currentCategory];
    cards.forEach(function(card, i) {
      if (i < items.length) {
        card.addEventListener('click', (function(p) {
          return function() { openModal(p); };
        })(items[i]));
      }
    });
  }
})();
