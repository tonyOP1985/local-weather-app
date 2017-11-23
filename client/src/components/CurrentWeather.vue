<template>
	<div class="current-weather-wrapper">
		<div class="current">
			<div class="city-wrapper">
				<div class="city-name">
					<p>{{ cityName }}</p>
				</div>
			</div>
			<div class="current-wrapper">
				<div class="current-temp">
					<h1>{{ Math.floor(weather.currently.temperature) }}&deg;F</h1>
					<div>{{ weather.currently.summary }}</div>
					<div>feels like {{ Math.floor(weather.currently.apparentTemperature) }}&deg;F</div>
				</div>
				<div class="current-conditions">
					<!-- <h1><i class="wi wi-night-sleet"></i></h1> -->
					<h1><i v-bind:class="setIcon()"></i></h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
  name: 'currentWeather',
  props: ['weather', 'cityName', 'iconList'],
  data () {
  	return {
  		weatherIcon: ''
  	}
  },
  methods: {
  	setIcon () {
  		let icon = this.weather.currently.icon
  		for (let i = 0; i < this.iconList.length; i++) {
  			if (icon === this.iconList[i].name) {
  				return this.iconList[i].wi
  			}
  		}
  	}
  }
}
</script>

<style>
	.current-weather-wrapper {
		width: 100%;
		height: 140px;
		margin: 10px 0 15px 0;
		display: inline-flex;
	}

	.current {
		width: 40%;
		margin: 0 auto;
	}

	.current-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.city-name > p{
		font-size: 1.5rem;
		width: 100%;
	}

	.current-temp {
		width: 50%;
		/*color: white;*/
	}

	.current-temp > h1 {
		font-size: 2rem;
		font-weight: 500;
		font-family: 'Open Sans', sans-serif;
		margin: 0;
	}

	.current-conditions {
		width: 50%;
	}

	.current-conditions > h1 {
		margin-top: 0;
	}

	.wi {
		font-size: 2.5rem;
	}


	@media screen and (max-width: 627px) {
		.current-weather-wrapper {
			margin-top: 30px;
		}
	}

	@media screen and (max-width: 530px) {
		.current-temp > h1 {
			font-size: 1.5rem;
		}

		.current-temp > div {
			font-size: 0.75rem;
		}
 	}

	@media screen and (max-width: 470px) {
		.current {
			width: 100%;
		}
	}
</style>