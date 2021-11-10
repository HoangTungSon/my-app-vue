<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    user: {{user}}
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import requestApi from "../service/api";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    
  },
  mounted() {
    requestApi.getUrl("http://localhost:3001/signIn", {
      email: "test@gmail.com",
      password: "123456",
    })
      .then(result => this.user = result)
      .catch(err => console.log(err));
  },
};
</script>