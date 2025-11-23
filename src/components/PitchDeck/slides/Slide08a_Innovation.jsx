import React from 'react';

const Slide08a_Innovation = () => {
    return (
        <div className="slide active">
            <h2>Technical Innovation</h2>
            <div className="grid-3">
                <div className="card">
                    <span className="card-icon">🔬</span>
                    <h3>Sensor Calibration</h3>
                    <p style={{ fontSize: '1.2rem' }}>
                        Custom tuning for industrial pollutants (fluoride, phosphate dust) that standard sensors miss
                    </p>
                </div>
                <div className="card">
                    <span className="card-icon">💡</span>
                    <h3>Low-Cost Hardware</h3>
                    <p style={{ fontSize: '1.2rem' }}>
                        60 TND build cost using commodity components (ESP32, PMS5003, DHT11)
                    </p>
                </div>
                <div className="card">
                    <span className="card-icon">📱</span>
                    <h3>Freemium Model</h3>
                    <p style={{ fontSize: '1.2rem' }}>
                        Free for citizens (SMS alerts), paid for municipalities and factories
                    </p>
                </div>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '1.4rem', textAlign: 'center', color: 'var(--accent)' }}>
                Built for Tunisia, scalable to North Africa
            </p>
        </div>
    );
};

export default Slide08a_Innovation;
