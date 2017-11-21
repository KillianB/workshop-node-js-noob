exports.run = function(input) {
  var fs = require('fs');

  input.showInProgress();
  fs.readdir(input.directory, (err, data) => {
    if(err) {
      input.showError();
    }
    input.showDone(data.length);
  })
};
