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
  for (i=0; i <= numInput; i++) {
    let counter = i.toString()
    if (counter.includes('3')) {
      numArray.push("Won't you be my neighbor?");
    } else if (counter.includes('2')) {
      numArray.push(" Boop!");
    } else if (counter.includes('1')) {
      numArray.push(" Beep!");
    } else {
      numArray.push(counter);
    };
  };
  return numArray;
};

/* old isThree function, commenting out in event I ever want to re-use this bit of code
function isThree(numArray) {
  const threeArray = numArray.map(function(element) {
    if (element === 3 || element === 13 || element === 23 || element >= 30 && element <= 39) {
      return " Won't you be my neighbor?";
    } else {
      if (element === 2 || element === 12 || element >= 20 && element <= 29) {
        return " Boop!";
      } else {
        if (element === 1 || element >= 10 && element <= 19) {
          return " Beep!";
        } else {
          return element;
        }
      }
    }
  });
  return threeArray;
}; */

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#userName").val();
    const numInput = $("input#userNumber").val();
    if (isNumber(numInput) === true) {
      $(".userName").text(nameInput);
      //const threeArray = isThree(makeArray(numInput));
      const threeArray = makeArray(numInput);
      console.log(makeArray(numInput));
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