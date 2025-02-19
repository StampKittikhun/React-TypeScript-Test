// 📂 src/pages/Dashboard.tsx
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

  if (loading) return <p className="text-center">กำลังโหลดข้อมูล โปรดรอสักครู่...</p>;
  if (error) return <p className="text-center text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: {error}</p>;
  if (!Array.isArray(data) || data.length === 0)
    return <p className="text-center">ไม่พบข้อมูลที่พร้อมใช้งาน</p>;

  const barData = data.map(item => ({
    name: item.publishdate,
    value: item.totalCases ?? 0,
  }));

  const lineData = data.map(item => ({
    date: item.publishdate,
    value: item.newCases ?? 0,
  }));

  const pieData = [
    { name: 'หายป่วย', value: data.reduce((sum, item) => sum + (item.totalRecovered ?? 0), 0) },
    { name: 'เสียชีวิต', value: data.reduce((sum, item) => sum + (item.totalDeaths ?? 0), 0) },
    { name: 'กำลังรักษา', value: data.reduce((sum, item) => sum + (item.currentlyInfectedPatients ?? 0), 0) },
  ];

  return (
    <div className="container mx-auto p-8 flex flex-row flex-nowrap justify-start items-start space-x-8 overflow-x-auto">
      <div className="bg-white p-6 rounded-lg shadow-xl border w-[500px] min-w-[500px] transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">
          Bar Chart (จำนวนผู้ติดเชื้อสะสม)
        </h2>
        <BarChart data={barData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl border w-[500px] min-w-[500px] transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-green-600 text-center">
          Line Chart (จำนวนผู้ติดเชื้อรายใหม่)
        </h2>
        <LineChart data={lineData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl border w-[500px] min-w-[500px] transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-red-600 text-center">
          Pie Chart (สัดส่วนผู้ติดเชื้อ)
        </h2>
        <PieChart data={pieData} />
      </div>
    </div>
  );
  
};

export default Dashboard;

