import React from 'react';

const Slide10_Revenue = () => {
    return (
        <div className="slide active">
            <h2>Revenue Streams</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
                <div className="card">
                    <span className="card-icon">🏛️</span>
                    <h3>Municipalities</h3>
                    <p className="highlight">15,000 TND / year</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                        <li>• Real-time City Dashboard</li>
                        <li>• Monthly Environmental Reports</li>
                        <li>• Public API Access</li>
                    </ul>
                </div>
                <div className="card">
                    <span className="card-icon">🏭</span>
                    <h3>Industrial Zones</h3>
                    <p className="highlight">25,000 TND + 5k/yr</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                        <li>• Compliance Monitoring</li>
                        <li>• Leak Detection Alerts</li>
                        <li>• Impact Assessment Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide10_Revenue;
