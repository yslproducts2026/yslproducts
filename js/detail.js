// detail.js - shared helpers for YSL product detail pages
function handleImageError(img){
  img.style.display='none';
  const container=img.closest('.main-image')||img.parentElement;
  if(container&&!container.querySelector('.image-placeholder')){
    const ph=document.createElement('div');
    ph.className='image-placeholder';
    ph.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21"/></svg><p>Product image</p><small>'+(img.alt||'No image available')+'</small>';
    container.appendChild(ph);
  }
}
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('img').forEach(function(img){
    img.addEventListener('error',function(){handleImageError(img);});
  });
});
