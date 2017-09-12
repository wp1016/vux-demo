<template>
  <div class="home">
        <x-header slot="header"  :title="title" :left-options="{backText: '',preventGoBack:'true'}">
          <a slot="right" @click="join">{{msg}}</a>
        </x-header>
    <scroller :on-infinite="loadMore" ref="scroller">
      <view-box ref="viewBox" :body-padding-top="'45px'">
        <div slot="default">
          <div class="content-top">
            <div class="top_wrap clearfix">
              <span class="fl" @click="showPop">
                <img src="../../images/code1.svg" alt="">
              </span>
              <span class="fr">访问量 112342</span>
            </div>
            <div class="img_wrap">
              <img src="../../images/index_img1.jpg" alt="">
            </div>
            <grid :rows="3">
              <grid-item  link="/event_list">
                <span slot="label">{{ '活动 5' }}</span>
              </grid-item>
              <grid-item link="/event_list">
                <span slot="label">{{ '相册 1341' }}</span>
              </grid-item>
              <grid-item link="/event_list">
                <span slot="label">{{ '资源 2409' }}</span>
              </grid-item>
            </grid>
            <group>
              <cell class="notice" is-link :title="'公告：对社区人员审核加入的说明'" link="/notice_list">
              </cell>
            </group>
          </div>
              <group>
                <cell-box v-for="(item,index) in list" :key="index">
                  <flexbox>
                    <flexbox-item :span="1/5">
                      <div class="media-left">
                        <img src="../../images/index_img2.jpg" alt="">
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="media-inner">
                        <div class="clearfix item-title">
                          <span class="fl">{{item.userName+(index+1)}}</span>
                          <span class="fr">{{item.pushTime}}</span>
                        </div>
                        <p class="item-text">
                          {{item.action}}<em>{{item.actInfo}}</em>
                        </p>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </cell-box>
                <divider v-show="nodata">没有更多数据</divider>
              </group>
        </div>
      </view-box>
    </scroller>
    <div>
      <popup v-model="show1" height="100%" :popup-style="style">
        <div class="popup1" slot="default">
            <img src="../../images/code_ewm1.jpg" width="60%" alt="">
          <span @click="showPop"><img src="../../images/close.svg" alt=""></span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {Divider,ViewBox,Group,Cell,CellBox,XHeader,XButton,Grid,GridItem,Flexbox,FlexboxItem,Loading,Popup} from 'vux'
  export default {
    components:{
      Divider,
      Grid,
      GridItem,
      ViewBox,
      XButton,
      XHeader,
      Group,
      CellBox,
      Cell,
      Flexbox,
      FlexboxItem,
      Loading,
      Popup
    },
    data(){
      return{
        title:'教师科研社区',
        msg:'加入',
        isLoading:false,
        show1:false,
        nodata:false,
        style:{
          zIndex:1001,
          background:'rgba(0,0,0,.4)'
        },
        list:[
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
          {
            userName:'王涛',
            pushTime:'05-08 09:45',
            action:'创建活动',
            actInfo:'教师特色空间案例讨论'
          },
        ]
      }
    },
    methods:{
      join(){
        if(this.msg=='加入'){
          this.msg='待审核'
        }
      },
      loadMore(done){
        if(this.isLoading){return}
        let len=this.list.length;
        if(len<30){
          setTimeout(()=>{
            for(let i=0;i<10;i++){
              this.list.push({
                userName:'王涛',
                pushTime:'05-08 09:45',
                action:'创建活动',
                actInfo:'教师特色空间案例讨论'
              })
            }
            this.isLoading=false
            done()
          },1000)
        }else{
          console.log(this.$refs.scroller)

          this.$refs.scroller.resize()
        }
      },
      showPop(){
        this.show1=!this.show1
      }
    }
  }
</script>
<style lang="less" scoped>
.content-top{
  height:auto;
  background:#fff url(../../images/index_bg1.jpg) center top no-repeat;
  background-size:100%;
  position:relative;
  .top_wrap{
    position:absolute;
    top:0;
    left:20px;
    right:20px;
    padding-top:10px;
    .fl{
      img{
        width:20px;
        height:20px;
      }
    }
    .fr{
      color:#fff;
    }
  }
  .img_wrap{
    padding-top:50px;
    text-align:center;
    img{
      width:25%;
    }
  }
}
  .weui-grids{
    &:before{
      display:none;
    }
  }
  .weui-grid{
    padding:0;
    margin-top:1em;
    &:after{
      display:none;
    }
    span{
      font-size:17px;
    }
  }
  .notice{
    color:#b3b3b3;
  }
  .media-left{
    width:60px;
    height:60px;
    img{
      width:100%;
      height:100%;
      border-radius:50%;
    }
  }
  .media-inner{
    .item-title{
      font-size:17px;
      .fl{
        color:#212121;
      }
      .fr{
        color:#b3b3b3;
      }
    }
    .item-text{
      margin-top:10px;
      height:30px;
      color:#a1a1a1;
      font-size:15px;
      overflow:hidden;
      white-space:normal;
      text-overflow:ellipsis;
      word-break:break-all;
      em{
        margin-left:10px;
        font-style:normal;
        color:#717171;
      }
    }
  }
  .popup1{
    text-align:center;
    margin-top:50%;
    span{
      display:block;
      position:absolute;
      left:50%;
      bottom:10%;
      transform:translateX(-50%);
    }
  }
</style>
