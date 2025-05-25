import React from 'react';
import '../styles/AnatomySection.css';
import { anatomyData } from '../data/anatomyData';
import image from "../assets/ANATOMY.jpg"
const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img src={image} alt="Human Anatomy" className="anatomy-image" />
        {anatomyData.map((item, index) => (
          <div 
            key={index}
            className={`anatomy-marker ${item.status}`}
            style={{ top: `${item.top}%`, left: `${item.left}%` }}
          >
            <div className="marker-dot"></div>
            <div className="marker-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;