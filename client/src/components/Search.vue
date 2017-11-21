<template>
	<div class="search-body">
		<form v-on:submit="formSubmit">
		  <div class="search">
		    <input type="text" class="" placeholder="Enter ZIP code, city, state, or address" v-model="city">
		    <button type="submit" class=""><i class="fa fa-search" aria-hidden="true"></i></button>
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
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	.search {
		width: 100%;
		position: relative;
	}

	input {
		float: left;
		width: 100%;
		border: 3px solid #3F51B5;
		padding: 5px;
		height: 20px;
		border-radius: 5px;
		outline: none;
		color: black;
	}

	input:focus {
		color: #3F51B5;
	}

	button {
		position: absolute;
		right: -15px;
		width: 40px;
		height: 36px;
		border: 1px solid #3F51B5;
		background: #3F51B5;
		text-align: center;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
		font-size: 20px;
	}
	
	form {
		width: 30%;
		position: absolute;
		left: 49%;
		top: 16%;
		transform: translate(-50%, -50%);
	}

	@media screen and (max-width: 760px) {
		form {
			width: 70%;
		}
	}
</style>