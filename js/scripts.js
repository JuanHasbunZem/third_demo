function isNumber(numInput) {
  const isItNum = numInput;
  if (isItNum >= 0) {
    return true;
  } else {
    return false;
  }
};
      

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#userName").val();
    const numInput = $("input#userNumber").val();
    if (isNumber(numInput) === true) {
      $(".userName").text(nameInput);
    
      $("#heading").hide();
      $("#forms").hide();
      $("#welcome").show();
    } else {
      $("#error").show();
    }
  });

  $("#restart").click(function(event) {
    event.preventDefault();
    $("#heading").show();
    $("#forms").show();
    $("#welcome").hide();
    $("#error").hide();
  });

  $("#errorRestart").click(function(event) {
    event.preventDefault();
    $("#heading").show();
    $("#forms").show();
    $("#welcome").hide();
    $("#error").hide();
  });
});