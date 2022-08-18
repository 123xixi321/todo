<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>

  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','checkTodo','deleteTodo','clearAllTodo','checkAllTodo'],
  methods:{
    handleCheck(id){
      this.checkTodo(id)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid gainsboro;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li button {
    float:right;
    margin-left: 9px;
    margin-top:5px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>