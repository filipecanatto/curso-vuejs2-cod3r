import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'



Vue.config.productionTip = false
import routes from './routes'
const app = new Vue({
	el: '#app',
	data: {
	  currentRoute: window.location.pathname
	},
	computed: {
	  ViewComponent() {
		console.log(this.currentRoute)
		console.log('changing route to '+routes[this.currentRoute])
		const matchingView = routes[this.currentRoute]
		return matchingView  
		  ? require('./examples/'+matchingView+ '.vue').default
		  : require('./App.vue').default
	  }
	},
	render(h) {
	  return h(this.ViewComponent)
	}
  })
  
  window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
  })
