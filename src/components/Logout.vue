<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="logout">
      <button type="submit">Logout</button>
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
    },
    logout() {
      LoginService.logout();
    }
  }
}
</script>

<style scoped>

</style>