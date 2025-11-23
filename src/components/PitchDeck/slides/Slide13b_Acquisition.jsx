import React from 'react';

const Slide13b_Acquisition = () => {
    return (
        <div className="slide active">
            <h2>Customer Acquisition Strategy</h2>
            <div className="grid-3">
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">🤝</span>
                    <h3>Direct Sales</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>B2G & B2B</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• Direct outreach to Municipalities</li>
                        <li>• Partnerships with Industrial Zone Management</li>
                        <li>• Leveraging family networks for warm intros</li>
                    </ul>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">📢</span>
                    <h3>Community Led</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Bottom-Up</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• Free SMS alerts for citizens</li>
                        <li>• Social media advocacy campaigns</li>
                        <li>• Creating political pressure for adoption</li>
                    </ul>
                </div>
                <div className="card" style={{ borderColor: 'var(--text-muted)' }}>
                    <span className="card-icon">🎓</span>
                    <h3>Academic Validation</h3>
                    <p className="highlight" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Trust Building</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• Joint studies with Universities</li>
                        <li>• Publishing data in journals</li>
                        <li>• Establishing scientific credibility</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide13b_Acquisition;
