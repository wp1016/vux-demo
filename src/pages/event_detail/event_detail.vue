<template>
  <div>
    <x-header slot="header" :title="title" :left-options="{backText: ''}"></x-header>

    <view-box ref="viewBox" :body-padding-top="'40px'" :body-padding-bottom="'0'">
      <div slot="default">
        <tab :line-width="2">
          <tab-item selected>交流讨论</tab-item>
          <tab-item>活动文章</tab-item>
          <tab-item>活动资源</tab-item>
          <tab-item>活动相册</tab-item>
        </tab>
        <transition>
        </transition>
      </div>
    </view-box>
  </div>
</template>
<script>
  import {ViewBox,XHeader,XButton,Tab,TabItem} from 'vux'
  export default {
    data(){
      return{
        title:''
      }
    },
    mounted(){
      this.title=this.$route.params.title
    },
    components:{
      ViewBox,
      XHeader,
      XButton,
      Tab,
      TabItem
    }
  }
</script>
<style lang="less" scoped>
</style>
