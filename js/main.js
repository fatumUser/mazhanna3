let burgerIcon = document.getElementById('header__burger-icon');

burgerIcon.onclick = function() {
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("header__burger-menu").classList.toggle("elem-show")
    document.getElementById("header").classList.toggle("header__burger-menu-border-radius")
    document.getElementById("header__burger-icon__svg1").classList.toggle("display-none")
    document.getElementById("header__burger-icon__svg2").classList.toggle("elem-show")
    /*document.getElementById("header").classList.toggle("burger-menu-open")
    document.getElementById("header__nav-block").classList.toggle("elem-show")
    document.getElementById("header__contacts-block").classList.toggle("elem-show-display-flex")
    document.getElementById("header__btn-feedback").classList.toggle("elem-show-display-flex")*/
  };