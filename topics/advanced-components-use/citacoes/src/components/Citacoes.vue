<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <citacao>
            <!--all unamed slots will be mapped to the default slot-->
            <h1 slot='fonte'>{{citacoes[indice].autor}} </h1>
            <p>Citação</p>
            <p> {{citacoes[indice].texto}} </p>
            <h6>Autor:</h6>
            <h6 slot='autor'>{{citacoes[indice].fonte}} </h6>
            <h6 slot='autor'>{{citacoes[indice].fonte}} </h6>
            <p>Teste</p>
        </citacao>
    </div>
</template>

<script>

import Citacao from './Citacao.vue'

export default {

    created(){
		console.log('created')
	},
	destroyed(){
		console.log('destroyed')
    },
    activated(){
		console.log('activated')
	},
	deactivated(){
		console.log('deactivated')
	},
    components:{Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        color:green !important
    }
</style>
