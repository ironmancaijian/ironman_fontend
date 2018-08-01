<template>
    <div class="cj">
        <router-view></router-view>
        <footer>
            <div class="nav" :class="{'active':nIndex == i }" v-for="(item,i) in navs" @click="$router.push(item.path);nIndex=i;">
                <i :class="['iconfont',item.icon]"></i>
                {{item.label}}
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs : [{
                label:'主页',
                path:'/cj',
                icon:'icon-zhuye'
            },{
                label:'留言板',
                path:'/cj/msgBoard',
                icon:'icon-message'
            },{
                label:'个人信息',
                path:'/cj/info',
                icon:'icon-icon'
            },{
                label:'首页',
                path:'/',
                icon:'icon-quxiao'
            }],
            nIndex:0
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
        background: #0f3854;
        background: radial-gradient(ellipse at center,  #0f3854 0%, #000 70%);
        .nav{
            font-size:30px;
            line-height: 120px;
            color:#ccc;
            i{
                font-size: 34px;
            }
        }
        .active{
            color:#daf6ff;
            text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
        }
    }
}
</style>
