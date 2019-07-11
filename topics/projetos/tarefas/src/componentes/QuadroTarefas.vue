<template>
    <div class="quadro">
        <div class="card" style="width: 18rem;" v-for='(tarefa, index) in tarefas' v-bind:key='tarefa.nome'>
            <div class="card-body">
                <p class="card-text">{{tarefa.nome}}</p>
                <a href="#" class="card-link" @click='deletaTarefa(index)'>Concluir</a>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/bus'

export default {

    data() {
        return {
            tarefas: []
        }
    },
    methods: {
        deletaTarefa(index) {
            this.tarefas.splice(index, 1)
        }
    },
    created() {
        bus.aoAdicionarTarefa(
            (tarefa) => {
                this.tarefas.push({ nome: tarefa })
            }
        );
    }

}
</script>

<style scoped>
.card{
    background-color: #ff6666;
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
}
</style>
