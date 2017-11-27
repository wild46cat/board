<template>
  <el-container style="margin: 0;padding: 0;">
    <el-header>标题 {{msg}}
      <el-button @click="goHome">HOME</el-button>
      <el-button @click="testGet">GetRequest</el-button>
      <el-button @click="testPost">PostRequest</el-button>
      <i class="el-icon-xy-sleep"></i>
      <el-button icon="el-icon-xy-sleep">sleep</el-button>
    </el-header>
    <el-container>
      <el-aside width="400px" class="border2">
        <el-button @click="jumptopage1">跳转page1</el-button>
        <el-button @click="jumptopage2">跳转page2</el-button>
        <el-button @click="jumptocounter">跳转counter</el-button>
        <br/>
        <router-link to="/home/page1">page1</router-link>
        <router-link to="/home/page2">page2</router-link>
        <br/>
        <el-button @click="jumptochartexample">chart</el-button>
        <el-button @click="jumptochartexample2">chart2</el-button>
      </el-aside>
      <el-main class="border3">Main
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goHome: function () {
        this.$router.push({name: 'home'});
      },
      jumptopage1: function () {
        this.$router.push({name: 'page1', query: {id: 1, name: 'xiaoming'}});
      },
      jumptopage2: function () {
        this.$router.push({name: 'page2', params: {id: 1, name: '小李'}});
      },
      jumptocounter: function () {
        this.$router.push({name: 'counter'});
      },
      jumptochartexample:function () {
        this.$router.push({name: 'chartexample'});
      },
      jumptochartexample2:function () {
        this.$router.push({name: 'chartexample2'});
      },
      testGet: function () {
        this.$ajax({
          method: 'get',
          url: '/test/greeting',
          params: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      },
      testPost: function () {
        var params = new URLSearchParams();
        params.append('name', 'hello jdmc你好');
        params.append('id', '2');
        this.$ajax({
          method: 'post',
          url: '/test/greeting2',
//          data:params
          data: {id: '3', name: 'abc'}
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/iconfont/iconfont.css";

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
