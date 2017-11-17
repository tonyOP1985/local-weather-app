const axios = require('axios')

axios.get('https://api.darksky.net/forecast/eac25f3d3f4fdd8401944180915a2d6e/37.8267,-122.4233')
	.then((response) => {
			console.log(response)
	})
	.catch((error) => {
		console.log(error)
	})