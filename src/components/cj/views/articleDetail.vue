<template>
    <div class="article_detail">
        <edit-msg v-if="editParam.show" :param="editParam" @commit="toCommit"/>
        <header>
            <h3>{{initArt.title}}</h3>
            <div class="top_info">
                <p>date:{{initArt.create_at | time}}</p>
                <p><i class="iconfont icon-eye"></i>{{initArt.view_count}}</p>
            </div>
        </header>
        <article>
            <p class="href">原文链接:<a :href="initArt.href">{{initArt.href}}</a></p>
            <div class="main_box" ref="content">
                {{initArt.content}}
            </div>
            <div class="comment">
                <div class="title">评论</div>
               <div class="item" v-for="item in initArt.comment" :key="item.id">
                    <div class="peo">
                        <img src="https://timefly-1256233327.cos.ap-shanghai.myqcloud.com/header.jpg" alt="">
                        <span>{{item.nick_name}}</span>
                    </div>
                    <div class="msg">{{item.message}}
                        <p>{{item.create_time | time}}</p>
                    </div>
                </div> 
            </div>
        </article>
        <div class="comment_btn" @click="toComment">
            <i class="iconfont icon-comment"></i>
            评论
        </div>
    </div>
</template>
<script>
import editMsg from '../basic/editMsg'
import marked from 'marked'
export default {
    components:{
        editMsg
    },
    data(){
        return {
            initArt:{
                title:'',
                create_at:'',
                view_count:'',
                href:'',
                content:'',
                comment:[]
            },
            editParam:{
                show:false
            },
        }
    },
    methods:{
        getList(){

        },
        toComment(){
            this.editParam.show = true 
        },
        toCommit(data){
            this.$http.post('/msgboard',{
                nick_name:data.nick_name,
                message:data.message,
                art_id:this.$route.params.id
            }).then(res=>{
                if(res.data.code == 0){
                    this.getDetail()
                    this.editParam.show = false
                }
            })
        },
        getDetail () {
            this.$http.get(`/articleDetail/${this.$route.params.id}`).then(res=>{
                this.initArt = res.data.data
                marked.setOptions({
                    break:true
                })
                this.$refs.content.innerHTML = marked(this.initArt.content)
                let img = this.$refs.content.getElementsByTagName('img')
                let code = this.$refs.content.getElementsByTagName('code')
                Array.from(img).forEach(element => {
                    element.style.width = '100%'
                });
                Array.from(code).forEach(element => {
                    element.style.display = 'inline-block'
                    element.style.overflowX = 'auto'
                    element.style.width = '100%'
                    element.style.boxSizing = 'border-box'
                    element.style.wordBreak = 'break-all'
                    element.style.padding = '.02rem'
                    element.style.borderRadius = '3px'
                    element.style.lineHeight = '24px'
                    element.style.background = 'rgba(27,31,35,0.05)'
                });
            })
        }
    },
    mounted () {
        this.getDetail()
    }
}
</script>
<style lang="less" scoped>
.article_detail{
    width: 100vw;
    box-sizing: border-box;
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
        width:100%;
        box-sizing: border-box;
        .href{
            font-size: 24px;
        }
        .main_box{
            margin-top: 20px;
            font-size: 28px;
            text-indent: 15px;
            white-space: pre-wrap;
            word-break: break-all;
            code{
                background: #ccc;
            } 
        }
        .comment{
            width: 100%;
            .title{
                font-size: 34px;
                font-weight: bold;
                border-bottom: 2px solid #ccc;
                padding-bottom: 10px;
            }
            
            .item{
            display: flex;
            align-items: center;
            padding: 20px 0px;
            background: #fff;
            border-bottom: 1px solid #f0f2f5;/*no*/
            .peo{
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 140px;
                img{
                    width:80px;
                    border-radius: 50%;
                }
                span{
                    font-weight: bold;
                }
            }
            .msg{
                font-size: 24px;
                margin-left: 20px;
                flex:1;
                min-height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p{
                    text-align: right;
                }
            }
        }
        }
    }
    .comment_btn{
        width: 140px;
        height: 58px;
        line-height: 58px;
        border-radius: 29px 0 0 29px;
        bottom: 160px;
        text-align: center;
        color:#fff;
        font-size: 24px;
        background: #0f3854;
        position: fixed;
        right: 0;
        box-shadow: 0px 5px 25px #0f3854;
    }
}
</style>
