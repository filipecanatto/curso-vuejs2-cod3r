<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Username: {{invertName()}}</p>
        <button @click='rebootName()'>Reboot name</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: function(){
                return Array(10).fill(0).join(',')
            }
            // or
            //default: 'Jhon'
        }
    },
    methods: {
        invertName() {
            return this.name.split('').reverse().join('')
        },
        rebootName(){
            this.name = 'Peter'
             this.$emit('nameHasChanged', this.name)
        }
    }
}
</script>

<style scoped>
.componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
}
</style>
