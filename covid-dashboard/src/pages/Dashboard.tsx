// src/pages/Dashboard.tsx
import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchCovidRequest } from '../features/covid/covidSlice';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.covid);

  useEffect(() => {
    dispatch(fetchCovidRequest());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!Array.isArray(data) || data.length === 0) return <p className="text-center">No data available</p>;

  const barData = data.map(item => ({ name: item.publishdate, value: item.totalCases ?? 0 }));
  const lineData = data.map(item => ({ date: item.publishdate, value: item.newCases ?? 0 }));
  const pieData = [
    { name: 'หายป่วย', value: data.reduce((sum, item) => sum + (item.totalRecovered ?? 0), 0) },
    { name: 'เสียชีวิต', value: data.reduce((sum, item) => sum + (item.totalDeaths ?? 0), 0) },
    { name: 'กำลังรักษา', value: data.reduce((sum, item) => sum + (item.currentlyInfectedPatients ?? 0), 0) }
  ];

  return (
    <div className="container mx-auto p-6 grid grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded shadow-lg border">
        <h2 className="text-lg font-semibold mb-3 text-blue-600">Bar Chart (ผู้ติดเชื้อสะสม)</h2>
        <BarChart data={barData} />
      </div>
      <div className="bg-white p-5 rounded shadow-lg border">
        <h2 className="text-lg font-semibold mb-3 text-orange-500">Line Chart (ผู้ติดเชื้อรายใหม่)</h2>
        <LineChart data={lineData} />
      </div>
      <div className="bg-white p-5 rounded shadow-lg border">
        <h2 className="text-lg font-semibold mb-3 text-red-500">Pie Chart (สัดส่วนผู้ติดเชื้อ)</h2>
        <PieChart data={pieData} />
      </div>
    </div>
  );
};

export default Dashboard;

