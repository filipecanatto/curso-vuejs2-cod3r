<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <p><strong>Código: {{id}}</strong></p>
        <button sucesso v-on:click='irParaInicio'>Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        irParaInicio() {
            this.$router.push('/')
            // or this.$router.push({ path: '/' })
        }
    }
}
</script>


<style>

</style>