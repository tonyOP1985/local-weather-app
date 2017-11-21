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
					<h1><i class="wi wi-night-sleet"></i></h1>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	/* eslint-disable */
  name: 'currentWeather',
  props: ['weather', 'cityName']
}
</script>

<style>
	.current-weather-wrapper {
		width: 100%;
		height: 140px;
		margin-top: 15px;
		display: inline-flex;
		border-bottom: 1px solid #BDBDBD;
	}

	.current {
		width: 40%;
		background-color: #3F51B5;
		color: rgb(255, 255, 255);
	}

	.current-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.current-temp {
		width: 50%;
		color: white;
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
		/*margin-top: 45px;*/
	}

	.wi {
		font-size: 2.5rem;
	}


	@media screen and (max-width: 627px) {
		.current-weather-wrapper {
			margin-top: 30px;
		}
	}
</style>