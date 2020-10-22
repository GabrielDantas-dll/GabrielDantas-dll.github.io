$(document).ready(function(){
   $('.list-menu a').on('click', function(){
        $('.list-menu a').removeClass('selected');
        $(this).addClass('selected');
   }); 
});