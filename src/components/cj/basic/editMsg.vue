<template>
<transition name="edit"
leave-active-class="animated zoomOutRight">
    <div class="edit_msg">
        <div class="modal animated zoomIn">
            <h3>留言</h3>
            <div class="name">
                <span>昵称:</span><input v-model="nick_name"/>
            </div>
            <div class="says name">
                <span>内容:</span><textarea v-model="message"/>
            </div>
            <footer>
                <div class="btn cancel" @click="param.show=false">
                    <i class="iconfont icon-quxiao"></i> 取消</div>
                <div class="btn" @click="commit">
                    <i class="iconfont icon-tijiao"></i> 提交</div>
            </footer>
        </div>
    </div>  
</transition>
</template>
<script>
export default {
    props:['param'],
    data(){
        return {
            nick_name:'',
            message:''
        }
    },
    methods:{
        commit () {
            this.$emit('commit',{
                nick_name:this.nick_name,
                message:this.message
            })
        }
    }
}
</script>
<style lang="less" scoped>
.edit_msg{
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 999;
    .modal{
        position: absolute;
        width: 690px;
        height: 600px;
        background: #fff;
        border-radius: 10px;
        top:50%;
        left:50%;
        margin-left: -345px;
        margin-top: -300px;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 0 1000px rgba(10, 175, 230, 0.3),  0 0 20px rgba(10, 175, 230, 0);
        h3{
            font-size: 32px;
            text-align: center;
            // border-bottom:1px solid #F0F2F5;
            padding:10px 0;
            margin-bottom: 20px;
        }
        .name{
            display: flex;
            align-items: center;
            span{
                font-size: 28px;
            }
            input{
                flex:1;
                height: 50px;
                border-radius: 5px;
                border:1px solid #F0F2F5;
                margin-left: 20px;
            }
            textarea{
                flex:1;
                height: 300px;
                border-radius: 5px;
                border:1px solid #F0F2F5;
                margin: 30px 0 0 20px;
            }
        }
        footer{
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            .btn{
                background: #0f3854;
                padding:10px 20px;
                border-radius: 5px;
                color:#FFF;
                font-size: 28px;
                margin:0 10px;
            }
            .cancel{
                background: #E6A23C
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

