<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código: {{id}}</strong></p>
        <router-link tag='button' primario 
            :to="{name:'editarUsuario', 
            params:{id: id}, 
            query:{completo: false, 
            lingua:'pt-br'}, hash:'#rodape'}" >Editar</router-link>
    </div>
</template>

<script>
export default {

    props: ['id'],
    beforeRouteEnter(to, from, next){
        console.log('dentro do componente UsuarioDetalhe')
      //  next(vm => {
      //      console.log(vm.id)
      //  })
      const autenticado = true
      autenticado ? next() : next(false)
    }
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },

}
</script>


<style>

</style>