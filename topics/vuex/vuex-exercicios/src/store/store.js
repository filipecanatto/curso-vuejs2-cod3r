import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

// importa todas as funcoes descritas em getters.js
import * as getters from './getters'
export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobreNome: 'Silva'
    },
    //getters: getters,
    getters:{
        ...getters
    },
    modules: {
        carrinho, parametros
    }
})