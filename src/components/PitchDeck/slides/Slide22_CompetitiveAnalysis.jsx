import React from 'react';

const Slide22_CompetitiveAnalysis = () => {
    return (
        <div className="slide active">
            <h2>Competitive Analysis</h2>
            <table style={{
                width: '100%',
                marginTop: '2rem',
                borderCollapse: 'collapse',
                fontSize: '1rem',
                textAlign: 'center'
            }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left' }}>Feature</th>
                        <th style={{ padding: '1rem' }}>Nafas</th>
                        <th style={{ padding: '1rem' }}>PurpleAir</th>
                        <th style={{ padding: '1rem' }}>IQAir</th>
                        <th style={{ padding: '1rem' }}>ANPE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Cost</td>
                        <td style={{ color: 'var(--green)' }}>60 TND</td>
                        <td style={{ color: 'var(--red)' }}>$300</td>
                        <td style={{ color: 'var(--red)' }}>$350</td>
                        <td>50K TND/yr</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Real-Time Data</td>
                        <td style={{ color: 'var(--green)' }}>✓ (1 min)</td>
                        <td style={{ color: 'var(--green)' }}>✓ (2 min)</td>
                        <td style={{ color: 'var(--green)' }}>✓ (5 min)</td>
                        <td style={{ color: 'var(--red)' }}>✗ (Annual)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Arabic/French SMS</td>
                        <td style={{ color: 'var(--green)' }}>✓</td>
                        <td style={{ color: 'var(--red)' }}>✗</td>
                        <td style={{ color: 'var(--red)' }}>✗</td>
                        <td style={{ color: 'var(--red)' }}>✗</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Industrial Pollutants</td>
                        <td style={{ color: 'var(--green)' }}>✓ (Phosphate, Fluoride)</td>
                        <td style={{ color: 'var(--red)' }}>✗</td>
                        <td style={{ color: 'var(--text-muted)' }}>Partial</td>
                        <td style={{ color: 'var(--green)' }}>✓ (Lab only)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Local Support</td>
                        <td style={{ color: 'var(--green)' }}>✓ (Tunisia)</td>
                        <td style={{ color: 'var(--red)' }}>✗ (USA)</td>
                        <td style={{ color: 'var(--red)' }}>✗ (Switzerland)</td>
                        <td style={{ color: 'var(--green)' }}>✓</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Public Dashboard</td>
                        <td style={{ color: 'var(--green)' }}>✓ (Free)</td>
                        <td style={{ color: 'var(--text-muted)' }}>Paid</td>
                        <td style={{ color: 'var(--text-muted)' }}>Paid</td>
                        <td style={{ color: 'var(--red)' }}>✗</td>
                    </tr>
                </tbody>
            </table>
            <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--accent)', textAlign: 'center' }}>
                <strong>Our Moat:</strong> We're the only solution built FOR Tunisia, BY Tunisians, AT Tunisian prices.
            </p>
        </div>
    );
};

export default Slide22_CompetitiveAnalysis;
