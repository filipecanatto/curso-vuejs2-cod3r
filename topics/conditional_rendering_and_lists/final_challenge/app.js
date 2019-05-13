new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		monsterLife: 100,
		newGame: true,
		showResult: false,
		playerDied: false,
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
			if (newV <= 0) {
				this.showResult = true
				this.playerDied = true
				this.messages = ['']
				return
			}
			this.messages.push('The player hint the enemy with ' + (oldV - newV) + ' of damage.');
		},
		monsterLife(newV, oldV) {
			if (newV > oldV) {
				return;
			}

			if (this.playerDied) {
				return
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
			this.playerDied = false
			this.showResult = false
			this.newGame = false
		},
		attack() {
			this.playerLife -= Math.floor((Math.random() * 9) + 1)
			this.monsterLife -= Math.floor((Math.random() * 6) + 1)
			this.playerLife = (this.playerLife < 0) ? 0 : this.playerLife
			this.monsterLife = (this.monsterLife < 0) ? 0 : this.monsterLife
		},
	}
});
