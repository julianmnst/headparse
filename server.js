var express = require("express")
var app = express()

app.get('/', function(req, res){
    var info = {
    "ipaddress": req.ip.split(':')[3],
    "language": req.headers["accept-language"].split(",")[0],
    "software": req.headers["user-agent"].split("(")[1].split(")")[0]
  };

  console.log(JSON.stringify(info) + "\n");

  res.set('Content-Type', 'application/json');
  res.json(info);
})

app.listen(process.env.PORT || 8080, function(){
    console.log("Server running on 8080")
})