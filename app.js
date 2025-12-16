const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/people', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'people.js');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Could not read people file');
        res.type('application/javascript').send(data);
    });
});

app.get('/transcriptions', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'transcriptions.js');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Could not read transcriptions file');
        res.type('application/javascript').send(data);
    });
});

app.get('/report', (req, res) => {
    res.send('thank you agent!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
