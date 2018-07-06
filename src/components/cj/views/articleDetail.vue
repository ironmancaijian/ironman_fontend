<template>
    <div class="article_detail">
        <header>
            <h3>{{initArt.title}}</h3>
            <div class="top_info">
                <p>date:{{initArt.create_at | time}}</p>
                <p><i class="iconfont icon-eye"></i>{{initArt.view_count}}</p>
            </div>
        </header>
        <article>
            <p class="href">原文链接:<a :href="initArt.href">{{initArt.href}}</a></p>
            <div class="main_box">
                {{initArt.content}}
            </div>
        </article>
    </div>
</template>
<script>
export default {
    data(){
        return {
            initArt:{
                title:'',
                create_at:'',
                view_count:'',
                href:'',
                content:''
            }
        }
    },
    created () {
        this.$http.get(`/articleDetail/${this.$route.params.id}`).then(res=>{
            this.initArt = res.data.data
        })
    }
}
</script>
<style lang="less" scoped>
.article_detail{
    header{
        padding:20px;
        h3{
            font-size: 38px;
        }
        .top_info{
            display: flex;
            justify-content: space-between;
            padding: 0 40px 0 0;
            p:last-child{
                display: flex;
                align-items:center;
                i{
                    margin:0 5px;
                }
            }
        }
    }
    article{
        padding:20px;
        .href{
            font-size: 24px;
        }
        .main_box{
            margin-top: 20px;
            font-size: 28px;
            text-indent: 15px;
        }
    }
}
</style>
