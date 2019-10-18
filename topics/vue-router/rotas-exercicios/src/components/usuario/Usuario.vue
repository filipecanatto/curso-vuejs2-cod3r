<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <button sucesso v-on:click='irParaInicio'>Voltar</button>
    </div>
</template>

<script>
export default {
    methods:{
        irParaInicio(){
            this.$router.push('/')
            // or this.$router.push({ path: '/' })
        }
    }
}
</script>


<style>

</style>