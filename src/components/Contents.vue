<template>
  <div class="content">
    <div v-if="savedTodos.length">
      <ul class="list" v-for="todo in savedTodos" :key="todo.index">
        <li class="item">
          <font-awesome-icon 
          class="co"
          icon="fa-solid fa-circle-check " />
          <p class="text">
            {{ todo }}
          </p>
          <font-awesome-icon 
          @click="deleteTodo"
          class="de"
          icon="fa-solid fa-trash-can" />
        </li>
      </ul>
    </div>
    <div v-else>
      <h1 class="text-2xl text-red-300 text-center my-10">No Todo Yet</h1>
    </div>
  </div>
</template>

<script>
export default {
  
  props: ["savedTodos"],
  data(){
    return{
      id: null
    }
  },
  methods: {
    deleteTodo(){
      this.$emit('delete', )
      console.log(this.savedTodos);
    }
  }
};
</script>

<style>
.content {
  width: 380px;
  height: 350px;
  max-height: 350px;
  background-color: #fff;
  overflow: auto;
}

.item {
  width: 100%;
  height: 45px;
  min-height: 45px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
}
.item .co {
  position: absolute;
  font-size: 25px;
  padding-left: 5px;
  left: 15px;
  top: 10px;
}
.item .co:hover {
  cursor: pointer;
}
.fa-check-circle {
  color: #6eb200;
}
.item p.text {
  position: absolute;
  padding: 0;
  margin: 0;
  font-size: 20px;
  left: 60px;
  top: 10px;
  background-color: #fff;
  max-width: 285px;
}
.lineThrough {
  text-decoration: line-through;
  color: #ccc;
}
.item .de {
  position: absolute;
  font-size: 25px;
  right: 15px;
  top: 10px;
}
.item .de:hover {
  color: #af0000;
  cursor: pointer;
}
</style>
