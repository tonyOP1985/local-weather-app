<template>
  <div id="app">
    <div class="wrapper">
      <!-- <header> -->
        <!-- <h1 class="">Local Weather</h1> -->
       <!--  <p class="">This is a simple weather app built with Vue.js, Node.js, Express.js, and Forecast.io.</p>
      </header> -->
      <Search v-on:formSubmit="getGPSCoordinates"></Search>
      <CurrentWeather v-bind:weather="weather" v-bind:cityName="cityName"></CurrentWeather>
      <Hourly v-bind:hours="hours"></Hourly>
      <Forecast v-bind:dailyWeather="dailyWeather"></Forecast>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Hourly from './components/Hourly'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Search,
    CurrentWeather,
    Forecast,
    Hourly
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
      hours: []
    }
  },
  methods: {
    // gets lat and lng of user input
    getGPSCoordinates (text) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${text}&key=AIzaSyDNqcVE7gtu1f9gB1LxQ8cJFQcl1sW1utM`)
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
          this.weather = response.data
          this.hours = response.data.hourly.data.slice(0, 12)
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
    }
  },
  mounted () {
    this.getGeolocation()
    this.cityName = 'Current Location'
    this.getWorldWeather()
  }
}
</script>

<style>
  #app {
    height: auto;
    font-family: 'Open Sans', sans-serif;
    color: #212121;
    /*background-image: url(./assets/grassland.jpg);*/
  }

  .wrapper {
    width: 80%;
    height: 100%;
    /*background-color: rgba(139, 169, 238, 0.5);*/
    margin: 0 auto;
    text-align: center;
  }

  header {
    padding: 10px;
    border: 1px solid black;
    background-color: #C5CAE9;
    color: #FFFFFF;
  }

  @media screen and (max-width: 1000px) {
    .wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 627px) {
    header > h1 {
      font-size: 1rem;
    }
  }
</style>
