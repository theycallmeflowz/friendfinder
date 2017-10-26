var path = require('path');

function htmlRoutesListeners (app) {
  // define the home page route
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // define the about route
  app.get('/survey.html', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

};

module.exports = htmlRoutesListeners;