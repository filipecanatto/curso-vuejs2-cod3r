export default {
    computed: {
		changePhraseMixin() {
			return this.phrase.replace(/ /g, ",")
		},
		countWordsMixin() {
			return this.phrase.split(' ').map(element => element+' ('+element.length+')').join(' ')
		}
	}
}