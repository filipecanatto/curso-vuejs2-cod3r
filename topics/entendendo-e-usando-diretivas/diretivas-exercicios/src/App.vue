<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'usando a diretiva v-text'">tst</p>
		<p v-html="'usando a diretiva <strong>v-html</strong>'"></p>
		<hr />
		<p v-destaque="cor">Usando diretiva personalizada com variavel</p>
		<p v-destaque="'lightgreen'">Usando diretiva personalizada com string</p>
		
		<p v-destaque-local.atrasar.alternar="{cor1: 'green', cor2:'red', atraso: 2000, intervalo:200}">Usando diretiva personalizada local com dois modificadores</p>
		<p v-destaque:fundo.atrasar.alternar="'lightgreen'">Usando diretiva personalizada global</p>
		<!-- diretiva:arg.modificadores=valor-->
		<!--p v-teste:arg.mod1.mod2="'value'"></p-->
	</div>
</template>

<script>
export default {
	directives: {
		"destaque-local": {
			bind(el, binding, vnode) {
				//el.style.backgroundColor='lightgreen'

				let atraso = 0;
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				const aplicarCor = cor => {
					if (binding.arg === "fundo") {
						el.style.backgroundColor = cor;
					} else {
						el.style.color = cor;
					}
				};

				if (binding.modifiers["atrasar"]) {
					atraso = binding.value.atraso;
				}

				setTimeout(() => {

					if (binding.modifiers["alternar"]) {
						setInterval(() => {
							corAtual = (corAtual === cor1 ? cor2 : cor1)
							aplicarCor(corAtual)

						}, binding.value.intervalo);
					}

					aplicarCor(binding.value.cor1)
				}, atraso);
			}
		}
	},
	data() {
		return {
			cor: "lightblue"
		};
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
