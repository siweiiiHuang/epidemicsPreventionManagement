<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from "vue";
import { register } from '../../api/manager';
import { useRouter } from 'vue-router'
const form = reactive({
  cardNumber: "",
  schoolNumber: "",
  name: ''
})
const Router = useRouter()
const rules = reactive({
  cardNumber: [{ required: true, message: "卡号不能为空", trigger: "blur" }],
  schoolNumber: [{ required: true, message: "学号不能为空", trigger: "blur" }],
  name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
});

const formRef = ref(null);

const studentRegister = async() =>{
  const {data:res} = await register(form)
  if (res.code == 1) {
    ElMessage({
      message: res.data,
      type: 'success',
    })
    Router.push({
      path: '/studentLogin'
    })
  } else {
    ElMessage({
      message: res.data,
      type: 'error',
    })
  }
}

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      console.log("error submit!!");
      return false;
    }
    studentRegister()
  });
};
</script>

<template>
      <div class="w-full min-h-screen flex justify-center items-center">
    <el-form :model="form" class="w-[250px]" :rules="rules" ref="formRef">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="卡号" prop="cardNumber">
        <el-input v-model="form.cardNumber" />
      </el-form-item>
      <el-form-item label="学号" prop="schoolNumber">
        <el-input v-model="form.schoolNumber" />
      </el-form-item>
      <el-form-item style="display: inline-block;">
        <el-button type="success" @click="onSubmit"
          >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
</style>
