$(document).ready(function(){
   $('.list-menu a').on('click', function(){
      $('.list-menu a').removeClass('selected');
      $(this).addClass('selected');
      let area = $(this).data('area');
      $('.home').removeClass('show');
      $('.' + area).addClass('show');

   });
});