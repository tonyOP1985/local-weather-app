const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')
const config = require('./api.json')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(serveStatic(path.join(__dirname + "/dist")))


const api_key = config.DARK_SKY_API_KEY

app.post('/', (req, res) => {
  axios.get(`https://api.darksky.net/forecast/${api_key}/${req.body.body}`)
  .then((response) => {
	  res.send(response.data)
	})
	.catch((error) => {
	  console.log(error)
	})
})

const port = process.env.PORT || 5000

app.listen(port)
console.log('Server started ' + port)