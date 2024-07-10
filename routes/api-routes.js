const fs = require('fs');
const app = require('express').Router();;
//get Route to retrieve all notes from data base 
app.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
// GET route to retrieve a single note by its ID
app.get('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = json.parse(data);
        const note = notes[Number(req.params.id)];
        if (!note) return res.status(404).send('Note not found');
        res.json(note);
    });
});

// Post route route to add new notes to DB
app.post('/notes', (req, res) => {
    const newNote = req.body;
   // newNote.id = (data.length).toString();
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push (newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        })
    })
})

module.exports = app