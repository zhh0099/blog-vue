<template>
  <!-- 手机端header -->
  <el-row
    class="hidden-md-and-up nav-mobile-container"
    justify="space-between"
    align="middle"
  >
    <el-col :span="4" :xs="7"  class="blog-title">
      <router-link to="/">
        {{ userName }}
      </router-link>
    </el-col>
    <el-col :span="2">
      <a @click="openSearch"><i class="iconfont icon-search" /></a>
      <a @click="openDrawer" style="margin-left: 10px; font-size: 20px">
        <i class="iconfont icon-menu" />
      </a>
    </el-col>
  </el-row>
  <!-- 电脑端header -->
  <el-row
    class="hidden-md-and-down nav-container"
    justify="space-between"
    align="middle"
  >
    <el-col :span="4" class="blog-title">
      <router-link to="/">
        {{ userName }}
      </router-link>
    </el-col>
    <el-col :span="1" :offset="9"></el-col>
    <!-- 搜索 -->
    <el-col :span="1" class="menus-item">
      <a class="menu-btn" @click="openSearch">
        <i class="iconfont icon-search" />搜索</a
      >
    </el-col>
    <!-- 首页 -->
    <el-col :span="1" class="menus-item">
      <router-link to="/" class="menu-btn">
        <i class="iconfont icon-home" />首页</router-link
      >
    </el-col>
    <!-- 发现 -->
    <el-col :span="1.5" class="menus-item">
      <a class="menu-btn">
        <i class="iconfont icon-find" />
        发现
        <i class="iconfont icon-more" />
      </a>
      <ul class="menus-submenu">
        <li>
          <router-link to="/record">
            <i class="iconfont icon-record" />记录</router-link
          >
        </li>
        <li>
          <router-link to="/classification">
            <i class="iconfont icon-classification" />分类</router-link
          >
        </li>
        <li>
          <router-link to="/tag">
            <i class="iconfont icon-tag" />标签</router-link
          >
        </li>
      </ul>
    </el-col>
    <!-- 娱乐 -->
    <el-col :span="1.5" class="menus-item">
      <a class="menu-btn">
        <i class="iconfont icon-entertainment" />娱乐
        <i class="iconfont icon-more" />
      </a>
      <ul class="menus-submenu">
        <li>
          <router-link to="/album">
            <i class="iconfont icon-album" />相册</router-link
          >
        </li>
        <li>
          <router-link to="/talks">
            <i class="iconfont icon-talk" />说说</router-link
          >
        </li>
      </ul>
    </el-col>
    <!-- 友链 -->
    <el-col :span="1" class="menus-item">
      <router-link class="menu-btn" to="/link">
        <i class="iconfont icon-link" />友链
      </router-link>
    </el-col>
    <!-- 关于 -->
    <el-col :span="1" class="menus-item">
      <router-link class="menu-btn" to="/about">
        <i class="iconfont icon-about" />关于
      </router-link>
    </el-col>
    <!-- 登录-->
    <!-- <el-col :span="1" class="menus-item">
      <a class="menu-btn" @click="openLogin">
        <i class="iconfont icon-login" />登录
      </a>
    </el-col> -->
    <!-- 切换主题-->
  <!-- <el-col :span="1" class="menus-item">
    <router-link class="menu-btn" to="/">
      <i class="iconfont icon-chat" />留言
    </router-link>
  </el-col> -->
  </el-row>
  
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const userName = store.state.userName

//search的点击事件
function openSearch() {
  store.state.searchFlag = true
}
//menu的点击事件

function openDrawer() {
  store.commit('DrawerNegate')
}

function openLogin() {
  store.commit('LoginNegate')
}
</script>

<style scoped>
/* 图标和文字间隔 */
i {
  margin-right: 3px;
}
a {
  color: #eee;
}
li {
  list-style: none;
}
/* 以下两个都是设置文字阴影 */
.nav .menu-btn {
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
}
.nav .blog-title a {
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
}
/* 手机端 */
.nav-mobile-container {
  height: 60px;
  font-weight: 700;
}
.nav-mobile-container i {
  font-size: 22px;
}
.nav-mobile-container .blog-title {
  font-size: 19px;
}
/* 电脑端 */
.nav-container {
  height: 60px;
  font-weight: 400;
}
.nav-container .blog-title {
  font-size: 20px;
  font-weight: 700;
}
/* 实现btn下划线偶动画 */
.menus-item {
  display: inline-block;
  position: relative;
}
.menu-btn:hover:after {
  width: 100%;
}
.menus-item a:after {
  position: absolute;
  z-index: 1;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: '';
  transition: all 0.3s ease-in-out;
}
/* 下拉框 */
.menus-item:hover .menus-submenu {
  display: block;
}
.menus-submenu {
  position: absolute;
  display: none;
  left: 0;
  width: max-content;
  margin-top: 8px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  animation: submenu 0.3s 0.1s ease both;
}
.menus-submenu:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: '';
}
.menus-submenu a {
  line-height: 1.5;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 12px;
}
.menus-submenu a:hover {
  background: #4ab1f4;
}
</style>