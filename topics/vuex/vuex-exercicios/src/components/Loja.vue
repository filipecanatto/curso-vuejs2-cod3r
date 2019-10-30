<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        // um jeito diferente de fazer, usando get
        preco:{
            get(){
                return this.$store.state.parametros.preco
            }
        }
    },
    methods: {
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            /*  - sem usar mutations
                this.$store.state.produtos.push(produto) 
            */
            /* - usando mutations
                this.$store.commit('adicionarProduto', produto) 
            */
            /* - chamando uma action ma mao
                this.$store.dispatch('adicionarProduto', produto) 
            */
            // mapeando uma action
            this.adicionarProduto(produto)
            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
