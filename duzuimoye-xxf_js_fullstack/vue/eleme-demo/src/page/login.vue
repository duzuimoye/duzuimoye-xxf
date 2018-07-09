<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true">
            <!-- <slot name="button"></slot> -->
        </head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg"/>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import { getcaptchas } from '@/api/getData'

// 业务经验一：navigationbar 的封装
// history title 居中 右边的buttons
export default {
    data(){
        return {
            captchCodeImg:'',
            codeNumber:null
        }
    },
    components:{
        headTop
    },
    methods:{
        async getCaptchaCode(){
            const res = await getcaptchas();
            console.log(res);
            this.captchCodeImg = res.code;
        }
    },
    mounted(){
        this.getCaptchaCode()
    }
}
</script>

<style>
.loginContainer{
margin-top: 80px;
}
</style>
