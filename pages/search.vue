<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <ul v-if="list">
                <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
            </ul>
        </el-container>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "search",
        layout: 'search',
        data(){
            return {
                list:[]
            }
        },
        // async asyncData() {
        //    let {data:{list}} = await axios.get("http://127.0.0.1:5000/city/list")
        //    return {
        //        list
        //    }
        // },
    }
</script>

<style scoped lang="css">
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>