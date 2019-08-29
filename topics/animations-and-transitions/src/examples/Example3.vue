<template>
    <div class="container mt-4 border">
        <b-button class="mt-4 mb-4" variant='secondary' @click="show = !show">Animate</b-button>
        <transition @before-enter='beforeEnter' 
        @enter='enter' 
        @after-enter='afterEnter' 
        @enter-cancelled='enterCancelled' 
        @before-leave='beforeLeave' 
        @leave='leave' 
        @after-leave='afterLeave' 
        @leave-cancelled='leaveCancelled'>
            <div class="box" v-if='show'></div>
        </transition>
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,

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
</style>
