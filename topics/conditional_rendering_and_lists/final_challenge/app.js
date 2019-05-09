new Vue({
	el: '#app',
	data: {
		playerWidhtInPerCent: '50%',
		playerWidht: 50

	},
	methods: {
		attack() {
			this.playerWidht -= 10;
			this.playerWidhtInPerCent = this.playerWidht + '%';
			console.log(this.playerWidhtInPerCent);
		}
	}
});
