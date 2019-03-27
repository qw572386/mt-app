<template>
  <div class="slide">
    <el-carousel :interval="3000" arrow="always" height="240px">
      <el-carousel-item v-for="(item, idx) in list" :key="idx">
        <img :src="item.img" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: "#",
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
        },
        {
          url: "#",
          img:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          url: "#",
          img:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
          url: "#",
          img:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>