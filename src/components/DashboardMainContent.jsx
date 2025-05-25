import React from 'react';
import '../styles/DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalenderView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main-content">
      <DashboardOverview />
      <div className="dashboard-grid">
        <div className="dashboard-column">
          <CalendarView />
          <UpcomingSchedule />
        </div>
        <div className="dashboard-column">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;