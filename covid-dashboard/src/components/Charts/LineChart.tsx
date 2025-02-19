// src/components/Charts/LineChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface LineChartProps {
  data: { date: string; value: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const option = {
    title: {
      text: '📈 COVID-19 Daily Cases',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: { trigger: 'axis' },
    grid: { top: '12%', bottom: '12%', left: '10%', right: '10%' },
    xAxis: {
      type: 'category',
      data: data.map(d => d.date),
      axisLabel: { rotate: 30, color: '#555' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { formatter: '{value} cases' }
    },
    series: [{
      type: 'line',
      data: data.map(d => d.value),
      smooth: true,
      lineStyle: { color: '#5470C6', width: 3 },
      itemStyle: { color: '#91cc75' }
    }]
  };

  return <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default LineChart;
