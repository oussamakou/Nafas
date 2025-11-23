import React from 'react';

const Slide23_RiskMitigation = () => {
    return (
        <div className="slide active">
            <h2>Risk Mitigation Strategy</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div className="glass-panel" style={{ textAlign: 'left', borderLeft: '4px solid var(--red)' }}>
                    <h3 style={{ color: 'var(--red)' }}>Risk: Slow Municipal Sales</h3>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                        <strong>Mitigation:</strong>
                    </p>
                    <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        <li>• Deploy sensors FIRST, create citizen demand</li>
                        <li>• Free SMS alerts = political pressure on mayors</li>
                        <li>• Partner with local NGOs to amplify voice</li>
                        <li>• Offer 3-month free trial to reduce friction</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left', borderLeft: '4px solid var(--red)' }}>
                    <h3 style={{ color: 'var(--red)' }}>Risk: Hardware Failure</h3>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                        <strong>Mitigation:</strong>
                    </p>
                    <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        <li>• Use proven commodity sensors (PMS5003)</li>
                        <li>• Redundant sensors per location (cross-validation)</li>
                        <li>• 48-hour replacement SLA in service contract</li>
                        <li>• Local hardware partner in Tunis for assembly</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left', borderLeft: '4px solid var(--red)' }}>
                    <h3 style={{ color: 'var(--red)' }}>Risk: Regulatory Pushback</h3>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                        <strong>Mitigation:</strong>
                    </p>
                    <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        <li>• Position as ANPE partner, not competitor</li>
                        <li>• Academic validation (University of Gabes)</li>
                        <li>• Transparency = our shield (public data)</li>
                        <li>• Align with EU CBAM compliance narrative</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left', borderLeft: '4px solid var(--red)' }}>
                    <h3 style={{ color: 'var(--red)' }}>Risk: Competition from Big Players</h3>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                        <strong>Mitigation:</strong>
                    </p>
                    <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        <li>• Tunisia is too small for them (not worth it)</li>
                        <li>• We move fast, establish network effects</li>
                        <li>• Local calibration data = 12-month head start</li>
                        <li>• If they enter, we become acquisition target</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide23_RiskMitigation;
