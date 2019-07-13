<template>
    <div class="quadro">
        <div class="card" style="width: 18rem;" v-for='(tarefa, index) in tarefas' v-bind:key='tarefa.nome'>
            <div :class='[cardBody, {finalizadoStilo:tarefa.finalizado}]'>
                <p class="card-text">{{tarefa.nome}}</p>
                <a href="#" class="card-link" @click='tarefa.finalizado = !tarefa.finalizado; atualizaTarefa()'>Concluir</a>
                <a href="#" class="card-link" @click='deletaTarefa(index)'>Excluir</a>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/bus'

export default {

    data() {
        return {
            tarefas: [],
            cardBody:'card-body',
            finalizado:'finalizadoStilo'
        }
    },
    methods: {
        deletaTarefa(index) {
            this.tarefas.splice(index, 1)
        },
        atualizaTarefa(){
            console.log('quadro de tarefas alterado.')
            bus.atualizarPorcentagem(this.tarefas)
        }
    },
    watch:{
        tarefas(){
            this.atualizaTarefa()
        }
    },
    created() {
        bus.aoAdicionarTarefa(
            (tarefa) => {
                this.tarefas.push({ nome: tarefa, finalizado:false })
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

.finalizadoStilo{
    background-color: rgb(62, 153, 62);
    text-decoration: line-through;
}
</style>
