new Vue({
    el: '#desafio',
    data: {
        nome: 'Wilton Filipe Canatto',
        idade: '26',
        link: 'http://google.com.br',
        linkImage: 'https://lh3.googleusercontent.com/-I281dHnXAk0/W-xTGncoy-I/AAAAAAAAAjk/siVu58qA5AguDuO703mLXKfMifQQtvxBQCL0BGAYYCw/h786/2018-11-14.png'

    },
    methods: {
        multiplyAge: function(p1){
            var newAge = this.idade*p1
            return newAge;
        },
        getRandomNumber: function(){
            return Math.random() * 1;
        }
    }
})
