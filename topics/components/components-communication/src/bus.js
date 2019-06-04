// Iam a Vue instance responsible to handle events between brother components.
import Vue from 'vue'
export default new Vue({
    methods:{
        changeOld(old){
            this.$emit('oldHasChanged', old)
        },
        onOldChange(callback){
            this.$on('oldHasChanged', callback)
        }
    }
})
