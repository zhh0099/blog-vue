<template>
  <el-dialog v-model="search" title="文章搜索">
    <div class="search-wrapper">
      <!-- 输入框 -->
      <div class="search-input-wrapper">
        <i class="iconfont icon-search" />
        <input v-model="keywords" placeholder="输入文章标题或内容..." />
      </div>
      <hr class="divider" />
      <!-- 搜索结果 -->
      <div class="search-result-wrapper">
        
        <!-- <ul>
          <li class="search-reslut" v-for="item of articleList" :key="item.id">
            
            <a @click="goTo(item.id)" v-html="item.articleTitle" />
            
            <p
              class="search-reslut-content text-justify"
              v-html="item.articleContent"
            />
          </li>
        </ul> -->
        <!-- 搜索结果不存在提示 -->
        <!-- <div
          v-show="flag && articleList.length == 0"
          style="font-size: 0.875rem"
        >
          找不到您查询的内容：{{ keywords }}
        </div> -->
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref,computed,watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore().state
// 控制搜索模块显示
let search = computed({
  get() {
    return store.searchFlag
  },
  set(value) {
    store.searchFlag = value
  },
})

let keywords=ref('')

</script>

<style scoped>
.search-wrapper {
  padding: 1rem 1.8rem 1.25rem 1.25rem;
}
.search-input-wrapper {
  display: flex;
  padding: 5px;
  height: 2rem;
  width: 100%;
  border: 2px solid #8e8cd8;
  border-radius: 2rem;
}
.search-input-wrapper i {
  font-size: 2rem;
}
.search-input-wrapper input {
  width: 90%;
  margin-left: 5px;
  font-size: 1.1rem;
  border: none;
  outline: none;
}

@media (max-width: 959px) {
  .search-result-wrapper {
    height: 65vh;
    overflow: auto;
  }
}
@media (min-width: 960px) {
  .search-result-wrapper {
    width: 593px;
    height: 65vh;
    overflow: auto;
  }
}
.search-reslut a {
  color: #555;
  font-weight: bold;
  border-bottom: 1px solid #999;
  text-decoration: none;
}
.search-reslut-content {
  color: #555;
  cursor: pointer;
  border-bottom: 1px dashed #ccc;
  padding: 5px 0;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.divider {
  margin: 20px 0;
  border: 2px dashed #7dbae6;
  /* width: 100% !important; */
}
</style>