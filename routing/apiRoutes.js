const fs = require("fs");
let noteData = require("../db/db");

module.exports = function (app) {

    // Get db.json data
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    //post new data to db.json
    app.post("/api/notes", function (req, res) {
        //deconstructing object and re-write new note object with id property
        const note = req.body;
        const num = (Math.floor(Math.random() * 100)).toString();
        const title = note.title;
        const text = note.text;
        const newNote = {title,text,id: num}

        noteData.push(newNote);
        console.log(newNote.id);
        // write new file with newly parsed data from 'noteData' 
        fs.writeFile("db/db.json", JSON.stringify(noteData, null, 2), err => {
            if (err) throw err;

            console.log("new noteData made it in the console");

        })
        //res.send or res.end will end post
        res.json(noteData);
    });

    //delete Should receive a query parameter containing the id of a note to delete
    app.delete("/api/notes/:id", (req, res) => {
        //Selected note
        const unwatedNote = req.params.id 

        // Filter to show only the selected note
        noteData=noteData.filter(function(note){
            return note.id !== unwatedNote;
        });
        // console.log(noteData);

        //remove the note with the given id property, 

        //and then rewrite the notes to the db.json file.

        //res.send or res.end will end post
        res.json(noteData);
    });
};
