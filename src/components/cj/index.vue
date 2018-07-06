<template>
    <div class="cj">
        <router-view></router-view>
        <footer>
            <div class="nav" v-for="item in navs" @click="$router.push(item.path)">{{item.label}}</div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs : [{
                label:'主页',
                path:'/cj'
            },{
                label:'留言板',
                path:'/cj/msgBoard'
            },{
                label:'个人信息',
                path:'/cj/info'
            }]
        }
    }
}
</script>
<style lang="less" scoped>
.cj{
    footer{
        position: fixed;
        bottom:0;
        height: 120px;
        background: #fff;
        display: flex;
        justify-content: space-around;
        width: 100%;
        border-top: 1px solid #F0F2F5;
        box-shadow: 0 -5px 20px #F0F2F5;
        .nav{
            font-size:30px;
            line-height: 120px;
        }
    }
}
</style>
