<template>
    <div class="cj_home">
        <div class="item" v-for="item in articleList" @click="showDetail(item)">
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.short_intro}}</p>
            <p class="other">
                <span class="create">{{item.create_at | time}}</span>
                <span class="count"><i class="iconfont icon-eye"></i>{{item.view_count}}</span>
            </p>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data () {
        return {
            articleList:[]
        }
    },
    methods:{
        showDetail(item){
            this.$router.push(`/articleDetail/${item.id}`)
        }
    },
    filters : {
        time(val){
            return moment(val).format('YYYY/MM/DD HH:mm:ss')
        }
    },
    created(){
        this.$http('/articleList').then(res=>{
            if(res.data.code==0){
                this.articleList = res.data.data
            }
        }) 
    }
}
</script>
<style lang="less" scoped>
.cj_home{
    .item{
        box-sizing: border-box;
        box-shadow: 0 0 15px #f2f2f2;
        margin-bottom:10px;
        padding: 20px;
        background: #fff;
        border-bottom:1px solid #F0F2F5;/*no*/
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
            .count{
                display: flex;
                align-items: center;
                i{
                    margin:0 5px;
                }
            }
        }
    }
}
</style>
