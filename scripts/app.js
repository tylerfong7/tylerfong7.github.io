function openMenu(icon){
  icon.classList.toggle('fa-bars')
  icon.classList.toggle('fa-xmark')
  
  const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu.classList.toggle('active')
}