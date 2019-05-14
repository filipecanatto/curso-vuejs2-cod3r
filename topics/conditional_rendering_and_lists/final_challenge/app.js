new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		monsterLife: 100,
		showMenu: true,
		showResult: false,
		someoneDied: false,
		messages: [

		]
	},
	watch: {
		playerLife(newV, oldV) {
			this.alertLowLife(this.playerLife)
			this.playerLife = this.controlLifeLevel(this.playerLife)
		},
		monsterLife(newV, oldV) {
			this.alertLowLife(this.playerLife)
			this.monsterLife = this.controlLifeLevel(this.monsterLife)

		}, showResult(newV, oldV) {
			this.someoneDied = (this.playerLife < this.monsterLife) ? true : false
			this.cleanMessages()
		}
	},
	methods: {
		restart() {
			this.playerLife = 100
			this.monsterLife = 100
			this.someoneDied = false
			this.showResult = false
			this.showMenu = false
			this.messages = [''];
		},
		simpleAttack() {
			this.attack(Math.floor((Math.random() * 9) + 1), Math.floor((Math.random() * 6) + 1))
		},
		attack(playerDamage, monsterDamage) {
			this.playerLife -= playerDamage
			this.logHitPlayer(playerDamage)
			this.monsterLife -= monsterDamage
			this.logHitMonster(monsterDamage)
		},
		specialAttack() {
			this.attack(Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 9) + 1))
		},
		alertLowLife(element) {
			if (element <= 20) {
				element = 'red';
			}
		},
		heal() {
			let heal = Math.floor((Math.random() * 11) + 1)
			this.logHeal(heal)
			let damage = Math.floor((Math.random() * 6) + 1)
			this.logHitMonster(damage)

			this.playerLife -= (heal - damage)

		},
		controlLifeLevel(element) {
			if (element <= 0) {
				this.showResult = true
				return 0
			} else if (element > 100) {
				return 100
			} else {
				return element
			}
		},
		logHitPlayer(damage) {
			this.messages.push({ msg: 'The player hint the enemy with ' + damage + ' of damage.', backgroundColor: 'lightblue' });
		},
		logHitMonster(damage) {
			this.messages.push({ msg: 'The monster hint the enemy with ' + damage + ' of damage.', backgroundColor: 'red' });
		},
		logHeal(value) {
			this.messages.push({ msg: 'The player restore ' + value + ' of damage.', backgroundColor: 'lightgreen' });
		}, cleanMessages() {
			this.messages = []
		}

	}
});
