new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		messages: [
			
		]


	},
	watch: {
		playerLife(newV, oldV) {
			console.log('entrei');
			this.messages.push('The player hint the enemy with 10% of damage.');

		}
	},
	methods: {
		attack() {
			this.playerLife -= 5;
			console.log(this.playerLife);
		}
	}
});
