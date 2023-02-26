<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from "vue";
import { login } from '../../api/manager';
import { useRouter } from 'vue-router'
const form = reactive({
  cardNumber: "",
});
const Router = useRouter()

const studentLogin = async (form) => {
  const { data: res } = await login(form)
  if (res.code == 1) {
    ElMessage({
      message: '登录成功',
      type: 'success',
    })
    console.log(res.data);
    Router.push({
      path: '/loginRecord',
      query: {
        data: JSON.stringify(res.data)
      }
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
    studentLogin(form)
  });
};

const rules = reactive({
  cardNumber: [{ required: true, message: "卡号不能为空", trigger: "blur" }],
});

const formRef = ref(null);
</script>

<template>
  <div class="">
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item style="display: inline-block;color: #B0B3BE;font-size: 12px;">
        聚焦下方输入框后将卡放在感应区即可获取卡号
      </el-form-item>
      <el-form-item label="卡号" prop="cardNumber">
        <el-input v-model="form.cardNumber" autofocus="true" />
      </el-form-item>
      <el-form-item style="display: inline-block;">
        <el-button type="primary" @click="onSubmit"
          >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
