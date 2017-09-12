<template>
  <div>
    <x-header slot="header" :title="title" :left-options="{backText: ''}"></x-header>
    <scroller :on-infinite="loadMore" ref="scroller" :noDataText="noDataText">
      <view-box ref="viewBox" :body-padding-top="'40px'" :body-padding-bottom="'0'">
        <div slot="default">
          <group >
            <cell-box v-for="(item,index) in list" :key="index" :link="{name:'event_detail',params:{title:item.eventName+(index+1)}}">
              <flexbox :gutter="0" wrap="wrap">
                <flexbox-item :span="1/4">
                  <div class="media-left">
                    <img :src="item.src" alt="">
                  </div>
                </flexbox-item>
                <flexbox-item :span="2/3" style="margin-left: 10px;">
                  <div class="media-inner">
                    <div class="item-title">
                      {{item.eventName+(index+1)}}
                    </div>
                    <p class="item-text">
                      <span class="admin">发起人：{{item.admin}}</span>
                      <span>{{item.eventInfo}}</span>
                    </p>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="clearfix event-time">
                    <span class="fl">
                      活动时间{{item.startTime}}至{{item.endTime}}
                    </span>
                    <span class="fr">
                      加入
                    </span>
                  </div>
                </flexbox-item>
              </flexbox>
            </cell-box>
          </group>
        </div>
      </view-box>
    </scroller>
  </div>
</template>
<script>
  import {ViewBox,XHeader,XButton,Group,CellBox,Flexbox,FlexboxItem} from 'vux'
  export default {
    components:{
      ViewBox,
      XHeader,
      XButton,
      Group,
      CellBox,
      Flexbox,
      FlexboxItem,
    },
    data(){
      return{
        title:'社区活动列表',
        noDataText:'我也是有底线的',
        isLoading:false,
        list:[],
      }
    },
    mounted(){
        for(let i=0;i<10;i++){
          this.list.push({
            eventName:'教师专业发展微课程大赛',
            admin:'武丽志',
            eventInfo:'制作教师专业发展微课程',
            startTime:'2017-05-26',
            endTime:'2017-09-30',
            btnText:'加入',
            src:require('../../images/index_img3.jpg')
          })
        }
    },
    methods:{
      loadMore(done){
          if(this.isLoading){return}
          if(this.list.length>30){
            this.$refs.scroller.finishInfinite(2)
            return
          }
          this.isLoading=true;
          setTimeout(()=>{
            for(let i=0;i<5;i++){
              this.list.push({
                eventName:'教师专业发展微课程大赛',
                admin:'武丽志',
                eventInfo:'制作教师专业发展微课程',
                startTime:'2017-05-26',
                endTime:'2017-09-30',
                btnText:'加入',
                src:require('../../images/index_img3.jpg')
              })
            }
            this.isLoading=false
            done()
          },1500)
      }
    }

  }
</script>
<style lang="less" scoped>
.weui-cells{
  margin-top:0;
}
.media-left{
  text-align:center;
  width:80px;
  height:80px;
  img{
    width:100%;
    height:100%;
  }
}
  .media-inner{
    .item-title{
      font-weight:bold;
      color:#212121;
      font-size:17px;
      margin-bottom:15px;
    }
    .item-text{
      span{
        display:block;
        font-size:15px;
        color:#b3b3b3;
        &.admin{
          color:#888;
        }
      }
    }
  }
  .event-time{
    padding-top:10px;
    height:40px;
    line-height:40px;
  }
</style>
