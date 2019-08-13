<template>
    <div>
        <ul>
            <li v-for='fruta in this.frutas' :key='fruta'>{{fruta}}</li>
        </ul>
        <input v-model='fruta' @keydown.enter="add" type="text">
    </div>
</template>

<script>
export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'laranja', 'maça']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
        }
    }

}
</script>

<style>

</style>
