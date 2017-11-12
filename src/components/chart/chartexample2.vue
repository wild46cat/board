<template>
  <div>
    <div>选择第一个节点:{{firstNode}}
      <el-button @click="clearFirstNode">清空</el-button>
    </div>
    <div>选择第二个节点:{{secondNode}}
      <el-button @click="clearSecondNode">清空</el-button>
    </div>
    <div v-if="firstNode !='' && secondNode!=''">
      <el-button>添加连接</el-button>
      <el-button>删除连接</el-button>
    </div>
    <div>
      <div id="myChart" :style="{width: '100%', height: '500px'}" style="border: 1px solid red;"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myChart: {},
        firstNode: '',
        secondNode: '',
      }
    },
    mounted: function () {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.on('click', function (params) {
        console.log(params);
        if (params.dataType == 'edge') {
          that.handleClick(params);
        } else if (params.dataType == 'node') {
          if (that.firstNode == '') {
            that.firstNode = params.name;
          } else {
            that.secondNode = params.name;
          }
        }
      });
      that.myChart = myChart;
      that.drawLine();
    },
    methods: {
      clearFirstNode: function () {
        this.firstNode = '';
      },
      clearSecondNode: function () {
        this.secondNode = '';
      },
      handleClick: function (params) {
        alert(params.name);
      },
      drawLine: function () {
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
          legend: {
            data: ['p1', 'p2', 'p3', 'p4', 'p5']
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
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: defaultSymbolSize,
              roam: true,
              focusNodeAdjacency: true,
              label: {
                normal: {
                  show: true,
                  textBorderColor: 'transparent',
                  color: '#555',
                  fontWeight: 'bold',
                  position: 'bottom'
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              categories: [
                {
                  name: "p1",
                  keyword: {},
                },
                {
                  name: "p2",
                  keyword: {},
                },
                {
                  name: "p3",
                  keyword: {},
                },
                {
                  name: "p4",
                  keyword: {},
                },
                {
                  name: "p5",
                  keyword: {}
                }
              ],
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
              }, {
                name: 'p4',
                label: {normal: {formatter: 'p4_'}},
                x: 1400,
                y: 200,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 3
              }, {
                name: 'p5',
                label: {normal: {formatter: 'p5_'}},
                x: 1400,
                y: 400,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                category: 4
              }, {
                name: 'p1-a1',
                label: {normal: {formatter: 'p1-a1_'}},
                x: 300,
                y: 100,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 0
              }, {
                name: 'p1-a2',
                label: {normal: {formatter: 'p1-a2_'}},
                x: 300,
                y: 300,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 0
              }, {
                name: 'p2-a1',
                label: {normal: {formatter: 'p2-a1_'}},
                x: 300,
                y: 900,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 1
              }, {
                name: 'p2-a2',
                label: {normal: {formatter: 'p2-a2_'}},
                x: 300,
                y: 1100,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 1
              }, {
                name: 'p3-a1',
                label: {normal: {formatter: 'p3-a1_'}},
                x: 300,
                y: 400,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 2
              }, {
                name: 'p3-a2',
                label: {normal: {formatter: 'p3-a2_'}},
                x: 300,
                y: 500,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 2
              }, {
                name: 'p4_a1',
                label: {normal: {formatter: 'p4_a1_'}},
                x: 1200,
                y: 200,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 3
              }, {
                name: 'p5_a1',
                label: {normal: {formatter: 'p5_a1_'}},
                x: 1200,
                y: 400,
                type: 'app',
                symbolSize: appNameSymbolSize,
                category: 4
              }, {
                name: 'Exchange1',
                label: {normal: {formatter: 'Exchange1_'}},
                x: 600,
                y: 200,
                type: 'exchange',
                symbol: 'rect',
                symbolSize: exchangeSymbolSize,
                itemStyle: {normal: {color: exchangeColor}},
              }, {
                name: 'Exchange2',
                label: {normal: {formatter: 'Exchange2_'}},
                x: 600,
                y: 400,
                type: 'exchange',
                symbol: 'rect',
                symbolSize: exchangeSymbolSize,
                itemStyle: {normal: {color: exchangeColor}},
              }, {
                name: 'queue1',
                label: {normal: {formatter: 'queue1'}},
                x: 800,
                y: 100,
                type: 'queue',
                symbol: 'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}},
              }, {
                name: 'queue2',
                label: {normal: {formatter: 'queue2'}},
                x: 800,
                y: 300,
                type: 'queue',
                symbol: 'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}},
              }, {
                name: 'queue3',
                label: {normal: {formatter: 'queue3'}},
                x: 800,
                y: 500,
                type: 'queue',
                symbol: 'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}},
              }, {
                name: 'node0',
                label: {normal: {formatter: 'node0'}},
                x: 400,
                y: 200,
                type: 'channel',
                symbol: 'rect',
                symbolSize: channelSymbolSize,
                category: 0
              }, {
                name: 'node1',
                label: {normal: {formatter: 'node1'}},
                x: 1000,
                y: 100,
                type: 'channel',
                symbol: 'rect',
                symbolSize: channelSymbolSize,
                category: 3
              }, {
                name: 'node2',
                label: {normal: {formatter: 'node2'}},
                x: 1000,
                y: 200,
                type: 'channel',
                symbol: 'rect',
                symbolSize: channelSymbolSize,
                category: 3
              }, {
                name: 'node3',
                label: {normal: {formatter: 'node3'}},
                x: 1000,
                y: 300,
                type: 'channel',
                symbol: 'rect',
                symbolSize: channelSymbolSize,
                category: 3
              }, {
                name: 'x1',
                label: {normal: {formatter: ''}},
                x: 1500,
                y: 700,
                type: 'linenode',
                symbol: 'rect',
                symbolSize: lineNodeSymbolSize,
                itemStyle: {normal: {color: lineNodeColor}}
              }, {
                name: 'x2',
                label: {normal: {formatter: ''}},
                x: 0,
                y: 700,
                type: 'linenode',
                symbol: 'rect',
                symbolSize: lineNodeSymbolSize,
                itemStyle: {normal: {color: lineNodeColor}}
              }, {
                name: 'x3',
                label: {normal: {formatter: ''}},
                x: 0,
                y: 0,
                type: 'linenode',
                symbol: 'rect',
                symbolSize: lineNodeSymbolSize,
                itemStyle: {normal: {color: lineNodeColor}}
              }, {
                name: 'x4',
                label: {normal: {formatter: ''}},
                x: 1500,
                y: 0,
                type: 'linenode',
                symbol: 'rect',
                symbolSize: lineNodeSymbolSize,
                itemStyle: {normal: {color: lineNodeColor}}
              }],
              // links: [],
              links: [{
                source: 'p1',
                target: 'p1-a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p1',
                target: 'p1-a2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p2',
                target: 'p2-a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p2',
                target: 'p2-a2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p3',
                target: 'p3-a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p3',
                target: 'p3-a2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p4',
                target: 'p4_a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p5',
                target: 'p5_a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'p1-a2',
                target: 'node0',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'node0',
                target: 'Exchange1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
//                  normal: {curveness: 0.2}
                }
              }, {
                source: 'Exchange1',
                target: 'queue2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'queue2',
                target: 'node1',
                label: {
                  normal: {
                    show: true,
                    formatter: '连接',
                    fontSize: 10

                  }
                },
              }, {
                source: 'queue2',
                target: 'node2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'queue2',
                target: 'node3',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'node1',
                target: 'p4_a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'node2',
                target: 'p4_a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'node3',
                target: 'p4_a1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'x1',
                target: 'x2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
                  normal: {
                    type: 'dashed',
                    color: baseBorderColor
                  }
                }
              }, {
                source: 'x2',
                target: 'x3',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
                  normal: {
                    type: 'dashed',
                    color: baseBorderColor
                  }
                }
              }, {
                source: 'x3',
                target: 'x4',
                label: {
                  normal: {
                    show: true,
                    formatter: 'Base'
                  }
                },
                lineStyle: {
                  normal: {
                    type: 'dashed',
                    color: baseBorderColor
                  }
                }
              }, {
                source: 'x4',
                target: 'x1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
                lineStyle: {
                  normal: {
                    type: 'dashed',
                    color: baseBorderColor
                  }
                }
              }],
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0
                }
              }
            }
          ]
        };
        this.myChart.setOption(option);
      }
    },
    computed: mapGetters([])
  }
</script>
