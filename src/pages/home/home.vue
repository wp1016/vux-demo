<template>
  <div>
    <view-box ref="viewBox" :body-padding-top="'40px'">
      <x-header slot="header"  :title="title" :left-options="{backText: '',preventGoBack:'true'}">
        <a slot="right" style="" @click="join">{{msg}}</a>
      </x-header>
      <div slot="default">
        <group>
          <cell v-for="i in 10" :title="i"></cell>
        </group>
        <x-button link="/event_list">to event_list</x-button>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox,Group,Cell,XHeader,XButton,XImg} from 'vux'
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
      XImg,
      Group,
      Cell
    }
  }
</script>
<style>

</style>
