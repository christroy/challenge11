const app = require("./app");
const port = 3030;
const db = require("./db.json");
const fs = require("fs");





app.get("/api/notes", function (req, res) {

    res.json(db);
})

app.post("/api/notes", function (req, res) {
    console.log(req);
    //let dbjson=fs.readFileSync("./db.json");
    //let json=JSON.parse(dbjson);
    newNote = req.body;
    newNote.id = db.length.toString();
    db.push(newNote);
    //res.json(newNote);
    //json.push(req.body);
    // json=JSON.stringify(json);
    // console.log(json);
    fs.writeFile("db.json", JSON.stringify(db), "utf8", function(){
    res.status(200).send(db);


         });
});

app.delete("/api/notes/:id", function(req, res){
    let noteId = req.params.id;
    for (i = 0; i < db.length; i++) {
      if (db[i].id === noteId) {
        db.splice(i, 1);
        break;
      }
    }
    for (i = 0; i < db.length; i++) {
      db[i].id = i.toString();
    }
    fs.writeFile("db.json", JSON.stringify(db), "utf8", function(){
        res.status(200).send(db);
    
    
             });
    
  });




app.listen(port, function () {
    console.log("express server listening on port " + port);
});

