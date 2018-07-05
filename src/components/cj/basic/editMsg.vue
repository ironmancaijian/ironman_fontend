<template>
<transition name="fade">
    <div class="edit_msg" >
        <div class="modal">
            <h3>留言</h3>
            <div class="name">
                <span>昵称:</span><input v-model="nick_name"/>
            </div>
            <div class="says name">
                <span>内容:</span><textarea v-model="message"/>
            </div>
            <footer>
                <div class="btn cancel" @click="param.show=false">取消</div>
                <div class="btn" @click="commit">提交</div>
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
            this.$http.post('/msgboard',{
                nick_name:this.nick_name,
                message:this.message
            }).then(res=>{
                if(res.data.code == 0){
                    this.$emit('refresh')
                    this.param.show = false
                }
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
        width: 600px;
        height: 600px;
        background: #fff;
        border-radius: 10px;
        top:50%;
        left:50%;
        margin-left: -300px;
        margin-top: -300px;
        padding: 20px;
        box-sizing: border-box;
        h3{
            font-size: 32px;
            text-align: center;
            // border-bottom:1px solid #ccc;
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
                border:1px solid #ccc;
                margin-left: 20px;
            }
            textarea{
                flex:1;
                height: 300px;
                border-radius: 5px;
                border:1px solid #ccc;
                margin: 30px 0 0 20px;
            }
        }
        footer{
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            .btn{
                background: #1bb982;
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

