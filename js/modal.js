(function(){
var P={
  chairs:[
    {"name": "Chair Ottoman", "sku": "YDC-001", "img": "images/chairs/page_23_img_01.jpg", "material": "Solid Wood + Fabric", "color": "Grey Light Wood", "dimensions": "60x70x85 cm", "desc": "Nodic looking Chair with ottoman"},
    {"name": "Classic Dining Chair with Arm", "sku": "YAC-002", "img": "images/chairs/page_23_img_02.jpg", "material": "metal leg + fabric", "color": "Grey", "dimensions": "50x55x95 cm", "desc": "Metal leg with wood looking heat transfer."},
    {"name": "Fabric Dining Chair", "sku": "YOC-003", "img": "images/chairs/page_23_img_03.jpg", "material": "Fabric+ metal leg", "color": "Black", "dimensions": "50x45x90 cm", "desc": "Premium office chair with high-back support"},
    {"name": "Velvet Accent Chair", "sku": "YVC-004", "img": "images/chairs/page_23_img_04.jpg", "material": "Velvet Fabric + Metal Legs", "color": "Dark Green", "dimensions": "65x60x90cm", "desc": "Luxurious velvet accent chair"},
    {"name": "Fabric Dining Chair", "sku": "YSC-005", "img": "images/chairs/page_23_img_05.jpg", "material": "Fabric + Metal Legs", "color": "Light Grey/Natural", "dimensions": "50x45x90 cm", "desc": "Minimalist Scandinavian-style dining chair"},
    {"name": "Half moon Chair", "sku": "YTC-006", "img": "images/chairs/page_23_img_06.jpg", "material": "Fabric + Wood Frame", "color": "Cream", "dimensions": "50x55x95 cm", "desc": "Dining chair with Curved back frame"},
    {"name": "Industrial Bar Stool", "sku": "YBS-007", "img": "images/chairs/page_23_img_07.jpg", "material": "Metal Frame + Wood Seat", "color": "Black/Walnut", "dimensions": "45x50x120 cm", "desc": "Industrial-style bar stool"},
    {"name": "Diamond Back Bar Stool", "sku": "YEM-008", "img": "images/chairs/page_23_img_08.jpg", "material": "Metal leg + Fabric", "color": "Black", "dimensions": "50x50x120 cm", "desc": "Metal leg with wood looking heat transfer."},
    {"name": "Mid-Century Dining Chair", "sku": "YML-009", "img": "images/chairs/page_23_img_09.jpg", "material": "Metal leg with hard PU", "color": "Brown", "dimensions": "50x55x90 cm", "desc": "Iconic mid-century Dining Chair"},
    {"name": "Arm Dining Chair", "sku": "YFC-010", "img": "images/chairs/page_23_img_10.jpg", "material": "Metal Leg with tufted back", "color": "Grey", "dimensions": "55x60x95 cm", "desc": "Arm Chair with Tufted button back cushion"},
    {"name": "Swivel Armchair", "sku": "YRA-011", "img": "images/chairs/page_23_img_11.jpg", "material": "Fabric + Metal Legs", "color": "Grey", "dimensions": "55x60x95cm", "desc": "Swivel arm chair"},
    {"name": "Diamoand arm chair", "sku": "YKC-012", "img": "images/chairs/page_23_img_12.jpg", "material": "Fabric + metal legs", "color": "Grey", "dimensions": "55x60x95cm", "desc": "Tappered leg with swivel function"},
    {"name": "Banquet Chair", "sku": "YBC-013", "img": "images/chairs/page_23_img_13.jpg", "material": "Steel Frame + Fabric", "color": "Gold/Cream", "dimensions": "48x52x92 cm", "desc": "Elegant banquet chair"},
    {"name": "Staioned Dining chair", "sku": "YRC-014", "img": "images/chairs/page_23_img_14.jpg", "material": "metal leg", "color": "Metal", "dimensions": "48x52x92 cm", "desc": "Classic Dining Chair with Tufted design"},
    {"name": "FG120084", "sku": "FG120084", "img": "images/chairs/FG120084.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "78 x 106.5 x 85.5 cm, Seat: 54 x 46 cm", "desc": "40HC: 256 sets. Net Wt: 26.4 kg"},
    {"name": "FG140094", "sku": "FG140094", "img": "images/chairs/FG140094.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "69.5 x 104.5 x 80.5 cm, Seat: 50 x 45 cm", "desc": "40HC: 192 sets. Net Wt: 42.2 kg"},
    {"name": "FG140101", "sku": "FG140101", "img": "images/chairs/FG140101.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "75 x 99.5 x 79.5 cm, Seat: 50 x 45 cm", "desc": "40HC: 212 sets. Net Wt: 18.5 kg"},
    {"name": "FG140113", "sku": "FG140113", "img": "images/chairs/FG140113.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76.5 x 91 x 93.5 cm, Seat: 56 x 45 cm", "desc": "40HC: 180 sets. Net Wt: 23.5 kg"},
    {"name": "FG140122", "sku": "FG140122", "img": "images/chairs/FG140122.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "75.5 x 101.5 x 87.5 cm, Seat: 49 x 41.5 cm", "desc": "Net Wt: 17.5 kg"},
    {"name": "FG140132", "sku": "FG140132", "img": "images/chairs/FG140132.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76 x 105.5 x 82.5 cm, Seat: 51 x 45 cm", "desc": "40HC: 246 sets. Net Wt: 21.7 kg"},
    {"name": "FG140141", "sku": "FG140141", "img": "images/chairs/FG140141.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "77 x 86 x 101.5 cm, Seat: 57 x 44.5 cm", "desc": "40HC: 168 sets. Net Wt: 53.7 kg"},
    {"name": "FG140154", "sku": "FG140154", "img": "images/chairs/FG140154.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73 x 105.5 x 84 cm, Seat: 50 x 45 cm", "desc": "40HC: 192 sets. Net Wt: 40.2 kg"},
    {"name": "FG140164", "sku": "FG140164", "img": "images/chairs/FG140164.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "71.5 x 108 x 82.5 cm, Seat: 47 x 45.5 cm", "desc": "40HC: 192 sets. Net Wt: 40.4 kg"},
    {"name": "FG140174", "sku": "FG140174", "img": "images/chairs/FG140174.jpg", "material": "Steel Frame + Plywood + Manual Control", "color": "Forma works collection of fabric and leather", "dimensions": "74 x 107.5 x 78.5 cm, Seat: 50 x 44.5 cm", "desc": "40HC: 192 sets. Net Wt: 37.2 kg"},
    {"name": "FG140211", "sku": "FG140211", "img": "images/chairs/FG140211.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "69 x 85 x 78 cm, Seat: 54 x 48.5 cm", "desc": "40HC: 212 sets. Net Wt: 20.5 kg"},
    {"name": "FG140231", "sku": "FG140231", "img": "images/chairs/FG140231.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "67 x 83.5 x 71.5 cm, Seat: 47.5 x 44 cm", "desc": "40HC: 220 sets. Net Wt: 18.7 kg"},
    {"name": "FG140241", "sku": "FG140241", "img": "images/chairs/FG140241.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "70 x 92 x 80.5 cm, Seat: 49.5 x 43.5 cm", "desc": "40HC: 220 sets. Net Wt: 23.7 kg"},
    {"name": "FG140272", "sku": "FG140272", "img": "images/chairs/FG140272.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76.5 x 104.5 x 90.5 cm, Seat: 54 x 44 cm", "desc": "40HC: 192 sets. Net Wt: 38.5 kg"},
    {"name": "FG310021", "sku": "FG310021", "img": "images/chairs/FG310021.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "50 x 87.5 x 66 cm, Seat: 48 x 50 cm", "desc": "40HC: 256 sets. Net Wt: 14.5 kg"},
    {"name": "FG310022", "sku": "FG310022", "img": "images/chairs/FG310022.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "59 x 87.5 x 66 cm, Seat: 48 x 50 cm", "desc": "40HC: 256 sets. Net Wt: 15.2 kg"},
    {"name": "FG310031", "sku": "FG310031", "img": "images/chairs/FG310031.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "54 x 87 x 66.5 cm, Seat: 45 x 51.5 cm", "desc": "40HC: 256 sets. Net Wt: 14.8 kg"},
    {"name": "FG310042", "sku": "FG310042", "img": "images/chairs/FG310042.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "58 x 87 x 67 cm, Seat: 49.5 x 51 cm", "desc": "40HC: 256 sets. Net Wt: 15.1 kg"},
    {"name": "FG310052", "sku": "FG310052", "img": "images/chairs/FG310052.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "61 x 87.5 x 63 cm, Seat: 48.5 x 52 cm", "desc": "40HC: 256 sets. Net Wt: 15.3 kg"},
    {"name": "FG310062", "sku": "FG310062", "img": "images/chairs/FG310062.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "56 x 87 x 63 cm, Seat: 48 x 50 cm", "desc": "40HC: 256 sets. Net Wt: 14.9 kg"},
    {"name": "FG310072", "sku": "FG310072", "img": "images/chairs/FG310072.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "64 x 88 x 65.5 cm, Seat: 49.5 x 50 cm", "desc": "40HC: 256 sets. Net Wt: 15.5 kg"},
    {"name": "FG310082", "sku": "FG310082", "img": "images/chairs/FG310082.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "64.5 x 85 x 65.5 cm, Seat: 47 x 50 cm", "desc": "40HC: 256 sets. Net Wt: 15.4 kg"},
    {"name": "FG310092", "sku": "FG310092", "img": "images/chairs/FG310092.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "59.5 x 93 x 57 cm, Seat: 44 x 49 cm", "desc": "40HC: 256 sets. Net Wt: 14.6 kg"},
    {"name": "FG320011", "sku": "FG320011", "img": "images/chairs/FG320011.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "52 x 82.5 x 59 cm, Seat: 42 x 46.5 cm", "desc": "40HC: 272 sets. Net Wt: 12.3 kg"},
    {"name": "FG330020", "sku": "FG330020", "img": "images/chairs/FG330020.jpg", "material": "Steel Frame + Plywood", "color": "Forma works collection of fabric and leather", "dimensions": "46.5 x 52 x 91-112 cm, Seat: 37.5 x 61.5-81.5 cm", "desc": "40HC: 272 sets. Net Wt: 12.3 kg"}
  ],
  dining:[
    {"name": "4-Seater Dining Set", "sku": "DT-001", "img": "images/Dining/DT-001.jpg", "material": "Solid Wood", "color": "Walnut", "dimensions": "145x75x75 cm", "desc": "Elegant 4-seater dining set"},
    {"name": "2 Tone Dining Sets", "sku": "DT-002", "img": "images/Dining/DT-002.jpg", "material": "Metal + Wood", "color": "Black/Walnut", "dimensions": "1118x75x73.5 cm", "desc": "Modern 2-tone dining set"},
    {"name": "Marble-Top Dining Set", "sku": "DT-003", "img": "images/Dining/DT-003.jpg", "material": "Marble + Metal", "color": "White/Black", "dimensions": "90x90x75 cm", "desc": "Marble top dining set"},
    {"name": "Square Pedestal Table", "sku": "DT-004", "img": "images/Dining/DT-004.jpg", "material": "Solid Wood", "color": "Natural", "dimensions": "100x100x75 cm", "desc": "Square pedestal dining table"},
    {"name": "Rectangular 6 chair dining set", "sku": "DT-005", "img": "images/Dining/DT-005.jpg", "material": "Solid Wood", "color": "Oak", "dimensions": "160x100x75 cm", "desc": "6-seater rectangular dining set"},
    {"name": "Compact Dining Set", "sku": "DT-006", "img": "images/Dining/DT-006.jpg", "material": "Metal + Glass", "color": "Silver", "dimensions": "120x80x75 cm", "desc": "Space-saving compact dining set"},
    {"name": "Farmhouse Dining Table", "sku": "DT-007", "img": "images/Dining/DT-007.jpg", "material": "Reclaimed Wood", "color": "Rustic Brown", "dimensions": "90x90x75 cm", "desc": "Rustic farmhouse style dining table"},
    {"name": "Glass Dining Table", "sku": "DT-008", "img": "images/Dining/DT-008.jpg", "material": "Glass + Metal", "color": "Clear/Silver", "dimensions": "90x90x75 cm", "desc": "Modern glass top dining table"}
  ],
  bedsSofas:[
    {"name": "King Size Bed", "sku": "KB-001", "img": "images/beds-sofas/KB-001.jpg", "material": "Solid Wood", "color": "Walnut", "dimensions": "200x210x150 cm", "desc": "King size bed frame with storage"},
    {"name": "Sofa Bed", "sku": "SB-001", "img": "images/beds-sofas/SB-001.jpg", "material": "Fabric + Wood Frame", "color": "Grey", "dimensions": "225x152x88 cm", "desc": "Convertible sofa bed"},
    {"name": "2-Seater Sofa Bed", "sku": "SB-002", "img": "images/beds-sofas/SB-002.jpg", "material": "Fabric + Wood Frame", "color": "Beige", "dimensions": "160x85x85 cm", "desc": "2-seater sofa with pull-out bed"},
    {"name": "Chair sofa", "sku": "CS-001", "img": "images/beds-sofas/CS-001.jpg", "material": "Fabric", "color": "Dark Grey", "dimensions": "120x175x90 cm", "desc": "Single chair sofa"},
    {"name": "Twin Bed Frame", "sku": "TB-001", "img": "images/beds-sofas/TB-001.jpg", "material": "Solid Wood", "color": "White", "dimensions": "120x175x90 cm", "desc": "Twin bed frame with headboard"},
    {"name": "Chaise Sofa", "sku": "CH-001", "img": "images/beds-sofas/CH-001.jpg", "material": "Fabric + Wood", "color": "Light Grey", "dimensions": "120x175x90 cm", "desc": "Chaise lounge sofa"}
  ],
  upholstery:[
    {"name": "3-Seater Sofa", "sku": "US-001", "img": "images/upholstery/US-001.jpg", "material": "Fabric", "color": "Grey", "dimensions": "200x90x85 cm", "desc": "Comfortable 3-seater sofa"},
    {"name": "Big Boy Sofa", "sku": "US-002", "img": "images/upholstery/US-002.jpg", "material": "Fabric", "color": "Dark Grey", "dimensions": "220x100x90 cm", "desc": "Extra wide big boy sofa"},
    {"name": "Arm Chair Set", "sku": "US-003", "img": "images/upholstery/US-003.jpg", "material": "Fabric", "color": "Brown", "dimensions": "80x80x90 cm", "desc": "Single arm chair"},
    {"name": "Arm Chair Set 2", "sku": "US-004", "img": "images/upholstery/US-004.jpg", "material": "Leather", "color": "Black", "dimensions": "80x80x90 cm", "desc": "Leather arm chair"}
  ],
  woodPaper:[
    {"name": "TV Entertainment Unit", "sku": "WP-001", "img": "images/Wood_Paper_Laminated/TV_Unit.jpg", "material": "Plywood + Veneer", "color": "Walnut", "dimensions": "180x40x50 cm", "desc": "Wall-mounted TV unit"},
    {"name": "Bookshelf", "sku": "WP-002", "img": "images/Wood_Paper_Laminated/Bookshelf.jpg", "material": "Plywood + Veneer", "color": "White Oak", "dimensions": "80x30x180 cm", "desc": "5-tier bookshelf"},
    {"name": "Computer Desk", "sku": "WP-003", "img": "images/Wood_Paper_Laminated/Desk.jpg", "material": "Plywood + Veneer", "color": "Walnut", "dimensions": "120x60x75 cm", "desc": "Modern computer desk"},
    {"name": "Shoe Cabinet", "sku": "WP-004", "img": "images/Wood_Paper_Laminated/ShoeCabinet.jpg", "material": "Plywood + Veneer", "color": "White", "dimensions": "80x30x100 cm", "desc": "Entryway shoe cabinet"},
    {"name": "Coffee Table", "sku": "WP-005", "img": "images/Wood_Paper_Laminated/CoffeeTable.jpg", "material": "Plywood + Veneer", "color": "Walnut", "dimensions": "100x60x45 cm", "desc": "Low coffee table"},
    {"name": "Wardrobe", "sku": "WP-006", "img": "images/Wood_Paper_Laminated/Wardrobe.jpg", "material": "Plywood + Veneer", "color": "Oak", "dimensions": "120x55x200 cm", "desc": "2-door wardrobe"},
    {"name": "Chest of Drawers", "sku": "WP-007", "img": "images/Wood_Paper_Laminated/Drawers.jpg", "material": "Plywood + Veneer", "color": "Walnut", "dimensions": "80x45x90 cm", "desc": "4-drawer chest"}
  ],
  woodSolid:[
    {"name": "Solid Oak Dining Table", "sku": "WS-001", "img": "images/Wood_Solid_Veneer/OakTable.jpg", "material": "Solid Oak", "color": "Natural Oak", "dimensions": "180x90x78 cm", "desc": "Solid oak dining table"},
    {"name": "Walnut Coffee Table", "sku": "WS-002", "img": "images/Wood_Solid_Veneer/WalnutTable.jpg", "material": "Solid Walnut", "color": "Dark Walnut", "dimensions": "130x70x42 cm", "desc": "Solid walnut coffee table"},
    {"name": "Mahogany Console Table", "sku": "WS-003", "img": "images/Wood_Solid_Veneer/Console.jpg", "material": "Solid Mahogany", "color": "Deep Red", "dimensions": "140x35x80 cm", "desc": "Mahogany console table"},
    {"name": "Teak Sideboard", "sku": "WS-004", "img": "images/Wood_Solid_Veneer/Sideboard.jpg", "material": "Solid Teak", "color": "Golden Teak", "dimensions": "160x45x80 cm", "desc": "Teak sideboard with doors"},
    {"name": "Cherry Wood Desk", "sku": "WS-005", "img": "images/Wood_Solid_Veneer/CherryDesk.jpg", "material": "Solid Cherry", "color": "Cherry Red", "dimensions": "140x65x76 cm", "desc": "Cherry wood executive desk"},
    {"name": "Rosewood Display Cabinet", "sku": "WS-006", "img": "images/Wood_Solid_Veneer/Cabinet.jpg", "material": "Solid Rosewood", "color": "Deep Rose", "dimensions": "90x40x180 cm", "desc": "Glass display cabinet"}
  ],
  relaxing:[
    {"name": "FG113012", "sku": "FG113012", "img": "images/relaxing/FG113012.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "75 x 109 x 81 cm, Seat: 50 x 45 cm", "desc": "40HC: 195 sets. Net Wt: 35 kg"},
    {"name": "FG113022", "sku": "FG113022", "img": "images/relaxing/FG113022.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76.5 x 115.5 x 85 cm, Seat: 49.5 x 45.5 cm", "desc": "40HC: 195 sets. Net Wt: 38.9 kg"},
    {"name": "FG113032", "sku": "FG113032", "img": "images/relaxing/FG113032.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "70.5 x 111 x 84 cm, Seat: 51 x 45.5 cm", "desc": "40HC: 185 sets. Net Wt: 36.7 kg"},
    {"name": "FG113042", "sku": "FG113042", "img": "images/relaxing/FG113042.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "67 x 107 x 84 cm, Seat: 51 x 45.5 cm", "desc": "40HC: 210 sets. Net Wt: 37 kg"},
    {"name": "FG113052", "sku": "FG113052", "img": "images/relaxing/FG113052.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73 x 111 x 82.5 cm, Seat: 51 x 45.5 cm", "desc": "40HC: 195 sets. Net Wt: 45.5 kg"},
    {"name": "CH-255099P2", "sku": "CH-255099P2", "img": "images/relaxing/CH-255099P2.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73.5 x 107 x 83.5 cm, Seat: 50.5 x 47 cm", "desc": "40HC: 220 sets. Net Wt: 34.5 kg"},
    {"name": "FG113102", "sku": "FG113102", "img": "images/relaxing/FG113102.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "67 x 109.5 x 83.5 cm, Seat: 51 x 46.5 cm", "desc": "40HC: 215 sets. Net Wt: 37.1 kg"},
    {"name": "FG136061", "sku": "FG136061", "img": "images/relaxing/FG136061.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73 x 106 x 89 cm, Seat: 53 x 48 cm", "desc": "40HC: 189 sets. Net Wt: 45.2 kg"},
    {"name": "CH-253085L2", "sku": "CH-253085L2", "img": "images/relaxing/CH-253085L2.jpg", "material": "Steel Frame + Plywood + Manual Control", "color": "Forma works collection of fabric and leather", "dimensions": "72.5 x 105 x 87 cm, Seat: 53 x 48 cm", "desc": "Net Wt: 45.2 kg"},
    {"name": "FG136072", "sku": "FG136072", "img": "images/relaxing/FG136072.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73 x 106 x 87 cm, Seat: 53 x 48 cm", "desc": "40HC: 189 sets. Net Wt: 46 kg"},
    {"name": "CH-253109L2", "sku": "CH-253109L2", "img": "images/relaxing/CH-253109L2.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "71.5 x 106 x 88 cm, Seat: 54 x 48 cm", "desc": "40HC: 192 sets. Net Wt: 47 kg"},
    {"name": "FG136121MH", "sku": "FG136121MH", "img": "images/relaxing/FG136121MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "83 x 104.5 x 90.5 cm, Seat: 55 x 50 cm", "desc": "40HC: 168 sets. Net Wt: 51.5 kg"},
    {"name": "FG136122", "sku": "FG136122", "img": "images/relaxing/FG136122.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "83 x 106 x 87 cm, Seat: 54 x 49.5 cm", "desc": "40HC: 168 sets. Net Wt: 50 kg"},
    {"name": "FG136131MH", "sku": "FG136131MH", "img": "images/relaxing/FG136131MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "81.5 x 107 x 87.5 cm, Seat: 50 x 49 cm", "desc": "40HC: 168 sets. Net Wt: 51.5 kg"},
    {"name": "FG136132", "sku": "FG136132", "img": "images/relaxing/FG136132.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "81 x 109 x 86 cm, Seat: 51 x 49 cm", "desc": "40HC: 168 sets. Net Wt: 49.8 kg"},
    {"name": "FG136141", "sku": "FG136141", "img": "images/relaxing/FG136141.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "82.5 x 108.5 x 85 cm, Seat: 52 x 48 cm", "desc": "40HC: 168 sets. Net Wt: 50 kg"},
    {"name": "FG136141MH", "sku": "FG136141MH", "img": "images/relaxing/FG136141MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "83 x 109 x 89 cm, Seat: 52 x 50.5 cm", "desc": "40HC: 168 sets. Net Wt: 52.1 kg"},
    {"name": "FG150121", "sku": "FG150121", "img": "images/relaxing/FG150121.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "80 x 103 x 92.5 cm, Seat: 54 x 49 cm", "desc": "40HC: 168 sets. Net Wt: 50.2 kg"},
    {"name": "FG150121MH", "sku": "FG150121MH", "img": "images/relaxing/FG150121MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "84 x 104 x 92 cm, Seat: 54.5 x 49 cm", "desc": "40HC: 168 sets. Net Wt: 53.7 kg"},
    {"name": "FG150128", "sku": "FG150128", "img": "images/relaxing/FG150128.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "85 x 104 x 91.5 cm, Seat: 54 x 49 cm", "desc": "40HC: 168 sets. Net Wt: 47.1 kg"},
    {"name": "FG150131", "sku": "FG150131", "img": "images/relaxing/FG150131.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "82 x 105 x 89.5 cm, Seat: 53 x 48.5 cm", "desc": "40HC: 168 sets. Net Wt: 49.1 kg"},
    {"name": "FG150131MH", "sku": "FG150131MH", "img": "images/relaxing/FG150131MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "81.5 x 104 x 86 cm, Seat: 53 x 48.5 cm", "desc": "40HC: 168 sets. Net Wt: 51.5 kg"},
    {"name": "FG150138", "sku": "FG150138", "img": "images/relaxing/FG150138.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "82 x 105.5 x 89.5 cm, Seat: 54 x 49.5 cm", "desc": "40HC: 168 sets. Net Wt: 44.6 kg"},
    {"name": "FG150141", "sku": "FG150141", "img": "images/relaxing/FG150141.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "81 x 107.5 x 91 cm, Seat: 55 x 49.5 cm", "desc": "40HC: 168 sets. Net Wt: 47.1 kg"},
    {"name": "FG150141MH", "sku": "FG150141MH", "img": "images/relaxing/FG150141MH.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "80 x 106 x 92 cm, Seat: 54 x 48.5 cm", "desc": "40HC: 168 sets. Net Wt: 52.1 kg"},
    {"name": "FG150148", "sku": "FG150148", "img": "images/relaxing/FG150148.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "81 x 108 x 91 cm, Seat: 55 x 50 cm", "desc": "40HC: 168 sets. Net Wt: 45 kg"},
    {"name": "FG150151", "sku": "FG150151", "img": "images/relaxing/FG150151.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "82 x 106.5 x 89.5 cm, Seat: 53 x 48 cm", "desc": "40HC: 168 sets. Net Wt: 45.1 kg"},
    {"name": "FG150151MH", "sku": "FG150151MH", "img": "images/relaxing/FG150151MH.jpg", "material": "Steel Frame + Electric Control", "color": "Various", "dimensions": "82 x 109 x 90.5 cm, Seat: 53.5 x 48 cm", "desc": "40HC: 168 sets. Net Wt: 53.1 kg"},
    {"name": "FG150158", "sku": "FG150158", "img": "images/relaxing/FG150158.jpg", "material": "Steel Frame + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "82 x 106.5 x 89.5 cm, Seat: 53 x 48 cm", "desc": "40HC: 168 sets. Net Wt: 45.1 kg"},
    {"name": "FG330010", "sku": "FG330010", "img": "images/relaxing/FG330010.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "46 x 90-111 x 53 cm, Seat: 40 x 63.5-83.5 cm", "desc": "Net Wt: 19.4 kg"},
    {"name": "FG330040", "sku": "FG330040", "img": "images/relaxing/FG330040.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "52 x 88-109 x 50 cm, Seat: 38 x 63-84 cm", "desc": "Net Wt: 20.3 kg"}
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
    var items=P[cat];
    for(var i=0;i<cards.length&&i<items.length;i++){
      (function(card,p){card.addEventListener("click",function(){openModal(p);});})(cards[i],items[i]);
    }
  }
});
})();
