const port = 3003;

const bodyParse = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParse.urlencoded({ extended: true }))
server.use(bodyParse.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server