const fs = require('fs');
const express = require('express');
const { json } = require('body-parser');
const app = express();

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(json.parse(data));
    });
});