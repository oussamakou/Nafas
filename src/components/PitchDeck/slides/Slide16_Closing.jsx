import React from 'react';

const Slide16_Closing = () => {
    return (
        <div className="slide active">
            <img src="/nafas_logo.png" alt="Nafas" className="logo-img" style={{ height: '180px' }} />
            <h1 style={{ fontSize: '5.5rem' }}>NAFAS</h1>
            <p style={{ fontSize: '2rem', margin: '2rem 0', maxWidth: '1000px' }}>
                "Nafas breaks the silence."
            </p>
            <div className="closing-tagline">
                Profitable Transparency.<br />Regional Impact.
            </div>
            <p style={{ marginTop: '3rem', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>Team Sabkha</p>
        </div>
    );
};

export default Slide16_Closing;
