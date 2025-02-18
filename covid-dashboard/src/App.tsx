// src/App.tsx
import React from 'react';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Dashboard />
    </div>
  );
};

export default App;
