<template>
<div class="login">
  <h1>Planner</h1>
  <p>Пожалуйста авторизируйтесь</p>
  (Админ: admin@mail.com admin)
  (Юзер: user@mail.com user)
  <form v-on:submit.prevent class="login-form">
    <input type="email" placeholder="Электронная почта" v-model="email" required>
    <input type="password" placeholder="Пароль" v-model="password" required>
    <button type="button" @click="login">Войти</button>
  </form>
</div>
</template>

<script>
import {ref} from "vue";
import router from "@/router/router";
export default {
  name: "LoginPage",
  setup() {
    const email = ref('');
    const password = ref('');

    function login(){
      if ((email.value === 'admin@mail.com') && (password.value === 'admin')){
        router.push('/admin');
        localStorage.setItem('admin', 'true');
      } else {
        if ((email.value === 'user@mail.com') && (password.value === 'user')){
          router.push('/user');
          localStorage.setItem('admin', 'false')
        } else {
          alert('Неверный логин или пароль')
        }
      }
    }

    return { email, password, login }
  }
}
</script>

<style scoped>

</style>