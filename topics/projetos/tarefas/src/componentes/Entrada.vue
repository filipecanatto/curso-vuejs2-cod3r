<template>
    <form>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Adicione uma tarefa" v-model='nomeTarefa'>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="adicionarTarefa()">+</button>
            </div>
        </div>
    
    </form>
</template>

<script>
import bus from '@/bus'
export default {

    data() {
        return {
            nomeTarefa: null
        }
    },
    methods: {
        adicionarTarefa() {
            console.log('task added')
            bus.adicionarTarefa(this.nomeTarefa)
            this.nomeTarefa=null;
        }
    },
    created(){
        console.log('entrada criada')
    },

}
</script>

<style scoped>
.btn-outline-secondary {
    background-color: blue;
    color: #FFF;
}
</style>
