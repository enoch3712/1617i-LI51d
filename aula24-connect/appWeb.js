'use strict';

const http = require('http')
const connect = require('./connect-naif.js')
const pipe = connect()
const PORT = 3000

function mw1(req, resp) {
    console.log("Request received")
    // Pass to next MW
}

function mw2(req, resp) {
    console.log("I am MW2")
    resp.end()
}

function mw3(req, resp) {
    console.log("I am MW3 and I never handle the request!!!! :-()")
}

pipe.use(mw1)
pipe.use(mw2)
pipe.use(mw3)

http
    .createServer(pipe)
    .listen(PORT, () => console.log("Listening on port " + PORT));
