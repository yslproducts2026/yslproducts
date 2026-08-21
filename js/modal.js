(function(){
var P={
  chairs:[
    {"name": "Chair Ottoman", "sku": "YDC-001", "img": "images/chairs/page_23_img_01.jpg", "material": "Solid Wood + Fabric", "color": "Grey Light Wood", "dimensions": "60x70x85 cm", "desc": "Nodic looking Chair with ottoman"},
    {"name": "Classic Dining Chair with Arm", "sku": "YAC-002", "img": "images/chairs/page_23_img_02.jpg", "material": "metal leg + fabric", "color": "Grey", "dimensions": "50x55x95 cm", "desc": "Metal leg with wood looking heat transfer."},
    {"name": "Fabric Dining Chair", "sku": "YOC-003", "img": "images/chairs/page_23_img_03.jpg", "material": "Fabric+ metal leg", "color": "Black", "dimensions": "50x45x90 cm", "desc": "Premium office chair with high-back support"},
    {"name": "Velvet Accent Chair", "sku": "YVC-004", "img": "images/chairs/page_23_img_04.jpg", "material": "Velvet Fabric + Metal Legs", "color": "Dark Green", "dimensions": "65x60x90cm", "desc": "Luxurious velvet accent chair"},
    {"name": "Fabric Dining Chair", "sku": "YSC-005", "img": "images/chairs/page_23_img_05.jpg", "material": "Fabric + Metal Legs", "color": "Light Grey/Natural", "dimensions": "50x45x90 cm", "desc": "Minimalist Scandinavian-style dining chair"},
    {"name": "Half moon Chair", "sku": "YTC-006", "img": "images/chairs/page_23_img_06.jpg", "material": "Fabric + Wood Frame", "color": "Cream", "dimensions": "50x55x95 cm", "desc": "Dining chair with Curved back frame"},
    {"name": "Industrial Bar Stool", "sku": "Industrial Bar Stool", "img": "images/chairs/page_23_img_07.jpg", "material": "Metal Frame + Wood Seat", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Diamond Back Bar Stool", "sku": "Diamond Back Bar Stool", "img": "images/chairs/page_23_img_08.jpg", "material": "Metal leg + Fabric", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Mid-Century Dining Chair", "sku": "Mid-Century Dining Chair", "img": "images/chairs/page_23_img_09.jpg", "material": "Metal leg with hard PU", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Arm Dining Chair", "sku": "Arm Dining Chair", "img": "images/chairs/page_23_img_10.jpg", "material": "Metal Leg with tufted back", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Swivel Armchair", "sku": "Swivel Armchair", "img": "images/chairs/page_23_img_11.jpg", "material": "Fabric + Metal Legs", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Diamoand arm chair", "sku": "Diamoand arm chair", "img": "images/chairs/page_23_img_12.jpg", "material": "Fabric + metal legs", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Banquet Chair", "sku": "Banquet Chair", "img": "images/chairs/page_23_img_13.jpg", "material": "Steel Frame + Fabric", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Staioned Dining chair", "sku": "Staioned Dining chair", "img": "images/chairs/page_23_img_14.jpg", "material": "metal leg", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "FG120084", "sku": "FG120084", "img": "images/chairs/FG120084.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "78 x 106.5 x 85.5 cm, Seat: 54 x 46 cm", "desc": "40HC: 256 sets. Net Wt: 26.4 kg"},
    {"name": "FG140094", "sku": "FG140094", "img": "images/chairs/FG140094.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "69.5 x 104.5 x 80.5 cm, Seat: 50 x 45 cm", "desc": "40HC: 192 sets. Net Wt: 42.2 kg"},
    {"name": "FG140101", "sku": "FG140101", "img": "images/chairs/FG140101.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "75 x 99.5 x 79.5 cm, Seat: 50 x 45 cm", "desc": "40HC: 212 sets. Net Wt: 18.5 kg"},
    {"name": "FG140113", "sku": "FG140113", "img": "images/chairs/FG140113.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76.5 x 91 x 93.5 cm, Seat: 56 x 45 cm", "desc": "40HC: 180 sets. Net Wt: 23.5 kg"},
    {"name": "FG140122", "sku": "FG140122", "img": "images/chairs/FG140122.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "75.5 x 101.5 x 87.5 cm, Seat: 49 x 41.5 cm", "desc": "Net Wt: 17.5 kg"},
    {"name": "FG140132", "sku": "FG140132", "img": "images/chairs/FG140132.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76 x 105.5 x 82.5 cm, Seat: 51 x 45 cm", "desc": "40HC: 246 sets. Net Wt: 21.7 kg"},
    {"name": "FG140141", "sku": "FG140141", "img": "images/chairs/FG140141.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "77 x 86 x 101.5 cm, Seat: 57 x 44.5 cm", "desc": "40HC: 186 sets. Net Wt: 21.5 kg"},
    {"name": "FG140154", "sku": "FG140154", "img": "images/chairs/FG140154.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "73 x 105.5 x 84 cm, Seat: 50 x 45 cm", "desc": "40HC: 170 sets. Net Wt: 25.5 kg"},
    {"name": "FG140164", "sku": "FG140164", "img": "images/chairs/FG140164.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "71.5 x 108 x 82.5 cm, Seat: 47 x 45.5 cm", "desc": "40HC: 252 sets. Net Wt: 27.2 kg"},
    {"name": "FG140174", "sku": "FG140174", "img": "images/chairs/FG140174.jpg", "material": "Steel Frame + Plywood + Manual Control", "color": "Various", "dimensions": "74 x 107.5 x 78.5 cm, Seat: 50 x 44.5 cm", "desc": "40HC: 180 sets. Net Wt: 22.3 kg"},
    {"name": "FG140211", "sku": "FG140211", "img": "images/chairs/FG140211.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "69 x 85 x 78 cm, Seat: 54 x 48.5 cm", "desc": "Net Wt: 13.6 kg"},
    {"name": "FG140231", "sku": "FG140231", "img": "images/chairs/FG140231.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "67 x 83.5 x 71.5 cm, Seat: 47.5 x 44 cm", "desc": "Net Wt: 12.8 kg"},
    {"name": "FG140241", "sku": "FG140241", "img": "images/chairs/FG140241.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "70 x 92 x 80.5 cm, Seat: 49.5 x 43.5 cm", "desc": "Net Wt: 13.4 kg"},
    {"name": "FG140272", "sku": "FG140272", "img": "images/chairs/FG140272.jpg", "material": "Steel Frame + Plywood + Electric Control", "color": "Forma works collection of fabric and leather", "dimensions": "76.5 x 104.5 x 90.5 cm, Seat: 54 x 44 cm", "desc": "40HC: 180 sets. Net Wt: 17.3 kg"},
    {"name": "FG310021", "sku": "FG310021", "img": "images/chairs/FG310021.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "50 x 87.5 x 66 cm, Seat: 48 x 50 cm", "desc": "Net Wt: 21 kg"},
    {"name": "FG310022", "sku": "FG310022", "img": "images/chairs/FG310022.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "59 x 87.5 x 66 cm, Seat: 48 x 50 cm", "desc": "Net Wt: 24.4 kg"},
    {"name": "FG310031", "sku": "FG310031", "img": "images/chairs/FG310031.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "54 x 87 x 66.5 cm, Seat: 45 x 51.5 cm", "desc": "Net Wt: 20.5 kg"},
    {"name": "FG310042", "sku": "FG310042", "img": "images/chairs/FG310042.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "58 x 87 x 67 cm, Seat: 49.5 x 51 cm", "desc": "Net Wt: 23.3 kg"},
    {"name": "FG310052", "sku": "FG310052", "img": "images/chairs/FG310052.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "61 x 87.5 x 63 cm, Seat: 48.5 x 52 cm", "desc": "Net Wt: 24.9 kg"},
    {"name": "FG310062", "sku": "FG310062", "img": "images/chairs/FG310062.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "56 x 87 x 63 cm, Seat: 48 x 50 cm", "desc": "Net Wt: 23.2 kg"},
    {"name": "FG310072", "sku": "FG310072", "img": "images/chairs/FG310072.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "64 x 88 x 65.5 cm, Seat: 49.5 x 50 cm", "desc": "Net Wt: 28 kg"},
    {"name": "FG310082", "sku": "FG310082", "img": "images/chairs/FG310082.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "64.5 x 85 x 65.5 cm, Seat: 47 x 50 cm", "desc": "Net Wt: 21.6 kg"},
    {"name": "FG310092", "sku": "FG310092", "img": "images/chairs/FG310092.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "59.5 x 93 x 57 cm, Seat: 44 x 49 cm", "desc": "Net Wt: 20.4 kg"},
    {"name": "FG320011", "sku": "FG320011", "img": "images/chairs/FG320011.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "52 x 82.5 x 59 cm, Seat: 42 x 46.5 cm", "desc": "Net Wt: 23 kg"},
    {"name": "FG330020", "sku": "FG330020", "img": "images/chairs/FG330020.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "46.5 x 52 x 91-112 cm, Seat: 37.5 x 61.5-81.5 cm", "desc": "Net Wt: 18.6 kg"},
    {"name": "FG330040", "sku": "FG330040", "img": "images/chairs/FG330040.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "49.5 x 89.5-110.5 x 52.5 cm, Seat: 39 x 65-86 cm", "desc": ""},
    {"name": "FG330010", "sku": "FG330010", "img": "images/relaxing/FG330010.jpg", "material": "Steel Frame + Plywood", "color": "Various", "dimensions": "46 x 90-111 x 53 cm, Seat: 40 x 63.5-83.5 cm", "desc": "Net Wt: 19.4 kg"},
  ],
  dining:[
    {"name": "4-Seater Dining Set", "sku": "YDS-001", "img": "images/Dining/page_24_img_01.jpg", "material": "Solid Wood + MDF table top", "color": "Nature white", "dimensions": "145x75x75 cm", "desc": "Complete 4-seater dining set"},
    {"name": "2 Tone Dining Sets", "sku": "YDT-002", "img": "images/Dining/page_24_img_02.jpg", "material": "Solid pine + MDF table top", "color": "Nature white", "dimensions": "1118x75x73.5 cm", "desc": "2 tone dining sets with 4 chairs"},
    {"name": "Marble-Top Dining Set", "sku": "YDM-003", "img": "images/Dining/page_24_img_03.jpg", "material": "Marble + Stainless Steel", "color": "White/Grey", "dimensions": "90x90x75 cm", "desc": "Luxurious marble-top dining set"},
    {"name": "Square Pedestal Table", "sku": "YRT-004", "img": "images/Dining/page_24_img_04.jpg", "material": "Metal leg with MDF top", "color": "White", "dimensions": "100x100x75 cm", "desc": "square pedestal table"},
    {"name": "Rectangular 6 chair dining set", "sku": "YSB-005", "img": "images/Dining/page_24_img_05.jpg", "material": "Metal leg with Tarrecado", "color": "Grey", "dimensions": "160x100x75 cm", "desc": "6 chair dining set"},
    {"name": "Compact Dining Set", "sku": "YCD-006", "img": "images/Dining/page_24_img_06.jpg", "material": "MDF + Steel Frame", "color": "White/Silver", "dimensions": "120x80x75 cm", "desc": "Space-saving dining set"},
    {"name": "Farmhouse Dining Table", "sku": "YFT-007", "img": "images/Dining/page_24_img_07.jpg", "material": "Reclaimed Wood", "color": "Natural", "dimensions": "90x90x75 cm", "desc": "Rustic farmhouse dining table"},
    {"name": "Glass Dining Table", "sku": "YGT-008", "img": "images/Dining/page_24_img_08.jpg", "material": "Tempered Glass + Chrome", "color": "White/Clear", "dimensions": "90x90x75 cm", "desc": "Glass top dining table"},
  ],
  bedsSofas:[
    {"name": "King Size Bed", "sku": "YKB-001", "img": "images/beds-sofas/bed.jpg", "material": "Fabric + Metal Frame", "color": "Multiple colors", "dimensions": "200x210x150 cm", "desc": "Elegant king-size bed"},
    {"name": "Sofa Bed", "sku": "Sofa Bed", "img": "images/beds-sofas/sofabed with storage.jpg", "material": "Fabric + Metal Mechanism", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "2-Seater Sofa Bed", "sku": "YSS-003", "img": "images/beds-sofas/2s sofa bed.jpg", "material": "Fabric + extension bed", "color": "Beige", "dimensions": "160x85x85 cm", "desc": "Compact 2-seater sofa bed"},
    {"name": "Chair sofa", "sku": "YWB-004", "img": "images/beds-sofas/bed position.jpg", "material": "metal leg with PU cushion", "color": "black", "dimensions": "120x175x90 cm", "desc": "Chromed leg with tufted PU cushion"},
    {"name": "Twin Bed Frame", "sku": "YTB-005", "img": "images/beds-sofas/bed positon2.jpg", "material": "metal leg with PU cushion", "color": "black", "dimensions": "120x175x90 cm", "desc": "Chromed leg with tufted PU cushion"},
    {"name": "Chaise Sofa", "sku": "YCS-006", "img": "images/beds-sofas/sofa position.jpg", "material": "metal leg with PU cushion", "color": "black", "dimensions": "120x175x90 cm", "desc": "Chromed leg with tufted PU cushion"},
    {"name": "SST2691 Sofa", "sku": "SST2691", "img": "images/beds-sofas/SST2691.jpg", "material": "Plywood + Topline Spring", "color": "Family of furniture", "dimensions": "219 x 90 x 150 cm, Seat: 47 x 190 cm", "desc": "40HC: 58 sets. Net Wt: 85 kg"},
  ],
  upholstery:[
    {"name": "3-Seater Sofa", "sku": "Y3S-001", "img": "images/upholstery/3s.jpg", "material": "Fabric + Wood Frame", "color": "Multiple colors", "dimensions": "200x90x85 cm", "desc": "3-seater sofa"},
    {"name": "Recliner", "sku": "YBB-002", "img": "images/upholstery/bigboy.jpg", "material": "Fabric + Foam", "color": "Multiple colors", "dimensions": "220x100x90 cm", "desc": "Large comfortable sofa"},
    {"name": "Recliner collection", "sku": "Recliner collection", "img": "images/upholstery/Nordic.jpg", "material": "PU leather", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Chesterfield Sofa", "sku": "YAC-003", "img": "images/upholstery/page_06_img_01.jpg", "material": "Chenille Fabric + foam", "color": "Grey", "dimensions": "80x80x90 cm", "desc": "Single arm chair"},
    {"name": "2.5 seatsl Sofa", "sku": "YAC-004", "img": "images/upholstery/page_06_img_02.jpg", "material": "Chenille Fabric + foam", "color": "Grey", "dimensions": "80x80x90 cm", "desc": "Single arm chair"},
    {"name": "Sectional Sofa", "sku": "Sectional Sofa", "img": "images/upholstery/page_06_img_04.jpg", "material": "Fabric Blend + Wood Frame", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Sectional Sofa", "sku": "Sectional Sofa", "img": "images/upholstery/page_08_img_01.jpg", "material": "Fabric + Wood Frame", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "2.5 seatsl Sofa", "sku": "2.5 seatsl Sofa", "img": "images/upholstery/page_08_img_02.jpg", "material": "Fabric Blend + Wood Frame", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Sofa Bed with wood trim", "sku": "Sofa Bed with wood trim", "img": "images/upholstery/page_08_img_05.jpg", "material": "Fabric + Wood Frame", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "Accent Chair", "sku": "Accent Chair", "img": "images/upholstery/page_12_img_01.jpg", "material": "Fabric + Metal Legs", "color": "Various", "dimensions": "", "desc": ""},
    {"name": "arm chair set 2", "sku": "arm chair set 2", "img": "images/upholstery/page_12_img_02.jpg", "material": "Chenille Fabric + foam", "color": "Various", "dimensions": "", "desc": ""},
  ],
  woodPaper:[
    {"name": "Home Collection", "sku": "YTV-001", "img": "images/Wood_Paper_Laminated/page_25_img_01.jpg", "material": "MDF + Paper Laminate", "color": "White", "dimensions": "180x40x50 cm", "desc": "Modern TV entertainment unit"},
    {"name": "Computer Desk", "sku": "YBS-002", "img": "images/Wood_Paper_Laminated/page_25_img_02.jpg", "material": "MDF + Paper Laminate", "color": "Oak Pattern", "dimensions": "80x30x180 cm", "desc": "5-tier bookshelf"},
    {"name": "Table Sets", "sku": "YCD-003", "img": "images/Wood_Paper_Laminated/page_25_img_03.jpg", "material": "MDF + Steel Frame", "color": "White", "dimensions": "120x60x75 cm", "desc": "Modern computer desk"},
    {"name": "Console Tablet", "sku": "YSC-004", "img": "images/Wood_Paper_Laminated/page_25_img_04.jpg", "material": "MDF + Paper Laminate", "color": "White", "dimensions": "80x30x100 cm", "desc": "Slim shoe cabinet"},
    {"name": "Writing Desk", "sku": "YCT-005", "img": "images/Wood_Paper_Laminated/page_25_img_05.jpg", "material": "MDF + Paper Laminate", "color": "Oak", "dimensions": "100x60x45 cm", "desc": "Modern coffee table"},
    {"name": "5 Drawers Chest", "sku": "YWR-006", "img": "images/Wood_Paper_Laminated/page_26_img_01.jpg", "material": "MDF + Paper Laminate", "color": "White", "dimensions": "120x55x200 cm", "desc": "2-door wardrobe"},
    {"name": "Chest of Drawers", "sku": "YDR-007", "img": "images/Wood_Paper_Laminated/page_26_img_02.jpg", "material": "MDF + Paper Laminate", "color": "White", "dimensions": "80x45x90 cm", "desc": "5-drawer chest"},
  ],
  woodSolid:[
    {"name": "Solid Oak Dining Table", "sku": "YSO-001", "img": "images/Wood_Solid_Veneer/page_27_img_01.jpg", "material": "Solid Oak Wood", "color": "Natural Oak", "dimensions": "180x90x78 cm", "desc": "Premium solid oak dining table"},
    {"name": "Walnut Coffee Table", "sku": "YWC-002", "img": "images/Wood_Solid_Veneer/page_27_img_02.jpg", "material": "Solid Walnut Wood", "color": "Dark Walnut", "dimensions": "130x70x42 cm", "desc": "Handcrafted walnut coffee table"},
    {"name": "Mahogany Console Table", "sku": "YMC-003", "img": "images/Wood_Solid_Veneer/page_27_img_03.jpg", "material": "Mahogany Wood + Veneer", "color": "Mahogany", "dimensions": "140x35x80 cm", "desc": "Elegant mahogany console table"},
    {"name": "Teak Sideboard", "sku": "YTS-004", "img": "images/Wood_Solid_Veneer/page_27_img_04.jpg", "material": "Teak Wood + Veneer", "color": "Teak Brown", "dimensions": "160x45x80 cm", "desc": "Premium teak sideboard"},
    {"name": "Cherry Wood Desk", "sku": "YCD-005", "img": "images/Wood_Solid_Veneer/page_27_img_05.jpg", "material": "Cherry Wood + Veneer", "color": "Cherry", "dimensions": "140x65x76 cm", "desc": "Executive desk crafted from cherry wood"},
    {"name": "Rosewood Display Cabinet", "sku": "YRC-006", "img": "images/Wood_Solid_Veneer/page_27_img_06.jpg", "material": "Rosewood + Glass", "color": "Rosewood", "dimensions": "90x40x180 cm", "desc": "Elegant display cabinet"},
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
  ],
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
  var h="<tr><td>Material</td><td>"+p.material+"</td></tr><tr><td>Color</td><td>"+p.color+"</td></tr><tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";
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
