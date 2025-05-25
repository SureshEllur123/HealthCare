import React from 'react';
import '../styles/DashboardOverview.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <div className="overview-header">
        <h2>Dashboard Overview</h2>
        <div className="date-selector">
          <span>October 2021</span>
        </div>
      </div>
      <div className="overview-content">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </section>
  );
};

export default DashboardOverview;