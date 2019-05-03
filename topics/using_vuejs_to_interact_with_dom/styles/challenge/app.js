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

		},
		example2() {
			return [this.green, this.solidBorder, this.example]
		},
		example3(){
			return ['example', this.userClassInformedEx3]
		},
		example5(){
			return this.userClassInformedEx5
		},
		
	}
})
