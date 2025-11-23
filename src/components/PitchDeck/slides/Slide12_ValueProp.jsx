import React from 'react';

const Slide12_ValueProp = () => {
    return (
        <div className="slide active">
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.2, maxWidth: '1100px' }}>
                Make Air Quality<br />Visible & Actionable
            </h1>
            <div className="grid-3" style={{ marginTop: '4rem' }}>
                <div className="glass-panel" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
                    <p style={{ fontSize: '1.4rem' }}><strong>Municipalities:</strong><br />Plan Smarter</p>
                </div>
                <div className="glass-panel" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏭</div>
                    <p style={{ fontSize: '1.4rem' }}><strong>Factories:</strong><br />Prove Compliance</p>
                </div>
                <div className="glass-panel" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👨‍👩‍👧‍👦</div>
                    <p style={{ fontSize: '1.4rem' }}><strong>Families:</strong><br />Protect Children</p>
                </div>
            </div>
        </div>
    );
};

export default Slide12_ValueProp;
