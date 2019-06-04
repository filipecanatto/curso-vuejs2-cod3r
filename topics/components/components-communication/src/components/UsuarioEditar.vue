<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>User old: <strong>{{old}}</strong></p>
        <button @click='changeOld'>Change Old</button>
    
    </div>
</template>

<script>
// absolute path
import bus from '@/bus'

export default {
    props: {
        old: Number
    },
    methods: {
        changeOld() {
            this.old += 1
            bus.changeOld(this.old)
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
