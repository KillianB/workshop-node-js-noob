exports.run = function(input) {
  function repeat(nbr, string) {
    var stringArray = [];
    var result = "";

    for(i = 0; i<nbr; i++) {
      stringArray.push(string);
    }
    result = stringArray.join(", ")
    return result;
  }
  
  function input(nbr, string, callback) {
    return callback(nbr, string);
  }

  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
