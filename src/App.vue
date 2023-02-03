<!--
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-03 11:17:11
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-03 11:33:56
 * @FilePath: \blog-vue\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <el-container>
        <!-- 顶部 -->
        <el-header :class="nav">
            <VlogHeader></VlogHeader>
        </el-header>
        <!-- 侧边栏 -->
        <VlogAside></VlogAside>
        <!-- 主体 -->
        <el-main style="overflow: visible" v-loading="loading">
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
import VlogHeader from './components/layout/VlogHeader.vue';
import VlogAside from './components/layout/VlogAside.vue';
import VlogFooter from './components/layout/VlogFooter.vue';
import SearchModel from './components/model/SearchModel.vue';
import BackTop from './components/BackTop.vue';
import { ref, onMounted } from 'vue';

// 根据滚动改变header主题
let nav = ref('nav');
const loading = ref(false);
// let homeflag=document.getElementsByTagName('main').firstChild;
function scroll() {
    let scrollTop =
        window.pageYOffset || document.documentElementscrollTop || document.body.scrollTop;

    let scroll = scrollTop - document.body.initTop;
    document.body.initTop = scrollTop;

    const header = document.querySelector('.el-header');

    if (scroll > 0) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
        if (scrollTop > 340) {
            nav.value = 'nav-fixed';
        } else {
            nav.value = 'nav';
        }
    }
    // test 是否为网络问题
}

onMounted(() => {
    window.addEventListener('scroll', scroll);
    // window.addEventListener('wheel', wheel)
});
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
