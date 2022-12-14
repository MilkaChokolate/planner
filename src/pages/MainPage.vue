<template>
  <div>
    <button @click="logOut" class="logout-btn">Выйти</button>
    <h1 v-if="isAdmin === 'true'">Панель админа</h1>
    <h1 v-else>Панель юзера</h1>
    <button @click="modalVisibility = true">Создать встречу</button>
    <div class="cards">
      <week-card v-for="(day, name) in plans" :day="day" :name="name" :key="day"></week-card>
    </div>
    <modal-window v-show="modalVisibility">
      <div class="close" @click="modalVisibility = false">✖</div>
      <create-plan></create-plan>
    </modal-window>
  </div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow";
import CreatePlan from "@/components/CreatePlan";
import {ref} from "vue";
import WeekCard from "@/components/WeekCard";
import router from "@/router/router";
export default {
  name: "MainPage",
  components: {WeekCard, CreatePlan, ModalWindow},
  setup() {
    const modalVisibility = ref(false);
    const plans = ref(JSON.parse(localStorage.getItem('plans')));
    const isAdmin = ref(JSON.parse(localStorage.getItem('admin')));

    function logOut(){
      router.push('/');
      localStorage.setItem('admin', 'false')
    }

    return { modalVisibility, plans, isAdmin, logOut }
  }
}
</script>

<style scoped>

</style>