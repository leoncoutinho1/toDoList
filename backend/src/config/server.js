const port = 3003;

require('dotenv/config')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

server.use(cors)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})

module.exports = server