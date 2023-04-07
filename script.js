const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 500,
      },
      
  
    
  });


  const testimonial = new Swiper('#testimonial', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  //  autoplay: {
  //       delay: 2000,
  //     },
  
  });