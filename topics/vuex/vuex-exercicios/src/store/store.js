import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'
export default new Vuex.Store({
   modules:{
       carrinho, parametros
   }
})