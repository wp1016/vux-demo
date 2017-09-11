<template>
  <div>
    <view-box ref="viewBox" :body-padding-top="'40px'">
      <x-header slot="header" :title="title" :left-options="{backText: ''}"></x-header>
      <div slot="default">
        <x-button link="/home">to home</x-button>
      </div>
    </view-box>
  </div>
</template>
<script>
  import {ViewBox,XHeader,XButton} from 'vux'
  export default {
    data(){
      return{
        title:'活动详情页'
      }
    },
    components:{
      ViewBox,
      XHeader,
      XButton
    }
  }
</script>
