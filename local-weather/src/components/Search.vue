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
  name: 'search',
  data () {
    return {
  	  city: ''
    }
 	},
  methods: {
  	formSubmit (e) {
  		this.$emit('formSubmit', this.city);
  		e.preventDefault();
  	}
  }
};
</script>

<style scoped>
	.search-body {
		width: 100%;
		height: 60px;
		background: #00BCD4;
	}

	form {
		width: 100%;
	}

	.search {
		width: 100%;
	}

	input {
		margin-top: 10px;
		padding-bottom: 8px;
		width: 40%;
		color: #fff;
		font-size: 1rem;
		background: #00BCD4;
		border: none;
		outline: none;
	}

	input::placeholder {
		color: white;
		font-size: 1rem;
	}

	input:focus {
		border-bottom: 1px solid rgb(255, 255, 255);
	}

	button {
		width: 48px;
		height: 48px;
		background: #00BCD4;
		border: none;
		cursor: pointer;
	}

	i {
		color: rgb(255, 255, 255);
		font-size: 1.5rem;
	}

	@media screen and (max-width: 750px) {
    input {
      width: 80%;
    }
  }
</style>