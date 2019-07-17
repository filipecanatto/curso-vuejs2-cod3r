<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'usando a diretiva v-text'">tst</p>
		<p v-html="'usando a diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="cor">Usando diretiva personalizada com data</p>
		<p v-destaque="'lightblue'">Usando diretiva personalizada com string</p>
		
		<p v-destaque-local="'lightblue'">Usando diretiva personalizada local</p>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada e bricando com arg e modificadores</p>
		<!-- diretiva:arg.modificadores=valor-->
		<p v-teste:arg.mod1.mod2="'value'"></p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				//el.style.backgroundColor='lightgreen'

				let atraso = 0;

				if (binding.modifiers['atrasar']) {
					atraso = 3000;
				}

				setTimeout(() => {

					if (binding.arg === 'fundo') {
						el.style.backgroundColor = binding.value
					} else {
						el.style.color = binding.value
					}

				}, atraso);



			}
		}
	},
	data() {
		return {
			cor: 'lightblue'
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
</style>
