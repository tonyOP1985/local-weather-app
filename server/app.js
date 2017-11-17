const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res) => {
// 	res.send(weather)
// })

app.post('/', (req, res) => {
	axios.get(`https://api.darksky.net/forecast/eac25f3d3f4fdd8401944180915a2d6e/${req.body.body}`)
		.then((response) => {
			res.send(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
})

app.listen(3000, () => {
	console.log('Server started')
})