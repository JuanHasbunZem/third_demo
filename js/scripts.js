$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#heading").hide();
    $("#forms").hide();

    const nameInput = $("input#userName").val();
    const numInput = $("input#userNumber").val();

    $(".userName").text(nameInput);
    
    $("#welcome").show();
  });

  $("#restart").click(function(event) {
    event.preventDefault();
    $("#heading").show();
    $("#forms").show();
    $("#welcome").hide();
  });
});