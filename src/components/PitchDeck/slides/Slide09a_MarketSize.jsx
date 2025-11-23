import React from 'react';

const Slide09a_MarketSize = () => {
    return (
        <div className="slide active">
            <h2>Market Opportunity</h2>
            <div className="grid-3">
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">🌍</span>
                    <h3>Regional Potential</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>100M People</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        In industrial zones across North Africa (Tunisia, Algeria, Libya, Morocco)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">🎯</span>
                    <h3>Starting Point: Tunisia</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>50+</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Municipalities with industrial zones needing monitoring
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--accent-bright)' }}>
                    <span className="card-icon">🏭</span>
                    <h3>Industrial Compliance</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>2026</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        EU Carbon Border Adjustment deadline drives demand
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide09a_MarketSize;
