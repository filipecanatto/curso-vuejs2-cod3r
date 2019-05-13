new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		monsterLife: 100,
		showMenu: true,
		showResult: false,
		isPlayerDied: false,
		messages: [

		]
	},
	watch: {
		playerLife(newV, oldV) {
			console.log('playerLife')
			this.alertLowLife(this.playerLife)

		},
		monsterLife(newV, oldV) {
			this.alertLowLife(this.playerLife)

		}
	},
	methods: {
		restart() {
			this.playerLife = 100
			this.monsterLife = 100
			this.isPlayerDied = false
			this.showResult = false
			this.showMenu = false
			this.messages = [''];
		},
		showResultInScreen(value) {
			this.messages = [''];
			this.isPlayerDied = value
			this.showResult = true
		},
		simpleAttack() {
			this.attack(Math.floor((Math.random() * 9) + 1), Math.floor((Math.random() * 6) + 1))
		},
		attack(playerDamage, monsterDamage) {


			this.messages.push('The player hint the enemy with ' + (playerDamage) + ' of damage.');
			this.messages.push('The monster hint the enemy with ' + (monsterDamage) + ' of damage.');

			if ((this.playerLife - playerDamage) <= 0) {
				this.playerLife = 0;
				return this.showResultInScreen(true)
			} else {
				this.playerLife -= playerDamage;
			}

			if ((this.monsterLife - monsterDamage) <= 0) {
				this.monsterLife = 0;
				return this.showResultInScreen(false)
			} else {
				this.monsterLife -= monsterDamage;
			}


		},
		specialAttack() {
			this.attack(Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 9) + 1))
		},
		alertLowLife(element) {
			if (element <= 20) {
				element = 'red';
			}
		}

	}
});
