<template>
  <h1>Lista de tareas de thanos</h1>
  <h4>Tareas: {{ $store.state.todos.length }}</h4>
  <!-- <h4>Tareas: {{ $store.state.todos.filter(t=>!t.completed).length }}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>

  <hr />
  <button :class="{ active: currentTab === 'all' }" @click="currentTab='all'">Todos</button>
  <button :class="{ active: currentTab === 'pending' }" @click="currentTab='pending'">Pendientes</button>
  <button :class="{ active: currentTab === 'completed' }" @click="currentTab='completed'">Completados</button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ completed: todo.completed }" @dblclick="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isOpen=true">Crear todo</button>
  <Modal v-if="isOpen" @on:close="isOpen=false">
    <template v-slot:header>
      <h1>Nueva tarea</h1>
    </template>
    <template v-slot:body>      
      <form @submit.prevent="createTodo(newTodoText); isOpen=false">
        <input type="text" placeholder="tarea nueva" v-model="newTodoText">
          <br>
          <br>
          <button type="submit">Crear</button>
      </form>
    </template>
  </Modal>
</template>
<script>

import {ref} from 'vue'
import useTodos from "../composables/useTodos";
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  setup() {
    const {currentTab, pending, getTodosByTab, toggleTodo, createTodo} = useTodos()
    return{
        currentTab, 
        pending, 
        getTodosByTab,
        toggleTodo,
        createTodo,

        isOpen: ref(false),
        newTodoText: ref('')
    }
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
