//  src/components/Charts/BarChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface BarChartProps {
  data: { name: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const option = {
    title: {
      text: 'COVID-19 Cases Overview',
      left: 'center',
      textStyle: { fontSize: 18, fontWeight: 'bold', color: '#2C3E50' }
    },
    tooltip: { trigger: 'axis' },
    grid: { top: '15%', left: '8%', right: '8%', bottom: '12%' },
    xAxis: {
      type: 'category',
      data: data.map(d => d.name),
      axisLabel: { rotate: 25, color: '#2C3E50' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#2C3E50' }
    },
    series: [{
      type: 'bar',
      data: data.map(d => d.value),
      itemStyle: { color: '#3498db' },
      barWidth: '55%',
    }],
  };

  return (
    <div className="chart-card rounded-lg border border-gray-300 p-4 shadow">
      <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
    </div>
  );
};

export default BarChart;
