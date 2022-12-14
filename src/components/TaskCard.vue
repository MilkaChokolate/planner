<template>
<div class="card">
  <div v-if="!task.isEmpty">
    <div v-show="isAdmin === 'true'" class="close-btn" @click="deleteTask(task)">✖</div>
    <div :class="{ 'to-top': isAdmin === 'true'}">
      <div>{{ task.time }}</div>
      <div>Клиент: {{ task.clientName }}</div>
      <div>Причина: {{ task.reason }}</div>
    </div>
  </div>
  <div v-else>
    <div :class="{ 'to-top': isAdmin === 'true'}">
      <div>{{ task.time }}</div>
      <div>Пусто</div>
    </div>

  </div>

</div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "TaskCard",
  props: {
    task: Object
  },
  setup(){
    const isAdmin = ref(localStorage.getItem('admin'));

    function deleteTask(task) {
      let plans = JSON.parse(localStorage.getItem('plans'));
      let day = new Date(task.start).toDateString();
      let newArr = plans[day].filter(n => n.id !== task.id);
      console.log(newArr)

      //localStorage.setItem('plans', JSON.stringify(newArr));
    }

    return { isAdmin, deleteTask }
  }
}
</script>

<style scoped>

</style>