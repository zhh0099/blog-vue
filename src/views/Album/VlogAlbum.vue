<template>
  <!-- banner -->
  <div
    class="banner"
    :style="`background:url(${albumBackground})` + 'center / cover no-repeat'"
  >
    <h1 class="banner-title">相册</h1>
  </div>
  <!-- 相册内容 -->
  <div class="blog-container">
    <div class="album-container">
      <el-row>
        <el-col
          :md="11"
          :lg="12"
          :xl="12"
          v-for="(item, index) of AlbumList"
          :key="index"
          class="album-photo"
        >
          <div class="album-item">
            <el-image
              class="album-cover"
              :src="item.albumCover"
              fit="cover"
              lazy
            />
            <a @click="toPhoto(item)" class="album-wrapper">
              <div class="album-name">{{ item.albumName }}</div>
              <div class="album-desc">{{ item.albumDesc }}</div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore().state

const albumBackground = store.albumBackground

const AlbumList = [
  {
    photoId: 'photo-0001',
    albumName: '壁纸',
    albumDesc: '风景',
    albumCover:require('@/assets/img/img-6.jpg'),
    photoList: [
      require('@/assets/img/img-5.jpg'),
      require('@/assets/img/img-2.jpg'),
    ],
    
    
  },
  {
    photoId: 'photo-0002',
    albumName: '壁纸',
    albumDesc: '人物',
    albumCover:require('@/assets/img/img-7.jpg'),
    photoList: [
      require('@/assets/img/img-11.jpg'),
      require('@/assets/img/img-3.jpg'),
    ],
    
  },
  {
    photoId: 'photo-0003',
    albumName: '壁纸',
    albumDesc: '漫画',
    albumCover:require('@/assets/img/img-9.png'),
    photoList: [
      require('@/assets/img/img-12.jpg'),
      require('@/assets/img/img-13.jpg'),
    ],
    
  },
]

const router = useRouter()
function toPhoto(data) {
  router.push({
    name: 'photo',
    params: {
      photoId: data.photoId ,
    },
  })
  sessionStorage.setItem(`${data.photoId}`, JSON.stringify(data))
}
</script>

<style scoped>
.album-container {
  margin: 0 2rem 2rem 2rem;
}
@media (min-width: 760px) {
  .album-photo {
    padding: 0.5rem;
  }
}
@media (max-width: 759px) {
  .album-photo {
    padding: 0.2rem;
  }
}

.album-item {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: #000;
  border-radius: 0.5rem !important;
}
.album-cover {
  position: relative;
  max-width: none;
  width: calc(100% + 1.25rem);
  height: 250px;
  opacity: 0.8;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(-10px, 0, 0);
  object-fit: cover;
}
.album-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.8rem 2rem;
  color: #fff !important;
}
.album-item:hover .album-cover {
  transform: translate3d(0, 0, 0);
  opacity: 0.4;
}
.album-item:hover .album-name:after {
  transform: translate3d(0, 0, 0);
}
.album-item:hover .album-desc {
  opacity: 1;
  filter: none;
  transform: translate3d(0, 0, 0);
}
.album-name {
  font-weight: bold;
  font-size: 1.25rem;
  overflow: hidden;
  padding: 0.7rem 0;
  position: relative;
}
.album-name:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  transition: transform 0.35s;
  transform: translate3d(-101%, 0, 0);
}
.album-desc {
  margin: 0;
  padding: 0.4rem 0 0;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(100%, 0, 0);
}
</style>