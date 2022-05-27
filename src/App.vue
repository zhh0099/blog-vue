<template>
  <el-container>
    <!-- 顶部 -->
    <el-header :class="nav">
      <VlogHeader></VlogHeader>
    </el-header>
    <!-- 侧边栏 -->
    <VlogAside></VlogAside>
    <!-- 主体 -->
    <el-main style="overflow: visible">
      <router-view></router-view>
    </el-main>
    <!-- 页脚 -->
    <el-footer>
      <VlogFooter></VlogFooter>
    </el-footer>
    <!-- 搜索模块 -->
    <SearchModel></SearchModel>
    <!-- 回到顶部 -->
    <BackTop></BackTop>
  </el-container>
</template>
<script setup>
import VlogHeader from './components/layout/VlogHeader.vue'
import VlogAside from './components/layout/VlogAside.vue'
import VlogFooter from './components/layout/VlogFooter.vue'
import SearchModel from './components/model/SearchModel.vue'
import BackTop from './components/BackTop.vue'
import { ref, onMounted } from 'vue'
import { init } from 'tocbot'

// 根据滚动改变header主题
let nav = ref('nav')
// let homeflag=document.getElementsByTagName('main').firstChild;
function scroll(e) {
  let scrollTop =
    window.pageYOffset ||
    document.documentElementscrollTop ||
    document.body.scrollTop

  let scroll = scrollTop - document.body.initTop
  document.body.initTop = scrollTop

  const header = document.querySelector('.el-header')

  if (scroll > 0) {
    header.style.display = 'none'
  } else {
    header.style.display = 'block'
    if (scrollTop > 340) {
      nav.value = 'nav-fixed'
    } else {
      nav.value = 'nav'
    }
  }
  // if (scrollTop > 340) {
  //   nav.value = 'nav-fixed'
  // } else {
  //   nav.value = 'nav'
  // }
}
// 根据滚动方向调整header是否显示
// function wheel(e) {
//   let wheelDirection = e.deltaY
//   let scrollTop =
//     window.pageYOffset ||
//     document.documentElementscrollTop ||
//     document.body.scrollTop
//   const header = document.querySelector('.el-header')
//   // console.log(header)
//   if (wheelDirection == 125 && scrollTop == 0) {
//     header.style.display = 'none'
//   } else if (wheelDirection == -125) {
//     header.style.display = 'block'
//   }
// }
onMounted(() => {
  window.addEventListener('scroll', scroll)
  // window.addEventListener('wheel', wheel)
})
</script>
<style>
.nav {
  background: rgba(0, 0, 0, 0);
}
.nav-fixed {
  background: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.7);
}
.nav-fixed a {
  color: #4c4948 !important;
}
.nav-fixed a:hover {
  color: #49b1f5 !important;
}
</style>
