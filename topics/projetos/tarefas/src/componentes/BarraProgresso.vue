<template>
    <div class="barra_progresso">
        <div class="progresso" :style="{'width': this.progresso+'%'}">.</div>
        <span>{{this.progresso+'%'}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progresso: 55,
        }
    }

}
</script>

<style>
.barra_progresso {
    border: 1px solid #FFF;
    width: 80%;
    border-radius: 25px;
}

.progresso {
    display: inline-block;
    background-color: green;
    color: green;
    border-radius: 25px;
}

span {
    position: absolute;
    left: 50%;
}
</style>
