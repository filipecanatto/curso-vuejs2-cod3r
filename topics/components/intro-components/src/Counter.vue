<template>
    <div class="counter">
        <span>{{count}}</span>
        <button @click='add'>+</button>
        <button @click='subtract'>-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }

    },
    methods: {
        add() {
            this.count++
        },
        subtract() {
            this.count--
        }
    }
}
</script>

<style>
.counter span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
}

.counter button {
    height: 30px;
    width: 30x;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
}
</style>
