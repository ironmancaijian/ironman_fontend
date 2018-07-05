<template>
    <div class="cj_info">
        <header style="backgroundImage:url('/static/img/header_bg.jpg')">
            <img src="/static/img/header.jpg" alt="">
            <div class="intro">
                <p>姓名:蔡健</p>
                <p>年龄:25岁</p>
                <p class="email">邮箱:825388643@qq.com</p>
            </div>
        </header>
        <article>
            <p class="title">个人简介</p>
            <div class="text">这个人跟懒 , 什么也没说....</div>
        </article>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.cj_info{
    box-sizing: border-box;
    header{
        padding:20px;
        display: flex;
        align-items: center;
        background-size: cover;
        height: 240px;
        img{
            width:160px;
            border-radius: 50%;
        }
        .intro{
            font-size: 30px;
            margin-left: 30px;
            display: flex;
            color:#fff;
            justify-content: space-around;
            flex-direction: column;
            .email{
                font-size: 28px;
            }
        }
    }
    article{
        padding:20px;
        .title{
            font-size: 30px;
            font-weight: bold;
            border-bottom:1px solid #ccc;
            line-height: 60px;
        }    
        .text{
            font-size: 26px;
            padding:10px 0;
        }
    }
}
</style>
