import React from 'react';
import '../styles/CalendarView.css';
import { calendarData } from '../data/calendarData';

const CalendarView = () => {
  return (
    <section className="calendar-view">
      <div className="calendar-container">
        <div className="calendar-header">
          <h3>October 2021</h3>
        </div>
        <div className="calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          {calendarData.days.map((day, index) => (
            <div 
              key={index} 
              className={`calendar-day ${day.hasAppointment ? 'has-appointment' : ''} ${day.isCurrent ? 'current-day' : ''}`}
            >
              <span className="day-number">{day.number}</span>
              {day.hasAppointment && (
                <div className="appointment-time">{day.appointmentTime}</div>
              )}
            </div>
          ))}
        </div>
        <div className="calendar-appointments">
          <h4>Appointments</h4>
          <div className="appointment-cards">
            {calendarData.appointments.map((appointment, index) => (
              <div key={index} className="appointment-card">
                <div className="appointment-time">{appointment.time}</div>
                <div className="appointment-details">
                  <h5>{appointment.title}</h5>
                  <p>{appointment.doctor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarView;