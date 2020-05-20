var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',function(req, res){
    res.send("server works!");
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  