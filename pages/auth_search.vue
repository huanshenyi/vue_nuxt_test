<template>
    <div>
        <el-container>
            <el-main>Main2</el-main>
        </el-container>
        <el-container>
            <el-main>Main2</el-main>
        </el-container>
        <el-container>
            <el-main>Main2</el-main>
        </el-container>
        <el-container>
            <el-main>Main2</el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "auth_search",
        layout: 'search',
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
        // async asyncData() {
        //    let {data:{list}} = await axios.get("http://127.0.0.1:5000/city/list")
        //    return {
        //        list
        //    }
        // },
    }
</script>

<style scoped lang="css">

</style>