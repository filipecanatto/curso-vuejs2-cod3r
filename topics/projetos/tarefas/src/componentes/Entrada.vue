<template>
    <div class="entrada">
        <input placeholder="Nova Tarefa?" type="text" class="input" v-model='nomeTarefa'>
        <button class='button' @click="adicionarTarefa()">+</button>
    </div>
</template>

<script>
import bus from '@/bus'
export default {

    data(){
        return{
            nomeTarefa:null
        }
    },
    methods:{
        adicionarTarefa(){
            console.log(this.nomeTarefa)
            bus.adicionarTarefa(this.nomeTarefa)
        }
    }

}
</script>

<style scoped>

input {
    border-radius: 5px 0px 0px 5px;
   
}

button {
    border-radius: 0px 5px 5px 0px;
    background-color: blue;
    color:#FFF;
}
</style>
