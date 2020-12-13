$(document).ready(function(){
   $('.list-menu a').on('click', function(){
      $('.list-menu a').removeClass('selected');
      $(this).addClass('selected');
      let area = $(this).data('area');
      $('.home').removeClass('show');
      $('.' + area).addClass('show');
   });

   $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:2
          }
      }
  })
});