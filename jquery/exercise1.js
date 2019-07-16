$('h1').click(function(){
  $(this).text('I was changed.');
})

$('input').eq(0).keypress(function(event){
  if (event.which === 13){
    $('h3').toggleClass('turnBlue');
  }
})

$('li').on('mouseenter', function(){
  $(this).toggleClass('turnRed');
})

$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000);
})
