import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return (
    <div className="container">
      <div className="header">
        <h1>Hackathon</h1>
        <div className="actions">
          <button className="button primary">CCTV</button>
          <button className="button secondary">Fraud-Detection</button>
        </div>
      </div>
      <div className="main">
        <div className="card">
          <h2>CCTV 
Surveillance</h2>
          <p>Live Incidents : </p>
          <button className="button small">View</button>
        </div>
        <div className="card">
          <h2>Social Media
Incidents</h2>
          <p>Negative Posts Detected : </p>
          <button className="button small">View</button>
        </div>
        <div className="card">
          <h2>Social Media
Monitoring</h2>
          <p>Assignment due on April 5</p>
          <button className="button small">View</button>
        </div>
        <div className="card">
          <h2>SOS
Chat bo</h2>
          <p>Negative Posts Detected : </p>
          <button className="button small">View</button>
        </div>
        <div className="card">
          <h2>SOS
Chat bot</h2>
          <p>Negative Posts Detected : </p>
          <button className="button small">View</button>
        </div>
        <div className="card">
          <h2>SOS
Chat bot</h2>
          <p>Negative Posts Detected : </p>
          <button className="button small">View</button>
        </div>
      </div>
      <div className="aspect-ratio-container">
        <div className="aspect-ratio-item"></div>
      </div>
    </div>
  );
}

export default MyComponent;
