<template>
	<div class="current-weather-wrapper">
		<div class="current-temp">
			<h1>{{ Math.floor(weather.currently.temperature) }}&deg;F</h1>
		</div>
		<div class="current-conditions">
			<h1><i class="wi wi-night-sleet"></i></h1>
			<p>{{ weather.currently.summary }}</p>
		</div>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
  name: 'currentWeather',
  props: ['weather']
}
</script>

<style>
	.current-weather-wrapper {
		width: 100%;
		height: 140px;
		display: inline-flex;
		border-bottom: 1px solid rgb(119, 126, 142);
	}

	.current-temp {
		width: 50%;
	}

	.current-temp > h1 {
		font-size: 4rem;
		font-weight: 100;
		font-family: 'Open Sans', sans-serif;
	}

	.current-conditions {
		width: 50%;
	}

	.current-conditions > h1 {
		margin-top: 45px;
	}

	.wi {
		font-size: 2.5rem;
	}
</style>