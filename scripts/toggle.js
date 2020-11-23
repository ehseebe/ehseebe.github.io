$(document).ready(function() {

  $('.button-vagary').click(function() {
    if ($('.vagary').length) {
      console.log('slideup')
      $('.vagary').slideUp();
    } else {
      console.log('slidedown')
      $('.vagary').slideDown("slow");
    }
  
});

$('.button-teacherest').click(function() {
  console.log("clicked!")
$('.teacherest').slideDown("slow");
});

$('.button-scheduler').click(function() {
  console.log("clicked!")
$('.scheduler').slideDown("slow");
});

$('.button-tweeter').click(function() {
  console.log("clicked!")
$('.tweeter').slideDown("slow");
});
});