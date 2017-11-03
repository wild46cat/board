<template>
  <el-container style="margin: 0;padding: 0;">
    <el-header>asdf</el-header>
    <el-container>
      <el-aside width="200px" class="border2">Aside</el-aside>
      <el-main class="border3">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-container {
    height: 100%;
  }

  .border1 {
    border: 2px solid green;
  }

  .border2 {
    border: 2px solid red;
  }

  .border3 {
    border: 2px solid blue;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px;
    height: 50px;
  }
</style>
