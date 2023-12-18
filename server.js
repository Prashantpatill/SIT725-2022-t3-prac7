const express= require("express");
const res = require("express/lib/response");
const app= express();

app.get('/addition/:numberOne/:numberTwo', function(req,res,next){
    var numberOne = parseInt(req.params.numberOne) 
    var numberTwo = parseInt(req.params.numberTwo)
    var result = numberOne + numberTwo || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })


const port=8080;
app.listen(port,()=> {
    console.log("Listening to Port "+port);
})