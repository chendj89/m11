<template>
  <div style="padding: 4px 10px">
    <div>123</div>
    <NButton type="success" size="small" @click="success">哈哈</NButton>
  </div>
</template>

<script setup lang="ts" name="uMsg">
const { data = {}, onClose = () => {} } = defineProps(['data', 'onClose'])
const params = ref(data)
const success = () => {
  onClose({msg:"哈哈，学府"})
}
</script>

<style scoped></style>
