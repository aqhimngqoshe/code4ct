// Auto  SLide Carousel for Sponsors
// Carousel Logo SLider
// Carousel Logo
$(document).ready(function() {

       //options( 1 - ON , 0 - OFF)
       var auto_slide = 1;
       var hover_pause = 1;
       var key_slide = 1;

       //speed of auto slide(
       var auto_slide_seconds = 0;
       $('#carousel_ul li:first').before($('#carousel_ul li:last'));

       //check if auto sliding is enabled
       if(auto_slide == 1){
           var timer = setInterval('slide("right")', auto_slide_seconds);
           $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
       }

       //check if hover pause is enabled
       if(hover_pause == 1){
           $('#carousel_ul').hover(function(){
               clearInterval(timer)
           },function(){
               timer = setInterval('slide("right")', auto_slide_seconds);
           });
       }

       //check if key sliding is enabled
       if(key_slide == 1){
           $(document).bind('keypress', function(e) {
               if(e.keyCode==37){
                       slide('left');
               }else if(e.keyCode==39){
                       slide('right');
               }
           });
       }
 });

//slide function
function slide(where){
           var item_width = $('#carousel_ul li').outerWidth();
           if(where == 'left'){
               var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
           }else{
               var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
           }
           //make the sliding effect using jQuery's animate function... '
           $('#carousel_ul:not(:animated)').animate({'left' : left_indent},4000,function(){
               if(where == 'left'){
                   $('#carousel_ul li:first').before($('#carousel_ul li:last'));
               }else{
                   $('#carousel_ul li:last').after($('#carousel_ul li:first'));
               }
               $('#carousel_ul').css({'left' : '-210px'});
           });

} ;
