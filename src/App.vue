<template>
  <n-notification-provider>
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-notification-provider>
</template>
<script lang="ts" setup name="App">
const ins = getCurrentInstance();
provide("ins", ins);
</script>
