const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const quoteCalculator = require('./quote/quoteCalculator')
const fs = require('fs')

const logFile = 'log-me-i-am-famous.log'

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/logs', function(req, res) {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./log-me-i-am-famous.log').pipe(res);
})

app.post('/quote', (req, res) => {
    const result = quoteCalculator(req.body);
    fs.appendFile(logFile, `${JSON.stringify(req.body, null, 5)} result: ${result} <br>\n`)
    res.send({
        quote: result
    });
});

app.post('/feedback', (req, res) => {
  fs.appendFile(logFile, `${req.body}<br>\n`)
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
