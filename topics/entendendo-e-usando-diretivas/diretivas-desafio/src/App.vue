<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-when:click='action'>Execute</button>
		<p v-when:mousemove='mouseEnter'
			v-when:mouseleave='mouseLeave'>
			Handling mouse events with vue directives</p>
	</div>
</template>

<script>
export default {
	directives: {
		when: {
			bind(el, binding) {

				const type = binding.arg
				const func = binding.value
				el.addEventListener(type, function(){
					func()
				})
			}

		}
	},
	methods: {
		action() {
			alert('an action was executed.')
		},
		mouseEnter(){
			console.log('mouse enter.')
		},
		mouseLeave(){
			console.log('mouse leave!')
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
