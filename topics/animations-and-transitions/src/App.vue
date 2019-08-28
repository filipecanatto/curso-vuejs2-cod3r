<template>
	<div id="app" class="container">
		<h1>Animações</h1>
	
		<!-- ANIMATION WITH JAVASCRIPT-->
		<!-- <hr>
									<button @click="show2 = !show2">Switch</button>
									<transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter' @enter-cancelled='enterCancelled' @before-leave='beforeLeave' @leave='leave' @after-leave='afterLeave' @leave-cancelled='leaveCancelled'>
										<div class="box" v-if='show2'>
								
										</div>
									</transition>
									<hr>
									<div class="mb-4">
										<b-button variant='primary' @click="SelectedComponent = 'WarningAlert' " class="mr-2">Warning</b-button>
										<b-button variant='secondary' @click="SelectedComponent = 'WarningInfo' " >Info</b-button>
									</div>
									<transition name='fade' mode='out-in'>
										<component :is='SelectedComponent'> </component>
									</transition> -->
	
		<!-- <hr>
									<b-button variant='secondary' @click="addStudent" class="mb-4">Add Student</b-button>
									<transition-group name='slide' tag='div'>
										<b-list-group v-for='(student, i) in students' :key='student'>
											<b-list-group-item @click="removeStudent(i)" >{{student}}</b-list-group-item>
										</b-list-group>
									</transition-group> -->
	
	
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
import WarningAlert from './WarningAlert'
import WarningInfo from './WarningInfo'
import VLink from './VLink'
export default {
	components: {
		WarningAlert,
		WarningInfo,
		VLink
	},
	data() {
		return {
			message: 'An information message to user.',
			show: false,
			show2: true,
			animationType: 'fade',
			baseWidth: 0,
			SelectedComponent: 'WarningAlert',
			students: ['Robert', 'July', 'Nicholas', 'Anne'],
			examplesCSS: [{
					name: 'Example1',
					desc: 'Animation with "fade" and "slide" effects'
				},
				{
					name: 'Example2',
					desc: 'Animation with animation.css library'
				}
			],
			examplesJS: [{
				name: 'Example3',
				desc: 'Animation with "fade" and "slide" effects'
			}, {
				name: 'Example4',
				desc: 'Handle animations with 2 components'
			}],


		}
	},
	methods: {
		animation(el, done, isToAdd) {
			let round = 1
			const timer = setInterval(() => {
				let newWidth = isToAdd ? this.baseWidth + (round * 10) : this.baseWidth - (round * 10)
				el.style.width = newWidth + 'px'
				round++

				if (round > 30) {
					clearInterval(timer)
					done()
				}

			}, 20);
		},
		addStudent() {
			console.log('tst')
			// generate an aleatory string.
			const s = Math.random().toString(36).substring(2)
			this.students.push(s)
		},
		removeStudent(i) {
			this.students.splice(i, 1)
		},
		beforeEnter(el) {
			this.baseWidth = 0
			el.style.width = this.baseWidth + 'px'
		},
		enter(el, done) {
			this.animation(el, done, true)
		},
		afterEnter(el) {
			console.log('afterEnter');
		},
		enterCancelled(el) {
			console.log('enterCancelled');

		},

		beforeLeave(el) {
			this.baseWidth = 300
			el.style.width = this.baseWidth + 'px'

		},
		leave(el, done) {
			this.animation(el, done, false)
		},
		afterLeave(el) {
			console.log('afterLeave');
		},
		leaveCancelled(el) {
			console.log('leaveCancelled');

		}

	}
}
</script>

<style>
.box {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.fade-enter .fade-leave-to {
	opacity: 0
}

.fade-enter-to .fade-leave {
	opacity: 1
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 2s
}

@keyframes slide-in {
	from {
		transform: translateY(40px)
	}
	to {
		transform: translateY(0)
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0)
	}
	to {
		transform: translateY(40px)
	}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
	opacity: 0
}

.slide-move {
	transition: transform 1s
}
</style>
