<template>
	<div class="search-body">
		<form class="" v-on:submit="formSubmit">
		  <div class="">
		    <input type="text" class="" placeholder="Location" v-model="city">
		    <button type="submit" class=""><i class="fa fa-search" aria-hidden="true"></i></button>
		  </div>
		  <div class="helper-text">
		  	<p>Enter ZIP code, city, state, or address</p>
		  </div>
		</form>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
  name: 'search',
  data () {
    return {
  	  city: ''
    }
 	},
  methods: {
  	formSubmit (e) {
  		this.$emit('formSubmit', this.city)
  		e.preventDefault()
  	}
  }
}
</script>

<style scoped>
	.search-body {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	input {
		padding: 10.5px;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.5)
	}

	button {
		width: 40px;
		height: 40px;
		cursor: pointer;
		border: none;
		background-color: rgb(191, 209, 251);
	}

	button:hover {
		background-color: rgb(97, 131, 209);
	}
</style>