<template>
  <div class="rightside" :style="isShow">
    <div class="setting-container" @click="show">
      <i class="iconfont icon-zhiding rightside-icon" @click="backTop"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let isShow = ref('')

function backTop() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}

function scrollToTop() {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  if (scrollTop > 20) {
    isShow.value = 'opacity: 1;transform: translateX(-38px);'
  } else {
    isShow.value = ''
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})
onUnmounted(() => {
  window.removeEventListener('scroll', this.scrollToTop)
})
</script>

<style scoped>
/*  */
.rightside {
  z-index: 4;
  position: fixed;
  display: block;
  right: -38px;
  bottom: 75px;
  transition: all 0.5s;
}

.rightside-icon{
  display: block;
  margin-bottom: 2px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid #f1f1f1;
  box-shadow: 0 2px 8px rgba(50,50,50,0.2);
  /* background-color: #49b1f5; */
  background-color: #ffffff; 
  color: #49b1f5;;
  text-align: center;
  font-size: 1.4rem;
  line-height: 25px;
  cursor: pointer;
}

.rightside-icon:hover{
  background-color: #ff7242;
}
</style>