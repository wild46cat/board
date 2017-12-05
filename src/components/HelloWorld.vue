<template>
  <el-container style="margin: 0;padding: 0;">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">demo</span>
        </template>
        <el-menu-item-group>
          <span slot="title">跳转</span>
          <el-menu-item index="1-1" @click="jumptopage1">跳转页面1</el-menu-item>
          <el-menu-item index="1-2" @click="jumptopage2">跳转页面2</el-menu-item>
          <el-menu-item index="1-3" @click="jumptocounter">跳转页面Counter</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="echarts">
          <el-menu-item index="1-4" @click="jumptochartexample">chart_line</el-menu-item>
          <el-menu-item index="1-5" @click="jumptochartexample2">chart2_graph</el-menu-item>
          <el-menu-item index="1-6" @click="jumptochartexample3">multichart</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-7">
          <span slot="title">子组件</span>
          <el-menu-item index="1-4-1" @click="jumptoselfmodelparent">子组件</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header>
        <i class="el-icon-arrow-left"></i>
        标题 {{msg}}
        <el-button @click="goHome">HOME</el-button>
        <el-button @click="testGet">GetRequest</el-button>
        <el-button @click="testPost">PostRequest</el-button>
        <i class="el-icon-xy-sleep"></i>
        <el-button icon="el-icon-xy-sleep">sleep</el-button>
      </el-header>
      <!--<el-aside width="400px" class="border2">-->
      <!--<router-link to="/home/page1">page1</router-link>-->
      <!--<router-link to="/home/page2">page2</router-link>-->
      <!--<br/>-->
      <!--<el-button @click="jumptoselfmodelparent">selfmodelparent</el-button>-->
      <!--</el-aside>-->


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
        msg: 'Welcome to Your Vue.js App',
        isCollapse: false
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
      jumptochartexample: function () {
        this.$router.push({name: 'chartexample'});
      },
      jumptochartexample2: function () {
        this.$router.push({name: 'chartexample2'});
      },
      jumptochartexample3: function () {
        this.$router.push({name: 'chartexample3'});
      },
      jumptoselfmodelparent: function () {
        this.$router.push({name: 'selfmodelparent'});
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

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
