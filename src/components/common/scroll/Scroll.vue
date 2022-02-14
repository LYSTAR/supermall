<template>
  <!-- ref/children 
    ref 如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象
    ref 如果是绑定在普通元素中的，那么通过this.$refs.refname获取到的是一个元素对象
  -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props:{
    probeType:{
        type:Number,
        default:0
    }
  },
  data() {
    return {
      scroll: null,
      message: '',
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
  mounted() {
    // 1.创建BScorll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: true,
    });

    //2.监听滚动的为位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position)
    });
  },
};
</script>

<style scoped>
</style>