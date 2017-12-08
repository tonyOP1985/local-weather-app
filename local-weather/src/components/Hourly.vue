<template>
	<div class="hourly-wrapper">
		<ul>
			<li v-for="(hour,index) in hours" v-if="index % 2 === 0" class="hourly">
				<p class="hour">{{ getHour(hour.time) }}</p>
				<p class="temp">{{ Math.ceil(hour.temperature) }}&deg;F</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
  name: 'hourly',
  props: ['hours'],
  data () {
  	return {
  		weatherHour: ''
  	}
  },
  methods: {
  	getHour (time) {
  		let options = { hour: '2-digit' }
  		let now = new Date(time * 1000).toLocaleString('en-us', options)
  		return now
  	}
  }
}
</script>

<style>
	ul {
		display: inline-flex;
		margin: 0;
		padding-left: 0;
	}

	li {
		list-style: none;
		margin: 0 10px;
	}

	p {
		margin-top: 0;
	}

	.hour {
		margin-bottom: 5px;
	}

	@media screen and (max-width: 1200px) {
		li {
			font-size: 0.75rem;
		}
	}

	@media screen and (max-width: 400px) {
		.hourly-wrapper {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		.hourly:last-child, .hourly:nth-last-child(2) {
			display: none;
		}
	}

</style>