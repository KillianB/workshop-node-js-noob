exports.run = function(input) {
  var array = input.split("");
  var result = array[0];

  array.forEach(element => {
    if(element > result) {
      result = element;
    }
  });
  return parseInt(result);
};
