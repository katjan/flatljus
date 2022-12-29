import React, { useState } from 'react';
import './bhstyles.css'; // Import the CSS file
import Snowfall from 'react-snowfall';



const BusinessHours = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().getDay();
  const today = daysOfWeek[currentDay];
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const places = [
    {
      name: 'Restaurang Lapplandia',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Lobbybaren & Pelikanhyllan',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Meteorologen Ski Lodge',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Grönan',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Lappis',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Nordalsköket',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    {
      name: 'Låktatjåkko Fjällstation',
      hours: {
        Monday: 'Closed',
        Tuesday: 'Closed',
        Wednesday: 'Closed',
        Thursday: 'Closed',
        Friday: 'Closed',
        Saturday: 'Closed',
        Sunday: 'Closed',
      },
    },
    // ... other places
  ];

  return (
    <div className="business-hours ski-theme">
      <Snowfall />
      <h2 className="business-hours__title">Business Hours</h2>
      {places.map(place => (
      <div className="usiness-hours__grid">
        <div key={place.name} className="business-hours__place">
          <h3
            className="business-hours__place-name"
            onClick={toggleExpanded}
          >
            {place.name}
          </h3>
          <ul className="business-hours__hours-list">
            {!expanded &&
              <li key={today} className="business-hours__hours-item">
                Today {place.hours[today]}
              </li>
            }
            {expanded &&
              Object.entries(place.hours).map(([day, hours]) => (
                <li key={day} className="business-hours__hours-item">
                  {day}: {hours}
                </li>
              ))}
          </ul>
        </div>
      </div>
      ))}
    </div>
  );
};

export default BusinessHours;