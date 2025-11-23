import React from 'react';

const Slide11_Financials = () => {
    return (
        <div className="slide active">
            <h2>The Ask: 1,000 TND</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                To launch our pilot in Gabes and validate the model.
            </p>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'stretch' }}>
                {/* Use of Funds */}
                <div className="glass-panel" style={{ flex: 1, textAlign: 'left' }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Use of Funds</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        <span>📡 7 Additional Sensors</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>400 TND</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        <span>🌐 LoRaWAN Gateway</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>300 TND</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        <span>☁️ Server & SMS Costs (6mo)</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>200 TND</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        <span>🤝 Municipal Outreach</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>100 TND</span>
                    </div>
                </div>

                {/* ROI */}
                <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 255, 157, 0.05)', border: '2px solid var(--green)' }}>
                    <h3 style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>Projected ROI</h3>
                    <div style={{ fontSize: '5rem', fontWeight: 'bold', color: 'var(--green)', lineHeight: 1 }}>15x</div>
                    <p style={{ fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>
                        1 Municipal Contract = <strong>15,000 TND/yr</strong>
                    </p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                        Breakeven in Month 1 of contract
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide11_Financials;
