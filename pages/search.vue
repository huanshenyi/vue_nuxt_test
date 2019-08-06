<template>
    <div>
       <el-container>

         <el-main>
             <div class="sub-title">メールの存在確認して見ませんか?</div>
             <div style="margin-top: 15px;">
                 <el-row>
                     <el-col :span="5">&#12288;</el-col>
                     <el-col :span="7"><el-input placeholder="请输入内容" v-model="input2"></el-input></el-col>
                     <el-col :span="7"><el-button type="primary" style="width: 100%;border-style:none;border-radius: 0px">主要按钮</el-button></el-col>
                     <el-col :span="5">&#12288;</el-col>
                 </el-row>
             </div>
         </el-main>
       </el-container>
       <el-container>
          <el-main>
              <ul v-if="list">
                  <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
              </ul>
          </el-main>
       </el-container>
        <el-container>
            <el-main>Main2</el-main>
        </el-container>
        <el-container>
            <el-main>Main3</el-main>
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
                list:[],
                input2:''
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
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
    .el-header {
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
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