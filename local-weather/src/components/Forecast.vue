<template>
	<div v-if="dailyWeather[2]" class="daily-weather">
		<div class="forecast-wrapper" v-for="day in dailyWeather">
			<div class="day">
				<h1>{{ timeToString(day.time) }}</h1>
			</div>
			<div class="temp">
				<h1>{{ Math.floor(day.temperatureHigh) || Math.floor(day.temperatureMax) }}&deg;F / {{ Math.floor(day.temperatureLow) || Math.floor(day.temperatureMin) }}&deg;F</h1>
			</div>
			<div class="weather-icon">
				<h1><i v-bind:class="setIcon(day.icon)"></i></h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'forecast',
  props: ['dailyWeather', 'iconList'],
  methods: {
  	timeToString(date) {
      let options = {weekday: 'long'};
      let dateString = new Date(date * 1000).toLocaleDateString('en-US', options);
      return dateString;
    },
    setIcon (icon) {
			//	get correct weather icon
			return this.iconList.find(i => icon === i.name).wi;
  	}
  }
};
</script>

<style scoped>
	.forecast-wrapper {
		display: inline-flex;
		margin-bottom: 9px;
		width: 100%;
		border-bottom: 1px solid #BDBDBD;
	}

	.day, .temp, .weather-icon {
		width: 33.3%;
	}

	h1 {
		font-weight: 100;
		font-size: 1rem;
	}

	.wi {
		font-size: 2.5rem;
	}

	@media screen and (max-width: 650px) {
		h1 {
			font-size: 1rem;
		}

		.wi {
			font-size: 1.2rem;
		}

		i {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 1000px) {
		.daily-weather {
			display: flex;
			justify-content: flex-start;
		}

		.forecast-wrapper {
			flex-wrap: wrap;
			border: 1px solid #BDBDBD;
		}

		.day, .temp, .weather-icon {
			width: 100%;
			height: 80px;
		}
	}
</style>