$(document).ready(function() {
  console.log("hello!")
  $('#toggle-project-details').click(function() {
    console.log("clicked!")
  $('.project-details').slideDown("slow");
});
});