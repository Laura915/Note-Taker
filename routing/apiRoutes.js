var fs =require("fs");
var noteData= require("../db/db");

module.exports = function(app) {
  
    //Get the data
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });
    //post
    app.post("/api/notes", function(req, res) {
     // recieve and push new note   
     noteData.push(req.body);
     console.log(noteData);
     
     //write new file with newly pused data from 'noteData' 
     fs.writeFile("db/db.json",JSON.stringify(noteData, null,2),(err)=>{
         if (err){
            console.log(err);
         }
         console.log("it made it in the console");
         //save and add data to db.json
         //clear and return new note
         
     })
     
     //res.send or res.end will end post
     res.json(noteData);
    });
  
};
  