<template>
  <div>
    <view-box ref="viewBox" :body-padding-top="'40px'">
      <x-header slot="header"  :title="title" :left-options="{backText: '',preventGoBack:'true'}">
        <a slot="right" @click="join">{{msg}}</a>
      </x-header>
      <div slot="default">
        <div class="content-top">
          <div class="img_wrap">
            <img src="../../images/index_img1.jpg" alt="">
          </div>
        </div>
        <group>
          <cell v-for="i in 10" :key="i" :title="i"></cell>
        </group>
        <x-button link="/event_list">to event_list</x-button>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox,Group,Cell,XHeader,XButton} from 'vux'
  export default {
    data(){
      return{
        title:'教师科研社区',
        msg:'加入',
      }
    },
    methods:{
      join(){
        if(this.msg=='加入'){
          this.msg='待审核'
        }
      }
    },
    components:{
      ViewBox,
      XButton,
      XHeader,
      Group,
      Cell
    }
  }
</script>
<style lang="less" scoped>
.content-top{
  height:210px;
  background:#fff url(../../images/index_bg1.jpg) center top no-repeat;
  background-size:100%;
  position:relative;
  .img_wrap{
    padding-top:50px;
    text-align:center;
    img{
      width:25%;
    }
  }
}
</style>
