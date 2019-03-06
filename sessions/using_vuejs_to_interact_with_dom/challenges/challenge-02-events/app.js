new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },methods :{
        alerta(){
            alert('alertando ...');
        },
        pegaValor(e){
            this.valor = e.target.value;
        }
    }
})