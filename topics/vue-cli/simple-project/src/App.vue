<!--html-->
<template>
  <div id='app'>
    {{ title }}
    <button @click="title +='#' ">Change</button>
  </div>
</template>


<!--js-->
<script>
export default {
  data: function(){
    return {
       title: 'Using VueJS as professional'
    }
  }
}
</script>



<!--css-->
<style>
#app{
  background-color: chocolate;
  color: #ffffff
}
</style>


