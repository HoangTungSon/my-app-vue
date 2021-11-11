<template>
  <div id="loginForm">
    <div id="form">
      <div id="title">
        <label>Sign In</label>
      </div>
      <div id="formDetail">
        <div>
          <label>Email:</label>
          <input type="email" v-model="formData.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="formData.password" />
        </div>
      </div>
      <button type="submit" v-on:click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import requestApi from "../service/api";
import router from "../router/index";

export default {
  name: "Home",
  data() {
    return {
      user: null,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn: function () {
      requestApi
        .getUrl("http://localhost:3001/signIn", {
          email: this.formData.email,
          password: this.formData.password,
        })
        .then((result) => {
          this.user = result;
          localStorage.setItem('user', JSON.stringify(this.user));
          router.push({name: 'Home'})
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
#loginForm {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#form {
  margin: auto;
  height: 300px;
  width: 300px;
  background-color: cornflowerblue;
  color: white;
}

#title {
  text-align: center;
  font-size: 20px;
}

#formDetail {
  div {
    display: grid;
  }
}
</style>