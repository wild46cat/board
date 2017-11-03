<template>
  <div>
    <div>page1</div>
    <div>id:{{selfid}}</div>
    <div>name:{{selfname}}</div>
  </div>
</template>

<script>
  export default {
    name: 'page1',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        selfid: '',
        selfname: ''
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
        let queryparams = this.$route.query;
        this.selfid = queryparams.id;
        this.selfname = queryparams.name;
      }
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
