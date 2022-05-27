<template>
  <el-dialog v-model="loginFlag"> </el-dialog>
</template>

<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex'

const store = useStore()

let loginFlag = computed({
  get() {
    return store.state.loginFlag
  },
  set(value) {
    store.state.loginFlag = value
  },
})
// 
</script>

<style scoped>
.login-container{
    background-color: blueviolet;
}
</style>