<template>
    <div class="msg_board">
        <edit-msg v-if="editParam.show" :param="editParam" @commit="toCommit"/>
        <div class="top">
            <p class="t_tit">留言板</p>
            <p class="btn" @click="toWrite"><i class="iconfont icon-liuyan"></i>&nbsp留言</p>
        </div>
        <div class="content">
            <transition-group name='list'
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOut">
                <div class="item" v-for="item in msgList" :key="item.id">
                    <div class="peo">
                        <img src="/static/img/msgheader.jpg" alt="">
                        <span>{{item.nick_name}}</span>
                    </div>
                    <div class="msg">{{item.message}}
                        <p>{{item.create_time | time}}</p>
                    </div>
                </div>
            </transition-group>
            
        </div>
    </div>
</template>
<script>
import editMsg from '../basic/editMsg'
import moment from 'moment'
export default {
    components:{
        editMsg
    },
    data(){
        return {
            editParam:{
                show:false
            },
            msgList:[]
        }
    },
    methods:{
        toWrite(){
            this.editParam.show = true
        },
        toCommit(data){
            this.$http.post('/msgboard',{
                nick_name:data.nick_name,
                message:data.message
            }).then(res=>{
                if(res.data.code == 0){
                    this.getList()
                    this.editParam.show = false
                }
            })
        },
        getList(){
            this.$http.get('/msgboard').then(res=>{
                if(res.data.code==0){
                    this.msgList = res.data.data
                }
            }).catch(err=>{

            })
        }
    },
    created(){
        this.getList()
    }
}
</script>
<style lang="less" scoped>
.msg_board{
    padding: 100px 0px;
    .top{
        font-size: 32px;
        padding: 20px;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom:1px solid #F0F2F5;
        box-shadow: 0 5px 10px #F0F2F5;
        .t_tit{
            font-weight: bold;
        }
        .btn{
            background: #0f3854;
            padding:5px 10px;
            border-radius: 5px;
            color:#FFF;
        }
    }
    .content{
        .item{
            display: flex;
            align-items: center;
            padding: 20px;
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
</style>
