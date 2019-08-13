export default {
    computed: {
		changePhraseMixin() {
			return this.phrase.replace(/ /g, ",")
		},
		countWordsMixin() {
			let arr = this.phrase.split(" ")
			let newArr = []
			arr.forEach(element => {
				element = element.concat(" " + element.length)
				newArr.push(element)
			});
			return newArr.join()
		}
	}
}