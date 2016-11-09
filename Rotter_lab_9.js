console.log('this script file has loaded');

$(document).ready(function(){
  $(".longbox").mouseenter(function(){
    console.log('mouse enters');
    $(this).fadeTo("fast",0.25);
  });

  $(".longbox").mouseleave(function(){
    console.log('mouse leaves');
    $(this).fadeTo("slow",1);
  });

  $('.longbox').on('click', function() {
    $(this).html('<a href="#" class="box-text">Clicked!</a>');
    $(this).css('background-color', 'pink');
  });

});
