<template>
  <div>
    this is chart example2<br/>

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
      }
    },
    mounted: function () {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.on('click', function (params) {
        if(params.dataType == 'edge'){
          console.log(params);
          that.handleClick(params);
        }
      });
      that.myChart = myChart;
      that.drawLine();
    },
    methods: {
      handleClick: function (params) {
        alert(params.name);
      },
      drawLine: function () {
        let productLineColor = '#99CCCC';
        let appNameColor = '#339999';
        let productLineColorConsumer = '#33CC33';
        let appNameColorConsumer = '#00CC00';
        let exchangeColor = '#CC0033';
        let queueColor = '#996699';
        let channelColor = '#FF99CC';
        let seriesColorState1 = '#669933';
        let seriesColorState2 = '#CCCCCC';
        let seriesColorState3 = '#CC0033';
        let defaultSymbolSize = 60;
        let productLineSymbolSize = 60;
        let appNameSymbolSize = 40;
        let exchangeSymbolSize = 60;
        let queueSymbolSize = 60;
        let channelSymbolSize = 60;
        let option = {
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              switch (params.data.type) {
                case 'productline':
                  return "产线：XXXX <br/> 简称:XXXXX";
                  break;
                case 'app':
                  return "应用:XXXX<br/>描述:XXXXXX";
                  break;
                case 'exchange':
                  return "exchange名称:XXXX<br/>exchange类型:XXXXX<br/>routing-key:XXXX<br/>是否持久化:XX<br/>是否自动删除:XXXX<br/>是否internal:XXX<br/>创建者:XXXX";
                  break;
                case 'queue':
                  return "queue名称:XXX<br/>autoack:XXX<br/>fetchcount:XXXX<br/>threadnum:XXX<br/>创建者:XXXX<br/>描述:XXXXX";
                  break;
                case 'channel':
                  return "channel ip:XXXX<br/>channel port:XXXX<br/>状态:XXX<br/>channel number:XXX<br/>exchange类型：XXXX<br/>binndingkey:XXXX<br/>描述:XXXXX";
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
                  fontWeight: 'bold'
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
              data: [{
                name: 'p1',
                x: 100,
                y: 100,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                itemStyle: {normal: {color: productLineColor}}
              }, {
                name: 'p2',
                x: 100,
                y: 300,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                itemStyle: {normal: {color: productLineColor}}
              }, {
                name: 'p3',
                x: 100,
                y: 500,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                itemStyle: {normal: {color: productLineColor}}
              }, {
                name: 'p4',
                x: 1300,
                y: 200,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                itemStyle: {normal: {color: productLineColorConsumer}}
              }, {
                name: 'p5',
                x: 1300,
                y: 400,
                type: 'productline',
                symbolSize: productLineSymbolSize,
                itemStyle: {normal: {color: productLineColorConsumer}}
              }, {
                name: 'p1-a1',
                x: 300,
                y: 100,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'p1-a2',
                x: 300,
                y: 150,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'p2-a1',
                x: 300,
                y: 300,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'p2-a2',
                x: 300,
                y: 350,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'bussiness_ci',
                x: 300,
                y: 500,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'bussiness_xs',
                x: 300,
                y: 550,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColor}}
              }, {
                name: 'rca_commit',
                x: 1100,
                y: 200,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColorConsumer}}
              }, {
                name: 'rabbitmq-exmaple',
                x: 1100,
                y: 400,
                type: 'app',
                symbolSize: appNameSymbolSize,
                itemStyle: {normal: {color: appNameColorConsumer}}
              }, {
                name: 'Exchange1',
                x: 500,
                y: 200,
                type: 'exchange',
                symbol:'rect',
                symbolSize: exchangeSymbolSize,
                itemStyle: {normal: {color: exchangeColor}}
              }, {
                name: 'Exchange2',
                x: 500,
                y: 400,
                type: 'exchange',
                symbol:'rect',
                symbolSize: exchangeSymbolSize,
                itemStyle: {normal: {color: exchangeColor}}
              }, {
                name: 'queue1',
                x: 700,
                y: 100,
                type: 'queue',
                symbol:'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}}
              }, {
                name: 'queue2',
                x: 700,
                y: 300,
                type: 'queue',
                symbol:'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}}
              }, {
                name: 'queue3',
                x: 700,
                y: 500,
                type: 'queue',
                symbol:'rect',
                symbolSize: queueSymbolSize,
                itemStyle: {normal: {color: queueColor}}
              }, {
                name: 'channel1',
                x: 900,
                y: 100,
                type: 'channel',
                symbol:'rect',
                symbolSize: channelSymbolSize,
                itemStyle: {normal: {color: channelColor}}
              }, {
                name: 'channel2',
                x: 900,
                y: 200,
                type: 'channel',
                symbol:'rect',
                symbolSize: channelSymbolSize,
                itemStyle: {normal: {color: channelColor}}
              }, {
                name: 'channel3',
                x: 900,
                y: 300,
                type: 'channel',
                symbol:'rect',
                symbolSize: channelSymbolSize,
                itemStyle: {normal: {color: channelColor}}
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
//                  normal: {curveness: 0.2}
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
                target: 'bussiness_ci',
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
                target: 'bussiness_xs',
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
                target: 'rca_commit',
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
                target: 'rabbitmq-exmaple',
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
                target: 'channel1',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'queue2',
                target: 'channel2',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'queue2',
                target: 'channel3',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'channel1',
                target: 'rca_commit',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'channel2',
                target: 'rca_commit',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
              }, {
                source: 'channel3',
                target: 'rca_commit',
                label: {
                  normal: {
                    show: true,
                    formatter: ''
                  }
                },
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
