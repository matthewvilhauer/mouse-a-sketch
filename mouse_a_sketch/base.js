console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!");

  $("td").on("mouseenter", function() {
      $(this).css("background-color",$("input").val());
      console.log($("input").val());
  });
});
