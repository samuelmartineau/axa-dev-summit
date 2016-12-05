const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const quoteCalculator = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('*', function (req, res) {
  console.log('params', req.body)
  res.sendStatus(400);
})

app.post('*', function (req, res) {
  console.log('params', req.body)
})

app.post('/quote', (req, res) => {
  const result = quoteCalculator(req.body);
  console.log(result);
  res.sendStatus(400)
})

app.post('/feedback', (req, res) => {
  console.log('feedback', req.body)
  res.sendStatus(400)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
