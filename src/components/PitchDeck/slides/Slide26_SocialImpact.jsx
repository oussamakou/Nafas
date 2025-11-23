import React from 'react';

const Slide26_SocialImpact = () => {
    return (
        <div className="slide active">
            <h2>Social Impact Metrics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
                <div className="card" style={{ borderColor: 'var(--accent)', textAlign: 'center' }}>
                    <span className="card-icon" style={{ fontSize: '3rem' }}>🫁</span>
                    <h3 style={{ marginTop: '1rem' }}>Health Impact</h3>
                    <p className="highlight" style={{ fontSize: '2.5rem', margin: '1rem 0' }}>150K</p>
                    <p style={{ fontSize: '1rem' }}>People in Gabes get early warnings</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• Reduce respiratory illness exposure</li>
                        <li>• Enable doctors to correlate symptoms</li>
                        <li>• Protect vulnerable groups (children, elderly)</li>
                    </ul>
                </div>

                <div className="card" style={{ borderColor: 'var(--green)', textAlign: 'center' }}>
                    <span className="card-icon" style={{ fontSize: '3rem' }}>⚖️</span>
                    <h3 style={{ marginTop: '1rem' }}>Accountability</h3>
                    <p className="highlight" style={{ fontSize: '2.5rem', margin: '1rem 0' }}>24/7</p>
                    <p style={{ fontSize: '1rem' }}>Transparent pollution monitoring</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• End 50 years of data darkness</li>
                        <li>• Enable environmental litigation</li>
                        <li>• Force factory compliance</li>
                    </ul>
                </div>

                <div className="card" style={{ borderColor: 'var(--text-muted)', textAlign: 'center' }}>
                    <span className="card-icon" style={{ fontSize: '3rem' }}>📢</span>
                    <h3 style={{ marginTop: '1rem' }}>Empowerment</h3>
                    <p className="highlight" style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Free</p>
                    <p style={{ fontSize: '1rem' }}>SMS alerts for all citizens</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• No smartphone required</li>
                        <li>• Arabic & French support</li>
                        <li>• Create political pressure</li>
                    </ul>
                </div>
            </div>

            <div className="glass-panel" style={{ marginTop: '3rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>UN Sustainable Development Goals Alignment</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', fontSize: '1rem' }}>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏥</p>
                        <p><strong>SDG 3:</strong> Good Health & Well-being</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏭</p>
                        <p><strong>SDG 9:</strong> Industry, Innovation & Infrastructure</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</p>
                        <p><strong>SDG 11:</strong> Sustainable Cities</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</p>
                        <p><strong>SDG 16:</strong> Peace, Justice & Strong Institutions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide26_SocialImpact;
