const express = require('express');
const server = express();
const router = require('./exe05');

server.use('/api', router)

server.listen(3000, () => console.log('Executando...'));