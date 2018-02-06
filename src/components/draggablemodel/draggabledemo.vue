<template>
  <div style="width: 100%">
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
    <div class="spaceborder" style="margin-top: 20px;">
      <p @mousedown="mousedown($event)" @mousemove="move($event)"
         @mouseup="mouseup($event)" class="dragelement" :style="{'margin-left':xpx,'margin-top':ypx}"></p>
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
        divx: 220,
        divy: 320,
        elementx: 0,
        elementy: 0,
        canMoveFlag: false
      }
    },
    mounted: function () {
      console.log("draggable");
    },
    methods: {
      mousedown: function (event) {
        console.log("mousedown");
        console.log(event);
        this.canMoveFlag = true;
        this.elementx = event.offsetX;
        this.elementy = event.offsetY;
      },
      mouseup: function () {
        console.log("mouseup");
        this.canMoveFlag = false;
      },
      move: function (event) {
        if (this.canMoveFlag) {
          console.log(event.offsetX + ":" + event.offsetY);
          console.log('move');
          this.x = event.clientX - this.divx - this.elementx;
          this.y = event.clientY - this.divy - this.elementy;
          this.utilchangexy();
        }
      },
      changeposition: function () {
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
    position: absolute;
    top: 320px;
    left: 220px;
    border: 1px solid purple;
    height: 500px;
    width: 1000px;
  }

  .dragelement {
    color: #55a532;
    border: 1px solid red;
    cursor: pointer;
    height: 100px;
    width: 100px;
    position: relative;
    z-index: 100;
    background-color: #55a532;
  }
</style>
