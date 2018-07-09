<template>
    <div>

    </div>
</template>

<script>
import {} from '@/api/getData'
export default {
    data(){
        return{
            geohash:''
        }
    },
    async beforeMount(){
        // /city/25?a=1
        // this.cityid = this.$route.params.cityid
        if(this.$route.query.geohash){
            this.geohash =this.$route.query.geohash
        }else {
            const data = await cityGuess();
            console.log(data);
            this.geohash = `${data.latitude},${data.longitude}`

        }

        // msite 是由一个独立的项目组成的
        console.log(this.$route.query.geohash);
    }
}
</script>

<style>

</style>
