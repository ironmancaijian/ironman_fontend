<template>
  <div class="hello" :style="{'backgroundImage':`url(	https://timefly-1256233327.cos.ap-shanghai.myqcloud.com/${bg})`}">
    <div class="datetime">
      <p class="date" ref="datetime" >{{time.slice(0,10)}}</p>
      <p class="time" ref="hhss">{{time.slice(10,19)}}</p>
    </div>
    <!-- <my-time/> -->
    <div class="change_header" @click="change">
      <img :src="infoList[asideIndex].header" alt="">
      <span>{{infoList[asideIndex].name}}</span>
    </div>
    <div class="header" @click="enterHome">
      <img :src="infoList[centerIndex].header" alt="" ref="cheader">
      <p>{{infoList[centerIndex].name}}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import anime from 'animejs'
import myTime from '@/plugin/time'
export default {
  name: 'HelloWorld',
  components:{
    myTime
  },
  data () {
    return {
       time:"",
       infoList:[{
          header:'https://timefly-1256233327.cos.ap-shanghai.myqcloud.com/header.jpg',
          name:"TimeFly"
        },{
         header:'https://timefly-1256233327.cos.ap-shanghai.myqcloud.com/lulu.jpg',
         name:'璐'
       }],
       asideIndex:1,
       centerIndex:0,
       shadow:10,
       animFlag:true,
       TIME:null,
       bg:'bg3.jpg'
    }
  },
  methods:{
    change(){
      anime({
        targets: this.$refs.cheader,
        scale: [0.1,1],
        duration: 800,
      })
      if(this.asideIndex ==1){
        this.asideIndex = 0
        this.centerIndex = 1
        this.bg = 'star.jpg'
        document.title = '个人主页-璐'
      }else{
        this.asideIndex = 1
        this.centerIndex = 0
        this.bg = 'bg3.jpg'
        document.title = '个人主页-Timefly'
      }
    },
    enterHome () {
      if(this.centerIndex == 0){
        this.$router.push('/cj')
      }else{
        this.$router.push('xyl')
      }
    },
    commit(){
      this.$http.post('/user',{
        name:this.name
      }).then(res=>{
        
      })
    }
  },
  destroyed () {
    clearInterval(this.TIME)
  },
  mounted(){
    this.TIME = setInterval(()=>{
      this.time = moment().format('YYYY-MM-DD HH:mm:ss')
      if(this.animFlag){
        this.shadow++
      }else{
        this.shadow--
      }
      if(this.shadow<=10){
        this.animFlag = true
      }
      if(this.shadow>20){
        this.animFlag = false
      }
      // console.log(this.shadow)
      this.$refs.datetime.style.textShadow = `${this.shadow-9}px ${this.shadow-9}px ${this.shadow}px rgba(10, 175, 230, 1),0 0 20px rgba(10, 175, 230, 0)`
      this.$refs.hhss.style.textShadow = `${this.shadow-9}px ${this.shadow-9}px ${this.shadow}px rgba(10, 175, 230, 1),0 0 20px rgba(10, 175, 230, 0)`
    },1000)
  },
  created(){
    this.time = moment().format('YYYY-MM-DD hh:mm:ss')
    document.title = '个人主页-蔡健'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@font-face {
  font-family: 'Share Tech Mono';
  font-style: normal;
  font-weight: 400;
  src: local('Share Tech Mono'), local('ShareTechMono-Regular'), url(https://fonts.gstatic.com/s/sharetechmono/v7/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
.hello{
  font-family: 'Share Tech Mono', monospace;
  height: 100vh;
  width: 100%;
  background-size:100% 100%;
  overflow: hidden;
  .header{
    width: 200px;
    margin:200px auto;
    z-index:999;
    position: absolute;
    top:0;
    left: 50%;
    margin-left: -100px;
    img{
      width: 200px;
      border-radius: 50%;
    }
    p{
      color:#FFF;
      font-size: 34px;
      text-align: center;
      padding-top: 20px;
    }
  }
  .change_header{
    position: absolute;
    right: 0;
    width: 140px;
    height: 60px;
    background: #fff;
    border-radius: 50px 0 0 50px;
    display:flex;
    top: 50px;
    align-items: center;
    justify-content: center;
    z-index:999;
    img{
      width: 50px;
      border-radius: 50%;
    }
  }
  .datetime{
    font-family: 'Share Tech Mono', monospace;
    color:#daf6ff;
    text-align: center;
    position: absolute;
    bottom: 100px;
    font-size: 80px;
    left:20px;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    transition:.5s;
    .date{
      font-size: 40px;
      text-align: left;
    }
    .time{
      text-align: left;
    }
  }
}
</style>
