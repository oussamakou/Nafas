import React from 'react';

const Slide20_FinancialDetail = () => {
    return (
        <div className="slide active">
            <h2>Financial Projections (3 Years)</h2>
            <table style={{
                width: '100%',
                marginTop: '2rem',
                borderCollapse: 'collapse',
                fontSize: '1.2rem',
                textAlign: 'center'
            }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left' }}>Metric</th>
                        <th style={{ padding: '1rem' }}>Year 1</th>
                        <th style={{ padding: '1rem' }}>Year 2</th>
                        <th style={{ padding: '1rem' }}>Year 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Municipal Contracts</td>
                        <td>1</td>
                        <td>5</td>
                        <td>15</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left' }}>Factory Contracts</td>
                        <td>0</td>
                        <td>3</td>
                        <td>10</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left', color: 'var(--green)' }}>Total Revenue</td>
                        <td style={{ color: 'var(--green)' }}>15,000 TND</td>
                        <td style={{ color: 'var(--green)' }}>165,000 TND</td>
                        <td style={{ color: 'var(--green)' }}>550,000 TND</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', textAlign: 'left', color: 'var(--red)' }}>COGS & OpEx</td>
                        <td style={{ color: 'var(--red)' }}>(1,600 TND)</td>
                        <td style={{ color: 'var(--red)' }}>(25,000 TND)</td>
                        <td style={{ color: 'var(--red)' }}>(80,000 TND)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Net Profit</td>
                        <td style={{ fontWeight: 'bold' }}>13,400 TND</td>
                        <td style={{ fontWeight: 'bold' }}>140,000 TND</td>
                        <td style={{ fontWeight: 'bold' }}>470,000 TND</td>
                    </tr>
                </tbody>
            </table>
            <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                *Assumes 15K/yr per Muni and 25K/yr per Factory. Margins improve with scale.
            </p>
        </div>
    );
};

export default Slide20_FinancialDetail;
