<template>
  <div id="app">
    <div class="wrapper">
      <Search v-on:formSubmit="getGPSCoordinates"></Search>
      <CurrentWeather v-bind:weather="weather" v-bind:cityName="cityName" v-bind:iconList="iconList"></CurrentWeather>
      <CurrentDetails v-bind:weather="weather" ></CurrentDetails>
      <hr>
      <div class="hourly">
        <h1>Hourly Tempertures</h1>
      </div>
      <Hourly v-bind:hours="hours"></Hourly>
      <hr>
      <div class="weekly">
        <h1>Weekly Forecast</h1>
      </div>
      <Forecast v-bind:dailyWeather="dailyWeather" v-bind:iconList="iconList"></Forecast>
      <footer>
        <p>This is a simple weather app built with Vue.js, Node.js, Express.js, and Forecast.io.</p>
      </footer>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Hourly from './components/Hourly'
import CurrentDetails from './components/CurrentDetails'
import axios from 'axios'
import config from './..api.json'

export default {
  name: 'app',
  components: {
    Search,
    CurrentWeather,
    Forecast,
    Hourly,
    CurrentDetails
  },
  data () {
    return {
      weather: {},
      city: '',
      cityName: '',
      geocode: '',
      address: '',
      geoCoords: '',
      dailyWeather: [],
      hours: [],
      iconList: [
        { name: 'clear-day', wi: 'wi wi-day-sunny'},
        { name: 'clear-night', wi: 'wi wi-night-clear'},
        { name: 'rain', wi: 'wi wi-showers'},
        { name: 'snow', wi: 'wi wi-snow'},
        { name: 'sleet', wi: 'wi wi-sleet'},
        { name: 'wind', wi: 'wi wi-strong-wind'},
        { name: 'fog', wi: 'wi wi-fog'},
        { name: 'cloudy', wi: 'wi wi-cloud'},
        { name: 'partly-cloudy-day', wi: 'wi wi-day-cloudy'},
        { name: 'partly-cloudy-night', wi: 'wi wi-night-alt-cloudy'},
      ],
      apiKey = config.MAP_API_KEY
    }
  },
  methods: {
    // gets lat and lng of user input
    getGPSCoordinates (text) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${text}&key=${apiKey}`)
      .then((response) => {
        this.cityName = response.data.results[0].formatted_address
        this.geocode = response.data.results[0].geometry.location
        this.address = `${this.geocode.lat},${this.geocode.lng}`
        this.postWeather()
      })
    },
    postWeather () {
      // sends request to local server to make make request from forecast.io
      axios.post('http://localhost:3000', { body: this.address })
        .then((response) => {
          this.weather = response.data.currently
          this.setIcon()
          this.hours = response.data.hourly.data.slice(0, 16)
          this.dailyWeather = response.data.daily.data
          // remove current day since that is already shown in CurrentWeather
          this.dailyWeather.shift()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getGeolocation () {
      // gets lat and lng of client
      if (navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.geoCoords = position.coords
          this.address = `${this.geoCoords.latitude}, ${this.geoCoords.longitude}`
          this.postWeather()
        })
      }
    },
    setIcon () {
  		let icon = this.weather.icon
  		for (let i = 0; i < this.iconList.length; i++) {
  			if (icon === this.iconList[i].name) {
  				this.weather.icon = this.iconList[i].wi
  			}
  		}
  	}
  },
  mounted () {
    this.getGeolocation()
    this.cityName = 'Current Location'
  }
}
</script>

<style>
  #app {
    height: auto;
    font-family: 'Open Sans', sans-serif;
    color: #212121;
  }

  .wrapper {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }

  hr {
    width: 50%; 
    color: #BDBDBD;
    margin: 0 auto;
  }

  footer {
    height: 50px;
    padding: 10px;
    background-color: #00BCD4;
    color: #FFFFFF;
  }

  footer > p {
    margin-top: 15px;
  }

  .hourly > h1 {
    color: #448AFF;
    font-size: 1rem;
  }

  .weekly > h1 {
    color: #448AFF;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
    .wrapper {
      width: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    .wrapper {
      width: 1000px;
    }
  }

  @media screen and (max-width: 627px) {
    header > h1 {
      font-size: 1rem;
    }

    footer {
      height: 80px;
    }
  }

  @media screen and (max-width: 750px) {
    hr {
      width: 100%;
    }
  }
</style>
