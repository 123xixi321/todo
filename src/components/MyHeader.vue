
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入任务,按回车键确认" v-model="content" @keyup.enter="add">
<!--    <button @click="add">添加</button>-->
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "MyHeader",
  props:['addTodo'],
  data(){
    return {
      content:''
    }
  },
  methods:{
     add(){
       if(!this.content.trim()){
         return alert('不可以为空哦，卷起来！')
       }
      const todoObj = {id: nanoid(), title: this.content, done: false};
      this.addTodo(todoObj);
      this.content ="";

    }

  }
 }

// export default {
//   name: "MyHeader",
//   props:{
//     addTodo:{
//       type:Function
//     },
//     add:{
//       type:Function
//     }
//   },
//   methods:{
//     getadd(e) {
//       const todoObj = {id: nanoid(), title: e.target.value, done: false}
//       this.addTodo();
//       this.add(todoObj)
//
//     }
//   }
// };

</script>

<style scoped>
  .todo-header input{
    width: 655px;
    height: 28px;
    font-size: 15px;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 4px 10px;
  }

</style>