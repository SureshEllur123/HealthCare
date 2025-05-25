import React from 'react';
import '../styles/HealthStatusCards.css';
import { healthStatusData } from '../data/anatomyData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatusData.map((item, index) => (
        <div key={index} className={`health-card ${item.status}`}>
          <div className="card-header">
            <h3>{item.title}</h3>
            <span className="status-badge">{item.statusText}</span>
          </div>
          <div className="card-content">
            <p className="card-date">{item.date}</p>
            <p className="card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;