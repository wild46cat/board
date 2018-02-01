<template>
  <div>
    拖拽演示
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id">
          <el-button>{{element.name}}</el-button>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    components: {
      draggable,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myArray: [{id: 1, name: 2}, {id: 3, name: 33}],
      }
    },
    mounted: function () {
      console.log("draggable");
    }
  }
</script>
