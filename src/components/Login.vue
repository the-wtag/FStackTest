<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "Login.vue",
  data: () => {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login() {
      let data = {
        username: this.username,
        password: this.password,
      }

      LoginService.login(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>