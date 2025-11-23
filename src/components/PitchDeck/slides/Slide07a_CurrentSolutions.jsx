import React from 'react';

const Slide07a_CurrentSolutions = () => {
    return (
        <div className="slide active">
            <h2>Current Solutions vs Nafas</h2>
            <div className="grid-2">
                <div className="card" style={{ borderColor: 'var(--red)' }}>
                    <span className="card-icon">🏛️</span>
                    <h3>ANPE (Status Quo)</h3>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>🔴 Manual monitoring: 1-2 times/year</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>🔴 Lab analysis: 2-4 weeks delay</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>🔴 No public access to data</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>🔴 Limited coverage (major cities only)</p>
                    <p className="highlight" style={{ fontSize: '1.3rem', marginTop: '1rem' }}>~50,000 TND/year</p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">🚀</span>
                    <h3>Nafas (Our Solution)</h3>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>✅ Real-time monitoring: 24/7</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>✅ Instant data visualization</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>✅ Public API & SMS alerts</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>✅ Full coverage (50 sq km network)</p>
                    <p className="highlight" style={{ fontSize: '1.3rem', marginTop: '1rem' }}>15,000 TND/year</p>
                </div>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '1.4rem', color: 'var(--accent)' }}>
                <strong>70% cost reduction + 365x more data points</strong>
            </p>
        </div>
    );
};

export default Slide07a_CurrentSolutions;
