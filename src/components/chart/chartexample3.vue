<template>
  <div>
    <div>x:{{mousex}}</div>
    <div>y:{{mousey}}</div>
    <div>
      <div id="menu" v-if="showflag" style="border: 1px solid red;float: left;position: absolute;z-index: 999;top:0px;left:0px;">
        <el-button>ccccc</el-button>
        <br/>
        <el-button>ddddd</el-button>
      </div>
      <div id="myChart" :style="{width: '100%', height: '200px'}" style="border: 1px solid deeppink;"></div>
      <div id="myChart2" :style="{width: '100%', height: '200px'}" style="border: 1px solid green;"></div>
    </div>
    <!--<div style="border: 2px solid blueviolet;float: left;z-index: 99999;">-->
    <!--<el-button>ccccc</el-button> <br/> <el-button>ddddd</el-button>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myChart: {},
        myChart2: {},
        firstNode: '',
        secondNode: '',
        activeName: 'first',
        mousex: 0,
        mousey: 0,
        showflag: true,
        activeColor:'1px solid red',
        fontSize:10
      }
    },
    mounted: function () {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
      myChart.on('click', function (params) {
      });
      //取消右键的弹出菜单
      document.oncontextmenu = function () {
        return false;
      };
      //右键取消高亮
      myChart.on('contextmenu', function (params) {
        console.log(params);
        that.mousex = params.event.event.pageX;
        that.mousey = params.event.event.pageY;
        var menu = document.getElementById("menu");
        menu.style.left=that.mousex + 'px';
        menu.style.top=that.mousey + 'px';
        that.myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
          // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
          seriesIndex: params.seriesIndex,
        })
      });
      that.myChart = myChart;
      that.myChart2 = myChart2;
      that.drawLine1();
      that.drawLine2();
    },
    methods: {
      handleClick: function () {

      },
      drawLine1: function () {
        let backgroundColorPart1 = '#fff';
        let productLineColor = '#99CCCC';
        let appNameColor = '#339999';
        let productLineColorConsumer = '#33CC33';
        let appNameColorConsumer = '#00CC00';
        let exchangeColor = '#008B8B';
        let queueColor = '#996699';
        let channelColor = '#FF99CC';
        let lineNodeColor = backgroundColorPart1;
        let baseBorderColor = '#0066CC';
        let seriesColorState1 = '#669933';
        let seriesColorState2 = '#CCCCCC';
        let seriesColorState3 = '#CC0033';
        let backgroundColorPart2 = '#1b1b1b';
        let defaultSymbolSize = 20;
        let productLineSymbolSize = 20;
        let appNameSymbolSize = 20;
        let exchangeSymbolSize = 20;
        let queueSymbolSize = 20;
        let channelSymbolSize = 20;
        let lineNodeSymbolSize = 1;
        let heightspacing = 200;
        let widthspacing = 200;
        let option = {
          backgroundColor: backgroundColorPart1,
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              switch (params.data.type) {
                case 'productline':
                  return params.data.name;
                  break;
                case 'app':
                  return params.data.name;
                  break;
                case 'exchange':
                  return params.data.name;
                  break;
                case 'queue':
                  return params.data.name;
                  break;
                case 'channel':
                  return params.data.name;
                  break;
                default:
                  return "";
              }
            }
          },
          animation: true,
          animationDurationUpdate: 100,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: defaultSymbolSize,
              nodeScaleRatio: 1,
              roam: true,
              focusNodeAdjacency: false,
              label: {
                normal: {
                  show: true,
                  textBorderColor: 'transparent',
                  color: '#555',
                  fontWeight: 'bold',
                  position: 'bottom'
                }
              },
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [{
                name: 'p1',
                label: {normal: {formatter: 'p1_'}},
                x: 100,
                y: 200,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 0
              }, {
                name: 'p2',
                label: {normal: {formatter: 'p2_'}},
                x: 100,
                y: 900,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 1
              }, {
                name: 'p3',
                label: {normal: {formatter: 'p3_'}},
                x: 100,
                y: 500,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 2
              }],
              links: [
                {
                  source: 1,
                  target: 2
                }, {
                  source: 2,
                  target: 3
                }
              ]
            }
          ]
        };
        this.myChart.setOption(option);
      },
      drawLine2: function () {
        let backgroundColorPart1 = '#fff';
        let productLineColor = '#99CCCC';
        let appNameColor = '#339999';
        let productLineColorConsumer = '#33CC33';
        let appNameColorConsumer = '#00CC00';
        let exchangeColor = '#008B8B';
        let queueColor = '#996699';
        let channelColor = '#FF99CC';
        let lineNodeColor = backgroundColorPart1;
        let baseBorderColor = '#0066CC';
        let seriesColorState1 = '#669933';
        let seriesColorState2 = '#CCCCCC';
        let seriesColorState3 = '#CC0033';
        let backgroundColorPart2 = '#1b1b1b';
        let defaultSymbolSize = 20;
        let productLineSymbolSize = 20;
        let appNameSymbolSize = 20;
        let exchangeSymbolSize = 20;
        let queueSymbolSize = 20;
        let channelSymbolSize = 20;
        let lineNodeSymbolSize = 1;
        let heightspacing = 200;
        let widthspacing = 200;
        let option = {
          backgroundColor: backgroundColorPart1,
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              switch (params.data.type) {
                case 'productline':
                  return params.data.name;
                  break;
                case 'app':
                  return params.data.name;
                  break;
                case 'exchange':
                  return params.data.name;
                  break;
                case 'queue':
                  return params.data.name;
                  break;
                case 'channel':
                  return params.data.name;
                  break;
                default:
                  return "";
              }
            }
          },
          animation: true,
          animationDurationUpdate: 100,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: defaultSymbolSize,
              nodeScaleRatio: 1,
              roam: true,
              focusNodeAdjacency: false,
              label: {
                normal: {
                  show: true,
                  textBorderColor: 'transparent',
                  color: '#555',
                  fontWeight: 'bold',
                  position: 'bottom'
                }
              },
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [{
                name: 'p1',
                label: {normal: {formatter: 'p1_'}},
                x: 100,
                y: 200,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 0
              }, {
                name: 'p2',
                label: {normal: {formatter: 'p2_'}},
                x: 100,
                y: 900,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 1
              }, {
                name: 'p3',
                label: {normal: {formatter: 'p3_'}},
                x: 100,
                y: 500,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 2
              }],
              links: [
                {
                  source: 1,
                  target: 2
                }, {
                  source: 2,
                  target: 3
                }
              ]
            }
          ]
        };
        this.myChart2.setOption(option);
      }
    },
  }
</script>
