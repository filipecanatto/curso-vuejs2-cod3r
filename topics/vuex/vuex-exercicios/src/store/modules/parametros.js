export default {
    state: {
        quantidade: 1,
        preco: 1.99
    },
    // chamado pelo metodo commit
    mutations: {
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        },
    }
}