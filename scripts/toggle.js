$(document).ready(function() {

  $('.button-vagary').click(function() {
    console.log('vagary clicked')
      $('.vagary').toggle("slow", function() {
        console.log('toggle')
      });
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