var express = require("express"),
path = require("path"),
bodyParser = require("body-parser");

// html routes
var htmlRoutesListeners = require('./routes/htmlRoutes.js')//(app);
// api routes
var apiRoutesListeners = require('./routes/apiRoutes.js')//(app);

var app = express();
var port = process.env.PORT || 3000;


// sets up the express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//Sets up html and api listeners
htmlRoutesListeners(app);
apiRoutesListeners(app);

app.post("api/friends", function (req,res){

    var newFriend = req.body;
    friendsArray.push(newFriend);
    res.json(newFriend);
});



app.listen(port, function(){
    console.log("express server running, goto localhost:3000 in your browser");
});