<template>
    <div>
        <b-button @click="show2 = !show2">Switch</b-button>
        <transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter' @enter-cancelled='enterCancelled' @before-leave='beforeLeave' @leave='leave' @after-leave='afterLeave' @leave-cancelled='leaveCancelled'>
            <div class="box" v-if='show2'></div>
        </transition>
    
    </div>
</template>

<script>
export default {
    methods: {
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
