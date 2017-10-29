var friend = require('../data/friendsData.js');
var fs = require("fs");

function apiRoutesListeners (app) {
  // define the get api/friends route
  app.get('/api/friends', function(req, res) {
      res.json(friend);
  });


  app.post('/api/friends', function(req, res) {
          var newFriend = req.body;

          friend.push(newFriend);
          fs.appendFile("friendsData.txt", newFriend, function(err){
              if (err) throw error;
              console.log("new friend added to friends Data array")
          })
  	 	console.log(newFriend);
  });

  };





module.exports = apiRoutesListeners;