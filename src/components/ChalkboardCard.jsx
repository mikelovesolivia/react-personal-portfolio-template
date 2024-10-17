import React from 'react';
import './components.css';

function ChalkboardCard({ title, description, items }) {
  return (
    <div className="chalkboard-card">
      <h2 className="chalkboard-title">{title}</h2>
      <p className="chalkboard-description">{description}</p>
      <ul className="chalkboard-list">
        {items.map((item, index) => (
          <li key={index} className="chalkboard-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ChalkboardCard;
