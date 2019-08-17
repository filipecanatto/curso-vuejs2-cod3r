<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant='primary' class="mb-4" @click="show = !show">Show Message</b-button>
		
		<transition name='fade'>
			<b-alert varint='info' show v-if="show">{{message}}</b-alert>
		</transition>

	</div>
</template>

<script>

export default {
	data(){
		return{
			message:'An information message to user.',
			show:false
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
	font-size: 1.5rem;
}

.fade-enter{
	opacity: 0
}

.fade-enter-active{
	transition: opacity 2s
}

.face-enter-to{
	opacity: 1
}

.fade-leave{
	opacity: 1
}

.fade-leave-active{
	transition: opacity 2s
}

.fade-leave-to{
	opacity: 0
}

</style>
