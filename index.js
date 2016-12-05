const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const quoteCalculator = require('./quote/quoteCalculator')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('*', function (req, res) {
  console.log('params', req.body)
  res.sendStatus(400);
})

app.post('/quote', (req, res) => {
  console.log('quote', req.body)
  const result = quoteCalculator(req.body);
  res.send({
    quote: 0
  });
});

app.post('/feedback', (req, res) => {
  console.log('feedback', req.body)
  res.sendStatus(400)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
