<template>
  <div class="app">
      <transition :name="'vux-pop-'+(direction === 'forward' ? 'in' : 'out')">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      direction: state =>{
        return state.vux.direction
      }
    })
  },
}
</script>

<style lang="less">
  @import "style/common";
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 350ms;
  height: 100%;
  left:0;
  right:0;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: .5;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: .5;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: .5;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: .5;
  transform: translate3d(-100%, 0, 0);
}


</style>
