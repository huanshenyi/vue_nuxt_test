<template>
    <nav>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-image
                    style="width: 150px; height: 55px;float: left"
                    :src="url">
            </el-image>
            <el-menu-item index="2">Eメールを確認します</el-menu-item>
            <el-menu-item index="3" >プランと価額</el-menu-item>
            <el-menu-item index="4">よくある質問</el-menu-item>
            <el-submenu index="2">
                <template slot="title">その他</template>
                <el-menu-item index="2-1">ブログ</el-menu-item>
                <el-menu-item index="2-2">連絡先</el-menu-item>
            </el-submenu>
            <el-menu-item style="float: right">
                <el-button type="primary" plain>ログイン</el-button>
                <el-button type="success" plain>新規登録</el-button>
            </el-menu-item>
        </el-menu>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                activeIndex: '1',
                url: 'https://miro.medium.com/max/1200/1*Q5EUk28Xc3iCDoMSkrd1_w.png'
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
</style>