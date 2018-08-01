<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    $route:function(){
      if(this.$route.meta.cname){
        document.title = this.$route.meta.cname
      }
    }
  },
  created(){
    // this.$http.post('/weixin',{url:encodeURIComponent(location.href.split('#')[0])}).then((res)=>{
    //   var data = res.data.data
    //   // console.log(data)
    //   this.$wx.config({
    //     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: data.appId, // 必填，公众号的唯一标识
    //     timestamp: data.timestamp, // 必填，生成签名的时间戳
    //     nonceStr: data.nonceStr, // 必填，生成签名的随机串
    //     signature: data.signature,// 必填，签名，见附录1
    //     jsApiList: [
    //       'onMenuShareAppMessage',
    //       'onMenuShareTimeline'
    //     ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //   })
      

    // }).catch(err=>{

    // })
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_737103_d5xsy7y4rg.css');
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
body, dl, dd, h1, h2, h3, h4, h5, h6, p, form{margin:0;}   
ol,li,ul{margin:0; padding:0;}
body,html{
  font-family:'Lato',"Wawati SC","Microsoft YaHei","黑体","宋体",sans-serif;
  height: 100%;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select:none;
  -webkit-overflow-scrolling: touch;
}
#app {
  background: #fff;
    min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pos{
  position: absolute;
  top:0;
}
</style>
