<template>
    <div class="container">
    
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click='changeName'>Change Name</button>
        <p>Nome: <strong>{{name}}</strong></p>
        <p>Old: <strong>{{old}}</strong></p>
        <hr>
        <div class="componentes">
            <app-usuario-info v-bind:name='name' @nameHasChanged='name = $event' :rebootFName='rebootName' :old=old />
            <app-usuario-editar :old=old />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            name: 'Peter',
            old: 26
        }
    },
    methods: {
        changeName() {
            this.name = 'Anne'

        },
        rebootName() {
            this.name = 'Peter'
        }
    }
}
</script>

<style scoped>
.container {
    background-color: #27363b;
    color: #fff;
    padding: 10px;
}

.container hr {
    margin: 20px 10px;
}

.componentes {
    display: flex;
}

.componentes>* {
    margin: 10px;
}
</style>
