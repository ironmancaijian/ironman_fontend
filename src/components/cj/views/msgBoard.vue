<template>
    <div class="msg_board">
        <edit-msg v-if="editParam.show" :param="editParam" @refresh="getList()"/>
        <div class="top">
            <p class="t_tit">留言板</p>
            <p class="btn" @click="toWrite">留言</p>
        </div>
        <div class="content">
            <div class="item" v-for="item in msgList">
                <div class="peo">
                    <img src="/static/img/header.jpg" alt="">
                    <span>{{item.nick_name}}</span>
                </div>
                <div class="msg">{{item.message}}
                    <p>{{item.create_time | time}}</p>
                </div>
            </div>
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
        getList(){
            this.$http.get('/msgboard').then(res=>{
                if(res.data.code==0){
                    this.msgList = res.data.data
                }
            }).catch(err=>{

            })
        }
    },
    filters:{
        time(val){
            return moment(val).format('YYYY/MM/DD hh:mm:ss')
        }
    },
    created(){
        this.getList()
    }
}
</script>
<style lang="less" scoped>
.msg_board{
    
    .top{
        font-size: 32px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #ccc;
        box-shadow: 0 5px 10px #ccc;
        .t_tit{
            font-weight: bold;
        }
        .btn{
            background: #1bb982;
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
            .peo{
                display: flex;
                align-items: center;
                flex-direction: column;
                img{
                    width:80px;
                    border-radius: 50%;
                }
            }
            .msg{
                font-size: 24px;
                margin-left: 20px;
                flex:1;
                p{
                    text-align: right;
                }
            }
        }
    }
}
</style>
