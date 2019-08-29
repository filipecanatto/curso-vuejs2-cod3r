<template>
    <div class="container border mt-4">
        <b-button variant='primary' class="mb-4 mt-4" @click="show = !show">Animate</b-button>
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
            <div v-show="show">
                <p>(using the lib animate.css)</p>
                <b-alert variant='info' show>{{message}}</b-alert>
            </div>
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

</style>