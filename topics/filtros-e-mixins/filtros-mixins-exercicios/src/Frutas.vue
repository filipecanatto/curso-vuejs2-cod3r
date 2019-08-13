<template>
    <div>
        <ul>
            <li v-for='fruta in this.frutas' :key='fruta'>{{fruta}}</li>
        </ul>
        <input v-model='fruta' @keydown.enter="add" type="text">
    </div>
</template>

<script>
import frutasMixin from './FrutasMixin'
export default {
    mixins:[frutasMixin]
}
</script>

<style>

</style>
