<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="text-center">已有时长</h1>
        </div>
        <div class="panel-body">
            <h2 class="text-center">{{time}}小时</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        time () {
            return this.$store.state.totalTime
        }
    },
    mounted () {
        console.log('aaa')
    }
}
</script>

<style>

</style>
