import React from 'react';

const Slide21_Regulatory = () => {
    return (
        <div className="slide active">
            <h2>Regulatory Landscape & Compliance</h2>
            <div className="grid-2" style={{ marginTop: '2rem' }}>
                <div className="glass-panel" style={{ textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--accent)' }}>Tunisia Environmental Code (2020)</h3>
                    <ul style={{ marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• <strong>Article 12:</strong> Mandatory air quality monitoring for industrial zones</li>
                        <li>• <strong>Article 45:</strong> Public access to environmental data</li>
                        <li>• <strong>Penalty:</strong> 50,000 TND fine for non-compliance</li>
                        <li>• <strong>ANPE Role:</strong> Enforcement agency (understaffed)</li>
                    </ul>
                </div>
                <div className="glass-panel" style={{ textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--green)' }}>EU CBAM (Carbon Border Adjustment)</h3>
                    <ul style={{ marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• <strong>Effective:</strong> October 2026</li>
                        <li>• <strong>Impact:</strong> 20% tariff on exports without emissions data</li>
                        <li>• <strong>Tunisia Exports:</strong> €3.2B/year to EU (phosphates, textiles)</li>
                        <li>• <strong>Our Solution:</strong> Verifiable real-time emissions tracking</li>
                    </ul>
                </div>
            </div>
            <div className="glass-panel" style={{ marginTop: '2rem', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--text-muted)' }}>Partnership Strategy</h3>
                <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
                    We position as <strong>ANPE's technology partner</strong>, not competitor. They provide lab validation,
                    we provide 24/7 monitoring. We're in talks with University of Gabes Environmental Science Dept
                    for academic validation and with GIZ (German Development Agency) for grant funding.
                </p>
            </div>
        </div>
    );
};

export default Slide21_Regulatory;
