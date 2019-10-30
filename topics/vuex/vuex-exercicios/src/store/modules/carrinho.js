export default {
    namespaced:true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // chamado pelo metodo commit
    mutations: {
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        }
    },
    actions: {
        // action acessivel apartir da raiz
        adicionarProduto:{
            root:true,
            handler({ commit }, payload){
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000);
            }
        }
    }
}