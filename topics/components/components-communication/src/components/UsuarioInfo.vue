<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Username: {{name}}</p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
.componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
}
</style>
