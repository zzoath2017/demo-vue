<template>
  <div class="layout">
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .header {
    height: 40px;
    background-color: antiquewhite;
  }
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 1025;
    background-color: blueviolet;
  }
  .main {
    position: absolute;
    left: 70px;
    padding: 0;
    padding-bottom: 20px;
    width: calc(100% - 70px);
    height: calc(100% - 50px);
    box-sizing: border-box;
    overflow: hidden;
    padding: 5px;
    // padding-top: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 0px rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
