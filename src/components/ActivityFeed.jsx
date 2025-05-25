import React from 'react';
import '../styles/ActivityFeed.css';
import { activityData } from '../data/activityData';

const ActivityFeed = () => {
  return (
    <section className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p className="activity-summary">3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-bar-container">
            <div 
              className="chart-bar" 
              style={{ height: `${item.value}%`, backgroundColor: item.color }}
            ></div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityFeed;