(function(){
var products = {
  chairs: [
    {name:"Chair Ottoman",sku:"Chair Ottoman",img:"images/chairs/page_23_img_01.jpg",material:"Solid Wood + Fabric",color:"Various",dimensions:"",desc:""},
    {name:"Classic Dining Chair with Arm",sku:"Classic Dining Chair with Arm",img:"images/chairs/page_23_img_02.jpg",material:"metal leg + fabric",color:"Various",dimensions:"",desc:""},
    {name:"Fabric Dining Chair",sku:"Fabric Dining Chair",img:"images/chairs/page_23_img_03.jpg",material:"Fabric+ metal leg",color:"Various",dimensions:"",desc:""},
    {name:"Velvet Accent Chair",sku:"Velvet Accent Chair",img:"images/chairs/page_23_img_04.jpg",material:"Velvet Fabric + Metal Legs",color:"Various",dimensions:"",desc:""},
    {name:"Fabric Dining Chair",sku:"Fabric Dining Chair",img:"images/chairs/page_23_img_05.jpg",material:"Fabric + Metal Legs",color:"Various",dimensions:"",desc:""},
    {name:"Half moon Chair",sku:"Half moon Chair",img:"images/chairs/page_23_img_06.jpg",material:"Fabric + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"Industrial Bar Stool",sku:"Industrial Bar Stool",img:"images/chairs/page_23_img_07.jpg",material:"Metal Frame + Wood Seat",color:"Various",dimensions:"",desc:""},
    {name:"Diamond Back Bar Stool",sku:"Diamond Back Bar Stool",img:"images/chairs/page_23_img_08.jpg",material:"Metal leg + Fabric",color:"Various",dimensions:"",desc:""},
    {name:"Mid-Century Dining Chair",sku:"Mid-Century Dining Chair",img:"images/chairs/page_23_img_09.jpg",material:"Metal leg with hard PU",color:"Various",dimensions:"",desc:""},
    {name:"Arm Dining Chair",sku:"Arm Dining Chair",img:"images/chairs/page_23_img_10.jpg",material:"Metal Leg with tufted back",color:"Various",dimensions:"",desc:""},
    {name:"Swivel Armchair",sku:"Swivel Armchair",img:"images/chairs/page_23_img_11.jpg",material:"Fabric + Metal Legs",color:"Various",dimensions:"",desc:""},
    {name:"Diamoand arm chair",sku:"Diamoand arm chair",img:"images/chairs/page_23_img_12.jpg",material:"Fabric + metal legs",color:"Various",dimensions:"",desc:""},
    {name:"Banquet Chair",sku:"Banquet Chair",img:"images/chairs/page_23_img_13.jpg",material:"Steel Frame + Fabric",color:"Various",dimensions:"",desc:""},
    {name:"Staioned Dining chair",sku:"Staioned Dining chair",img:"images/chairs/page_23_img_14.jpg",material:"metal leg",color:"Various",dimensions:"",desc:""},
    {name:"FG120084",sku:"FG120084",img:"images/chairs/FG120084.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140094",sku:"FG140094",img:"images/chairs/FG140094.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140101",sku:"FG140101",img:"images/chairs/FG140101.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140113",sku:"FG140113",img:"images/chairs/FG140113.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140122",sku:"FG140122",img:"images/chairs/FG140122.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140132",sku:"FG140132",img:"images/chairs/FG140132.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140141",sku:"FG140141",img:"images/chairs/FG140141.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140154",sku:"FG140154",img:"images/chairs/FG140154.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140164",sku:"FG140164",img:"images/chairs/FG140164.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140174",sku:"FG140174",img:"images/chairs/FG140174.jpg",material:"Steel Frame + Plywood + Manual Control",color:"Various",dimensions:"",desc:""},
    {name:"FG140211",sku:"FG140211",img:"images/chairs/FG140211.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG140231",sku:"FG140231",img:"images/chairs/FG140231.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG140241",sku:"FG140241",img:"images/chairs/FG140241.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG140272",sku:"FG140272",img:"images/chairs/FG140272.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG310021",sku:"FG310021",img:"images/chairs/FG310021.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310022",sku:"FG310022",img:"images/chairs/FG310022.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310031",sku:"FG310031",img:"images/chairs/FG310031.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310042",sku:"FG310042",img:"images/chairs/FG310042.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310052",sku:"FG310052",img:"images/chairs/FG310052.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310062",sku:"FG310062",img:"images/chairs/FG310062.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310072",sku:"FG310072",img:"images/chairs/FG310072.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310082",sku:"FG310082",img:"images/chairs/FG310082.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG310092",sku:"FG310092",img:"images/chairs/FG310092.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG320011",sku:"FG320011",img:"images/chairs/FG320011.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG330020",sku:"FG330020",img:"images/chairs/FG330020.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG330040",sku:"FG330040",img:"images/chairs/FG330040.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
    {name:"FG330010",sku:"FG330010",img:"images/relaxing/FG330010.jpg",material:"Steel Frame + Plywood",color:"Various",dimensions:"",desc:""},
  ],dining: [
    {name:"4-Seater Dining Set",sku:"4-Seater Dining Set",img:"images/Dining/page_24_img_01.jpg",material:"Solid Wood + MDF table top",color:"Various",dimensions:"",desc:""},
    {name:"2 Tone Dining Sets",sku:"2 Tone Dining Sets",img:"images/Dining/page_24_img_02.jpg",material:"Solid pine + MDF table top",color:"Various",dimensions:"",desc:""},
    {name:"Marble-Top Dining Set",sku:"Marble-Top Dining Set",img:"images/Dining/page_24_img_03.jpg",material:"Marble + Stainless Steel",color:"Various",dimensions:"",desc:""},
    {name:"Square Pedestal Table",sku:"Square Pedestal Table",img:"images/Dining/page_24_img_04.jpg",material:"Metal leg with MDF top",color:"Various",dimensions:"",desc:""},
    {name:"Rectangular 6 chair dining set",sku:"Rectangular 6 chair dining set",img:"images/Dining/page_24_img_05.jpg",material:"Metal leg with Tarrecado",color:"Various",dimensions:"",desc:""},
    {name:"Compact Dining Set",sku:"Compact Dining Set",img:"images/Dining/page_24_img_06.jpg",material:"MDF + Steel Frame",color:"Various",dimensions:"",desc:""},
    {name:"Farmhouse Dining Table",sku:"Farmhouse Dining Table",img:"images/Dining/page_24_img_07.jpg",material:"Reclaimed Wood",color:"Various",dimensions:"",desc:""},
    {name:"Glass Dining Table",sku:"Glass Dining Table",img:"images/Dining/page_24_img_08.jpg",material:"Tempered Glass + Chrome",color:"Various",dimensions:"",desc:""},
  ],bedsSofas: [
    {name:"Multi-Function Sofa Bed",sku:"Multi-Function Sofa Bed",img:"images/beds-sofas/multi-function-sofa.jpg",material:"Sofa + Bed + Storage",color:"Various",dimensions:"",desc:""},
    {name:"Multi-Function Bed",sku:"Multi-Function Bed",img:"images/beds-sofas/multi-function-bed.jpg",material:"Sofa + Bed + Storage",color:"Various",dimensions:"",desc:""},
    {name:"Multi-Function Storage",sku:"Multi-Function Storage",img:"images/beds-sofas/multi-function-storage.jpg",material:"Sofa + Bed + Storage",color:"Various",dimensions:"",desc:""},
    {name:"King Size Bed",sku:"King Size Bed",img:"images/beds-sofas/bed.jpg",material:"Fabric + Metal Frame",color:"Various",dimensions:"",desc:""},
    {name:"Sofa Bed",sku:"Sofa Bed",img:"images/beds-sofas/sofabed with storage.jpg",material:"Fabric + Metal Mechanism",color:"Various",dimensions:"",desc:""},
    {name:"2-Seater Sofa Bed",sku:"2-Seater Sofa Bed",img:"images/beds-sofas/2s sofa bed.jpg",material:"Fabric + extension bed",color:"Various",dimensions:"",desc:""},
    {name:"Chair sofa",sku:"Chair sofa",img:"images/beds-sofas/bed position.jpg",material:"metal leg with PU cushion",color:"Various",dimensions:"",desc:""},
    {name:"Twin Bed Frame",sku:"Twin Bed Frame",img:"images/beds-sofas/bed positon2.jpg",material:"metal leg with PU cushion",color:"Various",dimensions:"",desc:""},
    {name:"Chaise Sofa",sku:"Chaise Sofa",img:"images/beds-sofas/sofa position.jpg",material:"metal leg with PU cushion",color:"Various",dimensions:"",desc:""},
  ],upholstery: [
    {name:"3-Seater Sofa",sku:"3-Seater Sofa",img:"images/upholstery/3s.jpg",material:"Linen Fabric + Solid Wood",color:"Various",dimensions:"",desc:""},
    {name:"Recliner",sku:"Recliner",img:"images/upholstery/bigboy.jpg",material:"PU leather",color:"Various",dimensions:"",desc:""},
    {name:"Recliner collection",sku:"Recliner collection",img:"images/upholstery/Nordic.jpg",material:"PU leather",color:"Various",dimensions:"",desc:""},
    {name:"Chesterfield Sofa",sku:"Chesterfield Sofa",img:"images/upholstery/page_06_img_01.jpg",material:"Barcley Fabric 2 seats + chairs",color:"Various",dimensions:"",desc:""},
    {name:"2.5 seatsl Sofa",sku:"2.5 seatsl Sofa",img:"images/upholstery/page_06_img_02.jpg",material:"Fabric Blend + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"Sectional Sofa",sku:"Sectional Sofa",img:"images/upholstery/page_06_img_04.jpg",material:"Fabric Blend + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"Sectional Sofa",sku:"Sectional Sofa",img:"images/upholstery/page_08_img_01.jpg",material:"Fabric + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"2.5 seatsl Sofa",sku:"2.5 seatsl Sofa",img:"images/upholstery/page_08_img_02.jpg",material:"Fabric Blend + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"Sofa Bed with wood trim",sku:"Sofa Bed with wood trim",img:"images/upholstery/page_08_img_05.jpg",material:"Fabric + Wood Frame",color:"Various",dimensions:"",desc:""},
    {name:"Accent Chair",sku:"Accent Chair",img:"images/upholstery/page_12_img_01.jpg",material:"Fabric + Metal Legs",color:"Various",dimensions:"",desc:""},
    {name:"arm chair set 2",sku:"arm chair set 2",img:"images/upholstery/page_12_img_02.jpg",material:"Chenille Fabric + foam",color:"Various",dimensions:"",desc:""},
  ],woodPaper: [
    {name:"Home Collection",sku:"Home Collection",img:"images/Wood_Paper_Laminated/page_25_img_01.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
    {name:"Computer Desk",sku:"Computer Desk",img:"images/Wood_Paper_Laminated/page_25_img_02.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
    {name:"Table Sets",sku:"Table Sets",img:"images/Wood_Paper_Laminated/page_25_img_03.jpg",material:"MDF + Steel Frame",color:"Various",dimensions:"",desc:""},
    {name:"Console Table",sku:"Console Table",img:"images/Wood_Paper_Laminated/page_25_img_04.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
    {name:"Writing Desk",sku:"Writing Desk",img:"images/Wood_Paper_Laminated/page_25_img_05.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
    {name:"5 Drawers Chest",sku:"5 Drawers Chest",img:"images/Wood_Paper_Laminated/page_26_img_01.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
    {name:"Chest of Drawers",sku:"Chest of Drawers",img:"images/Wood_Paper_Laminated/page_26_img_02.jpg",material:"MDF + Paper Laminate",color:"Various",dimensions:"",desc:""},
  ],woodSolid: [
    {name:"Solid Oak Dining Table",sku:"Solid Oak Dining Table",img:"images/Wood_Solid_Veneer/page_27_img_01.jpg",material:"Solid Oak Wood",color:"Various",dimensions:"",desc:""},
    {name:"Walnut Coffee Table",sku:"Walnut Coffee Table",img:"images/Wood_Solid_Veneer/page_27_img_02.jpg",material:"Solid Walnut Wood",color:"Various",dimensions:"",desc:""},
    {name:"Mahogany Console Table",sku:"Mahogany Console Table",img:"images/Wood_Solid_Veneer/page_27_img_03.jpg",material:"Mahogany Wood + Veneer",color:"Various",dimensions:"",desc:""},
    {name:"Teak Sideboard",sku:"Teak Sideboard",img:"images/Wood_Solid_Veneer/page_27_img_04.jpg",material:"Teak Wood + Veneer",color:"Various",dimensions:"",desc:""},
    {name:"Cherry Wood Desk",sku:"Cherry Wood Desk",img:"images/Wood_Solid_Veneer/page_27_img_05.jpg",material:"Cherry Wood + Veneer",color:"Various",dimensions:"",desc:""},
    {name:"Rosewood Display Cabinet",sku:"Rosewood Display Cabinet",img:"images/Wood_Solid_Veneer/page_27_img_06.jpg",material:"Rosewood + Glass",color:"Various",dimensions:"",desc:""},
  ],relaxing: [
    {name:"FG113012",sku:"FG113012",img:"images/relaxing/FG113012.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG113022",sku:"FG113022",img:"images/relaxing/FG113022.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG113032",sku:"FG113032",img:"images/relaxing/FG113032.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG113042",sku:"FG113042",img:"images/relaxing/FG113042.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG113052",sku:"FG113052",img:"images/relaxing/FG113052.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"CH-255099P2",sku:"CH-255099P2",img:"images/relaxing/CH-255099P2.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG113102",sku:"FG113102",img:"images/relaxing/FG113102.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136061",sku:"FG136061",img:"images/relaxing/FG136061.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"CH-253085L2",sku:"CH-253085L2",img:"images/relaxing/CH-253085L2.jpg",material:"Steel Frame + Plywood + Manual Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136072",sku:"FG136072",img:"images/relaxing/FG136072.jpg",material:"Steel Frame + Plywood + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"CH-253109L2",sku:"CH-253109L2",img:"images/relaxing/CH-253109L2.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136121MH",sku:"FG136121MH",img:"images/relaxing/FG136121MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136122",sku:"FG136122",img:"images/relaxing/FG136122.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136131MH",sku:"FG136131MH",img:"images/relaxing/FG136131MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136132",sku:"FG136132",img:"images/relaxing/FG136132.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136141",sku:"FG136141",img:"images/relaxing/FG136141.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG136141MH",sku:"FG136141MH",img:"images/relaxing/FG136141MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150121",sku:"FG150121",img:"images/relaxing/FG150121.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150121MH",sku:"FG150121MH",img:"images/relaxing/FG150121MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150128",sku:"FG150128",img:"images/relaxing/FG150128.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150131",sku:"FG150131",img:"images/relaxing/FG150131.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150131MH",sku:"FG150131MH",img:"images/relaxing/FG150131MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150138",sku:"FG150138",img:"images/relaxing/FG150138.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150141",sku:"FG150141",img:"images/relaxing/FG150141.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150141MH",sku:"FG150141MH",img:"images/relaxing/FG150141MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150148",sku:"FG150148",img:"images/relaxing/FG150148.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150151",sku:"FG150151",img:"images/relaxing/FG150151.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150151MH",sku:"FG150151MH",img:"images/relaxing/FG150151MH.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
    {name:"FG150158",sku:"FG150158",img:"images/relaxing/FG150158.jpg",material:"Steel Frame + Electric Control",color:"Various",dimensions:"",desc:""},
  ]
};
var currentCategory = document.body.dataset.category || "";

var overlay = null;
var closeBtn = null;

function ensureModal() {
  if (overlay) return;
  overlay = document.createElement("div");
  overlay.id = "yslModalOverlay";
  overlay.className = "modal-overlay";
  overlay.innerHTML = ""
    + '<button class="modal-close" id="yslModalClose">&times;</button>'
    + '<div class="modal-image-wrap"><img id="yslModalImg" src="" alt=""></div>'
    + '<div class="modal-body">'
    + '<h2 id="yslModalName"></h2>'
    + '<div class="modal-sku" id="yslModalSku"></div>'
    + '<table><tbody id="yslModalSpecs"></tbody></table>'
    + '<p class="modal-desc" id="yslModalDesc"></p>'
    + '<a href="#contact" class="modal-cta" id="yslModalCTA">Inquire About This Product</a>'
    + '</div>';
  document.body.appendChild(overlay);
  closeBtn = document.getElementById("yslModalClose");
}

function openModal(product) {
  ensureModal();
  document.getElementById("yslModalImg").src = product.img;
  document.getElementById("yslModalImg").alt = product.name;
  document.getElementById("yslModalName").textContent = product.name;
  document.getElementById("yslModalSku").textContent = "SKU: " + product.sku;
  document.getElementById("yslModalSpecs").innerHTML = "<tr><td>Material</td><td>" + product.material + "</td></tr><tr><td>Color</td><td>" + product.color + "</td></tr><tr><td>Dimensions</td><td>" + product.dimensions + "</td></tr>";
  document.getElementById("yslModalDesc").textContent = product.desc;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function() {
  ensureModal();
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", function(e) { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });
  if (currentCategory && products[currentCategory]) {
    var cards = document.querySelectorAll(".card");
    var items = products[currentCategory];
    for (var i = 0; i < cards.length && i < items.length; i++) {
      (function(card, p) {
        card.addEventListener("click", function() { openModal(p); });
      })(cards[i], items[i]);
    }
  }
});
})();
