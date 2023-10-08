import React from 'react';
import './style/cadrs.css'; // Import your custom CSS file

function Cards() {
  return (
    <div className="card-layout">
      <div className="card">
        <img src="/edu5.jpg" alt="Person 1" className="card-image" />
        <h2 className="card-title">Punjab University</h2>
        <p className="card-info">From Islambad Pakistan</p>
        <button className="action-button">Button</button>
      </div>
      <div className="card">
        <img src="/edu6.png" alt="Person 2" className="card-image" />
        <h2 className="card-title">BZU University </h2>
        <p className="card-info">From Multan Pakistan</p>
        <button className="action-button">Button</button>
      </div>
      <div className="card">
        <img src="/edu4.jpg" alt="Person 3" className="card-image" />
        <h2 className="card-title">Open University</h2>
        <p className="card-info">From Islamabad Pakistan</p>
        <button className="action-button">Button</button>
      </div>
      <div className="card">
        <img src="/edu1.jpg" alt="Person 4" className="card-image" />
        <h2 className="card-title">EUT University</h2>
        <p className="card-info">From Lahore Pakistan</p>
        <button className="action-button">Button</button>
      </div>
    </div>
   
    
  );
}

export default Cards;
