<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${talkBackground})` + 'center / cover no-repeat'"
  ></div>
  <!-- 说说内容 -->
  <div class="blog-container">
    <div class="talk-wrapper">
      <div class="user-info-wrapper">
        <el-avatar :size="36" class="user-avatar" :src="talkInfo.avatar">
        </el-avatar>
        <div class="user-detail-wrapper">
          <div class="user-nickname">
            {{ talkInfo.nickname }}
            <i class="iconfont icon-certify user-sign" />
          </div>
          <!-- 发表时间 -->
          <div class="time">
            {{ talkInfo.createTime }}
            <span class="top" v-if="talkInfo.isTop == 1">
              <i class="iconfont iconzhiding" /> 置顶
            </span>
          </div>
          <!-- 说说信息 -->
          <div class="talk-content" v-html="talkInfo.content" />
          <!-- 图片列表 -->
          <el-row class="talk-images" v-if="talkInfo.imgList">
            <el-col
              :xs="5"
              :sm="4"
              :md="5"
              :lg="5"
              :xl="5"
              v-for="(img, index) of talkInfo.imgList"
              :key="index"
            >
              <el-image
                class="images-items"
                :src="img"
                lazy
                :preview-src-list="[img]"
                :preview-teleported="true"
              />
            </el-col>
          </el-row>
          <!-- 说说操作 -->
          <div class="talk-operation">
            <div class="talk-operation-item">
              <i
                class="iconfont icon-like like-btn"
                @click="talkInfo.likeCount++"
              />
              <div class="operation-count">
                {{ talkInfo.likeCount == null ? 0 : talkInfo.likeCount }}
              </div>
            </div>
            <div class="talk-operation-item comments">
              <i class="iconfont icon-comments" />
              <div class="operation-count">
                {{ talkInfo.commentCount == null ? 0 : talkInfo.commentCount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TalkComment></TalkComment>
  </div>
  
</template>

<script setup>
import TalkComment from '@/components/Comment/TalkComment.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store =useStore()
const talkBackground = store.state.talkBackground

const route=useRoute()
const talkid=route.params.talkId
const talkInfo = JSON.parse(sessionStorage.getItem(talkid))

</script>

<style scoped>
/* 说说列表 */

@media (max-width: 759px) {
  .blog-container {
    padding: 2rem 0 2rem 0;
  }
  .talk-wrapper {
    margin: 0 1rem 0 1rem;
    padding: 10px 10px;
  }
}
@media (min-width: 760px) {
  .blog-container {
    padding: 3rem 0 3rem 0;
  }
  .talk-wrapper {
    margin: 0 2.5rem 0 2.5rem;
    padding: 16px 20px;
  }
}

.talk-wrapper {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 3px 8px 6px rgb(7 17 27 / 6%);
  transition: all 0.3s ease 0s;
}
.talk-wrapper:hover {
  box-shadow: 0 5px 10px 8px rgb(7 17 27 / 16%);
  transform: translateY(-3px);
}
.user-info-wrapper {
  width: 100%;
  display: flex;
}

/* 用户头像 */
.user-avatar {
  border-radius: 50%;
}
.user-avatar {
  transition: all 0.5s;
}
.user-avatar:hover {
  transform: rotate(360deg);
}
.user-detail-wrapper {
  flex: 1;
  margin-left: 10px;
  width: 0;
}
.user-nickname {
  font-size: 15px;
  font-weight: bold;
  color: #454545;
}
.user-sign {
  margin-left: 1px;
  font-size: 30px;
  color: rgb(255, 165, 30);
  vertical-align: -22%;
}
.time {
  color: #999;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 700;
}
.top {
  color: #ff7242;
  margin-left: 10px;
}
.talk-content {
  margin-top: 8px;
  font-size: 14px;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all;
}
.talk-images {
  padding: 0 10px;
  margin-top: 8px;
}
.images-items {
  cursor: pointer;
  border-radius: 4px;
}
.talk-operation {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.talk-operation-item {
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-size: 12px;
}
.talk-operation-item i {
  font-size: 23px;
}
/* 评论样式 */
.comments {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 43px;
  height: 20px;
  transition: all 0.2s ease-in;
}
.comments i {
  position: absolute;
}
.comments .operation-count {
  position: absolute;
  float: left;
  left: 22px;
  top: 2px;
}
.talk-operation a {
  color: #4c4948;
}
.operation-count {
  margin-left: 4px;
}
.load-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-wrapper button {
  background-color: #49b1f5;
  color: #fff;
}
.like-btn:hover {
  color: #eb5055 !important;
}
</style>