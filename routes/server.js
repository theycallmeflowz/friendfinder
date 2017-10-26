var express = require("express"),
path = require("path");


var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/survey.html", function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
})

app.get("/data.json", function(req,res){
    res.sendFile(path.join(__dirname, "data.json"));
})



var friends = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
},{
    name: "Jacob Deming",
    photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    scores: [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
    ]
    }
];

app.post("/friends", function (req,res){

    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
});



app.listen(port, function(){
    console.log("express server running, goto localhost:3000 in your browser");
});