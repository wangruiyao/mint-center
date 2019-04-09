<template>
  <div>
    <p>登录页</p>
    <mt-button type="primary" @click="register">注册</mt-button>
  </div>
</template>

<style scoped>
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
