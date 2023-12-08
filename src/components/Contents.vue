<template>
  <div class="content">
    <div v-if="savedTodos.length">
      <ul class="list" v-for="todo in savedTodos" :key="todo.id">
        <li class="item" :id="todo.id">
          <font-awesome-icon @click="editTodo" class="co" icon="fa-solid fa-pen-to-square " />
          <p class="text">
            {{ todo.Todo }}
          </p>
          <font-awesome-icon @click="deleteTodo" class="de" icon="fa-solid fa-trash-can" />
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

  methods: {
    deleteTodo(event) {
      this.$emit('delete', event.target.parentElement.parentElement.id)
    },
    editTodo(event) {
      this.$emit('edit', event.target.parentElement.parentElement.id)
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
