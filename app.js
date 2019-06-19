const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({ "name": "timestamp-api", "details": "Timestamp Microservice"}))

app.listen(port, () => console.log(`timestamp-api app listening on port ${port}!`))