import React from 'react';
import '../styles/SimpleAppointmentCard.css';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const SimpleAppointmentCard = ({ title, time, completed }) => {
  return (
    <div className={`appointment-card ${completed ? 'completed' : ''}`}>
      <div className="card-icon">
        {completed ? <FiCheckCircle /> : <FiClock />}
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;