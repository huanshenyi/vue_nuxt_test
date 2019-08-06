<template>
    <footer>
        <el-container class="components-footer">
            <el-aside width="200px"></el-aside>
            <el-main style="padding: 0px">利用規則</el-main>
            <el-main style="padding: 0px">利用規則</el-main>
            <el-main style="padding: 0px">利用規則</el-main>
        </el-container>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.components-footer{
    background-color:#f7fbfd;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 180px;
    line-height: 180px;
}
</style>