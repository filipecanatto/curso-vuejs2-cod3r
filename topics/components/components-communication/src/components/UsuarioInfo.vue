<template>
    <div class="componente">
    
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Username: {{invertName()}}</p>
        <p>User old: <strong>{{old}}</strong></p>
        <button @click='rebootName()'>Reboot name</button>
        <button @click='rebootFName()'>Reboot name (callback)</button>
    
    
    
    </div>
</template>

<script>
import bus from '@/bus'

export default {
    props: {
        name: {
            type: String,
            required: true,
            default: function() {
                return Array(10).fill(0).join(',')
            }

            // or
            //default: 'Jhon'
        },
        old: Number,
        rebootFName: Function
    },
    methods: {
        invertName() {
            return this.name.split('').reverse().join('')
        },
        rebootName() {
            this.name = 'Peter'
            this.$emit('nameHasChanged', this.name)
        }
    },
    created() {
        // I am listening this event
        bus.onOldChange( (old) => {
            this.old = old
        })
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
