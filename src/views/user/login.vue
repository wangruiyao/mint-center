<template>
  <div>
    <a>222</a>登录页
    <mt-button type="primary" @click="register">注册</mt-button>
    <div class="wrapper">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper div {
    height: 1rem;
  }
  .box1 {
    width: 20px;
    background-color: coral;
  }
  .box2 {
    width: 40px;
    background-color: skyblue;
  }
  .box3 {
    width: 60px;
    background-color: palegreen;
  }
  .box4 {
    width: 80px;
    background-color: wheat;
  }
  .box5 {
    width: 375px;
    background-color: darkred;
  }
</style>

<script>
export default {
  name: 'login',
  methods: {
    register() {
      this.$router.push('/user/register')
    }
  }
}
</script>
