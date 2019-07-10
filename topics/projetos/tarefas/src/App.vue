<template>
	<div id="app" class="container">
		<h1>Tarefas</h1>
		<BarraProgresso></BarraProgresso>
		<br>
		<Entrada></Entrada>
		<br>
		<Tarefas></Tarefas>
	</div>
</template>

<script>
import BarraProgresso from './componentes/BarraProgresso'
import Entrada from './componentes/Entrada'
import Tarefas from './componentes/QuadroTarefas'

export default {
	components: { BarraProgresso, Entrada, Tarefas }

}
</script>

<style>
body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #FFF;
}

.container {
	color: #FFF
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>
