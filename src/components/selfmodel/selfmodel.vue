<template>
  <div style="border: hotpink 2px dashed;">
    <div>子组件</div>
    <div>发送 :{{data}}</div>
    <div>
      <el-button @click="test">自组件按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selfmodel',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data: 'aabbcc'
      }
    },
    mounted(){
      this.getParams();
    },
    watch: {
      '$route'(to, from){
        //在这里重新刷新一下
        this.getParams();
      }
    },
    methods: {
      getParams: function () {
      },
      test: function () {
        alert(this.data);
        this.$emit("selfevent", this.data);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-container {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
