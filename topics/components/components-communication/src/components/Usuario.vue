<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click='changeName'>Change Name</button>
        <p>Nome: <strong>{{name}}</strong></p>
        <hr>
        <div class="componentes">
            <app-usuario-info v-bind:name='name' @nameHasChanged='name = $event' />
            <app-usuario-editar />
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
            name: 'Peter'
        }
    },
    methods: {
        changeName() {
            this.name = 'Anne'
           
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
