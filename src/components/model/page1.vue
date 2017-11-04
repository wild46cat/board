<template>
  <div>
    <div>page1</div>
    <div>id:{{selfid}}</div>
    <div>name:{{selfname}}</div>
    <div>
      Clicked: {{ $store.state.Page1.count }} times, count is {{evenOrOddPage1}}.<br/>
      <el-button @click="incrementpage1">+</el-button>
      <el-button @click="decrementpage1">-</el-button>
      <el-button @click="incrementpage1IfOdd">Increment if odd</el-button>
      <el-button @click="incrementpage1Async">Increment async</el-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
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
      },
      ...mapActions([
        'incrementpage1',
        'decrementpage1',
        'incrementpage1IfOdd',
        'incrementpage1Async'
      ])
    },
    computed: mapGetters([
      'evenOrOddPage1'
    ])
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
