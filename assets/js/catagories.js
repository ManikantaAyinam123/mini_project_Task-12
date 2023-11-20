changeSwiper();
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
function changeSwiper() {
swiper = new Swiper(".swiper", {
 slidesPerView: 5,
 spaceBetween: 10,
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 breakpoints: {
   320: {
     slidesPerView: 1,
   },
   576: {
     slidesPerView: 2,
   },
   768: {
     slidesPerView: 3,
   },
   992: {
     slidesPerView: 4,
   },
   1200: {
     slidesPerView: 5,
   },
 },
});
}
let slideIndex = 1;
      showSlide(slideIndex);
      
      function openLightbox() {
        document.getElementById('Lightbox').style.display = 'block';
      };
      
      function closeLightbox() {
        document.getElementById('Lightbox').style.display = 'none';
      };
      
      function changeSlide(n) {
        showSlide(slideIndex += n);
      };
      
      function toSlide(n) {
        showSlide(slideIndex = n);
      };
      
      function showSlide(n) {
        const slides = document.getElementsByClassName('slide');
        let modalPreviews = document.getElementsByClassName('modal-preview');
      
        if (n > slides.length) {
          slideIndex = 1;	
        };
        
        if (n < 1) {
          slideIndex = slides.length;
        };
      
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        };
        
        for (let i = 0; i < modalPreviews.length; i++) {
          modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
        };
        
        slides[slideIndex - 1].style.display = 'block';
        modalPreviews[slideIndex - 1].className += ' active';
      };