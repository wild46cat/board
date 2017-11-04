<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.<br/>
    <el-button @click="increment">+</el-button>
    <el-button @click="decrement">-</el-button>
    <el-button @click="incrementIfOdd">Increment if odd</el-button>
    <el-button @click="incrementAsync">Increment async</el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>
