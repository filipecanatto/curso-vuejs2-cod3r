new Vue({
	el: '#app',
	data: {
		playerWidht: 50

	},
	watch: {
		playerWidht(newV, oldV) {
			console.log('entrei');

		}
	},
	methods: {
		attack() {
			this.playerWidht -= 5;
			console.log(this.playerWidht);
		}
	}
});
