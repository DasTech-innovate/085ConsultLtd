const launcher=document.getElementById('contact‑launcher');
const panel   =document.getElementById('contact‑panel');

launcher.addEventListener('click',()=>{
  panel.classList.toggle('open');
  panel.setAttribute('aria-hidden', !panel.classList.contains('open'));
});