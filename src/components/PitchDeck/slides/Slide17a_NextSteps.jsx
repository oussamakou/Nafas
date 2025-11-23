import React from 'react';

const Slide17a_NextSteps = () => {
    return (
        <div className="slide active">
            <h2>Next Steps with 1,000 TND</h2>
            <div className="grid-4">
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">📡</span>
                    <h3>Deploy Sensors</h3>
                    <p style={{ fontSize: '1.1rem' }}>
                        7 additional sensors across Gabes industrial zone (400 TND)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">🌐</span>
                    <h3>Network Gateway</h3>
                    <p style={{ fontSize: '1.1rem' }}>
                        LoRaWAN gateway for 10km coverage (300 TND)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">☁️</span>
                    <h3>Infrastructure</h3>
                    <p style={{ fontSize: '1.1rem' }}>
                        6-month server and SMS service costs (200 TND)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">🤝</span>
                    <h3>Municipal Pilot</h3>
                    <p style={{ fontSize: '1.1rem' }}>
                        Outreach and validation with Gabes Municipality (100 TND)
                    </p>
                </div>
            </div>
            <div className="glass-panel" style={{ marginTop: '2rem', maxWidth: '900px' }}>
                <p style={{ fontSize: '1.3rem', textAlign: 'center' }}>
                    <strong>Timeline:</strong> 6 months to validate, 12 months to secure first contract
                </p>
            </div>
        </div>
    );
};

export default Slide17a_NextSteps;
