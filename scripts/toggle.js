$(document).ready(function() {

  $('.button-vagary').click(function() {
      $('.vagary').toggle("slow", function() {
        console.log('toggle')
      });
    });
  
$('.button-teacherest').click(function() {
  console.log("clicked!")
$('.teacherest').toggle("slow");
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