<template>
    <div style="margin-bottom: 10px;color: #B0B3BE;">设置禁入时间</div>
    <el-time-picker
      v-model="value1"
      is-range
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    />
    <div>{{value1}}</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const value1 = ref('')
  </script>