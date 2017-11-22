<template>
	<div class="hourly-wrapper">
		<ul v-for="hour in hours">
			<li>
				<p>{{ getHour(hour.time) }}</p>
				<p>{{ Math.ceil(hour.temperature) }}&deg;F</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
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
	}
	li {
		list-style: none;
	}
</style>