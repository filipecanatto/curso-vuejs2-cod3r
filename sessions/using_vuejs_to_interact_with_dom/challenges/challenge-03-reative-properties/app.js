new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed:{
        result(){
            console.log('-> result');
            setTimeout(() => { this.valor = 0 }, 5000);
            console.log('<- result');
            return (this.valor == 10)?'equals to 10':'diferent of 10';
        }
    },
    methods:{
        sum(value){
            console.log('-> sum');
            console.log('adding '+value);
            console.log('<- sum');
            return (this.valor += value);
        },
    }
});