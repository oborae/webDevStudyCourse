// var checEven = Number(prompt("Please pick a number"));

// alert(isEven(checEven));

// var factor = Number(prompt("Please pick another number"));

// alert(factorial(factor));

var kebab = prompt("Please insert a kebab text");

alert(kebabToSnake(kebab));

function isEven(x){
  if(x % 2 == 0)
    return true;
  else
    return false;
}


function factorial(x){
  var fact = 1;
  for (var i = x; i >= 1; i--) {
    fact = fact*i;
  }
  return fact;
}

function kebabToSnake(str){
  var result = str.replace(/-/g, "_");
  return result;
}