<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p>
      <strong>Código: {{id}} / {{ $route.params.id }}</strong>
    </p>
    <p>
      <strong>Completo:</strong>
      {{ $route.query.completo ? 'Sim' : 'Não' }}
    </p>
    <p>
      <strong>Linha :</strong>
      {{$route.query.lingua}}
    </p>
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("tem certeza ?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>


<style>
#rodape {
  margin-top: 2000px;
}
</style>