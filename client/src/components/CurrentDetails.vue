<template>
	<div class="details-wrapper">
		<div class="details-right">
			<div class="details">
				<label>Wind</label>
				<span>{{ degToCompass(weather.currently.windBearing) }} {{ Math.ceil(weather.currently.windSpeed) }} mph </span>
			</div>
			<div class="details">
				<label>Humidity</label>
				<span>{{ weather.currently.humidity * 100 }}%</span>
			</div>
			<div class="details">
				<label>Dew Point</label>
				<span>{{ Math.ceil(weather.currently.dewPoint) }}&deg;</span>
			</div>
		</div>
		<div class="details-left">
			<div class="details">
				<label>Pressure</label>
				<span>{{ Math.ceil(weather.currently.pressure) }} mb</span>
			</div>
			<div class="details">
				<label>Visibility</label>
				<span>{{ Math.ceil(weather.currently.visibility) }} mi</span>
			</div>
			<div class="details">
				<label>UV Index</label>
				<span>{{ weather.currently.uvIndex }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		/* eslint-disable */
		name: 'currentDetails',
		props: ['weather'], 
		data () {
			return {
				windDir: ''
			}
		},
		methods: {
			degToCompass (num) {
				let val = Math.floor((num / 22.5) + 0.5)
				let compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
				return compass[(val % 16)]
			}
		}
 	}
</script>

<style>
	.details-wrapper {
		width: 30%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		text-align: left;
	}

	label {
		font-weight: 900;
	}

	.details {
		margin-bottom: 10px;
	}

	@media screen and (max-width: 1200px) {
		.details-wrapper {
			width: 40%;
		}
	}

	@media screen and (max-width: 700px) {
		.details-wrapper {
			width: 60%;
			justify-content: space-around;
		}
	}

	@media screen and (max-width: 470px) {
		.details-wrapper {
			width: 100%;
			justify-content: space-around;
		}
	}
</style>