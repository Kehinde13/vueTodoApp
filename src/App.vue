
<template>
   <Header :date="date" />
   <Contents 
   :savedTodos="savedTodos" 
   @delete="deleteTodo" 
   @complete="completeTodo"/>
   <Input @add="AddTodo" />
</template>

<script>
  import Header from './components/Header.vue'
  import Input from './components/Input.vue';
  import Contents from './components/Contents.vue';

   export default {
    components: {Header, Input, Contents},
    data(){
      return {
        date: '',
        savedTodos: [],
      }
    },
    mounted() {
      const options = {weekday: "long", month:"short", day:"numeric"};
      const today = new Date();
      this.date = today.toLocaleDateString("en-Us", options);
      this.savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    }, 
    methods: {
      AddTodo(newTodo){
       if(newTodo.Todo.length > 0 ){
        this.savedTodos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(this.savedTodos))
       } else {
        alert("Add A Todo")
       } 
      },
      deleteTodo(todo){
       this.savedTodos = this.savedTodos.filter(
        task => task.id !== todo
       )
       localStorage.setItem(
        'todos',
        JSON.stringify(this.savedTodos)
       )
      },
      completeTodo(todo){
        console.log(todo.classList);
      }
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
