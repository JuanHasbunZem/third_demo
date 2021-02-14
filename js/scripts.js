function isNumber(numInput) {
  const isItNum = numInput;
  if (isItNum >= 0) {
    return true;
  } else {
    return false;
  }
};

function makeArray(numInput) {
  let numArray = [];
  let counter = 0;
  for (i=0; i <= numInput; i++) {
    numArray.push(counter);
    counter ++;
  }
  return numArray;
};

function isThree(numArray) {
  const threeArray = numArray.map(function(element) {
    if (element === 3) {
      return " Won't you be my neighbor?";
    } else {
      if (element === 2) {
        return " Boop!";
      } else {
        if (element === 1) {
          return " Beep!";
        } else {
          return element;
        }
      }
    }
  });
  return threeArray;
};



      

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#userName").val();
    const numInput = $("input#userNumber").val();
    if (isNumber(numInput) === true) {
      $(".userName").text(nameInput);
      const threeArray = isThree(makeArray(numInput));
      $(".userNumber").text(threeArray);
      console.log(threeArray);
    
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