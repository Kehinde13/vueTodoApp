<template>
    <form @submit.prevent="AddTodo" class="add-to-do">
        <button>
            <font-awesome-icon 
            icon="fa-solid fa-plus" 
            class="bg-blue-500 text-white p-2 rounded-md"
            />
        </button>
        
        <input type="text" id="input" placeholder="Add a to-do" v-model="Todo">
    </form>
</template>

<script>
export default {
    data(){
     return{
       Todo: "",
     }
    },
    methods: {
        AddTodo() {
            this.$emit('add', this.Todo)
            this.Todo = ''
        },
    }
}
</script>

<style>
.add-to-do {
    position: relative;
    width: 380px;
    height: 60px;
    background-color: #FFF;
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
</style>