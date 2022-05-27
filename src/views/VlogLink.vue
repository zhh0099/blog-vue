<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${linkBackground})` + 'center / cover no-repeat'"
  >
    <h1 class="banner-title">友链</h1>
  </div>
  <!-- 链接列表 -->
  <div class="blog-container">
    <div class="link-container">
      <div class="link-title">
        <i class="iconfont icon-link link-icon" />大佬链接
      </div>
      <el-row class="link-content">
        <el-col
          class="link-wrapper"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="8"
          :xl="8"
          v-for="item of friendLinkList"
          :key="item.id"
        >
          <a :href="item.linkAddress" target="_blank">
            <el-avatar :size="65" :src="item.linkAvatar" class="link-avatar" />
            <div class="link-friend">
              <div class="link-name">{{ item.linkName }}</div>
              <div class="link-intro">{{ item.linkIntro }}</div>
            </div>
          </a>
        </el-col>
      </el-row>
      <!-- 说明 -->
      <div class="link-title">
        <i class="iconfont icon-linkmore link-icon" /> 添加友链
      </div>
      <blockquote>
        <div>名称：{{ userName }}</div>
        <div>简介：{{ userInfo }}</div>
        <div>头像：{{ userAvatar }}</div>
      </blockquote>
      <div class="margin-t margin-b">需要交换友链的可在下方留言💖</div>
      <blockquote>
        友链信息展示需要，你的信息格式要包含：名称、介绍、链接、头像
      </blockquote>
    </div>

    <!-- 评论 -->
    <!-- <Comment :type="this.commentType" /> -->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore().state
const linkBackground = store.linkBackground
const userName = store.userName
const userInfo = store.userInfo
const userAvatar = store.userImg

const friendLinkList = [
  {
    id: '0001',
    linkAddress: 'https://gahotx.cn/',
    linkAvatar: userAvatar,
    linkName: 'Just Myself-1',
    linkIntro: 'just do it!',
  },
  {
    id: '0002',
    linkAddress: 'https://gahotx.cn/',
    linkAvatar: userAvatar,
    linkName: 'Just Myself-2',
    linkIntro: 'never say never',
  },
  {
    id: '0003',
    linkAddress: 'https://gahotx.cn/',
    linkAvatar: userAvatar,
    linkName: 'Just Myself-3',
    linkIntro: 'never say never',
  },
]
</script>

<style scoped>
@media (min-width: 760px) {
  .blog-container {
    padding: 2rem 0 1.7rem 0;
  }
  /* link模块容器 */
  .link-container {
    margin: 0 2.6rem 2em 2.6rem;
  }
}
@media (max-width: 759px) {
  .blog-container {
    padding: 1.3rem 0 0.5rem 0;
  }
  /* link模块容器 */
  .link-container {
    margin: 0 1.3rem 2em 1.3rem;
  }
}
/* link模块*/

/* link图标 */
.link-icon {
  margin-right: 5px;
  font-size: 30px;
  color: #54aef7;
  vertical-align: -5%;
}
/* link标题 */
.link-title {
  font-size: 21px;
  font-weight: 700;
  line-height: 2;
  color: #344c67;
}
/* link主要内容 */
.link-wrapper {
  position: relative;
  margin-bottom: 3px;
  padding: 15px;
  transition: all 0.3s;
  border-radius: 8px;
}
.link-wrapper a {
  display: flex;
  padding-left: 10px;
  height: 100%;
  width: 100%;
  color: #333;
  text-decoration: none;
}
/* 头像 */
.link-avatar {
  min-width: 65px;
  transition: all 0.5s;
}

/* @media (max-width: 759px) {
  .link-avatar {
    margin-left: 30px;
  }
} */
/* fiend信息 */
.link-friend {
  z-index: 100;
  width: 100%;
}
/* 姓名 */
.link-name {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  z-index: 1000;
}
/* 简介 */
.link-intro {
  text-align: center;
  padding-top: 16px;
  max-height: 50px;
  font-size: 14px;
  color: #1f2d3d;
  width: 100%;
}
.link-wrapper:hover a {
  color: #fff;
}
.link-wrapper:hover .link-intro {
  color: #fff;
}
.link-wrapper:hover .link-avatar {
  transform: rotate(360deg);
}

.link-wrapper:hover {
  box-shadow: 0 2px 20px #49b1f5;
}
.link-wrapper:hover:before {
  transform: scale(1);
}
.link-wrapper:before {
  position: absolute;
  border-radius: 8px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #49b1f5 !important;
  content: '';
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  transition-property: transform;
  transform: scale(0);
}
/* 引用 */
blockquote {
  line-height: 2;
  padding: 10px 1rem !important;
  font-size: 15px;
  border-radius: 4px;
  border-left: 0.2rem solid #49b1f5;
  background-color: #ecf7fe;
}
</style>
