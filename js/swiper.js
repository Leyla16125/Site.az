new Swiper(".mySwiper", {
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".my-custom-next",
    prevEl: ".my-custom-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


