<template>
    <div class="container">
        <b-button variant='primary' class="mb-4 mt-4" @click="show = !show">Execute</b-button>
        <transition name='fade' appear>
            <b-alert variant='info' show v-show="show">{{message}}</b-alert>
        </transition>

        <transition name='slide' type="animation" appear>
            <b-alert variant='info' show v-show="show">{{message}}</b-alert>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            message:'An important message!'
        }
    }
}
</script>

<style>
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