const express = require("express");
const app = express();

app.use('/api/hello', (req, res) => {
    const who = req.query.name || 'Friendly node server';
    res.json({ hello: who });
})

app.listen(8001, () => {
 console.log("Server running on port 8001");
});
