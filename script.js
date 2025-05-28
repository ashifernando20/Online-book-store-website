searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}


let cardForm = document.querySelector('.card_items');

document.querySelector('#card-btn').onclick = () =>{
  cardForm.classList.toggle('active');
}

document.querySelector('#close-card-btn').onclick = () =>{
  cardForm.classList.remove('active');
}


let payment = document.querySelector('.payment-system');

document.querySelector('#payment-btn').onclick = () =>{
  payment.classList.toggle('active');
}

document.querySelector('#close-pay-btn').onclick = () =>{
  payment.classList.remove('active');
}


let favoriteForm = document.querySelector('.favorite-items');

document.querySelector('#favorite-btn').onclick = () =>{
  favoriteForm.classList.toggle('active');
}

document.querySelector('#close-favorite-btn').onclick = () =>{
  favoriteForm.classList.remove('active');
}


let aboutForm = document.querySelector('.about-page');

document.querySelector('#about-btn').onclick = () =>{
  aboutForm.classList.toggle('active');
}

document.querySelector('#close-about-btn').onclick = () =>{
  aboutForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 93){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}


var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

