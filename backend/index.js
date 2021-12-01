const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Test");
})

app.listen(port, () => {
    console.log(`Listening at http://127.0.0.1:${port}/`);
})