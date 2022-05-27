<template>
  <div class="comment-container">
    <div class="comment-title"><i class="iconfont icon-chat" />评论</div>
    <!-- 评论框 -->
    <div class="comment-wrapper">
      <div style="display: flex; width: 100%">
        <el-avatar :size="36" :src="touristAvatar"> </el-avatar>
        <div style="width: 100%">
          <div class="comment-input">
            <textarea
              class="comment-textarea"
              v-model="commentContent"
              placeholder="留下点什么吧..."
              auto-grow
              dense
            />
          </div>
          <!-- 操作按钮 -->
          <div class="emoji-container">
            <span
              :class="chooseEmoji ? 'emoji-btn-active' : 'emoji-btn'"
              @click="chooseEmoji = !chooseEmoji"
            >
              <i class="iconfont icon-emoji" style="font-size: 1.7rem" />
            </span>
            <button
              @click="insertComment"
              class="upload-btn v-comment-btn"
              style="margin-left: auto"
            >
              提交
            </button>
          </div>
          <!-- 表情框 -->
          <CommentEmoji :chooseEmoji="chooseEmoji" @addEmoji="addEmoji" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import CommentReplyReply from './CommentReply.vue'
import CommentPaging from './CommentPaging.vue'
import CommentEmoji from './CommentEmoji.vue'
import EmojiList from '@/assets/js/emoji'
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'

const store = useStore()
const touristAvatar = store.state.userImg

const chooseEmoji = ref(false)

const commentContent = ref('')
function addEmoji(key) {
  commentContent.value += key
}

const commentList = reactive([])
</script>

<style scoped>
@media (max-width: 759px) {
  .comment-container {
    margin: 0 1.5rem 0 1rem;
  }
}
@media (min-width: 760px) {
  .comment-container {
    margin: 0 2.5rem 0 2.5rem;
  }
}
.comment-wrapper {
  margin-top: 20px;
  display: flex;
  padding: 16px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 3px 8px 6px rgb(7 17 27 / 6%);
  transition: all 0.3s ease 0s;
}
.comment-wrapper:hover {
  box-shadow: 0 5px 10px 8px rgb(7 17 27 / 16%);
  transform: translateY(-3px);
}
.comment-title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 40px;
  margin-top: 20px;
}
.comment-title i {
  font-size: 1.5rem;
  margin-right: 5px;
}
.count {
  padding: 5px;
  line-height: 1.75;
  font-size: 1.25rem;
  font-weight: bold;
}
.comment-meta {
  margin-left: 0.8rem;
  width: 100%;
  border-bottom: 1px dashed #f5f5f5;
}
.reply-meta {
  margin-left: 0.8rem;
  width: 100%;
}
.comment-user {
  font-size: 15px;
  line-height: 1.75;
}
.comment-user a {
  color: #1abc9c !important;
  font-weight: 500;
  transition: 0.3s all;
}
.comment-nickname {
  text-decoration: none;
  color: #1abc9c !important;
  font-weight: 500;
}
.comment-info {
  line-height: 1.75;
  font-size: 0.75rem;
  color: #b3b3b3;
}
.reply-btn {
  cursor: pointer;
  float: right;
  color: #ef2f11;
}
.comment-content {
  font-size: 0.875rem;
  line-height: 1.75;
  padding-top: 0.625rem;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all;
}
.comment-avatar {
  transition: all 0.5s;
}
.comment-avatar:hover {
  transform: rotate(360deg);
}
.like {
  cursor: pointer;
  font-size: 0.875rem;
}
.like:hover {
  color: #eb5055;
}
.like-active {
  cursor: pointer;
  font-size: 0.875rem;
  color: #eb5055;
}
.load-wrapper {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-wrapper button {
  background-color: #49b1f5;
  color: #fff;
}
</style>