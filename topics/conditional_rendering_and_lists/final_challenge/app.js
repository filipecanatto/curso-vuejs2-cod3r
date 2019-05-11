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
			if (newV > oldV) {
				return;
			}
			if (newV <= 20) {
				this.playerLifeState = 'red';
			}
			this.messages.push('The player hint the enemy with ' + (oldV - newV) + ' of damage.');
		},
		monsterLife(newV, oldV) {
			if (newV > oldV) {
				return;
			}

			if (newV <= 20) {
				this.monsterLifeState = 'red';
			}
			this.messages.push('The monster hint the enemy with ' + (oldV - newV) + ' of damage.');
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
			this.playerLife -= 9
			this.monsterLife -= 6
			this.playerLife = (this.playerLife < 0) ? 0 : this.playerLife;
			this.monsterLife = (this.monsterLife < 0) ? 0 : this.monsterLife;
		},
	}
});
