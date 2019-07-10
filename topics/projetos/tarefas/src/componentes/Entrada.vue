<template>
    <div class="entrada">
        <input placeholder="Nova Tarefa?" type="text" class="input">
        <button class='button'>+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.entrada {
    border: 1px solid #FFF;
    border-radius: 5px;
}

.input {
    border: 1px solid transparent;
    background-color: transparent;
    color: #FFF;
}

.button {
    color: #FFF;
    background-color: blue;
    border: transparent;
    border-left: 1px solid #FFF;
    border-radius: 0px 5px 5px 0px;
}
</style>
