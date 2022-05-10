// todo ======================= 图表概览 =======================

// todo ======================= 饼图 =======================

// todo ======================= 地图 =======================

// todo ======================= 柱状图 =======================

// todo  ======================= 折线图 =======================
const myChart = echarts.init(document.querySelector('.line'))

const option = {
  title: {
    text: '薪资 Salary',
    textStyle: {
      color: '#666',
    },
  },
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: [
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
    ],
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
  },
  series: [
    {
      name: '实际薪资',
      data: [
        8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300,
        9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
      ],
      type: 'line',
      // 是否是平滑的曲线
      smooth: true,
      // 不要小圆点
      symbol: 'none',
    },
    {
      name: '期望薪资',
      data: [
        9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600,
        15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000,
      ],
      type: 'line',
      // 是否是平滑的曲线
      smooth: true,
      // 不要小圆点
      symbol: 'none',
    },
  ],
  color: ['#ee6666', '#5470c6'],
  dataZoom: [
    {
      type: 'inside',
      start: 20,
      end: 40,
    },
    {
      type: 'slider',
      start: 20,
      end: 40,
    },
  ],
}

myChart.setOption(option)
