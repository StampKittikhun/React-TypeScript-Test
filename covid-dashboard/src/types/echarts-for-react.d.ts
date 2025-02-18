declare module 'echarts-for-react' {
  import React from 'react';
  import { EChartsOption } from 'echarts';

  interface ReactEChartsProps {
    option: EChartsOption;
    style?: React.CSSProperties;
    className?: string;
    theme?: string | object;
    notMerge?: boolean;
    lazyUpdate?: boolean;
    showLoading?: boolean;
    loadingOption?: object;
    onChartReady?: (chart: any) => void;
    onEvents?: { [key: string]: (param: any) => void };
  }

  const ReactECharts: React.FC<ReactEChartsProps>;
  export default ReactECharts;
}
