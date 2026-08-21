(function(){
var P={
  chairs: [],
  dining: [],
  bedsSofas: [],
  upholstery: [
  {
    "name": "Recliner collection",
    "sku": "Recliner collection",
    "img": "images/upholstery/Nordic.jpg",
    "material": "PU leather",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "Sectional Sofa",
    "sku": "Sectional Sofa",
    "img": "images/upholstery/page_06_img_04.jpg",
    "material": "Fabric Blend + Wood Frame",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "Sectional Sofa",
    "sku": "Sectional Sofa",
    "img": "images/upholstery/page_08_img_01.jpg",
    "material": "Fabric + Wood Frame",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "2.5 seatsl Sofa",
    "sku": "2.5 seatsl Sofa",
    "img": "images/upholstery/page_08_img_02.jpg",
    "material": "Fabric Blend + Wood Frame",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "Sofa Bed with wood trim",
    "sku": "Sofa Bed with wood trim",
    "img": "images/upholstery/page_08_img_05.jpg",
    "material": "Fabric + Wood Frame",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "Accent Chair",
    "sku": "Accent Chair",
    "img": "images/upholstery/page_12_img_01.jpg",
    "material": "Fabric + Metal Legs",
    "color": "",
    "dimensions": "",
    "desc": ""
  },
  {
    "name": "arm chair set 2",
    "sku": "arm chair set 2",
    "img": "images/upholstery/page_12_img_02.jpg",
    "material": "Chenille Fabric + foam",
    "color": "",
    "dimensions": "",
    "desc": ""
  }
],
  woodPaper: [],
  woodSolid: [],
  relaxing: []
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