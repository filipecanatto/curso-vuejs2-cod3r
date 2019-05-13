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
			this.messages.push('The player hint the enemy with ' + (oldV - newV) + ' of damage.');
		},
		monsterLife(newV, oldV) {
			this.alertLowLife(this.playerLife)
			this.messages.push('The monster hint the enemy with ' + (oldV - newV) + ' of damage.');
		}
	},
	methods: {
		restart() {
			this.restartLifes()
			this.isPlayerDied = false
			this.showResult = false
			this.showMenu = false
		},
		showResultInScreen(value) {
			this.messages = [''];
			this.isPlayerDied = value
			this.showResult = true
		},
		attack() {
			console.log('attack')
			let playerDamage = Math.floor((Math.random() * 9) + 1)
			let monsterDamage = Math.floor((Math.random() * 6) + 1)
			if ((this.playerLife - playerDamage) <= 0) {
				this.playerLife = 0;
				return this.showResultInScreen(true)
			} else {
				this.playerLife -= playerDamage;
			}

			if ((this.monsterLife - monsterDamage) <= 0) {
				this.monsterLife = 0;
				return this.showResultInScreen(true)
			} else {
				this.monsterLife -= monsterDamage;
			}
		},
		specialAttack() {
			if (this.playerLife == 0 || this.monsterLife == 0) {
				return
			}
			this.playerLife -= Math.floor((Math.random() * 6) + 1)
			this.monsterLife -= Math.floor((Math.random() * 9) + 1)
		},
		alertLowLife(element) {
			if (element <= 20) {
				element = 'red';
			}
		},
		restartLifes() {
			this.heal(this.playerLife, 100);
			this.heal(this.monsterLife, 100);
		},
		heal(element, value) {
			this.element = value;
		}
	}
});
