import React from 'react';

const Slide09a_MarketSize = () => {
    return (
        <div className="slide active">
            <h2>100M Person Opportunity</h2>
            <div className="grid-3">
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">🌍</span>
                    <h3>Total Addressable Market</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>100M People</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Living in industrial zones across North Africa (Tunisia, Algeria, Libya, Morocco)
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">🎯</span>
                    <h3>Serviceable Market</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Tunisia</p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        <strong>50+</strong> municipalities with industrial zones
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        <strong>200+</strong> factories subject to environmental regulation
                    </p>
                </div>
                <div className="card" style={{ borderColor: 'var(--accent-bright)' }}>
                    <span className="card-icon">💰</span>
                    <h3>Revenue Potential</h3>
                    <p className="highlight" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>$2M/year</p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Conservative estimate based on 50 key industrial zones in North Africa.
                    </p>
                </div>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '1.4rem', textAlign: 'center', color: 'var(--accent)' }}>
                <strong>We're starting with Gabes, but the opportunity is regional.</strong>
            </p>
        </div>
    );
};

export default Slide09a_MarketSize;
