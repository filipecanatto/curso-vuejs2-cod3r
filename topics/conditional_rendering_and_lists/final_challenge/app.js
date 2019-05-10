new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		monsterLife: 100,
		newGame: true,
		messages: [

		]
	},
	watch: {
		playerLife(newV, oldV) {
			console.log(newV);
			console.log(oldV);
			if (newV > oldV) {
				return;
			}
			this.messages.push('The player hint the enemy with 10% of damage.');
		}
	},
	methods: {
		beginFromZero() {
			this.newGame = !this.newGame
			this.playerLife = 100;
			this.monsterLife = 100;
			this.messages = [''];
		},
		attack() {
			this.playerLife -= 5;
			console.log(this.playerLife);
		}
	}
});
