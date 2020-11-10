const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");

// const readFileSync = util.promisify(fs.readFile);
// const writeFileSync = util.promisify(fs.writeFile);

nextId = 0;

// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
router.get("/notes", function (req, res) {
  
  const dbString = fs.readFileSync("db/db.json");
  const db = JSON.parse(dbString);



  res.json(db);


});



//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
router.post("/notes", function (req, res) {
  console.log(JSON.stringify(req.body));
  const dbString = fs.readFileSync("db/db.json");
  const db = JSON.parse(dbString);

  req.body["id"] = nextId++;

  db.push(req.body);


  fs.writeFileSync("db/db.json", JSON.stringify(db));

  res.json(req.body);
});

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

router.delete("/notes/:id", function (req, res) {
  console.log(req.params.id)
  const dbString = fs.readFileSync("db/db.json");
  let db = JSON.parse(dbString);
  console.log(JSON.stringify(db));
  db = db.filter(function (note) {

    
    console.log(`${note["id"]} !== ${req.params.id} ? ${note["id"] !== req.params.id}`)
    return note["id"] !== Number(req.params.id)


  })
  console.log(JSON.stringify(db))

  fs.writeFileSync("db/db.json", JSON.stringify(db));

    res.send()
});






module.exports = router;