<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${articleCover})` + 'center / cover no-repeat'"
  >
    <div class="article-info-container">
      <!-- 文章标题 -->
      <div class="article-title">{{ articleTitle }}</div>
      <div class="article-info">
        <div class="first-line">
          <!-- 发表时间 -->
          <span>
            <i class="iconfont icon-calendar" />
            发表于 {{ articleTime }}
          </span>
          <span class="separator">|</span>
          <!-- 发表时间 -->
          <span>
            <i class="iconfont icon-update" />
            更新于 {{ articleTime }}
          </span>
          <span class="separator">|</span>
          <!-- 文章分类 -->
          <span class="article-category">
            <i class="iconfont icon-classification" />
            <router-link to="classification">
              {{ categoryName }}
            </router-link>
          </span>
        </div>
        <div class="second-line">
          <!-- 字数统计 -->
          <span>
            <i class="iconfont icon-statistics" />
            字数统计: {{ wordNum }}
          </span>
          <span class="separator">|</span>
          <!-- 阅读时长 -->
          <span>
            <i class="iconfont icon-history" />
            阅读时长: {{ readTime }}
          </span>
        </div>
        <div class="third-line">
          <span class="separator">|</span>
          <!-- 阅读量 -->
          <span>
            <i class="iconfont icon-eye" /> 阅读量: {{ viewsCount }}
          </span>
          <span class="separator">|</span>
          <!-- 评论量 -->
          <span>
            <i class="iconfont icon-chat" />评论数: {{ commentCount }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- 内容 -->
  <el-row class="article-container1" justify="center" :gutter="15">
    <el-col :xs="23" :sm="23" :md="14" :lg="14" :xl="14">
      <div class="article-wrapper1">
        <article class="article-content" v-html="articleContent" />
        <!-- 版权声明 -->
        <div class="aritcle-copyright">
          <div>
            <span>文章作者：</span>
            <router-link to="/">
              {{ userName }}
            </router-link>
          </div>
          <div>
            <span>文章链接：</span>
            <a href="#" target="_blank">xxxxxxxxxxxxxx</a>
          </div>
          <div><span>版权声明：</span>转载请注明文章出处。</div>
        </div>
        <hr />
        <!-- 评论 -->
        <TalkComment></TalkComment>
      </div>
    </el-col>
    <!-- 侧边功能 -->
    <el-col :span="5" class="hidden-md-and-down">
      <div class="stiky_container">
        <!-- 文章目录 -->
        <el-row
          class="
            all-card
            blog-card
            animate__animated animate__zoomIn
            right-container
          "
        >
          <div class="right-title">
            <i class="iconfont icon-content" style="font-size: 16.8px" />
            <span style="margin-left: 10px">目录</span>
          </div>
          <div id="toc" />
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import TalkComment from '@/components/Comment/TalkComment.vue'
import tocbot from 'tocbot'
import { onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

const store = useStore().state
// 文章卡片
const articleCover = store.articleCover
const articleTitle = store.articleTitle
const articleTime = store.articleTime
const categoryName = store.categoryName
const tagName = store.tagName
const userName = store.userName
const articleContent = store.articleContent
const viewsCount = store.viewsCount

const wordNum = '1.3k'
const readTime = '3分钟'
const commentCount = 0

function getArticle() {
  tocbot.init({
    tocSelector: '#toc', //要把目录添加元素位置，支持选择器
    contentSelector: '.article-content', //获取html的元素
    headingSelector: 'h1', //要显示的id的目录
    hasInnerContainers: true,
    onClick: function (e) {
      e.preventDefault()
    },
  })
}
onMounted(() => {
  getArticle()
})
onBeforeUnmount(() => {
  tocbot.destroy()
})
</script>

<style scoped>
article :deep(p) {
  text-indent: 2em !important;
  font-size: 1.12rem;
}
article :deep(h1) {
  font-size: 1.5rem;
}
.article-info i {
  font-size: 14px;
}
.article-info {
  font-size: 14px;
  line-height: 1.9;
  display: inline-block;
}
@media (min-width: 760px) {
  .banner {
    color: #eee !important;
  }
  .article-container1 :deep(.comment-container) {
    margin: -1rem 0 0 0;
  }
  .article-info span {
    font-size: 95%;
  }
  .article-info-container {
    position: absolute;
    top: 11rem;
    width: 100%;
    text-align: center;
  }
  .second-line,
  .third-line {
    display: inline;
  }
  .article-title {
    font-size: 35px;
    font-weight: 700;
    margin: 20px 0 8px;
  }
  .pagination-post {
    display: flex;
  }
  .post {
    width: 50%;
  }
  .recommend-item {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 3px;
    width: calc(33.333% - 6px);
    height: 200px;
    background: #000;
    vertical-align: bottom;
  }
}
@media (max-width: 759px) {
  .banner {
    color: #eee !important;
    height: 360px;
  }
  .article-info span {
    font-size: 90%;
  }
  .separator:first-child {
    display: none;
  }
  .article-info-container {
    position: absolute;
    top: 11rem;
    padding: 0 2.4rem;
    /* width: 100%; */
    color: #eee;
    text-align: left;
  }
  .article-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .post {
    width: 100%;
  }
  .pagination-post {
    display: block;
  }
  .recommend-item {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 3px;
    width: calc(100% - 4px);
    height: 150px;
    margin: 2px;
    background: #000;
    vertical-align: bottom;
  }
}
.article-operation {
  display: flex;
  align-items: center;
}
.article-category a {
  color: #fff !important;
}
.aritcle-copyright {
  position: relative;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 0.875rem;
  line-height: 2;
  padding: 0.625rem 1rem;
  border: 1px solid #eee;
}
.aritcle-copyright span {
  color: #49b1f5;
  font-weight: bold;
}
.aritcle-copyright a {
  text-decoration: underline !important;
  color: #99a9bf !important;
}
.aritcle-copyright:before {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: #49b1f5;
  content: '';
}
.aritcle-copyright:after {
  position: absolute;
  top: 0.95rem;
  right: 0.95rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5em;
  background: #fff;
  content: '';
}

hr {
  position: relative;
  margin: 40px auto;
  border: 2px dashed #d2ebfd;
  width: calc(100% - 4px);
}

.stiky_container {
  position: sticky;
  top: 10px;
}
.right-container {
  padding: 20px 24px;
  font-size: 14px;
}
.right-title {
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 2;
  font-size: 16.8px;
  padding: 2rem 0 1rem 0 1rem;
}
.right-title i {
  font-weight: bold;
}
#toc {
  width: 100%;
}
</style>