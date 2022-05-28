<template>
  <el-drawer v-model="drawer" :with-header="false" size="33%">
    <!-- 博主介绍 -->
    <div class="blogger-info">
      <el-avatar :size="110" :src="userImg" />
    </div>
    <!-- 博客信息 -->
    <div class="blog-info-wrapper">
      <div class="blog-info-data">
        <router-link to="/record">
          <div class="data-article">文章</div>
          <div class="data-num">9</div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/classification">
          <div class="data-article">分类</div>
          <div class="data-num">9</div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/tag">
          <div class="data-article">标签</div>
          <div class="data-num">9</div>
        </router-link>
      </div>
    </div>
    <hr />
    <!-- 页面导航 -->
    <div class="menu-container" @click="toViews">
      <div class="menus-item">
        <router-link to="/">
          <i class="iconfont icon-home" /> 首页
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/record">
          <i class="iconfont icon-record" /> 记录
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/album">
          <i class="iconfont icon-album" /> 相册
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/talks">
          <i class="iconfont icon-talk" /> 说说
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/classification">
          <i class="iconfont icon-classification" /> 分类
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/tag">
          <i class="iconfont icon-tag" /> 标签
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/link">
          <i class="iconfont icon-link" /> 友链
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/about">
          <i class="iconfont icon-about" /> 关于
        </router-link>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { computed, onUpdated } from 'vue'
import { useStore } from 'vuex'


const store = useStore().state

const userImg = store.userImg

// 控制抽屉显示
let drawer = computed({
  get() {
    return store.drawerFlag
  },
  set(value) {
    store.drawerFlag = value
  },
})
// 跳转后
function toViews() {
  if (drawer.value) drawer.value = !drawer.value
}
// body滚动条锁定
onUpdated(() => {
  if (drawer.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<style scoped>
a {
  color: #4c4948;
}
.blog-info-wrapper {
  display: flex;
  align-items: center;
  padding: 12px 2px 0;
}
.data-article {
  font-weight: 700;
}
/* .data-num {
  font-size: 1rem;
} */
@media (max-width: 759px) {
  hr {
    margin: 10px 0;
    pad: 0;
    border: 2px dashed #7dbae6;
  }
  .blogger-info {
    display: block;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    text-align: center;
  }
  .blog-info-data {
    flex: 1;
    line-height: 2;
    font-size: 1.8rem;
    text-align: center;
  }
  .menu-container {
    padding: 1rem 0 0 0;
    animation: 0.8s ease 0s 1 normal none running sidebarItem;
  }
  .menus-item {
    padding: 0px 0px 2rem 0.7rem;
  }
  .menus-item a {
    display: block;
    line-height: 2;
    font-weight: 700;
    font-size: 1.8rem;
  }
  .menus-item i {
    margin-right: 2rem;
    font-size: 2rem;
    font-weight: 400;
  }
}
@media (min-width: 760px) {
  hr {
    margin: 18px 0;
    pad: 0;
    border: 2px dashed #7dbae6;
  }
  .blogger-info {
    display: block;
    padding: 10px 30px 20px 30px;
    text-align: center;
  }
  .blog-info-data {
    flex: 1;
    line-height: 2;
    font-size: 1rem;
    text-align: center;
  }
  .menu-container {
    padding: 0px 0px 5px 0px;
    animation: 0.8s ease 0s 1 normal none running sidebarItem;
  }
  .menus-item {
    padding: 0px 0px 15px 25px;
  }
  .menus-item a {
    display: block;
    line-height: 2;
    font-size: 1.13rem;
  }
  .menus-item i {
    margin-right: 2rem;
    font-size: 1.2rem;
  }
}

@keyframes sidebarItem {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>