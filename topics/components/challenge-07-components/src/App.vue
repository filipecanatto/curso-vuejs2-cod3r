<template>
	<v-app>
		<app-navigation/>
		<app-title/>
		<app-carousel/>
	</v-app>
</template>

<script>
import Navigation from './Navigation.vue'
import Title from './Title.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'

export default {

	components: {
		'app-navigation': Navigation,
		'app-title': Title,
		'app-carousel': Carousel,
		'app-footer': Footer
	},


}
</script>
