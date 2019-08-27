<template>
	<div id="app" class="container">
		<h1>Animações</h1>
		<hr>
		<b-button variant='primary' class="mb-4" @click="show = !show">Show Message</b-button>
	
		<!-- ANIMATION WITH CSS -->
		<!-- <transition name='fade' appear>
						<b-alert variant='info' show v-show="show">{{message}}</b-alert>
					</transition>
				
					<transition name='slide' type="animation" appear>
						<b-alert variant='info' show v-show="show">{{message}}</b-alert>
					</transition>
				
					<transition enter-active-class="animated bounce" leave-active-class="animated shake">
						<div v-show="show">
							<p>(usando a lib animate.css)</p>
							<b-alert variant='info' show>{{message}}</b-alert>
						</div>
					</transition> -->
	
		<br>
		<b-select v-model='animationType' class="mb-4 col-2">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
	
		<transition :name='animationType' mode="out-in">
			<b-alert variant='info' key="info" show v-if="show">{{message}}</b-alert>
			<b-alert variant='warning' key="warn" show v-else>{{message}}</b-alert>
		</transition>
		<br>
		<!-- ANIMATION WITH JAVASCRIPT-->
		<hr>
		<button @click="show2 = !show2">Switch</button>
		<transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter' @enter-cancelled='enterCancelled' @before-leave='beforeLeave' @leave='leave' @after-leave='afterLeave' @leave-cancelled='leaveCancelled'>
			<div class="box" v-if='show2'>
	
			</div>
		</transition>
	
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'An information message to user.',
			show: false,
			show2: true,
			animationType: 'fade',
			baseWidth: 0
		}
	},
	methods: {
		beforeEnter(el) {
			console.log('beforeEnter');
		},
		enter(el, done) {
			let round = 1
			const timer = setInterval(() => {
				let newWidth = this.baseWidth + (round * 10)
				el.style.width = newWidth + 'px'
				round++

				if (round > 30) {
					clearInterval(timer)
					done()
				}

			}, 20);

		},
		afterEnter(el) {
			console.log('afterEnter');
		},
		enterCancelled(el) {
			console.log('enterCancelled');

		},

		beforeLeave(el) {
			console.log('beforeLeave');
		},
		leave(el, done) {
			console.log('leave');
			done()
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
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
	opacity: 0
}
</style>
