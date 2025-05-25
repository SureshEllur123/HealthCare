import React from 'react';
import '../styles/UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentsCard';
import { upcomingSchedule } from '../data/upcomingSchedule';

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
      <div className="schedule-header">
        <h3>The Upcoming Schedule</h3>
      </div>
      <div className="schedule-days">
        {upcomingSchedule.map((daySchedule, index) => (
          <div key={index} className="schedule-day">
            <h4 className="day-title">{daySchedule.day}</h4>
            <div className="day-appointments">
              {daySchedule.appointments.map((appointment, idx) => (
                <SimpleAppointmentCard key={idx} {...appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule;