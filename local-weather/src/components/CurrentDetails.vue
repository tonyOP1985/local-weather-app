<template>
	<div class="details-wrapper">
		<div class="details-right" v-if="weather.windBearing">
			<div class="details">
				<label>Wind</label>
				<span>{{ degToCompass(weather.windBearing) }} {{ Math.ceil(weather.windSpeed) }} mph </span>
			</div>
			<div class="details">
				<label>Humidity</label>
				<span>{{ Math.ceil(weather.humidity * 100) }}%</span>
			</div>
			<div class="details">
				<label>Dew Point</label>
				<span>{{ Math.ceil(weather.dewPoint) }}&deg;</span>
			</div>
		</div>
		<div v-else></div>
		<div class="details-left" v-if="weather.pressure">
			<div class="details">
				<label>Pressure</label>
				<span>{{ Math.ceil(weather.pressure) }} mb</span>
			</div>
			<div class="details">
				<label>Visibility</label>
				<span>{{ Math.ceil(weather.visibility) }} mi</span>
			</div>
			<div class="details">
				<label>UV Index</label>
				<span>{{ weather.uvIndex }}</span>
			</div>
		</div>
		<div v-else></div>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
	name: 'currentDetails',
	props: ['weather'],
	methods: {
		// converts degrees into cardinal directions
		degToCompass (num) {
			let val = Math.floor((num / 22.5) + 0.5);
			let compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
			return compass[(val % 16)];
		}
	}
};
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