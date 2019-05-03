new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		perigo: true,
		class3: '',
		class4: '',
		color5: '',
		style5: {
			widht: '100px',
			height: '100px'
		},
		width: '0%'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000)

		},
		iniciarProgresso() {
			console.log('entrei...')
			let valor = 0;
			const temporizador = setInterval(()=>{
				valor += 5;
				this.width = `${valor}%`
				console.log(this.width)
				if (valor == 100) clearInterval(temporizador);
			},50);
		},
		setPerigo(event) {
			if (event.target.value == 'true') {
				this.perigo = true;
			} else if (event.target.value == 'false') {
				this.perigo = false;
			}
		}
	}


})
