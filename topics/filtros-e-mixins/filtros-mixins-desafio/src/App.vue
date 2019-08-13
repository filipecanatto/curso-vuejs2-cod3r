<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ 'Winston Churchill was a war hero.'| changePhrase}}</p>
		<br>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
														valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ 'Winston Churchill was a war hero.'| countWords}}</p>
		<br>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{changePhrase}}</p>
		<p>{{countWords}}</p>
		<br>
	
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{changePhraseMixin}}</p>
		<p>{{countWordsMixin}}</p>
	</div>
</template>

<script>
import PhraseMixin from './phraseMixin'
export default {
	data() {
		return {
			phrase: 'Winston Churchill was a war hero.'
		}
	},
	computed: {
		changePhrase() {
			return this.phrase.replace(/ /g, ",")
		},
		countWords() {
			let arr = this.phrase.split(" ")
			let newArr = []
			arr.forEach(element => {
				element = element.concat(" " + element.length)
				newArr.push(element)
			});
			return newArr.join()
		}
	},
	filters: {
		changePhrase(phrase) {
			return phrase.replace(/ /g, ",")
		}
	},
	mixins: [PhraseMixin]

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
