
<template>
  <Header :date="date" />
  <Contents :savedTodos="savedTodos" @delete="deleteTodo" @edit="editTodo" />
  <form @submit.prevent="AddTodo" class="add-to-do">
    <button>
      <font-awesome-icon icon="fa-solid fa-plus" class="bg-blue-500 text-white p-2 rounded-md" />
    </button>

    <input type="text" id="input" placeholder="Add a to-do" v-model="task" />
  </form>
</template>

<script>
import Header from './components/Header.vue'
import Contents from './components/Contents.vue';

export default {
  components: { Header, Contents },
  data() {
    return {
      date: '',
      savedTodos: [],
      task: '',
      editingTodo: false,
      editTask: null
    }

  },
  mounted() {
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    this.date = today.toLocaleDateString("en-Us", options);
    this.savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    /* add a todo */
    AddTodo() {
      if (this.task.length === 0) {
        alert('please add a new todo');
      } else {
        if (!this.editingTodo) {
          this.savedTodos.push({
            Todo: this.task,
            id: crypto.randomUUID(),
          })
          localStorage.setItem(
            'todos',
            JSON.stringify(this.savedTodos)
          )
          this.task = ''
        } else {
          this.editTask.Todo = this.task
          localStorage.setItem(
            'todos',
            JSON.stringify(this.savedTodos)
          )
          this.editingTodo = false
          this.task = ''
        }
      }
    },

    /* delete a todo */
    deleteTodo(todo) {
      this.savedTodos = this.savedTodos.filter(
        task => task.id !== todo
      )
      localStorage.setItem(
        'todos',
        JSON.stringify(this.savedTodos)
      )
    },


    /* editing a todo */
    editTodo(todo) {
      this.editTask = this.savedTodos.find(task =>
        task.id === todo
      )
      this.task = this.editTask.Todo
      this.editingTodo = true
    }
  }
}
</script>

<style>
body {
  background-color: rgba(0, 0, 0, 0.1);
  font-family: 'Titillium Web', sans-serif;
}

#app {
  padding: 10px;
  width: 380px;
  margin: 0 auto;
}

.add-to-do {
  position: relative;
  width: 380px;
  height: 60px;
  background-color: #fff;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;
}

.add-to-do input {
  position: absolute;
  left: 50px;
  height: 35px;
  width: 310px;
  background-color: transparent;
  border: 2px solid #4162f6;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
}

.add-to-do .co {
  position: absolute;
  font-size: 25px;
  right: 5px;
  height: 32px;
  top: 0px;
  cursor: pointer;
}
</style>
