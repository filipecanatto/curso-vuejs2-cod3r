import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('countWords', function(word){
	let arr = word.split(" ")
	let newArr = []
	arr.forEach(element => {
		element = element.concat(" "+element.length)
		newArr.push(element)
	});
	return newArr.join()
})

new Vue({
	render: h => h(App),
}).$mount('#app')
