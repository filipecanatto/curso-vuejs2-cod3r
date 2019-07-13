// Iam a Vue instance responsible to handle events between brother components.
import Vue from 'vue'
export default new Vue({
    methods:{
        adicionarTarefa(tarefa){
            this.$emit('umaTarefaFoiAdicionada', tarefa)
        },
        aoAdicionarTarefa(callback){
            this.$on('umaTarefaFoiAdicionada', callback)
        },
        atualizarPorcentagem(tarefa){
            this.$emit('atualizarPorcentagem', tarefa)
        },
        aoAtualizarPorcentagem(callback){
            this.$on('atualizarPorcentagem', callback)
        }
    }
})
