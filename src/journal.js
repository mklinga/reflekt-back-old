const express = require("express");
const journal = express();

const loadJournal = date => {
    try {
        const data = require(`./journals/${date}.json`);
        return data;
    } catch (e) {
        console.info('No data found for date', date);
        return null;
    }
}

journal.get('/:date', (req, res) => {
    const journal = loadJournal(req.params.date);
    if (!journal) {
        res.status(404);
    } 
    res.send(journal);
})

module.exports = journal;