const express = require("express");
const journal = express();

const loadJournal = date => {
    return {
        mood: '😍',
        title: 'First journal / title',
        journal: 'This might be the best there ever is or was or will be.',
        social: [
            { completed: true, description: 'Social 1' },
            { completed: true, description: 'Social 2' }
        ],
        physical: [
            { completed: true, description: 'Physical 1' }
        ]
    }
}

journal.get('/:date', (req, res) => {
    console.log('journaling', req.params.date);
    res.send(loadJournal(req.params.date));
})

module.exports = journal;