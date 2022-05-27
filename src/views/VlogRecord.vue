<template>
  <div>
    <!-- banner -->
    <div
      class="banner"
      :style="
        `background:url(${recordBackground})` + 'center / cover no-repeat'
      "
    >
      <h1 class="banner-title">记录</h1>
    </div>
    <!-- 归档列表 -->
    <div class="blog-container">
      <el-timeline class="blog-timeline">
        <!-- <el-timeline-item> 目前共计{{ count }}篇文章，继续加油 </el-timeline-item> -->
        <el-timeline-item
          v-for="(record, index) of recordList"
          :key="index"
          :timestamp="record.timestamp"
          :color="record.color"
        >
          <!-- 文章标题 -->
          <router-link to="article" style="color: #666; text-decoration: none">
            {{ record.content }}
          </router-link>
        </el-timeline-item>
      </el-timeline>
      <!-- 分页按钮 -->
      <el-pagination
        class="blog-pag"
        background
        layout="prev, pager, next"
        :total="10"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore().state

const recordBackground = store.recordBackground

const recordList = [
  {
    content: 'Event start',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Approved',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Success',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Event start',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Approved',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Success',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Event start',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Approved',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
  {
    content: 'Success',
    timestamp: '2022-05-05',
    color: '#79bbff',
  },
]
</script>

<style scoped>
.time {
  font-size: 0.75rem;
  color: #555;
  margin-right: 1rem;
}
@media (max-width: 759px) {
  .blog-timeline {
    font-size: 0.95rem;
    margin: 0 1.5rem 0 1.5rem;
  }
}
@media (min-width: 759px) {
  .blog-timeline {
    font-size: 1.2rem;
    margin: 0 3.5rem 0 3.5rem;
  }
}

.blog-pag {
  justify-content: center;
}
</style>