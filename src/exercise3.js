exports.run = function(input) {
  var toMultiply = [];
  var total = 1;

  input.forEach(element => {
    if(element.multiply === true) {
      toMultiply.push(element.value);
    }
  });
  
  toMultiply.forEach(element => {
    total *= element;
  });

  return total;
};
