<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item
        v-for="(item, index) in banners"
        v-bind:item="item"
        v-bind:index="index"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  computed: {},
  destroyed() {},
  activated() {},
  deactivated() {},
  created() {
    this.getHomeMutidata();
  },
  mounted() {},
  methods: {
    getHomeMutidata() {
      getHomeMultidata().then((res) => {
        console.log(res.data.banner.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>