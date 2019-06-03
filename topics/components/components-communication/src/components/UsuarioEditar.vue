<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>User old: <strong>{{old}}</strong></p>
        <button @click='changeOld'>Change Old</button>
    
    </div>
</template>

<script>
export default {
    props: {
        old: Number
    },
    methods: {
        changeOld() {
            this.$emit('oldHasChanged', 33)
        }
    }

}
</script>

<style scoped>
.componente {
    flex: 1;
    background-color: #98b99a;
    color: #fff;
}
</style>
