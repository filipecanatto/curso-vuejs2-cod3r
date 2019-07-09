<template>
    <div class="barra_progresso">
        <div class="progresso" :style="{'width': this.progresso+'%'}"></div>
        <span>{{this.progresso+'%'}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progresso: 67,
        }
    }

}
</script>

<style>
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
    height: 100%;
}

span {
    position: absolute;
    left: 50%;
}
</style>