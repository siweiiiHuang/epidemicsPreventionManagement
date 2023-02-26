<script setup>
import { useRouter } from "vue-router"
const router = useRouter();

const changeMenu = menuName=>{
  router.push(menuName)
}
</script>

<template>
    <el-button type="primary" size="large" @click="changeMenu('/studentLogin')">学生登录</el-button>
    <el-button type="success" size="large" @click="changeMenu('/register')">学生注册</el-button>
    <el-button type="info" size="large" @click="changeMenu('/administratorLogin')">管理员登录</el-button>
</template>

<style scoped>
</style>