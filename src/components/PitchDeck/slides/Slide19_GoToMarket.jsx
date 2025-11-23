import React from 'react';

const Slide19_GoToMarket = () => {
    return (
        <div className="slide active">
            <h2>Go-To-Market Strategy</h2>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div className="glass-panel" style={{ flex: 1, textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--accent)' }}>Phase 1: Validation (Months 1-6)</h3>
                    <ul style={{ marginTop: '1rem' }}>
                        <li>• <strong>Target:</strong> Gabes Municipality</li>
                        <li>• <strong>Goal:</strong> 10 Sensors Deployed</li>
                        <li>• <strong>Tactic:</strong> Free Pilot + University Partnership</li>
                        <li>• <strong>KPI:</strong> 95% Uptime, Data Validation Report</li>
                    </ul>
                </div>
                <div className="glass-panel" style={{ flex: 1, textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--green)' }}>Phase 2: Expansion (Months 7-12)</h3>
                    <ul style={{ marginTop: '1rem' }}>
                        <li>• <strong>Target:</strong> Sfax & Gafsa Industrial Zones</li>
                        <li>• <strong>Goal:</strong> 50 Sensors, 3 Paid Contracts</li>
                        <li>• <strong>Tactic:</strong> "Compliance Insurance" Sales Pitch</li>
                        <li>• <strong>KPI:</strong> 50k TND ARR, 1000 SMS Subscribers</li>
                    </ul>
                </div>
                <div className="glass-panel" style={{ flex: 1, textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--text-muted)' }}>Phase 3: Scale (Year 2+)</h3>
                    <ul style={{ marginTop: '1rem' }}>
                        <li>• <strong>Target:</strong> North Africa (Algeria, Morocco)</li>
                        <li>• <strong>Goal:</strong> Licensing Model</li>
                        <li>• <strong>Tactic:</strong> Partner with local NGOs/Telcos</li>
                        <li>• <strong>KPI:</strong> $2M Revenue Potential</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide19_GoToMarket;
