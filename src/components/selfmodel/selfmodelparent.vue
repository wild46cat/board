<template>
  <div>
    <div>
      父组件
    </div>
    <div>
      接收到的data:{{data}}
    </div>
    <div>
      <el-button @click="test">父组件按钮</el-button>
    </div>
    <div>
      <selfmodel @selfevent="selfevent"></selfmodel>
    </div>
  </div>
</template>

<script>
  import selfmodel from './selfmodel.vue'
  export default {
    components: {
      selfmodel
    },
    name: 'selfmodelparent',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data: '',
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
      },
      selfevent: function (...data) {
        console.log(data[0]);
        this.data = data[0];
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
