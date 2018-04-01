<template>
	<div class="current-weather-wrapper">
		<div class="current" v-if="weather.temperature">
			<div class="city-wrapper">
				<div class="city-name">
					<p>{{ cityName }}</p>
				</div>
			</div>
			<div class="current-wrapper">
				<div class="current-temp">
					<h1>{{ Math.floor(weather.temperature) }}&deg;F</h1>
					<div>{{ weather.summary }}</div>
					<div>Feels like {{ Math.floor(weather.apparentTemperature) }}&deg;F</div>
					<div>Precipitation {{ Math.floor(weather.precipProbability * 100)}}%</div>
				</div>
				<div class="current-conditions">
					<h1><i :class="weather.icon"></i></h1>
				</div>
			</div>
		</div>
		<div v-else class="loading">
			<p>Loading...</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'currentWeather',
  props: ['weather', 'cityName', 'iconList']
}
</script>

<style>
	.current-weather-wrapper {
		width: 100%;
		height: 140px;
		margin: 10px 0 60px 0;
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
		font-size: 1.2rem;
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

	.current-temp > div {
		margin-bottom: 10px;
	}

	.current-conditions {
		width: 50%;
	}

	.current-conditions > h1 {
		margin-top: 0;
		font-size: 4rem;
		font-weight: 100;
	}

	.loading {
		width: 70%;
		margin: auto;
		text-align: center;
		padding-top: 30px;
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