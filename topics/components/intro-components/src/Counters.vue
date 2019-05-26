<template>
    <div class="counters">
        <app-counter v-for='c in 5' :key='c' />
    </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
    // local register
    components: { 'app-counter': Counter }

}
</script>

<style scoped>

div{
    border: 1px solid red;
}

</style>
