<template>
    <div>
        <head-top signin-up="home">
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位的城市：</span>
                <span>定位不准时, 请在当前城市列表中选择</span>
            </div>
            <router-link :to="'/city/'+ guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="cityListul clear">
                <router-link :to="'/city' +item.id" v-for ="item in hotcity" :key="item.id"
                tag="li">
                {{item.name}}
                </router-link>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import { cityGuess,hotcity } from '@/api/getData'

export default {
    data(){
        return{
            guessCityid:'',
            guessCity:'',
            hotcity:[]
        }
    },
    components:{
        headTop
    },
    //生命周期 城市 不准确 又耗时的api 阻塞组件
     async mounted(){
       const cityData=await cityGuess()
            this.guessCityid = cityData.id;
            this.guessCity = cityData.name;
            this.hotcity =  await hotcity();
            //     this.guessCity = data.name;
            // .then(res =>res.json())
            // .then(data =>{
            //     this.guessCityid = data.id;
            //     this.guessCity = data.name;
            //     console.log(data);
            // })
            // const hotcity=hotcity ()
            // this.hotcity=data;
                // .then(res =>res.json())
                // .then(data =>{
                //     this.hotcity =  data;
                // })
    }
}
</script>

<style lang="stylus">
@import '../style/mixin'
    .city_nav
        padding-top 2.35rem
        border-top 1px solid $bc
        background-color #ffffff
        margin-bottom 0.4rem

    .city_tip
        fj()
        line-height 1.45rem
        padding 0 0.45rem
        span:nth-of-type(1)
            sc(0.55rem,#666666)
        span:nth-of-type(2)
            font-weight 900
            sc(0.475rem,#9f9f9f)
        

</style>
