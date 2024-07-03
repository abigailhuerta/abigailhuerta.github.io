function fixPhotoOnScroll () {
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0  : photo.style.marginTop = '-7rem';
  }
  

  function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
     var menu = document.getElementsByClassName('js-menu');
     menu[0].classList.toggle("active");
  }

  window.addEventListener("scroll", fixPhotoOnScroll , false);
