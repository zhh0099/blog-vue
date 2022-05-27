<template>
  <div v-show="chooseEmoji" class="emoji-wrapper">
    <span
      class="emoji-item"
      v-for="(value, key, index) of emojiList"
      :key="index"
      @click="addEmoji(key)"
    >
      <el-image
        :lazy-src="value"
        :src="value"
        :title="key"
        class="emoji"
        style="width: 24px; height: 24px"
      />
    </span>
  </div>
</template>

<script setup>
import EmojiList from '@/assets/js/emoji'
import { defineProps, defineEmits} from 'vue'

const props = defineProps({
  chooseEmoji: {
    type: Boolean,
  },
})

const emit=defineEmits(['addEmoji'])

function addEmoji(key) {
  emit('addEmoji',key)
}

const emojiList = EmojiList


</script>

<style scoped>
.emoji {
  user-select: none;
  margin: 0.25rem;
  display: inline-block;
  vertical-align: middle;
}
.emoji-item {
  cursor: pointer;
  display: inline-block;
}
.emoji-item:hover {
  transition: all 0.2s;
  border-radius: 0.25rem;
  background: #dddddd;
}
.emoji-wrapper {
  max-height: 150px;
  overflow-y: auto;
}
</style>
