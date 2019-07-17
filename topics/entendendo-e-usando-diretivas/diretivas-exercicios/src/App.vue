<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'usando a diretiva v-text'">tst</p>
		<p v-html="'usando a diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="cor">Usando diretiva personalizada</p>
		<p v-destaque="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque:fundo="'lightblue'">Usando diretiva personalizada</p>
		<!-- diretiva:arg.modificadores=valor-->
		<p v-teste:arg.mod1.mod2="'valie'"></p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			cor:'lightblue'
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
