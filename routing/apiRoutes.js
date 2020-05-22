var fs = require("fs");
var noteData = require("../db/db");

module.exports = function (app) {

    //Get db.json data
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    //post new data to db.json
    app.post("/api/notes", function (req, res) {
       //deconstructing object
        const note=req.body;
        const num=(Math.floor(Math.random()*100)).toString();
        const noteTitle=note.title;
        const noteText=note.text;
        // const {id}=JSON.stringify(num);
        newNote= {
            noteTitle,
            noteText,
            id:num
        }
        noteData.push(newNote);
        console.log(noteData);
    
        
        //write new file with newly parsed data from 'noteData' 
        fs.writeFile("db/db.json", JSON.stringify(noteData, null, 2), err => {
            if (err) {
                console.log(err);
            }
            console.log("it made it in the console");
        })
        //res.send or res.end will end post
        res.json(noteData);
    });

    //delete Should receive a query parameter containing the id of a note to delete.
    //  This means you'll need to find a way to give each note a unique id when it's saved. 
    // app.delete("/api/notes/" + id, noteData, (req, res)=>{
    //     console.log("inside delete method");
    //     //In order to delete a note, 
    //     //you'll need to read all notes from the db.json file,

    //     //remove the note with the given id property, 

    //     //and then rewrite the notes to the db.json file.

    //     //res.send or res.end will end post
    //     res.json(noteData);
    // });
};
