$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false

  });

  $(document).ready(function(){
    $('.my-slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
    });
});


// /контакты/ 
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


