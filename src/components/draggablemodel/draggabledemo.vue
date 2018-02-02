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
    <div>
      <p>{{x}}</p>
      <p>{{y}}</p>
    </div>
    <div>
      <el-button @click="changeposition()">改变位置</el-button>
    </div>
    <div class="spaceborder" style="margin-top: 20px;" @mousedown="mousedown($event)" @mousemove="move($event)"
         @mouseup="mouseup($event)">
      <p class="dragelement" :style="{'margin-left':xpx,'margin-top':ypx}"></p>
    </div>
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
        x: 0,
        y: 0,
        xpx: '0',
        ypx: '0',
        canMoveFlag: false
      }
    },
    mounted: function () {
      console.log("draggable");
    },
    methods: {
      mousedown: function (event) {
        console.log(event);
        this.canMoveFlag = true;
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      mouseup: function () {
        this.canMoveFlag = false;
      },
      move: function (event) {
        if (this.canMoveFlag) {
          console.log(event);
          console.log('move');
          this.x = event.offsetX;
          this.y = event.offsetY;
          this.utilchangexy();
        }
      },
      changeposition: function () {
        console.log("changeposition");
        this.utilchangexy();
      },
      utilchangexy: function () {
        this.xpx = this.x + 'px';
        this.ypx = this.y + 'px';
      }

    }

  }
</script>
<style>
  .spaceborder {
    border: 1px solid purple;
    height: 500px;
  }

  .dragelement {
    color: #55a532;
    border: 1px solid red;
    cursor: pointer;
    height: 100px;
    width: 100px;
    position: relative;
    z-index: 100;
  }
</style>
