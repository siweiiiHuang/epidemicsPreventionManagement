<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus'
import { administratorsLogin } from '../../api/manager';
import { useRouter } from 'vue-router'
const Router = useRouter()
const form = reactive({
  account: "",
  password: "",
});

const accountChange = ()=>{
  console.log(form.account);
}

const rules = reactive({
  account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});

const formRef = ref(null);
const AdministratorsLogin = async (form) => {
  const { data: res } = await administratorsLogin(form)
  if (res.code == 1) {
    ElMessage({
      message: '登录成功',
      type: 'success',
    })
    console.log(res.data);
    Router.push({
      path: '/administratorsMenu',
      // query: {
      //   data: JSON.stringify(res.data)
      // }
    })
  } else {
    ElMessage({
      message: res.msg,
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
    AdministratorsLogin(form)
  });
};
</script>

<template>
      <div class="w-full min-h-screen flex justify-center items-center">
    <el-form :model="form" class="w-[250px]" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" @change="accountChange" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <el-form-item style="display: inline-block;">
        <el-button type="primary" @click="onSubmit" class="w-[250px]"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
</style>
