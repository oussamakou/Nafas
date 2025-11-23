import React from 'react';

const Slide17a_Roadmap = () => {
    return (
        <div className="slide active">
            <h2>Roadmap</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '3rem',
                position: 'relative'
            }}>
                {/* Connecting Line */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10%',
                    right: '10%',
                    height: '4px',
                    background: 'var(--glass-border)',
                    zIndex: 0
                }}></div>

                {/* Phase 1 */}
                <div className="glass-panel" style={{
                    width: '30%',
                    zIndex: 1,
                    textAlign: 'center',
                    border: '2px solid var(--green)',
                    background: 'rgba(0, 255, 157, 0.1)'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                    <h3 style={{ color: 'var(--green)' }}>Phase 1: Gabes</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Months 1-6</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• Deploy 10 sensors</li>
                        <li>• Validate data with University</li>
                        <li>• Secure Municipal Pilot</li>
                    </ul>
                </div>

                {/* Phase 2 */}
                <div className="glass-panel" style={{
                    width: '30%',
                    zIndex: 1,
                    textAlign: 'center',
                    border: '2px solid var(--accent)'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏭</div>
                    <h3 style={{ color: 'var(--accent)' }}>Phase 2: Sfax</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Months 7-12</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• Expand to Sfax Industrial Zone</li>
                        <li>• Launch B2B Compliance Dashboard</li>
                        <li>• Reach 1,000 SMS subscribers</li>
                    </ul>
                </div>

                {/* Phase 3 */}
                <div className="glass-panel" style={{
                    width: '30%',
                    zIndex: 1,
                    textAlign: 'center',
                    border: '2px solid var(--text-muted)'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                    <h3 style={{ color: 'var(--text-muted)' }}>Phase 3: Scale</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Year 2+</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• National coverage (Tunis, Gafsa)</li>
                        <li>• Licensing to Algeria & Morocco</li>
                        <li>• Data monetization API</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide17a_Roadmap;
