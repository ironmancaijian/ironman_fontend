<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, dl, dd, h1, h2, h3, h4, h5, h6, p, form{margin:0;}   
ol,li,ul{margin:0; padding:0;}
body,html{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height: 100%;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select:none;
  -webkit-overflow-scrolling: touch;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
