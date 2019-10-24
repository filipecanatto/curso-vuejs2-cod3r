<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <router-view></router-view>
        <button sucesso v-on:click='irParaInicio'>Voltar</button>
    </div>
</template>

<script>
export default {
  
    methods: {
        irParaInicio() {
            this.$route.params.push({name:'inicio'})
            // or this.$router.push('/')
            // or this.$router.push({ path: '/' })
        }
    }
}
</script>


<style>

</style>