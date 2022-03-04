<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
        <div>


        </div>
        
        <div>


        </div>
    </div>
    <div class="shop-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {},
  created() {
    console.log(this.shop);
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-top .title {
  margin-left: 10px;
  vertical-align: center;
}
</style>