<template>
  <div class="footer-wrap">
      <div>
        这里是Footer
      </div>
      <a href=" ">
        这里还是Footer
      </a>
    </div>
</template>

<script setup>
</script>

<style scoped>
.footer-wrap {
  /* width: 100%; */
  line-height: 2;
  position: relative;
  padding: 40px 10px;
  color: #eee;
  font-size: 14px;
  text-align: center;
  /* 渐变背景 */
  background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 10s ease infinite;
}
.footer-wrap a {
  color: #eee !important;
}
@keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>