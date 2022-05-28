<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${classBackground})` + 'center / cover no-repeat'"
  >
    <h1 class="banner-title">分类</h1>
  </div>
  <!-- 分类列表 -->
  <div>
    <div class="blog-container">
      <div class="category-container">
        <div class="category-title">分类 - {{ count }}</div>
        <ul class="category-list">
          <li
            class="category-list-item"
            v-for="(item, index) of categoryList"
            :key="index"
          >
            <router-link to="classification">
              {{ item.categoryName }}
              <span class="category-count">({{ item.articleCount }})</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore().state

const classBackground = store.classBackground
const categoryList = [
  {
    categoryName: '项目介绍',
    articleCount: 1,
  },
  {
    categoryName: '生活随笔',
    articleCount: 1,
  },
  {
    categoryName: '学习笔记',
    articleCount: 1,
  },
]
const count = categoryList.length
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
}
.category-container {
  margin: 1rem 3rem 3rem 3rem;
}
.category-title {
  text-align: center;
  font-weight: 700;
}
@media (max-width: 759px) {
  a {
    font-size: 2rem;
  }
  div :deep(.blog-container)  {
    margin: 7rem 0.4rem 0rem 0.4rem !important;
  }
  .category-title {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
  }
  .category-count {
    font-size: 1.8rem;
  }
}
@media (min-width: 759px) {
  a {
    font-size: 1.2rem;
  }
  .category-title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
  }
  .category-count {
    font-size: 0.75rem;
  }
}
.category-list {
  margin: 2rem 1.8rem 0rem 1.8rem;
  list-style: none;
}
.category-list-item {
  padding: 0.5rem 1.8rem 1rem 0;
}
.category-list-item:before {
  display: inline-block;
  position: relative;
  left: -0.75rem;
  top: 0.1rem;
  width: 10px;
  height: 10px;
  border: 0.2rem solid #49b1f5;
  border-radius: 50%;
  background: #fff;
  content: '';
  transition-duration: 0.3s;
}
.category-list-item:hover:before {
  border: 0.2rem solid #ff7242;
}
.category-list-item a:hover {
  transition: all 0.3s;
  color: #8e8cd8;
}
.category-list-item a:not(:hover) {
  transition: all 0.3s;
}
.category-count {
  margin-left: 0.5rem;
  color: #858585;
}
</style>