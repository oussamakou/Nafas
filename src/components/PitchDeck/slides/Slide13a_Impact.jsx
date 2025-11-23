import React from 'react';

const Slide13a_Impact = () => {
    return (
        <div className="slide active">
            <h2>Potential Impact</h2>
            <div className="grid-3">
                <div className="card" style={{ borderColor: 'var(--red)' }}>
                    <span className="card-icon">❤️</span>
                    <h3>Health</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>150,000 People</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        In Gabes gain access to air quality data for the first time
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                        Early warning systems have been shown to reduce exposure (WHO)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">💰</span>
                    <h3>Economic</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>70% Savings</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Municipalities save on environmental monitoring vs consultants
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                        Factories avoid EU CBAM penalties with real-time compliance data
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">📢</span>
                    <h3>Social</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transparency</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Public data drives accountability and policy enforcement
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                        Citizens gain data to advocate for their health
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide13a_Impact;
