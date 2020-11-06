const router = require('express').Router();
const path = require("path");



// GET `/notes` - Should return the `notes.html` file.

router.get('/notes', function (req, res) {
    res.send('../public/notes.hmtl');
  })



// GET `*` - Should return the `index.html` file
router.get('*', function (req, res) {
    res.send('../public/index.hmtl');
  })

module.exports = router;