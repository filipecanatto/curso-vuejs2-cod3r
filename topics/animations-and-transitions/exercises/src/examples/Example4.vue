<template>
    <div class="container border mt-4">
        <div class="mb-4 mt-4">
            <b-button variant='warning' @click="SelectedComponent = 'WarningAlert' " class="mr-2">Warning</b-button>
            <b-button variant='info' @click="SelectedComponent = 'WarningInfo' ">Info</b-button>
        </div>
        <transition name='fade' mode='out-in'>
            <component :is='SelectedComponent'> </component>
        </transition>
    </div>
</template>

<script>
import WarningAlert from '../WarningAlert'
import WarningInfo from '../WarningInfo'
export default {
    components:{
        WarningAlert,
        WarningInfo
    },
   data(){
       return{
            SelectedComponent: 'WarningAlert',
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
</style>