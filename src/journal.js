const express = require("express");
const journal = express();

const loadJournal = date => {
    return { mood: '😍', title: 'First journal / title', journal: 'This might be the best there ever is or was or will be.' }
}

journal.get('/:date', (req, res) => {
    console.log('journaling', req.params.date);
    res.send(loadJournal(req.params.date));
})

module.exports = journal;