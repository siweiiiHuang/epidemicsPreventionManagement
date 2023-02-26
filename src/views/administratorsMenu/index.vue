<script setup>
import { useRouter } from "vue-router"
const router = useRouter();

const changeMenu = menuName=>{
  router.push(menuName)
}
</script>

<template>
    <el-button type="primary" size="large" @click="changeMenu('/loginRecord')">查看学生刷卡记录</el-button>
    <el-button type="info" size="large" @click="changeMenu('/forbidEnter')">设置禁入时间</el-button>
</template>

<style scoped>
</style>