<template>
  <div>
    this is chart example<br/>
    <div>{{selected}}</div>

    <div>
      <div id="myChart" :style="{width: '600px', height: '500px'}"></div>
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
        selected: {
          "直接访问": true,
          "邮件营销": true,
          "联盟广告": true,
          "视频广告": true,
          "搜索引擎": true,
          "百度": true,
          "谷歌": true,
          "必应": true,
          "其他": true
        }
      }
    },
    mounted: function () {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      that.myChart = myChart;
      that.drawLine();
      that.myChart.on('legendselectchanged', function (params) {
        // 获取点击图例的选中状态
        let isSelected = params.selected[params.name];
        that.selected = params.selected;
        // 在控制台中打印
        console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
        // 打印所有图例的状态
        console.log(params.selected);
      });
    },
    methods: {
      drawLine: function () {
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '邮件营销',
              type: 'bar',
              stack: '广告',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '广告',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '广告',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '搜索引擎',
              type: 'bar',
              data: [862, 1018, 964, 1026, 1679, 1600, 1570],
              markLine: {
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                },
                data: [
                  [{type: 'min'}, {type: 'max'}]
                ]
              }
            },
            {
              name: '百度',
              type: 'bar',
              barWidth: 5,
              stack: '搜索引擎',
              data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
              name: '谷歌',
              type: 'bar',
              stack: '搜索引擎',
              data: [120, 132, 101, 134, 290, 230, 220]
            },
            {
              name: '必应',
              type: 'bar',
              stack: '搜索引擎',
              data: [60, 72, 71, 74, 190, 130, 110]
            },
            {
              name: '其他',
              type: 'bar',
              stack: '搜索引擎',
              data: [62, 82, 91, 84, 109, 110, 120]
            }
          ]
        };
        this.myChart.setOption(option);
      }
    },
    computed: mapGetters([])
  }
</script>
