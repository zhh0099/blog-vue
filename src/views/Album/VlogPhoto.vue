<template>
  <div class="banner" :style="`background:url(${photoInfo.albumCover})` + 'center / cover no-repeat'">
      <h1 class="banner-title">{{photoInfo.albumDesc}}</h1>
    </div>
    <!-- 相册列表 -->
    <div class="blog-container">
      <div class="photo-wrap">
        <el-image
          v-for="(photo, index) of photoInfo.photoList"
          class="photo"
          :key="index"
          :src="photo"
          lazy
          :preview-src-list="[...photoInfo.photoList]"
          :preview-teleported="true"
        />
      </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const route = useRoute()
const photoId = route.params.photoId
const photoInfo = JSON.parse(sessionStorage.getItem(photoId))
</script>

<style scoped>
.photo-wrap {
  display: flex;
  flex-wrap: wrap;
}
.photo {
  margin: 3px;
  cursor: pointer;
  flex-grow: 1;
  object-fit: cover;
  height: 200px;
}
.photo-wrap::after {
  content: "";
  display: block;
  flex-grow: 9999;
}
@media (max-width: 759px) {
  .photo {
    width: 100%;
  }
}
</style>