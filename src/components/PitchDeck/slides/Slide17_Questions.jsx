import React from 'react';

const Slide17_Questions = () => {
    return (
        <div className="slide active">
            <h1 style={{ fontSize: '8rem', marginBottom: '4rem' }}>Questions?</h1>

            <div style={{
                background: 'white',
                width: '220px',
                height: '220px',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px var(--accent-glow)'
            }}>
                <div style={{
                    width: '180px',
                    height: '180px',
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.8rem'
                }}>
                    [QR CODE HERE]
                </div>
                <p style={{ color: 'black', fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: 'bold' }}>Live Demo</p>
            </div>
        </div>
    );
};

export default Slide17_Questions;
