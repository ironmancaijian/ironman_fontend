<template>
    <div class="cj_home">
        <div class="item">
            <p class="title">文章的标题哦啊</p>
            <p class="content">文章的内容哦啊文章的内容哦啊文章的内容哦啊文章的内容哦啊文章的内容哦啊</p>
            <p class="other">
                <span class="create">2012-10-10</span>
                <span class="count">10</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.cj_home{
    .item{
        box-sizing: border-box;
        padding: 20px;
        .title{
            font-size: 34px;
            font-weight: bold;
        }
        .content{
            color:#888;
            margin-top: 10px;
        }
        .other{
            display: flex;
            justify-content: space-between;
            color:#888;
        }
    }
}
</style>
