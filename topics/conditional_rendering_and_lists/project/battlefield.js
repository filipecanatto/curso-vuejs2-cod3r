new Vue({
	el: '#app',
	data: {
		playerLife: 100,
		monsterLife: 100,
		showMenu: true,
		showResult: false,
		someoneDied: false,
		messagesCount: 0,
		messages: [

		]
	},
	watch: {
		playerLife(newV, oldV) {
			this.playerLife = this.controlLifeLevel(this.playerLife)
		},
		monsterLife(newV, oldV) {
			this.monsterLife = this.controlLifeLevel(this.monsterLife)

		}, showResult(newV, oldV) {
			this.someoneDied = (this.playerLife < this.monsterLife) ? true : false
			this.cleanMessages()
		}
	},
	computed: {
		sortedMessages: function () {
			function compare(a, b) {
				if (a.id > b.id)
					return -1;
				if (a.id < b.id)
					return 1;
				return 0;
			}

			return this.messages.sort(compare);
		}
	},
	methods: {
		restart() {
			this.playerLife = 100
			this.monsterLife = 100
			this.someoneDied = false
			this.showResult = false
			this.showMenu = false
			this.cleanMessages()
		},
		simpleAttack() {
			this.attack(Math.floor((Math.random() * 9) + 1), Math.floor((Math.random() * 6) + 1))
		},
		attack(playerDamage, monsterDamage) {
			this.playerLife -= playerDamage
			this.logHitPlayer(monsterDamage)
			this.monsterLife -= monsterDamage
			this.logHitMonster(playerDamage)
		},
		specialAttack() {
			this.attack(Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 9) + 1))
		},
		heal() {
			let heal = Math.floor((Math.random() * 11) + 1)
			this.logHeal(heal)
			let damage = Math.floor((Math.random() * 6) + 1)
			this.logHitMonster(damage)

			this.playerLife += (heal - damage)

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
			this.messagesCount++;
			this.messages.push({ msg: 'The player hit the enemy with ' + damage + ' of damage.', backgroundColor: 'lightblue', color: 'lightblack', id: this.messagesCount });
		},
		logHitMonster(damage) {
			this.messagesCount++;
			this.messages.push({ msg: 'The monster hit the enemy with ' + damage + ' of damage.', backgroundColor: 'red', color: 'white', id: this.messagesCount });
		},
		logHeal(value) {
			this.messagesCount++;
			this.messages.push({ msg: 'The player restore ' + value + ' of damage.', backgroundColor: 'lightgreen', color: 'lightblack', id: this.messagesCount });
		}, cleanMessages() {
			this.messages = []
			this.messagesCount = 0
		}

	}
});
