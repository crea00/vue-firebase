<template>
  <div class="signup container">
		<form @submit.prevent="signup" class="card-panel">
			<h2 class="center deep-purple-text">Signup</h2>
			<div class="field">
				<label for="email">Email: </label>
				<input type="email" name="email" v-model="email">
			</div>
			<div class="field">
				<label for="password">Password: </label>
				<input type="password" name="password" v-model="password">
			</div>
			<div class="field">
				<label for="alias">Alias: </label>
				<input type="text" name="alias" v-model="alias">
			</div>
			<div class="field center">
				<button class="btn deep-purple">Signup</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Signup',
	data() {
		return {
			email: null,
			passworld: null,
			alias: null
		}
	},
	methods: {
		signup() {
			
		}
	}
}
</script>

<style>
.signup {
	max-width: 400px;
	margin-top: 60px;
}
.signup h2 {
	font-size: 2.4em;
}
.signup .field {
	margin-bottom: 16px;
}
</style>