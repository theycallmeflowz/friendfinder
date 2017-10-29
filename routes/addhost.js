var express = require("express");


var app = express();
var port = process.env.PORT || 3000;



app.get("/:operand/:num1/:num2", function(req,res){

    var num1 = parseFloat(req.params.num1)
    var num2 = parseFloat(req.params.num2)
    // res.json(num1 * num2)

    if (operand === "add"){
        res.json(num1 + num2)
    } else if ("operand" === "subtract"){
        res.json(num1 - num2)
    } else if ("operand" === "multiply"){
        res.json(num1 * num2)
    } else if ("operand" === "divide"){
        res.json(num1 / num2)
    } else {
        res.json("error")
    }
})


app.listen(port, function(){
    console.log("express server running, goto localhost:3000 in your browser");
});