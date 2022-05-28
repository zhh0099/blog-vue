<template>
  <!-- banner -->
  <div
    class="home-banner"
    :style="`background:url(${homeBackground})` + 'center / cover no-repeat'"
  >
    <!-- title -->
    <div class="banner-container">
      <!-- 博主名称 -->
      <h1 class="blog-title animate__animated animate__slideInDown">
        {{ userName }}
      </h1>
      <!-- 一言 -->
      <div class="blog-intro">
        {{ words }} <span class="typed-cursor">|</span>
      </div>
    </div>
    <!-- 向下滚动 -->
    <div class="scroll-down" @click="scrollDown">
      <i class="iconfont icon-more scroll-down-effects" />
    </div>
  </div>
  <!-- 主页 -->
  <el-row class="home-container" justify="center" :gutter="20">
    <!-- 主页文章 -->
    <el-col :xs="23" :sm="23" :md="14" :lg="14" :xl="14">
      <!-- 说说轮播 -->
      <div></div>
      <!-- 文章卡片 -->
      <el-row
        class="all-card article-card margin-t animate__animated animate__zoomIn"
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
      <!-- 文章卡片 -->
      <el-row
        class="all-card article-card margin-t animate__animated animate__zoomIn"
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
      <!-- 文章卡片 -->
      <el-row
        class="all-card article-card margin-t animate__animated animate__zoomIn"
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
      <!-- 文章卡片 -->
      <el-row
        class="all-card article-card margin-t animate__animated animate__zoomIn"
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
      <!-- 文章卡片 -->
      <el-row
        class="all-card article-card margin-t animate__animated animate__zoomIn"
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
      <!-- 文章卡片 -->
      <el-row
        class="
          all-card
          article-card
          margin-t margin-t
          animate__animated animate__zoomIn
        "
        style="border-radius: 12px 8px 8px 12px"
      >
        <!-- 文章封面图 -->
        <el-col :span="11" class="article-cover right-radius">
          <router-link to="article">
            <el-image class="on-hover" fit="cover" :src="articleCover" lazy />
          </router-link>
        </el-col>
        <!-- 文章信息 -->
        <el-col :span="13" class="article-wrapper">
          <div style="line-height: 1.4">
            <router-link to="article">
              {{ articleTitle }}
            </router-link>
          </div>
          <div class="article-info">
            <!-- 发表时间 -->
            <i class="iconfont icon-calendar" />
            {{ articleTime }}
            <span class="separator">|</span>
            <!-- 文章分类 -->
            <router-link to="classification">
              <i class="iconfont icon-classification" />
              {{ categoryName }}
            </router-link>
            <span class="separator">|</span>
            <!-- 文章标签 -->
            <router-link style="display: inline-block" to="'/tag" class="mr-1">
              <i class="iconfont icon-tag" />{{ tagName }}
            </router-link>
          </div>
          <!-- 文章内容 -->
          <div class="article-content">
            {{ articleContent }}
          </div>
        </el-col>
      </el-row>
    </el-col>
    <!-- 博主相关 -->
    <el-col :span="5" class="hidden-md-and-down">
      <div class="stiky_container">
        <!-- 博主信息 -->
        <el-row
          class="all-card blog-card margin-t animate__animated animate__zoomIn"
        >
          <!-- 博主头像 -->
          <div class="author-wrapper">
            <el-avatar :size="110">
              <img class="author-avatar" :src="userImg" height="85" />
            </el-avatar>
            <div
              style="
                font-size: 1.375rem;
                font-weight: 700;
                margin-top: 0.625rem;
              "
            >
              {{ userName }}
            </div>
            <div style="font-size: 0.875rem">
              {{ userInfo }}
            </div>
          </div>
          <!-- 博客信息 -->
          <div class="blog-info-wrapper">
            <div class="blog-info-data">
              <router-link to="record">
                <div style="font-size: 0.875rem">文章</div>
                <div style="font-size: 1.25rem">
                  {{ articleCount }}
                </div>
              </router-link>
            </div>
            <div class="blog-info-data">
              <router-link to="classification">
                <div style="font-size: 0.875rem">分类</div>
                <div style="font-size: 1.25rem">
                  {{ categoryCount }}
                </div>
              </router-link>
            </div>
            <div class="blog-info-data">
              <router-link to="tag">
                <div style="font-size: 0.875rem">标签</div>
                <div style="font-size: 1.25rem">{{ tagCount }}</div>
              </router-link>
            </div>
          </div>
          <!-- 收藏按钮 -->
          <a class="collection-btn" @click="tip = true">
            <i class="iconfont icon-bookmark" />
            加入书签
          </a>
          <!-- 社交信息 -->
          <div class="card-info-social">
            <a
              class="iconfont icon-QQ margin-r"
              target="_blank"
              :href="
                'http://wpa.qq.com/msgrd?v=3&uin=' + qq + '&site=qq&menu=yes'
              "
            />

            <a
              class="iconfont icon-github margin-r"
              target="_blank"
              :href="github"
            />

            <a class="iconfont icon-gitee" target="_blank" :href="gitee" />
          </div>
        </el-row>
        <!-- 公告 -->
        <el-row
          class="all-card blog-card margin-t animate__animated animate__zoomIn"
        >
          <div class="web-info-title big">
            <i class="iconfont icon-bell" style="color: #d6204b" />
            公告
          </div>
          <div style="font-size: 0.875rem">
            {{ websiteNotice }}
          </div>
        </el-row>
        <!-- 网站信息 -->
        <el-row
          class="all-card blog-card margin-t animate__animated animate__zoomIn"
        >
          <div class="web-info-title">
            <i class="iconfont icon-chart" />
            网站资讯
          </div>
          <div class="web-info">
            <div style="padding: 4px 0 0">
              运行时间:<span class="float-right">{{ time }}</span>
            </div>
            <div style="padding: 4px 0 0">
              总访问量:<span class="float-right">
                {{ viewsCount }}
              </span>
            </div>
          </div>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'

let tip = ref(false)
let time = ref('2022-05-02')


const store = useStore().state
// home
const homeBackground = store.homeBackground
const userName = store.userName
const words = store.words
// 博主卡片
const userImg = store.userImg
const userInfo = store.userInfo
const websiteNotice = store.websiteNotice
const qq = store.qq
const github = store.github
const gitee = store.gitee
const articleCount = store.articleCount
const categoryCount = store.categoryCount
const tagCount = store.tagyCount
// 文章卡片
const articleCover = store.articleCover
const articleTitle = store.articleTitle
const articleTime = store.articleTime
const categoryName = store.categoryName
const tagName = store.tagName
const articleContent = store.articleContents
const viewsCount = store.viewsCount

function scrollDown() {
  window.scrollTo({
    behavior: 'smooth',
    top: document.documentElement.clientHeight,
  })
}
</script>

<style scoped>
.home-banner {
  height: 100vh;
  animation: header-effect 1s;
}
.banner-container {
  position: absolute;
  margin-top: 44vh;
  width: 100%;
  text-align: center;
  line-height: 1.5;
  color: #eee;
}
.blog-title {
  font-size: 2.8rem;
}
.blog-intro {
  margin-top: 0.8rem;
  margin: 0 2.5rem;
  font-size: 1.8rem;
}

/* 向下滚动样式 */
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
}
.scroll-down i {
  font-size: 1.3rem;
}
.scroll-down-effects {
  display: block;
  position: relative;
  margin-bottom: 25px;
  color: #eee;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  animation: scroll-down-effect 1.5s infinite;
}
/* 向下滚动 动画 */
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    /* filter: alpha(opacity=40); */
  }
  50% {
    top: -14px;
    opacity: 1;
    /* filter: none; */
  }
  100% {
    top: 0;
    opacity: 0.4;
    /* filter: alpha(opacity=40); */
  }
}

/* 一言样式 */
.typed-cursor {
  opacity: 1;
  animation: blink 1s infinite;
}
/* 一言动画 */
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.home-container {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
/* 无线加载 */
.infinite-list {
  height: 600px;
}
/* 文章卡片样式*/
@media (min-width: 760px) {
  .article-card {
    display: flex;
    align-items: center;
    height: 280px;
    width: 100%;
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06) !important;
  }
}

@media (max-width: 759px) {
  .article-card {
    display: flex;
    height: 210px;
    width: 100%;
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06) !important;
  }
}
/* 文章封面 */
.right-radius {
  border-radius: 0px 8px 9px 0px !important;
  order: 1;
}
.article-cover {
  overflow: hidden;
  height: 100%;
}
.article-cover a {
  height: 100%;
}
.el-image {
  height: 100%;
}
/* 文章封面动画 */
.on-hover {
  transition: all 0.6s;
}
.article-card:hover .on-hover {
  transform: scale(1.1);
}
/* 文章标题 */
.article-wrapper {
  font-size: 15px;
  padding: 1.25rem 1rem 1.875rem 1.4rem;
}
.article-wrapper a {
  font-size: 1.25rem;
  color: #464444;
  transition: all 0.3s;
}
.article-wrapper a:hover {
  color: #8e8cd8;
}
/* 文章卡片中图标 */
.article-info {
  font-size: 95%;
  color: #858585;
  line-height: 2;
  margin: 0.375rem 0;
}
.article-info a {
  font-size: 95%;
  color: #858585 !important;
}
/* 文章内容 */
.article-content {
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.el-col-5 {
  max-width: 19.833333%;
  flex: 0 0 19.833333%;
}
.stiky_container {
  position: sticky;
  top: 10px;
}
.blog-card {
  display: block;
  line-height: 2;
  padding: 1.25rem 1.5rem;
}
.blog-card:hover {
  box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.07) !important;
}
.author-wrapper {
  text-align: center;
}
.blog-info-wrapper {
  display: flex;
  justify-self: center;
  padding: 0.875rem 0;
}
.blog-info-data {
  flex: 1;
  text-align: center;
}
.blog-info-data a {
  color: #1f1f1f;
}

/* 头像 */
.author-avatar {
  transition: all 0.5s;
}
.author-avatar:hover {
  transform: rotate(360deg);
}
/* 社交信息 */
.card-info-social {
  line-height: 40px;
  text-align: center;
  margin: 6px 0 -6px;
}
.card-info-social a {
  display: inline-block;
  font-size: 2.5rem;
  color: #000;
}
/* 书签按钮 */
.collection-btn {
  position: relative;
  display: block;
  text-align: center;
  z-index: 1;
  font-size: 14px;
  font-weight: 700;
  background-color: #49b1f5;
  color: #fff !important;
  height: 32px;
  line-height: 32px;
  transition-duration: 1s;
  transition-property: color;
}
.collection-btn:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #ff7242;
  content: '';
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  transition-property: transform;
  transform: scaleX(0);
  transform-origin: 0 50%;
}
.collection-btn:hover:before {
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  transform: scaleX(1);
}
.web-info-title {
  height: 2rem;
  line-height: 1rem;
  font-weight: 700;
}
.web-info-title i {
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 700;
  vertical-align: -8%;
}
/* 公告动画 只有block才能*/
.big i {
  animation: big 0.8s linear infinite;
}
@keyframes big {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>