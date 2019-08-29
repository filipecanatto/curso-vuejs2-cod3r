<template>
	<div id="app" class="container">
		<h1>Animation and Transitions</h1>

		<p>with CSS</p>
		<b-list-group>
			<b-list-group-item v-for='example in examplesCSS' :key='example.name'>
				<v-link :href='example.name'>{{example.desc}}</v-link>
			</b-list-group-item>
		</b-list-group>
	
		<p>with JS</p>
		<b-list-group>
			<b-list-group-item v-for='example in examplesJS' :key='example.name'>
				<v-link :href='example.name'>{{example.desc}}</v-link>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import VLink from './VLink'
export default {
	components: {
		VLink
	},
	data() {
		return {
			examplesCSS: [{
					name: '/Example1',
					desc: 'Animation with "fade" and "slide" effects'
				},
				{
					name: '/Example2',
					desc: 'Animation with animation.css library'
				}
			],
			examplesJS: [{
					name: '/Example3',
					desc: 'Div animation'
				}, {
					name: '/Example4',
					desc: 'Handle animations with 2 components'
				},
				{
					name: '/Example5',
					desc: 'List animation'
				}
			],


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
</style>
