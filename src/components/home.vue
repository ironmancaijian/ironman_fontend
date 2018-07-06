<template>
  <div class="hello" style="background-image:url('/static/img/star.jpg')">
    <div class="datetime">
      <p class="date" ref="datetime" >{{time.slice(0,10)}}</p>
      <p class="time" ref="hhss">{{time.slice(10,19)}}</p>
    </div>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
       time:"",
       infoList:[{
          header:'/static/img/header.jpg',
          name:"TimeFly"
        },{
         header:'/static/img/lulu.jpg',
         name:'璐'
       }],
       asideIndex:1,
       centerIndex:0,
       shadow:10,
       animFlag:true,
       TIME:null
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
        document.title = '徐依璐的个人主页'
      }else{
        this.asideIndex = 1
        this.centerIndex = 0
        document.title = '蔡健的个人主页'
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
      this.$refs.datetime.style.textShadow = `${this.shadow-9}px ${this.shadow-9}px ${this.shadow}px #fff`
      this.$refs.hhss.style.textShadow = `${this.shadow-9}px ${this.shadow-9}px ${this.shadow}px #fff`
    },1000)
  },
  created(){
    this.time = moment().format('YYYY-MM-DD hh:mm:ss')
    document.title = '蔡健的个人主页'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  height: 100vh;
  width: 100%;
  background-size:100% 100%;
  overflow: hidden;
  .header{
    width: 200px;
    margin:200px auto;
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
    img{
      width: 50px;
      border-radius: 50%;
    }
  }
  .datetime{
    color:#3abde9;
    text-align: center;
    position: absolute;
    bottom: 100px;
    font-size: 50px;
    left:20px;
    text-shadow:1px 1px 10px #fff;
    transition:.5s;
    .date{
      font-size: 70px;
      font-weight: bold;
    }
    .time{
      text-align: left;
    }
  }
}
</style>
