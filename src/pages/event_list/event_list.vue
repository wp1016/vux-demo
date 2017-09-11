<template>
  <div>
    <view-box ref="viewBox" :body-padding-top="'40px'">
      <x-header slot="header" :title="title" :left-options="{backText: ''}"></x-header>
      <div slot="default">
        <x-button link="/event_detail">to event_detail</x-button>
      </div>
    </view-box>
  </div>
</template>
<script>
  import {ViewBox,XHeader,XButton} from 'vux'
  export default {
    data(){
      return{
        title:'我是活动列表页'
      }
    },
    components:{
      ViewBox,
      XHeader,
      XButton
    }
  }
</script>
<style lang="less" scoped>

</style>
