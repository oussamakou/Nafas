import React from 'react';

const Slide11_Financials = () => {
    return (
        <div className="slide active">
            <h2>The Ask: 1,000 TND</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>To launch the <strong>Micro-Pilot</strong> in Gabes.</p>
            <div className="split-layout">
                <div>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Pilot Economics</h3>
                    <div className="glass-panel" style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>📉 <strong>Investment:</strong> 1,000 TND</p>
                        <p style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>🎯 <strong>Target:</strong> 1 Municipal Contract</p>
                        <p style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>💰 <strong>Value:</strong> 15,000 TND / Year</p>
                    </div>
                    <p className="highlight" style={{ marginTop: '1.5rem', fontSize: '1.4rem' }}>15x ROI in Year 1</p>
                </div>
                <div>
                    <h3 style={{ color: 'var(--green)', marginBottom: '1.5rem' }}>Unit Economics</h3>
                    <div className="metric-box" style={{ marginBottom: '1rem' }}>
                        <div className="metric-value">300 TND</div>
                        <div className="metric-label">CAC (Partner-Led Sales)</div>
                    </div>
                    <div className="metric-box" style={{ marginBottom: '1rem' }}>
                        <div className="metric-value">45,000 TND</div>
                        <div className="metric-label">LTV (3-Year Contract)</div>
                    </div>
                    <div className="big-stat">150:1</div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>High ratio due to near-zero CAC via NGO partners.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide11_Financials;
