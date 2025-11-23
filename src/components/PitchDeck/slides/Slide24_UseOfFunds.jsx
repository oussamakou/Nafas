import React from 'react';

const Slide24_UseOfFunds = () => {
    return (
        <div className="slide active">
            <h2>Use of Funds: 1,000 TND Breakdown</h2>
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', marginTop: '3rem' }}>
                <div style={{ flex: 1 }}>
                    <div className="glass-panel" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent)' }}>Hardware (7 Sensors + Gateway)</h3>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                    7 sensor nodes × 60 TND + 1 LoRaWAN gateway
                                </p>
                            </div>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>600 TND</p>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ color: 'var(--green)' }}>Installation & Deployment</h3>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                    2 engineers × 1 day labor + transportation
                                </p>
                            </div>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>200 TND</p>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ color: 'var(--text-muted)' }}>Operations (6 Months)</h3>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                    Cloud hosting + SMS gateway + maintenance
                                </p>
                            </div>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>150 TND</p>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>Municipal Outreach</h3>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                    Printed reports + presentation materials
                                </p>
                            </div>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>50 TND</p>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, textAlign: 'center' }}>
                    <div className="glass-panel" style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(255,0,0,0.1), rgba(0,255,255,0.1))' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Total Investment</h3>
                        <p style={{ fontSize: '5rem', fontWeight: 'bold', color: 'var(--accent-bright)', margin: '1rem 0' }}>1,000</p>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>TND</p>
                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--glass-border)' }}>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Expected Return (Year 1)</p>
                            <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--green)' }}>15,000 TND</p>
                            <p style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>15x ROI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide24_UseOfFunds;
