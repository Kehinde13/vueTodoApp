
<template>
   <Header :date="date" />
</template>

<script>
  import Header from './components/Header.vue'

   export default {
    components: {Header},
    data(){
      return {
        date: '',
      }
    },
    mounted() {
      const options = {weekday: "long", month:"short", day:"numeric"};
      const today = new Date();
      this.date = today.toLocaleDateString("en-Us", options);
    }
   }
</script>

<style>

   body{
    background-color: rgba(0,0,0,0.1);
    font-family: 'Titillium Web', sans-serif;
  }

  #app{
    padding:10px;
    width:380px;
    margin:0 auto;
  }

</style>
