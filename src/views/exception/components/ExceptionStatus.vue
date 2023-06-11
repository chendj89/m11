<template>
  <div class="exception-container">
    <div class="title">
      <div>{{ statusTip }}</div>
      <div class="margin-top-lg">
        <n-button type="primary" size="small" @click="backHome"> 返回首页 </n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'ExceptionStatus',
    props: {
      status: {
        type: [Number, String],
        default: '404',
      },
    },
    data() {
      return {
       
      }
    },
    computed: {
      statusTip() {
        if (this.status.toString() === '404') {
          return '您访问的页面不存在'
        } else if (this.status.toString() === '403') {
          return '您没有权限访问该页面'
        } else {
          return '您访问的页面出错啦'
        }
      },
    },
    methods: {
      backHome() {
        this.$router.replace({ path: '/' })
      },
    },
  })
</script>

<style lang="scss" scoped>
  .exception-container {
    text-align: center;
    height: 100%;
    .img-wrapper {
      width: 80%;
      margin: 0 auto;
      & > img {
        width: 100%;
      }
    }
    .title {
      margin-top: -50px;
    }
  }
</style>
