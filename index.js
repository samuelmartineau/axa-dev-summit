const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const quoteCalculator = require('./quote/quoteCalculator')
const getOffers = require('./offer/offerCalculator')
const fs = require('fs')
const ts = require('tail-stream')
const path = require('path')

const logFile = 'log-me-i-am-famous.log'

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/logs', function(req, res) {
    res.setHeader('content-type', 'text/html');
    ts.createReadStream(path.join(__dirname, logFile)).pipe(res);
})

app.post('/quote', (req, res) => {
    let result;
    fs.appendFile(logFile, `<div style="color: blue">Quote: ${JSON.stringify(req.body, null, 5)} </div><br>\n`)

    try {
        result = getOffers(req.body);
    } catch (e) {
        console.log(e)
        return res.sendStatus(400);
    }
    // return res.sendStatus(204);
    res.send({
        offers: ['insurance', 'car rental']
    });
});

app.post('/feedback', (req, res) => {
    console.log(req.body.type, req.body.message)
    const htmlFeedback = `<div style="color: ${req.body.type === 'LOOSE' ? 'red' : 'green'}">Fedback: ${req.body.message}</div><br><br>\n`;
    fs.appendFile(logFile, htmlFeedback)
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
