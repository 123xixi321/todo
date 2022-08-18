<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
import MyItem from "@/components/MyItem";
export default {
  name: "MyList",
  components: {MyItem},
  props:['todos','checkTodo','deleteTodo','clearAllTodo','checkAllTodo']
}

</script>

<style scoped>

</style>