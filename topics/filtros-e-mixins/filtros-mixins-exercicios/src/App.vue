<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{usuarioLogado}}</p>
		<p>{{cpf | cpfFilter | inverter}}</p>
		<input :value='cpf | cpfFilter' type="text">
		<hr>
		<Frutas></Frutas>
		<hr>
		<div>
			<ul>
				<li v-for='fruta in this.frutas' :key='fruta'>{{fruta}}</li>
			</ul>
			<input v-model='fruta' @keydown.enter="add" type="text">
		</div>
		<br>
	
	</div>
</template>

<script>
import usuarioLogagdo from './UsuarioLogado'
import frutasMixin from './FrutasMixin'
import Frutas from './Frutas'
export default {
	components: {
		Frutas
	},
	mixins: [frutasMixin, usuarioLogagdo],
	filters: {
		cpfFilter(value) {
			// transforma string em vetor de char
			const arr = value.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')

			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '35895712588',
			frutas:['abacate']
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

input {
	font-size: 2.5rem;
}
</style>
