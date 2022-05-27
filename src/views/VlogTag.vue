<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${tagBackground})` + 'center / cover no-repeat'"
  >
    <h1 class="banner-title">标签</h1>
  </div>
  <!-- 标签列表 -->
  <div>
    <div class="blog-container">
      <div class="tag-container">
        <div class="tag-cloud-title">标签 - {{ count }}</div>
        <div class="tag-cloud">
          <router-link
            :style="{ 'font-size': Math.floor(Math.random() * 10) + 18 + 'px' }"
            v-for="(item, index) of tagList"
            :key="index"
            to="tag"
          >
            {{ item.tagName }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore().state
const tagBackground = store.tagBackground

const tagList = [
  {
    tagName: 'vue',
  },
  {
    tagName: 'https',
  },
  {
    tagName: '项目',
  },
  {
    tagName: '生活',
  },
  {
    tagName: '2022',
  },
  {
    tagName: '随笔',
  },
]

const count = tagList.length
</script>

<style scoped>
.tag-container {
  margin-bottom: 2.7rem;
}
.tag-cloud-title {
  line-height: 2;
  font-weight: 700;
  text-align: center;
}
@media (max-width: 759px) {
  div :deep(.blog-container)  {
    margin: 7rem 0.4rem 0rem 0.4rem !important;
  }
  .tag-cloud-title {
    font-size: 23px;
  }
  .tag-cloud a {
    font-size: 3rem !important;
  }
}
@media (min-width: 760px) {
  .tag-cloud-title {
    font-size: 2.5rem;
  }
  .tag-cloud a {
    font-size: 2rem !important;
  }
}
.tag-cloud {
  text-align: center;
}
.tag-cloud a {
  color: #616161;
  display: inline-block;
  text-decoration: none;
  padding: 0 1rem;
  line-height: 2;
  transition: all 0.3s;
}
.tag-cloud a:hover {
  color: #03a9f4 !important;
  transform: scale(1.1);
}
</style>