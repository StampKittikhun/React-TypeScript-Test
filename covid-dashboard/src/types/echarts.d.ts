// src/types/echarts.d.ts
declare module 'echarts' {
  export interface EChartsOption {
    title?: { text: string };
    tooltip?: any;
    xAxis?: any;
    yAxis?: any;
    series?: any[];
  }
  const echarts: any;
  export default echarts;
}
