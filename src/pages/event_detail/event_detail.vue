<template>
  <div>
    <x-header slot="header" :title="title" :left-options="{backText: ''}"></x-header>
    <view-box ref="viewBox" :body-padding-top="'40px'" :body-padding-bottom="'0'">
      <div slot="default">
        <tab :line-width="2" v-model="index">
          <tab-item v-for="(tab,idx) in tabs" :selected="tab===tabText" :key="tab.id" @click="toggle(idx)">
            {{tab}}
          </tab-item>
        </tab>
        <swiper v-model="index" :show-dots="false" style="height: 100%;">
          <swiper-item>
            <scroller :on-infinite="loadMore1" ref="scroller1" :noDataText="noDataText">
              <group>
                <card v-for="card in sList[0]" :key="card.id">
                  <div slot="header">
                  <span class="list-title">
                    <img :src="card.src" alt="">
                    {{card.userName}}
                  </span>
                  </div>
                  <div slot="content">
                    <h3></h3>
                    <p></p>
                  </div>
                  <div slot="footer"></div>
                </card>
              </group>
            </scroller>
          </swiper-item>
          <swiper-item>
            <scroller :on-infinite="loadMore2" ref="scroller2" :noDataText="noDataText">

            </scroller>
          </swiper-item>
          <swiper-item>
            <scroller :on-infinite="loadMore3" ref="scroller3" :noDataText="noDataText">

            </scroller>
          </swiper-item>
          <swiper-item>
            <scroller :on-infinite="loadMore4" ref="scroller4" :noDataText="noDataText">

            </scroller>
          </swiper-item>
        </swiper>
      </div>
    </view-box>
  </div>
</template>

<script>
    import {ViewBox, XHeader, XButton, Tab, TabItem, Swiper, SwiperItem,Card,Flexbox,FlexboxItem,Group} from 'vux'
    export default {
        components: {
            ViewBox,
            XHeader,
            XButton,
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            Card,
          Flexbox,
          FlexboxItem,
          Group
        },
        data() {
            return {
              title: '',
              noDataText:'我也是有底线的',
              isLoading:false,
              tabText:'交流讨论',
              tabs:['交流讨论','活动文章','活动资源','活动相册'],
              sList:[
                [
                  {
                    src:require('../../images/index_img4.jpg'),
                    userName:'刘淇红',
                    content:'众所周知一群优秀的班干部绝对可以帮助班主任分担很多工作，但是班干的素质能力一定要听天但是班干的素质能力一定要听天，但是班干的素',
                    title:'班干部如何进行培养',
                    pushTime:'2017-04-05 12:28:22',
                    disCount:4,
                    viewCount:15
                  }
                ],
                [
                  {
                    content:'活动文章'
                  }
                ],
                [
                  {
                    content:'活动资源'
                  }
                ],
                [
                  {
                    content:'活动相册'
                  }
                ]
              ],
              index:0
            }
        },
        methods: {
            loadMore1(done) {

            },
          loadMore2(done) {

          },
          loadMore3(done) {

          },
          loadMore4(done) {

          },
          toggle(idx){
              this.tabText=this.tabs[idx]
          }
        },
        mounted() {
            this.title = this.$route.params.title
          for(let i=0;i<10;i++){
              this.sList.push({
                src:require('../../images/index_img4.jpg'),
                userName:'刘淇红',
                content:'众所周知一群优秀的班干部绝对可以帮助班主任分担很多工作，但是班干的素质能力一定要听天但是班干的素质能力一定要听天，但是班干的素',
                title:'班干部如何进行培养',
                pushTime:'2017-04-05 12:28:22',
                disCount:4,
                viewCount:15
              })
          }
        }
    }
</script>

<style lang="less" scoped>
.list-title{
  padding:0 10px;
  color:#b3b3b3;
  font-size:15px;
  img{
    width:40px;
    height:40px;
    border-radius:50%;
    vertical-align:middle;
    margin-right:10px;
  }
}
</style>
