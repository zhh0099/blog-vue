<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${aboutBackground})` + 'center / cover no-repeat'"
  >
    <h1 class="banner-title">关于我</h1>
  </div>
  <!-- 关于我内容 -->
  <div class="blog-container">
    <!-- 博主头像 -->
    <div class="my-wrapper">
      <el-avatar class="author-avatar" :size="100" :src="userImg"> </el-avatar>
    </div>
    <!-- 介绍 -->
    <div class="about-content my-wrapper">
      <p><strong>🍀个人简介</strong></p>
      <p>在路上的前端小萌新！</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore().state

const aboutBackground = store.aboutBackground

const userImg = store.userImg
</script>

<style scoped>
@media (min-width: 760px) {
  .blog-container {
    padding: 2rem 0 2rem 0;
  }
}
@media (max-width: 759px) {
  .blog-container {
    padding: 1.5rem 0 1.5rem 0;
  }
}
.about-content {
  margin-top: 1rem;
  word-break: break-word;
  line-height: 1.8;
}
.my-wrapper {
  text-align: center;
}
.author-avatar {
  transition: all 0.5s;
}
.author-avatar:hover {
  transform: rotate(360deg);
}
</style>