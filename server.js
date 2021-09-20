const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://lumarini:Tequila123*@cluster0.dyitv.mongodb.net/testDB", {useNewUrlParser: true})

//----------------------------------------------------------- CREATING NOTESSCHEMA
const addnotesSchema = new mongoose.Schema ({
    title: String,
    content: String
});

const Addnote = new mongoose.model("Addnote", addnotesSchema);
//----------------------------------------------------------- CREATING NEW NOTE
Addnote.find({}, function(err,retrieved){
    if (err) {console.log(err);}
    else     {
        if (retrieved.length < 5) {
            const saveitnow = new Addnote({
                title: "REACT test note",
                content: "NOW RUNNING FROM REACT SERVER." 
            });
                saveitnow.save(function(err){
                    if (err) {console.log(err);}
                    else {
                          console.log("Note was successfully added to database.");
            }});

        }
    }
});


app.use("/", require("./routes/noteroute"));


app.listen(3001, function(){
    console.log("express server running on port 3001.")
});