<script setup>
import { useRoute } from 'vue-router'
import { ref } from "vue";
import { getLoginRecordList } from '../../api/manager';
let res = ref([])
const getList = async()=>{
    let {data:result} = await getLoginRecordList()
    console.log(result.data);
    res.value = result.data
}
const route = useRoute();
if(route.query.data != undefined) {
    res.push(JSON.parse(route.query.data))
} else {
    getList()
}
</script>

<template>
    <el-table :data="res" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="schoolNumber" label="学号" width="180" />
        <el-table-column prop="time" label="刷卡时间" width="250"/>
    </el-table>
</template>

<style scoped></style>
