<template>
  <div>
    <a>222</a>登录页
    <mt-button type="primary" @click="register">注册</mt-button>
  </div>
</template>

<style></style>

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
