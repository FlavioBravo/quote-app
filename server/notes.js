// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Get notes
router.get('/', function (req, res) {
  
  const notes = require('./subs-db.json');
  console.log('GET => ',notes);
  res.json({
      ok: true,
      respond: notes
  });

});

router.get('/:id', function (req, res) {
  
  let notes = require('./subs-db.json');
  const obj = notes.find(((note) => note._id === req.params.id));
  res.json({
      ok: true,
      respond: obj
  });

});


// Post one note
router.post('/', function (req, res) {
  
  let notes = require('./subs-db.json');

  const id = notes.length + 1;
  const note = {
    _id: `${ id }`,
    description: req.body.description
  };

  notes.push( note );
  console.log("POST => ", note);

  fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(notes) );

  res.json({
    ok: true,
    respond: note
  });
});

module.exports = router;