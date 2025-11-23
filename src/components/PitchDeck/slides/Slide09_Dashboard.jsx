import React from 'react';

const Slide09_Dashboard = () => {
    return (
        <div className="slide active">
            <h2>Real-Time Pollution Tracking</h2>
            <div className="screenshot-container">
                <img src="/live_dashboard.jpg" alt="Nafas Dashboard" style={{ width: '48%', marginRight: '2%' }} />
                <img src="/live_map_pollution_data.jpg" alt="Pollution Map" style={{ width: '48%' }} />
            </div>
            <div className="grid-3" style={{ marginTop: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '2rem' }}>🌪️</span>
                    <p>Wind Patterns</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '2rem' }}>⚠️</span>
                    <p>SMS Alerts</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '2rem' }}>🧪</span>
                    <p>Fluoride Tracking</p>
                </div>
            </div>
        </div>
    );
};

export default Slide09_Dashboard;
