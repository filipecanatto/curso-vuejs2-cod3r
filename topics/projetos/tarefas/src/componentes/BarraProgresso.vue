<template>
    <div class="barra_progresso">
        <div class="progresso" :style="{'width': this.progresso+'%'}">.</div>
        <span>{{this.progresso+'%'}}</span>
    </div>
</template>

<script>
import bus from '@/bus'
export default {
    data() {
        return {
            progresso: 0
        }
    },
    created() {

        bus.aoAtualizarPorcentagem((tarefas) => {
            let total = 0
            let finalizado = 0

            tarefas.forEach(element => {
                total++
                if (element.finalizado) {
                    finalizado++
                }
            });

            if (total > 0) {
                this.progresso = (finalizado / total) * 100
            }

        })


    }

}
</script>

<style scoped>
.barra_progresso {
    border: 1px solid #FFF;
    width: 80%;
    border-radius: 25px;
    position: relative;
}

.progresso {
    display: inline-block;
    background-color: rgb(101, 165, 101);
    border-radius: 25px;
    color: rgb(101, 165, 101);
}

span {
    position: absolute;
    left: 50%;
}
</style>