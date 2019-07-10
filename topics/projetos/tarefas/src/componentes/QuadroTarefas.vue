<template>
    <div class="quadro">
        <div class="tarefa" v-for='(tarefa, index) in tarefas' v-bind:key='tarefa.nome'>
            <button @click='deletaTarefa(index)'>x</button>
            <p>{{tarefa.nome}}</p>
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
    methods:{
        deletaTarefa(index){
            this.tarefas.splice(index, 1)
        }
    },
    created() {
        bus.aoAdicionarTarefa(
            (tarefa) =>{
                this.tarefas.push({nome:tarefa})
            }
        );
    }

}
</script>

<style scoped>
.tarefa {
    border: 0.5px solid #FFF;
    background-color: rgb(247, 59, 59);
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 3px;
    width: 130px;
}

button {
    border: 0.5px solid #FFF;
    border-left: transparent;
    margin-left: 84%;
    border-radius: 0px 3px 0px 0px;
}
</style>
