const express = require("express");
const router = express.Router();
const Note = require("../models/notemodel");


router.route("/create").post((req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note ({
        title,
        content
    });
    newNote.save(function(err){
        if (err) {console.log(err);}
        else { console.log("Note saved on database.");
}});
    // res(alert("Note saved successfully."));
})

router.route("/notes").get((req,res) => {
    Note.find()
    .then (foundNotes => res.json(foundNotes))
})

module.exports = router;