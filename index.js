const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('*', function (req, res) {
  console.log('params', req.body)
  res.sendStatus(400)
})

app.post('*', function (req, res) {
  console.log('params', req.body)
  res.sendStatus(400)
})

app.post('/quote', () => {
  res.sendStatus(400)
})

app.post('/feedback', () => {
  res.sendStatus(400)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
