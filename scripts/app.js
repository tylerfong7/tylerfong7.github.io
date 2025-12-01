function openMenu(icon){
  icon.classList.toggle('fa-bars')
  icon.classList.toggle('fa-xmark')
  
  const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu.classList.toggle('active')
}

  const div = document.querySelector(".moving-intro");
  const text = "Hi! My name is Tyler. Thanks for checking out my website.";

  function textTypingEffect(element, text, i = 0){
    if (i=== 0){
      element.textContent = "";
    }
    
    element.textContent += text[i];

    if (i === text.length - 1){
      return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1), 50);

  }
  textTypingEffect(div, text,)