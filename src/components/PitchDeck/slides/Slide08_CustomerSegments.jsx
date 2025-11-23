import React from 'react';

const Slide08_CustomerSegments = () => {
    return (
        <div className="slide active">
            <h2>Three Revenue Streams</h2>
            <div className="grid-3">
                <div className="card">
                    <span className="card-icon">🏛️</span>
                    <h3>Municipalities</h3>
                    <p className="highlight" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>15,000 TND / year</p>
                    <p>For 50 sq km network. 60% cheaper than consultants with continuous monitoring.</p>
                </div>
                <div className="card">
                    <span className="card-icon">🏭</span>
                    <h3>Industrial Clients</h3>
                    <p className="highlight" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>25,000 TND Install + 5k Service</p>
                    <p>Compliance insurance for EU Carbon Border Adjustment (2026).</p>
                </div>
                <div className="card">
                    <span className="card-icon">👨‍👩‍👧‍👦</span>
                    <h3>Citizens</h3>
                    <p className="highlight" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>FREE Basic Access</p>
                    <p>SMS alerts in Arabic & French. Builds public trust and political pressure.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide08_CustomerSegments;
