// src/components/Charts/PieChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface PieChartProps {
  data: { name: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const option = {
    title: {
      text: 'COVID-19 Case Distribution',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      bottom: '0%',
      textStyle: { fontSize: 10 },
    },
    series: [
      {
        name: 'Case Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          show: true,
          formatter: '{b}: {c} ({d}%)',
        },
        labelLine: { show: true },
        data: data.map(({ name, value }) => ({ name, value })),
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
};

export default PieChart;