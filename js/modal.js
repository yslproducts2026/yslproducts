(function(){
var P={
  chairs: [
  {
    "name": "Chair Ottoman",
    "sku": "YDC-001",
    "material": "Solid Wood + Fabric",
    "color": "Grey Light Wood",
    "dimensions": "60x70x85 cm", "containerLoad": "", "desc": "Nodic looking Chair with ottoman",
    "img": "images/chairs/page_23_img_01.jpg"
  },
  {
    "name": "Classic Dining Chair with Arm",
    "sku": "YAC-002",
    "material": "metal leg + fabric",
    "color": "Grey",
    "dimensions": "50x55x95 cm", "containerLoad": "", "desc": "Metal leg with wood looking heat transfer.",
    "img": "images/chairs/page_23_img_02.jpg"
  },
  {
    "name": "Fabric Dining Chair",
    "sku": "YOC-003",
    "material": "Fabric+ metal leg",
    "color": "Black",
    "dimensions": "50x45x90 cm", "containerLoad": "", "desc": "Premium office chair with high-back support",
    "img": "images/chairs/page_23_img_03.jpg"
  },
  {
    "name": "Velvet Accent Chair",
    "sku": "YVC-004",
    "material": "Velvet Fabric + Metal Legs",
    "color": "Dark Green",
    "dimensions": "65x60x90cm", "containerLoad": "", "desc": "Luxurious velvet accent chair",
    "img": "images/chairs/page_23_img_04.jpg"
  },
  {
    "name": "Fabric Dining Chair",
    "sku": "YSC-005",
    "material": "Fabric + Metal Legs",
    "color": "Light Grey/Natural",
    "dimensions": "50x45x90 cm", "containerLoad": "", "desc": "Minimalist Scandinavian-style dining chair",
    "img": "images/chairs/page_23_img_05.jpg"
  },
  {
    "name": "Half moon Chair",
    "sku": "YTC-006",
    "material": "Fabric + Wood Frame",
    "color": "Cream",
    "dimensions": "50x55x95 cm", "containerLoad": "", "desc": "Dining chair with Curved back frame",
    "img": "images/chairs/page_23_img_06.jpg"
  },
  {
    "name": "Industrial Bar Stool",
    "sku": "YBS-007",
    "material": "Black/Walnut",
    "color": "45x50x120 cm",
    "dimensions": "Industrial-style bar stool", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_07.jpg"
  },
  {
    "name": "Diamond Back Bar Stool",
    "sku": "YEM-008",
    "material": "Black",
    "color": "50x50x120 cm",
    "dimensions": "Metal leg with wood looking heat transfer.", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_08.jpg"
  },
  {
    "name": "Mid-Century Dining Chair",
    "sku": "YML-009",
    "material": "Brown",
    "color": "50x55x90 cm",
    "dimensions": "Iconic mid-century Dining Chair", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_09.jpg"
  },
  {
    "name": "Arm Dining Chair",
    "sku": "YFC-010",
    "material": "Grey",
    "color": "55x60x95 cm",
    "dimensions": "Arm Chair with Tufted button back cushion", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_10.jpg"
  },
  {
    "name": "Swivel Armchair",
    "sku": "YRA-011",
    "material": "Grey",
    "color": "55x60x95cm",
    "dimensions": "Swivel arm chair", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_11.jpg"
  },
  {
    "name": "Diamoand arm chair",
    "sku": "YKC-012",
    "material": "Grey",
    "color": "55x60x95cm",
    "dimensions": "Tappered leg with swivel function", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_12.jpg"
  },
  {
    "name": "Banquet Chair",
    "sku": "YBC-013",
    "material": "Gold/Cream",
    "color": "48x52x92 cm",
    "dimensions": "Elegant banquet chair", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_13.jpg"
  },
  {
    "name": "Staioned Dining chair",
    "sku": "YRC-014",
    "material": "Metal",
    "color": "48x52x92 cm",
    "dimensions": "Classic Dining Chair with Tufted design", "containerLoad": "", "desc": "",
    "img": "images/chairs/page_23_img_14.jpg"
  },
  {
    "name": "FG120084",
    "sku": "FG120084",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "78 x 106.5 x 85.5 cm, Seat: 54 x 46 cm", "containerLoad": "", "desc": "40HC: 256 sets. Net Wt: 26.4 kg",
    "img": "images/chairs/FG120084.jpg"
  },
  {
    "name": "FG140094",
    "sku": "FG140094",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "69.5 x 104.5 x 80.5 cm, Seat: 50 x 45 cm", "containerLoad": "", "desc": "40HC: 192 sets. Net Wt: 42.2 kg",
    "img": "images/chairs/FG140094.jpg"
  },
  {
    "name": "FG140101",
    "sku": "FG140101",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "75 x 99.5 x 79.5 cm, Seat: 50 x 45 cm", "containerLoad": "", "desc": "40HC: 212 sets. Net Wt: 18.5 kg",
    "img": "images/chairs/FG140101.jpg"
  },
  {
    "name": "FG140113",
    "sku": "FG140113",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "76.5 x 91 x 93.5 cm, Seat: 56 x 45 cm", "containerLoad": "", "desc": "40HC: 180 sets. Net Wt: 23.5 kg",
    "img": "images/chairs/FG140113.jpg"
  },
  {
    "name": "FG140122",
    "sku": "FG140122",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "75.5 x 101.5 x 87.5 cm, Seat: 49 x 41.5 cm", "containerLoad": "", "desc": "Net Wt: 17.5 kg",
    "img": "images/chairs/FG140122.jpg"
  },
  {
    "name": "FG140132",
    "sku": "FG140132",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "76 x 105.5 x 82.5 cm, Seat: 51 x 45 cm", "containerLoad": "", "desc": "40HC: 246 sets. Net Wt: 21.7 kg",
    "img": "images/chairs/FG140132.jpg"
  },
  {
    "name": "FG140141",
    "sku": "FG140141",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "77 x 86 x 101.5 cm, Seat: 57 x 44.5 cm", "containerLoad": "", "desc": "40HC: 186 sets. Net Wt: 21.5 kg",
    "img": "images/chairs/FG140141.jpg"
  },
  {
    "name": "FG140154",
    "sku": "FG140154",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "73 x 105.5 x 84 cm, Seat: 50 x 45 cm", "containerLoad": "", "desc": "40HC: 170 sets. Net Wt: 25.5 kg",
    "img": "images/chairs/FG140154.jpg"
  },
  {
    "name": "FG140164",
    "sku": "FG140164",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "71.5 x 108 x 82.5 cm, Seat: 47 x 45.5 cm", "containerLoad": "", "desc": "40HC: 252 sets. Net Wt: 27.2 kg",
    "img": "images/chairs/FG140164.jpg"
  },
  {
    "name": "FG140174",
    "sku": "FG140174",
    "material": "Steel Frame + Plywood + Manual Control",
    "color": "Various",
    "dimensions": "74 x 107.5 x 78.5 cm, Seat: 50 x 44.5 cm", "containerLoad": "", "desc": "40HC: 180 sets. Net Wt: 22.3 kg",
    "img": "images/chairs/FG140174.jpg"
  },
  {
    "name": "FG140211",
    "sku": "FG140211",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "69 x 85 x 78 cm, Seat: 54 x 48.5 cm", "containerLoad": "", "desc": "Net Wt: 13.6 kg",
    "img": "images/chairs/FG140211.jpg"
  },
  {
    "name": "FG140231",
    "sku": "FG140231",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "67 x 83.5 x 71.5 cm, Seat: 47.5 x 44 cm", "containerLoad": "", "desc": "Net Wt: 12.8 kg",
    "img": "images/chairs/FG140231.jpg"
  },
  {
    "name": "FG140241",
    "sku": "FG140241",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "70 x 92 x 80.5 cm, Seat: 49.5 x 43.5 cm", "containerLoad": "", "desc": "Net Wt: 13.4 kg",
    "img": "images/chairs/FG140241.jpg"
  },
  {
    "name": "FG140272",
    "sku": "FG140272",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "76.5 x 104.5 x 90.5 cm, Seat: 54 x 44 cm", "containerLoad": "", "desc": "40HC: 180 sets. Net Wt: 17.3 kg",
    "img": "images/chairs/FG140272.jpg"
  },
  {
    "name": "FG310021",
    "sku": "FG310021",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "50 x 87.5 x 66 cm, Seat: 48 x 50 cm", "containerLoad": "", "desc": "Net Wt: 21 kg",
    "img": "images/chairs/FG310021.jpg"
  },
  {
    "name": "FG310022",
    "sku": "FG310022",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "59 x 87.5 x 66 cm, Seat: 48 x 50 cm", "containerLoad": "", "desc": "Net Wt: 24.4 kg",
    "img": "images/chairs/FG310022.jpg"
  },
  {
    "name": "FG310031",
    "sku": "FG310031",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "54 x 87 x 66.5 cm, Seat: 45 x 51.5 cm", "containerLoad": "", "desc": "Net Wt: 20.5 kg",
    "img": "images/chairs/FG310031.jpg"
  },
  {
    "name": "FG310042",
    "sku": "FG310042",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "58 x 87 x 67 cm, Seat: 49.5 x 51 cm", "containerLoad": "", "desc": "Net Wt: 23.3 kg",
    "img": "images/chairs/FG310042.jpg"
  },
  {
    "name": "FG310052",
    "sku": "FG310052",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "61 x 87.5 x 63 cm, Seat: 48.5 x 52 cm", "containerLoad": "", "desc": "Net Wt: 24.9 kg",
    "img": "images/chairs/FG310052.jpg"
  },
  {
    "name": "FG310062",
    "sku": "FG310062",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "56 x 87 x 63 cm, Seat: 48 x 50 cm", "containerLoad": "", "desc": "Net Wt: 23.2 kg",
    "img": "images/chairs/FG310062.jpg"
  },
  {
    "name": "FG310072",
    "sku": "FG310072",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "64 x 88 x 65.5 cm, Seat: 49.5 x 50 cm", "containerLoad": "", "desc": "Net Wt: 28 kg",
    "img": "images/chairs/FG310072.jpg"
  },
  {
    "name": "FG310082",
    "sku": "FG310082",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "64.5 x 85 x 65.5 cm, Seat: 47 x 50 cm", "containerLoad": "", "desc": "Net Wt: 21.6 kg",
    "img": "images/chairs/FG310082.jpg"
  },
  {
    "name": "FG310092",
    "sku": "FG310092",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "59.5 x 93 x 57 cm, Seat: 44 x 49 cm", "containerLoad": "", "desc": "Net Wt: 20.4 kg",
    "img": "images/chairs/FG310092.jpg"
  },
  {
    "name": "FG320011",
    "sku": "FG320011",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "52 x 82.5 x 59 cm, Seat: 42 x 46.5 cm", "containerLoad": "", "desc": "Net Wt: 23 kg",
    "img": "images/chairs/FG320011.jpg"
  },
  {
    "name": "FG330020",
    "sku": "FG330020",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "46.5 x 52 x 91-112 cm, Seat: 37.5 x 61.5-81.5 cm", "containerLoad": "", "desc": "Net Wt: 18.6 kg",
    "img": "images/chairs/FG330020.jpg"
  },
  {
    "name": "FG330040",
    "sku": "FG330040",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "49.5 x 89.5-110.5 x 52.5 cm, Seat: 39 x 65-86 cm", "containerLoad": "", "desc": "",
    "img": "images/chairs/FG330040.jpg"
  },
  {
    "name": "FG330010",
    "sku": "FG330010",
    "material": "Steel Frame + Plywood",
    "color": "Various",
    "dimensions": "46 x 90-111 x 53 cm, Seat: 40 x 63.5-83.5 cm", "containerLoad": "", "desc": "Net Wt: 19.4 kg",
    "img": "images/relaxing/FG330010.jpg"
  }
],
  dining: [
  {
    "name": "4-Seater Dining Set",
    "sku": "YDS-001",
    "material": "Solid Wood + MDF table top",
    "color": "Nature white",
    "dimensions": "145x75x75 cm", "containerLoad": "", "desc": "Complete 4-seater dining set",
    "img": "images/Dining/page_24_img_01.jpg"
  },
  {
    "name": "2 Tone Dining Sets",
    "sku": "YDT-002",
    "material": "Solid pine + MDF table top",
    "color": "Nature white",
    "dimensions": "1118x75x73.5 cm", "containerLoad": "", "desc": "2 tone dining sets with 4 chairs",
    "img": "images/Dining/page_24_img_02.jpg"
  },
  {
    "name": "Marble-Top Dining Set",
    "sku": "YDM-003",
    "material": "Marble + Stainless Steel",
    "color": "White/Grey",
    "dimensions": "90x90x75 cm", "containerLoad": "", "desc": "Luxurious marble-top dining set",
    "img": "images/Dining/page_24_img_03.jpg"
  },
  {
    "name": "Square Pedestal Table",
    "sku": "YRT-004",
    "material": "Metal leg with MDF top",
    "color": "White",
    "dimensions": "100x100x75 cm", "containerLoad": "", "desc": "square pedestal table",
    "img": "images/Dining/page_24_img_04.jpg"
  },
  {
    "name": "Rectangular 6 chair dining set",
    "sku": "YSB-005",
    "material": "Metal leg with Tarrecado",
    "color": "Grey",
    "dimensions": "160x100x75 cm", "containerLoad": "", "desc": "6 chair dining set",
    "img": "images/Dining/page_24_img_05.jpg"
  },
  {
    "name": "Compact Dining Set",
    "sku": "YCD-006",
    "material": "MDF + Steel Frame",
    "color": "White/Silver",
    "dimensions": "120x80x75 cm", "containerLoad": "", "desc": "Space-saving dining set",
    "img": "images/Dining/page_24_img_06.jpg"
  },
  {
    "name": "Farmhouse Dining Table",
    "sku": "YFT-007",
    "material": "Reclaimed Wood",
    "color": "Natural",
    "dimensions": "90x90x75 cm", "containerLoad": "", "desc": "Rustic farmhouse dining table",
    "img": "images/Dining/page_24_img_07.jpg"
  },
  {
    "name": "Glass Dining Table",
    "sku": "YGT-008",
    "material": "Tempered Glass + Chrome",
    "color": "White/Clear",
    "dimensions": "90x90x75 cm", "containerLoad": "", "desc": "Glass top dining table",
    "img": "images/Dining/page_24_img_08.jpg"
  }
],
  bedsSofas: [
  {
    "name": "King Size Bed",
    "sku": "YKB-001",
    "material": "Fabric + Metal Frame",
    "color": "Multiple colors",
    "dimensions": "200x210x150 cm", "containerLoad": "", "desc": "Elegant king-size bed",
    "img": "images/beds-sofas/bed.jpg"
  },
  {
    "name": "Sofa Bed",
    "sku": "YBB-002",
    "material": "Fabric + Metal Mechanism",
    "color": "Beige",
    "dimensions": "225x152x88 cm", "containerLoad": "", "desc": "Multi-functional sofa bed",
    "img": "images/beds-sofas/sofabed with storage.jpg"
  },
  {
    "name": "2-Seater Sofa Bed",
    "sku": "YSS-003",
    "material": "Fabric + extension bed",
    "color": "Beige",
    "dimensions": "160x85x85 cm", "containerLoad": "", "desc": "Compact 2-seater sofa bed",
    "img": "images/beds-sofas/2s sofa bed.jpg"
  },
  {
    "name": "Chair sofa",
    "sku": "YWB-004",
    "material": "metal leg with PU cushion",
    "color": "black",
    "dimensions": "120x175x90 cm", "containerLoad": "", "desc": "Chromed leg with tufted PU cushion",
    "img": "images/beds-sofas/bed position.jpg"
  },
  {
    "name": "Twin Bed Frame",
    "sku": "YTB-005",
    "material": "metal leg with PU cushion",
    "color": "black",
    "dimensions": "120x175x90 cm", "containerLoad": "", "desc": "Chromed leg with tufted PU cushion",
    "img": "images/beds-sofas/bed positon2.jpg"
  },
  {
    "name": "Chaise Sofa",
    "sku": "YCS-006",
    "material": "metal leg with PU cushion",
    "color": "black",
    "dimensions": "120x175x90 cm", "containerLoad": "", "desc": "Chromed leg with tufted PU cushion",
    "img": "images/beds-sofas/sofa position.jpg"
  }
],
  upholstery: [
  {
    "name": "3-Seater Sofa",
    "sku": "Y3S-001",
    "material": "Fabric + Wood Frame",
    "color": "Multiple colors",
    "dimensions": "200x90x85 cm", "containerLoad": "", "desc": "3-seater sofa",
    "img": "images/upholstery/3s.jpg"
  },
  {
    "name": "Sofa Bed",
    "sku": "YBB-002",
    "material": "Fabric + Metal Mechanism",
    "color": "Beige",
    "dimensions": "225x152x88 cm", "containerLoad": "", "desc": "Multi-functional sofa bed",
    "img": "images/upholstery/bigboy.jpg"
  },
  {
    "name": "Arm Chair Set",
    "sku": "YAC-003",
    "material": "Chenille Fabric + foam",
    "color": "Grey",
    "dimensions": "80x80x90 cm", "containerLoad": "", "desc": "Single arm chair",
    "img": "images/upholstery/page_06_img_01.jpg"
  },
  {
    "name": "Arm Chair Set 2",
    "sku": "YAC-004",
    "material": "Chenille Fabric + foam",
    "color": "Grey",
    "dimensions": "80x80x90 cm", "containerLoad": "", "desc": "Single arm chair",
    "img": "images/upholstery/page_06_img_02.jpg"
  }
],
  woodPaper: [
  {
    "name": "TV Entertainment Unit",
    "sku": "YTV-001",
    "material": "MDF + Paper Laminate",
    "color": "White",
    "dimensions": "180x40x50 cm", "containerLoad": "", "desc": "Modern TV entertainment unit",
    "img": "images/Wood_Paper_Laminated/page_25_img_01.jpg"
  },
  {
    "name": "Bookshelf",
    "sku": "YBS-002",
    "material": "MDF + Paper Laminate",
    "color": "Oak Pattern",
    "dimensions": "80x30x180 cm", "containerLoad": "", "desc": "5-tier bookshelf",
    "img": "images/Wood_Paper_Laminated/page_25_img_02.jpg"
  },
  {
    "name": "Computer Desk",
    "sku": "YCD-003",
    "material": "MDF + Steel Frame",
    "color": "White",
    "dimensions": "120x60x75 cm", "containerLoad": "", "desc": "Modern computer desk",
    "img": "images/Wood_Paper_Laminated/page_25_img_03.jpg"
  },
  {
    "name": "Shoe Cabinet",
    "sku": "YSC-004",
    "material": "MDF + Paper Laminate",
    "color": "White",
    "dimensions": "80x30x100 cm", "containerLoad": "", "desc": "Slim shoe cabinet",
    "img": "images/Wood_Paper_Laminated/page_25_img_04.jpg"
  },
  {
    "name": "Coffee Table",
    "sku": "YCT-005",
    "material": "MDF + Paper Laminate",
    "color": "Oak",
    "dimensions": "100x60x45 cm", "containerLoad": "", "desc": "Modern coffee table",
    "img": "images/Wood_Paper_Laminated/page_25_img_05.jpg"
  },
  {
    "name": "Wardrobe",
    "sku": "YWR-006",
    "material": "MDF + Paper Laminate",
    "color": "White",
    "dimensions": "120x55x200 cm", "containerLoad": "", "desc": "2-door wardrobe",
    "img": "images/Wood_Paper_Laminated/page_26_img_01.jpg"
  },
  {
    "name": "Chest of Drawers",
    "sku": "YDR-007",
    "material": "MDF + Paper Laminate",
    "color": "White",
    "dimensions": "80x45x90 cm", "containerLoad": "", "desc": "5-drawer chest",
    "img": "images/Wood_Paper_Laminated/page_26_img_02.jpg"
  }
],
  woodSolid: [
  {
    "name": "Solid Oak Dining Table",
    "sku": "YSO-001",
    "material": "Solid Oak Wood",
    "color": "Natural Oak",
    "dimensions": "180x90x78 cm", "containerLoad": "", "desc": "Premium solid oak dining table",
    "img": "images/Wood_Solid_Veneer/page_27_img_01.jpg"
  },
  {
    "name": "Walnut Coffee Table",
    "sku": "YWC-002",
    "material": "Solid Walnut Wood",
    "color": "Dark Walnut",
    "dimensions": "130x70x42 cm", "containerLoad": "", "desc": "Handcrafted walnut coffee table",
    "img": "images/Wood_Solid_Veneer/page_27_img_02.jpg"
  },
  {
    "name": "Mahogany Console Table",
    "sku": "YMC-003",
    "material": "Mahogany Wood + Veneer",
    "color": "Mahogany",
    "dimensions": "140x35x80 cm", "containerLoad": "", "desc": "Elegant mahogany console table",
    "img": "images/Wood_Solid_Veneer/page_27_img_03.jpg"
  },
  {
    "name": "Teak Sideboard",
    "sku": "YTS-004",
    "material": "Teak Wood + Veneer",
    "color": "Teak Brown",
    "dimensions": "160x45x80 cm", "containerLoad": "", "desc": "Premium teak sideboard",
    "img": "images/Wood_Solid_Veneer/page_27_img_04.jpg"
  },
  {
    "name": "Cherry Wood Desk",
    "sku": "YCD-005",
    "material": "Cherry Wood + Veneer",
    "color": "Cherry",
    "dimensions": "140x65x76 cm", "containerLoad": "", "desc": "Executive desk crafted from cherry wood",
    "img": "images/Wood_Solid_Veneer/page_27_img_05.jpg"
  },
  {
    "name": "Rosewood Display Cabinet",
    "sku": "YRC-006",
    "material": "Rosewood + Glass",
    "color": "Rosewood",
    "dimensions": "90x40x180 cm", "containerLoad": "", "desc": "Elegant display cabinet",
    "img": "images/Wood_Solid_Veneer/page_27_img_06.jpg"
  }
],
  relaxing: [
  {
    "name": "FG113012",
    "sku": "FG113012",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "75 x 109 x 81 cm, Seat: 50 x 45 cm", "containerLoad": "", "desc": "40HC: 195 sets. Net Wt: 35 kg",
    "img": "images/relaxing/FG113012.jpg"
  },
  {
    "name": "FG113022",
    "sku": "FG113022",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "76.5 x 115.5 x 85 cm, Seat: 49.5 x 45.5 cm", "containerLoad": "", "desc": "40HC: 195 sets. Net Wt: 38.9 kg",
    "img": "images/relaxing/FG113022.jpg"
  },
  {
    "name": "FG113032",
    "sku": "FG113032",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "70.5 x 111 x 84 cm, Seat: 51 x 45.5 cm", "containerLoad": "", "desc": "40HC: 185 sets. Net Wt: 36.7 kg",
    "img": "images/relaxing/FG113032.jpg"
  },
  {
    "name": "FG113042",
    "sku": "FG113042",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "67 x 107 x 84 cm, Seat: 51 x 45.5 cm", "containerLoad": "", "desc": "40HC: 210 sets. Net Wt: 37 kg",
    "img": "images/relaxing/FG113042.jpg"
  },
  {
    "name": "FG113052",
    "sku": "FG113052",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "73 x 111 x 82.5 cm, Seat: 51 x 45.5 cm", "containerLoad": "", "desc": "40HC: 195 sets. Net Wt: 45.5 kg",
    "img": "images/relaxing/FG113052.jpg"
  },
  {
    "name": "CH-255099P2",
    "sku": "CH-255099P2",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "73.5 x 107 x 83.5 cm, Seat: 50.5 x 47 cm", "containerLoad": "", "desc": "40HC: 220 sets. Net Wt: 34.5 kg",
    "img": "images/relaxing/CH-255099P2.jpg"
  },
  {
    "name": "FG113102",
    "sku": "FG113102",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "67 x 109.5 x 83.5 cm, Seat: 51 x 46.5 cm", "containerLoad": "", "desc": "40HC: 215 sets. Net Wt: 37.1 kg",
    "img": "images/relaxing/FG113102.jpg"
  },
  {
    "name": "FG136061",
    "sku": "FG136061",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "73 x 106 x 89 cm, Seat: 53 x 48 cm", "containerLoad": "", "desc": "40HC: 189 sets. Net Wt: 45.2 kg",
    "img": "images/relaxing/FG136061.jpg"
  },
  {
    "name": "CH-253085L2",
    "sku": "CH-253085L2",
    "material": "Steel Frame + Plywood + Manual Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "72.5 x 105 x 87 cm, Seat: 53 x 48 cm", "containerLoad": "", "desc": "Net Wt: 45.2 kg",
    "img": "images/relaxing/CH-253085L2.jpg"
  },
  {
    "name": "FG136072",
    "sku": "FG136072",
    "material": "Steel Frame + Plywood + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "73 x 106 x 87 cm, Seat: 53 x 48 cm", "containerLoad": "", "desc": "40HC: 189 sets. Net Wt: 46 kg",
    "img": "images/relaxing/FG136072.jpg"
  },
  {
    "name": "CH-253109L2",
    "sku": "CH-253109L2",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "71.5 x 106 x 88 cm, Seat: 54 x 48 cm", "containerLoad": "", "desc": "40HC: 192 sets. Net Wt: 47 kg",
    "img": "images/relaxing/CH-253109L2.jpg"
  },
  {
    "name": "FG136121MH",
    "sku": "FG136121MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "83 x 104.5 x 90.5 cm, Seat: 55 x 50 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 51.5 kg",
    "img": "images/relaxing/FG136121MH.jpg"
  },
  {
    "name": "FG136122",
    "sku": "FG136122",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "83 x 106 x 87 cm, Seat: 54 x 49.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 50 kg",
    "img": "images/relaxing/FG136122.jpg"
  },
  {
    "name": "FG136131MH",
    "sku": "FG136131MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "81.5 x 107 x 87.5 cm, Seat: 50 x 49 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 51.5 kg",
    "img": "images/relaxing/FG136131MH.jpg"
  },
  {
    "name": "FG136132",
    "sku": "FG136132",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "81 x 109 x 86 cm, Seat: 51 x 49 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 49.8 kg",
    "img": "images/relaxing/FG136132.jpg"
  },
  {
    "name": "FG136141",
    "sku": "FG136141",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "82.5 x 108.5 x 85 cm, Seat: 52 x 48 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 50 kg",
    "img": "images/relaxing/FG136141.jpg"
  },
  {
    "name": "FG136141MH",
    "sku": "FG136141MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "83 x 109 x 89 cm, Seat: 52 x 50.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 52.1 kg",
    "img": "images/relaxing/FG136141MH.jpg"
  },
  {
    "name": "FG150121",
    "sku": "FG150121",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "80 x 103 x 92.5 cm, Seat: 54 x 49 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 50.2 kg",
    "img": "images/relaxing/FG150121.jpg"
  },
  {
    "name": "FG150121MH",
    "sku": "FG150121MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "84 x 104 x 92 cm, Seat: 54.5 x 49 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 53.7 kg",
    "img": "images/relaxing/FG150121MH.jpg"
  },
  {
    "name": "FG150128",
    "sku": "FG150128",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "85 x 104 x 91.5 cm, Seat: 54 x 49 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 47.1 kg",
    "img": "images/relaxing/FG150128.jpg"
  },
  {
    "name": "FG150131",
    "sku": "FG150131",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "82 x 105 x 89.5 cm, Seat: 53 x 48.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 49.1 kg",
    "img": "images/relaxing/FG150131.jpg"
  },
  {
    "name": "FG150131MH",
    "sku": "FG150131MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "81.5 x 104 x 86 cm, Seat: 53 x 48.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 51.5 kg",
    "img": "images/relaxing/FG150131MH.jpg"
  },
  {
    "name": "FG150138",
    "sku": "FG150138",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "82 x 105.5 x 89.5 cm, Seat: 54 x 49.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 44.6 kg",
    "img": "images/relaxing/FG150138.jpg"
  },
  {
    "name": "FG150141",
    "sku": "FG150141",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "81 x 107.5 x 91 cm, Seat: 55 x 49.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 47.1 kg",
    "img": "images/relaxing/FG150141.jpg"
  },
  {
    "name": "FG150141MH",
    "sku": "FG150141MH",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "80 x 106 x 92 cm, Seat: 54 x 48.5 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 52.1 kg",
    "img": "images/relaxing/FG150141MH.jpg"
  },
  {
    "name": "FG150148",
    "sku": "FG150148",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "81 x 108 x 91 cm, Seat: 55 x 50 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 45 kg",
    "img": "images/relaxing/FG150148.jpg"
  },
  {
    "name": "FG150151",
    "sku": "FG150151",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "82 x 106.5 x 89.5 cm, Seat: 53 x 48 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 45.1 kg",
    "img": "images/relaxing/FG150151.jpg"
  },
  {
    "name": "FG150151MH",
    "sku": "FG150151MH",
    "material": "Steel Frame + Electric Control",
    "color": "Various",
    "dimensions": "82 x 109 x 90.5 cm, Seat: 53.5 x 48 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 53.1 kg",
    "img": "images/relaxing/FG150151MH.jpg"
  },
  {
    "name": "FG150158",
    "sku": "FG150158",
    "material": "Steel Frame + Electric Control",
    "color": "Forma works collection of fabric and leather",
    "dimensions": "82 x 106.5 x 89.5 cm, Seat: 53 x 48 cm", "containerLoad": "", "desc": "40HC: 168 sets. Net Wt: 45.1 kg",
    "img": "images/relaxing/FG150158.jpg"
  }
]
};
var cat=document.body.dataset.category||"";
var ov=null,cb=null;
function ensureModal(){
  if(ov)return;
  ov=document.createElement("div");
  ov.id="yslModalOverlay";
  ov.className="modal-overlay";
  ov.innerHTML='<div class="modal-dialog"><button class="modal-close" id="yslModalClose">&times;</button><div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div><div class="modal-body"><h2 id="yslModalName"></h2><div class="modal-sku" id="yslModalSku"></div><table><tbody id="yslModalSpecs"></tbody></table><p class="modal-desc" id="yslModalDesc"></p><a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a></div></div>';
  document.body.appendChild(ov);
  cb=document.getElementById("yslModalClose");
}
function openModal(p){
  ensureModal();
  document.getElementById("yslModalImg").src=p.img;
  document.getElementById("yslModalImg").alt=p.name;
  document.getElementById("yslModalName").textContent=p.name;
  document.getElementById("yslModalSku").textContent="SKU: "+p.sku;
  var h="";
  h+="<tr><td>Material</td><td>"+p.material+"</td></tr>";
  h+="<tr><td>Color</td><td>"+p.color+"</td></tr>";
  h+="<tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";
  if(p.containerLoad){h+="<tr><td>Container Load</td><td>"+p.containerLoad+"</td></tr>";}
  document.getElementById("yslModalSpecs").innerHTML=h;
  document.getElementById("yslModalDesc").textContent=p.desc||"";
  ov.classList.add("active");
  document.body.style.overflow="hidden";
}
function closeModal(){if(!ov)return;ov.classList.remove("active");document.body.style.overflow="";}
document.addEventListener("DOMContentLoaded",function(){
  ensureModal();
  if(cb)cb.addEventListener("click",closeModal);
  if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeModal();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
  if(cat&&P[cat]){
    var cards=document.querySelectorAll(".card");
    for(var i=0;i<cards.length;i++){
      (function(card){
        var sku=card.getAttribute("data-sku");
        var product=null;
        for(var j=0;j<P[cat].length;j++){
          if(P[cat][j].sku===sku){product=P[cat][j];break;}
        }
        if(product)card.addEventListener("click",function(){openModal(product);});
      })(cards[i]);
    }
  }
});
})();