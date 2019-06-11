// Iam a Vue instance responsible to handle events between brother components.
import Vue from 'vue'
export default new Vue({
    methods:{
        setUserInfo(user){
            this.$emit('userHasSelected', user)
        },
        onUserSelected(callback){
            this.$on('userHasSelected', callback)
        }
    }
})
