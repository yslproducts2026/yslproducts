/* ===== YSL Products - Modal & Product Data ===== */
(function(){
  /* ===== Product Database ===== */
  var products = {
    chairs: [
      { name:"Chair Ottoman", sku:"YDC-001", img:"images/chairs/page_23_img_01.jpg", material:"Solid Wood + Fabric", color:"GreyLight Wood", dimensions:"60x70x85 cm", desc:"Nodic looking Chair with ottoman"  },
      { name:"Classic Dining Chair with Arm", sku:"YAC-002", img:"images/chairs/page_23_img_02.jpg", material:"metal leg + fabric", color:"Grey", dimensions:"50x55x95 cm", desc:"Metal leg with wood looking heat transfer."  },
      { name:"Fabric Dining Chair", sku:"YOC-003", img:"images/chairs/page_23_img_03.jpg", material:"Fabric+ metal leg", color:"Black", dimensions:"50x45x90 cm", desc:"Premium office chair with high-back support, padded armrests"  },
      { name:"Velvet Accent Chair", sku:"YVC-004", img:"images/chairs/page_23_img_04.jpg", material:"Velvet Fabric + Metal Legs", color:"Dark Green", dimensions:"65x60x90cm", desc:"Luxurious velvet accent chair with gold-tone metal legs."  },
      { name:"Fabric Dining Chair", sku:"YSC-005", img:"images/chairs/page_23_img_05.jpg", material:"Fabric + Metal Legs", color:"Light Grey/Natural", dimensions:"50x45x90 cm", desc:"Minimalist Scandinavian-style dining chair with clean lines."  },
      { name:"Half moon Chair", sku:"YTC-006", img:"images/chairs/page_23_img_06.jpg", material:"Fabric + Wood Frame", color:"Cream", dimensions:"50x55x95 cm", desc:"Dining chair with Curved back frame"  },
      { name:"Industrial Bar Stool", sku:"YBS-007", img:"images/chairs/page_23_img_07.jpg", material:"Metal Frame + Wood Seat", color:"Black/Walnut", dimensions:"45x50x120 cm", desc:"Industrial-style bar stool with solid wood seat."  },
      { name:"Diamond Back Bar Stool", sku:"YEM-008", img:"images/chairs/page_23_img_08.jpg", material:"Metal leg + Fabric", color:"Black", dimensions:"50x50x120 cm", desc:"Metal leg with wood looking heat transfer."  },
      { name:"Mid-Century Dining Chair", sku:"YML-009", img:"images/chairs/page_23_img_09.jpg", material:"Metal leg with hard PU", color:"Brown", dimensions:"50x55x90 cm", desc:"Iconic mid-century Dining Chair with metal leg"  },
      { name:"Arm Dining Chair", sku:"YFC-010", img:"images/chairs/page_23_img_10.jpg", material:"Metal Leg with tufted back", color:"Grey", dimensions:"55x60x95 cm", desc:"Arm Chair with Tufted button back cushion"  },
      { name:"Swivel Armchair", sku:"YRA-011", img:"images/chairs/page_23_img_11.jpg", material:"Fabric + Metal Legs", color:"Grey", dimensions:"55x60x95cm", desc:"Swivel arm chair "  },
      { name:"Diamoand arm chair", sku:"YKC-012", img:"images/chairs/page_23_img_12.jpg", material:"Fabric + metal legs", color:"Grey", dimensions:"55 x 60 x 95Cm", desc:"Tappered leg with swivel function"  },
      { name:"Banquet Chair", sku:"YBC-013", img:"images/chairs/page_23_img_13.jpg", material:"Steel Frame + Fabric", color:"Gold/Cream", dimensions:"48x52x92 cm", desc:"Elegant banquet chair with padded seat and decorative metal frame."  },
      { name:"Staioned Dining chair", sku:"YRC-014", img:"images/chairs/page_23_img_14.jpg", material:"metal leg", color:"Metal", dimensions:"48x52x92 cm", desc:"Classic Dining Chair with Tufted design" }
    ],
    dining: [
      { name:"4-Seater Dining Set", sku:"YDS-001", img:"images/Dining/page_24_img_01.jpg", material:"Solid Wood + MDF table top", color:"Nature white", dimensions:"145x 75  x75 cm", desc:"Complete 4-seater dining set "  },
      { name:"2 Tone Dining Sets", sku:"YDT-002", img:"images/Dining/page_24_img_02.jpg", material:"Solid pine + MDF table top", color:"Nature white", dimensions:"1118 x75x73.5 cm", desc:"2 tone dining sets with 4 chairs"  },
      { name:"Marble-Top Dining Set", sku:"YDM-003", img:"images/Dining/page_24_img_03.jpg", material:"Marble + Stainless Steel", color:"White/Grey", dimensions:"90x90x75 cm", desc:"Luxurious marble-top dining set with stainless steel base."  },
      { name:"Square Pedestal Table", sku:"YRT-004", img:"images/Dining/page_24_img_04.jpg", material:"Metal leg with MDF top", color:"White", dimensions:"100x100x75 cm", desc:"square pedestal table perfect for intimate dining spaces."  },
      { name:"Rectangular 6 chair dining set", sku:"YSB-005", img:"images/Dining/page_24_img_05.jpg", material:"Metal leg with Tarrecado", color:"Grey", dimensions:"160x100x75 cm", desc:"6 chair dining set"  },
      { name:"Compact Dining Set", sku:"YCD-006", img:"images/Dining/page_24_img_06.jpg", material:"MDF + Steel Frame", color:"White/Silver", dimensions:"120x80x75 cm", desc:"Space-saving dining set ideal for apartments and small spaces."  },
      { name:"Farmhouse Dining Table", sku:"YFT-007", img:"images/Dining/page_24_img_07.jpg", material:"Reclaimed Wood", color:"Natural", dimensions:"90x90x75 cm", desc:"Rustic farmhouse dining table made from reclaimed wood."  },
      { name:"Glass Dining Table", sku:"YGT-008", img:"images/Dining/page_24_img_08.jpg", material:"Tempered Glass + Chrome", color:"Clear/Chrome", dimensions:"140x80x75 cm", desc:"Modern glass-top dining table with chrome legs." }
    ],
    upholstery: [
      { name:"3-Seater Sofa", sku:"YUS-001", img:"images/upholstery/3s.jpg", material:"Linen Fabric + Solid Wood", color:"Light Grey", dimensions:"210x85x85 cm", desc:"Spacious 3-seater sofa with high-density foam cushions."  },
      { name:"Recliner", sku:"YUA-002", img:"images/upholstery/bigboy.jpg", material:"PU leather", color:"Teal", dimensions:"87.5 x 98.0 x 104.0 cm", desc:"Recliner with 3 positions"  },
      { name:"Recliner collection", sku:"YUN-003", img:"images/upholstery/Nordic.jpg", material:"PU leather", color:"Grey", dimensions:"200.5 x 106.0 x 107.5", desc:"Recliner collection"  },
      { name:"Chesterfield Sofa", sku:"YUC-004", img:"images/upholstery/page_06_img_01.jpg", material:"Barcley Fabric 2 seats + chairs", color:"Beige", dimensions:"240x90x80 cm", desc:"Upholstery Modular"  },
      { name:"2.5 seatsl Sofa", sku:"YUS-005", img:"images/upholstery/page_06_img_02.jpg", material:"Fabric Blend + Wood Frame", color:"Beige", dimensions:"220x120x85 cm", desc:"2.5 seats sectional sofa with chaise lounge."  },
      { name:"Sectional Sofa", sku:"YUO-006", img:"images/upholstery/page_06_img_04.jpg", material:"Fabric Blend + Wood Frame", color:"Grey", dimensions:"280 x 180 x 85cm", desc:"L-shaped sectional sofa with chaise lounge."  },
      { name:"Sectional Sofa", sku:"YUW-007", img:"images/upholstery/page_08_img_01.jpg", material:"Fabric + Wood Frame", color:"Navy Blue", dimensions:"240x180x90 cm", desc:"L-shaped sectional sofa with chaise lounge."  },
      { name:"2.5 seatsl Sofa", sku:"YUP-008", img:"images/upholstery/page_08_img_02.jpg", material:"Fabric Blend + Wood Frame", color:"Brown", dimensions:"220x120x85 cm", desc:"Modern 2.5 seats sofa"  },
      { name:"Sofa Bed with wood trim", sku:"YUD-009", img:"images/upholstery/page_08_img_05.jpg", material:"Fabric + Wood Frame", color:"Grey/Walnut", dimensions:"220x110x88 cm", desc:"2 seats sofa with Clay-Clark function"  },
      { name:"Accent Chair", sku:"YUA-010", img:"images/upholstery/page_12_img_01.jpg", material:"Fabric + Metal Legs", color:"Blush Pink", dimensions:"180x70x88 cm", desc:"Stylish accent chair with slim metal legs."  },
      { name:"arm chair set 2", sku:"YUL-011", img:"images/upholstery/page_12_img_02.jpg", material:"Chenille Fabric + foam", color:"Sage Green", dimensions:"80x80x80 cm", desc:"\"Cozy 2-seater loveseat, compressed packing\"" }
    ],
    bedsSofas: [
      { name:"King Size Bed with tufted headboard", sku:"YQB-001", img:"images/beds-sofas/bed.jpg", material:"Uphosltery Frame with Fabric", color:"Grey", dimensions:"205x 217x156 cm", desc:"Elegant King-size bed with tall upholstered headboard."  },
      { name:"Sofa Bed with Storage", sku:"YSB-002", img:"images/beds-sofas/sofabed with storage.jpg", material:"Fabric + Metal Mechanism", color:"Beige", dimensions:"225x152x88 cm", desc:"Multi-functional sofa bed with built-in storage compartment."  },
      { name:"2-Seater Sofa Bed", sku:"YSS-003", img:"images/beds-sofas/2s sofa bed.jpg", material:"Fabrci + extension bed + clayclark back", color:"Beige", dimensions:"160x85x85 cm", desc:"Compact 2-seater sofa bed with Clau-clark mechanism."  },
      { name:"Chair sofa", sku:"YWB-004", img:"images/beds-sofas/bed position.jpg", material:"metal leg with PU cushion", color:"black", dimensions:"120x175x90 cm", desc:"Chromed leg with tufted PU cushion"  },
      { name:"Twin Bed Frame", sku:"YTB-005", img:"images/beds-sofas/bed positon2.jpg", material:"metal leg with PU cushion", color:"black", dimensions:"120x175x90 cm", desc:"Chromed leg with tufted PU cushion"  },
      { name:"Chaise Sofa", sku:"YCS-006", img:"images/beds-sofas/sofa position.jpg", material:"metal leg with PU cushion", color:"black", dimensions:"120x175x90 cm", desc:"Chromed leg with tufted PU cushion" }
    ],
    woodPaper: [
      { name:"TV Entertainment Unit", sku:"YTV-001", img:"images/Wood_Paper_Laminated/page_25_img_01.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"180x40x50 cm", desc:"Modern TV entertainment unit with cable management and storage cabinets."  },
      { name:"Bookshelf", sku:"YBS-002", img:"images/Wood_Paper_Laminated/page_25_img_02.jpg", material:"MDF + Paper Laminate", color:"Oak Pattern", dimensions:"80x30x180 cm", desc:"5-tier bookshelf with adjustable shelves."  },
      { name:"Computer Desk", sku:"YCD-003", img:"images/Wood_Paper_Laminated/page_25_img_03.jpg", material:"MDF + Steel Frame", color:"White", dimensions:"120x60x75 cm", desc:"Modern computer desk with cable management and keyboard tray."  },
      { name:"Shoe Cabinet", sku:"YSC-004", img:"images/Wood_Paper_Laminated/page_25_img_04.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"80x30x100 cm", desc:"Slim shoe cabinet with ventilated doors and rubber shelving."  },
      { name:"Coffee Table", sku:"YCT-005", img:"images/Wood_Paper_Laminated/page_25_img_05.jpg", material:"MDF + Paper Laminate", color:"Oak", dimensions:"100x60x45 cm", desc:"Modern coffee table with smooth laminate surface and metal legs."  },
      { name:"Wardrobe", sku:"YWR-006", img:"images/Wood_Paper_Laminated/page_26_img_01.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"120x55x200 cm", desc:"2-door wardrobe with hanging rail and shelf."  },
      { name:"Chest of Drawers", sku:"YDR-007", img:"images/Wood_Paper_Laminated/page_26_img_02.jpg", material:"MDF + Paper Laminate", color:"White", dimensions:"80x45x90 cm", desc:"5-drawer chest with smooth metal runners." }
    ],
    woodSolid: [
      { name:"Solid Oak Dining Table", sku:"YSO-001", img:"images/Wood_Solid_Veneer/page_27_img_01.jpg", material:"Solid Oak Wood", color:"Natural Oak", dimensions:"180x90x78 cm", desc:"Premium solid oak dining table with natural grain finish."  },
      { name:"Walnut Coffee Table", sku:"YWC-002", img:"images/Wood_Solid_Veneer/page_27_img_02.jpg", material:"Solid Walnut Wood", color:"Dark Walnut", dimensions:"130x70x42 cm", desc:"Handcrafted walnut coffee table with live edge design."  },
      { name:"Mahogany Console Table", sku:"YMC-003", img:"images/Wood_Solid_Veneer/page_27_img_03.jpg", material:"Mahogany Wood + Veneer", color:"Mahogany", dimensions:"140x35x80 cm", desc:"Elegant mahogany console table with carved legs and drawer."  },
      { name:"Teak Sideboard", sku:"YTS-004", img:"images/Wood_Solid_Veneer/page_27_img_04.jpg", material:"Teak Wood + Veneer", color:"Teak Brown", dimensions:"160x45x80 cm", desc:"Premium teak sideboard with 3 doors and adjustable shelves."  },
      { name:"Cherry Wood Desk", sku:"YCD-005", img:"images/Wood_Solid_Veneer/page_27_img_05.jpg", material:"Cherry Wood + Veneer", color:"Cherry", dimensions:"140x65x76 cm", desc:"Executive desk crafted from cherry wood with leather inlay top."  },
      { name:"Rosewood Display Cabinet", sku:"YRC-006", img:"images/Wood_Solid_Veneer/page_27_img_06.jpg", material:"Rosewood + Glass", color:"Rosewood", dimensions:"90x40x180 cm", desc:"Elegant display cabinet with glass doors and LED lighting." }
    ],
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




