const express=require("express");
const path=require("path");
const app=express();

app.use(express.static("../public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res){
    res.send("");
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "notes.html"),{
        dotfiles:"allow"
    })

});


module.exports=app