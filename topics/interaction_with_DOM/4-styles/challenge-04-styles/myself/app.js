new Vue({
	el: '#desafio',
	data: {
		// toggle
		apllyEfect: false,
		// css classes
		green: 'green',
		solidBorder: 'solidBorder',
		example: 'example',
		// binds
		userClassInformedEx3: '',
		userClassInformedEx4: '',
		userClassInformedEx5: ''
	},
	methods: {
		iniciarEfeito() {
			this.apllyEfect = !this.apllyEfect
			setTimeout(() => {
				this.iniciarEfeito()
			}, 2000);

		},
		iniciarProgresso() {
			this.example6(52);
		},
		example2() {
			return [this.green, this.solidBorder, this.example]
		},
		example4() {
			return ['example', this.userClassInformedEx4, { green: true }]
		},
		example3() {
			return ['example', this.userClassInformedEx3]
		},
		example5() {
			return this.userClassInformedEx5
		},
		example6(stop) {

			if (stop >= 1) {
				console.log(stop);
				var element = document.createElement("div");
				element.setAttribute('class', 'progressItem');
				document.getElementById('progressBar').appendChild(element);
				stop--;
				setTimeout(() => {
					this.example6(stop)
				}, 70);
			}


		}

	}
})
