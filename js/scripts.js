$(document).ready(function() {
  $("#count").submit(function(event) {
    event.preventDefault(); 
    const countTo = parseInt($("input#count-to").val());
    const countBy = parseInt($("input#count-by").val());
    for (let index = 0; index <= countTo; index += countBy) {
      $("#count-list").append(
        "<li>" + index + "</li>"
      );
    }  
  });
});

