<template>
  <div>
    <div>page2</div>
    <div>id:{{selfid}}</div>
    <div>name:{{selfname}}</div>
    <div>
      Clicked: {{ $store.state.Page2.count }} times, count is {{evenOrOddPage2}}.<br/>
      <el-button @click="incrementpage2">+</el-button>
      <el-button @click="decrementpage2">-</el-button>
      <el-button @click="incrementpage2IfOdd">Increment if odd</el-button>
      <el-button @click="incrementpage2Async">Increment async</el-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'page2',
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
        let tmpParams = this.$route.params;
        this.selfid = tmpParams.id;
        this.selfname = tmpParams.name;
      },
      ...mapActions([
        'incrementpage2',
        'decrementpage2',
        'incrementpage2IfOdd',
        'incrementpage2Async'
      ])
    },
    computed: mapGetters([
      'evenOrOddPage2'
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
