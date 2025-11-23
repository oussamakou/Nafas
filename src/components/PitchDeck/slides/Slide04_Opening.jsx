import React from 'react';

const Slide04_Opening = () => {
    return (
        <div className="slide active" style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/gabes_hazy_skyline_over_a_beach.png') no-repeat center center/cover"
        }}>
            <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>The Invisible Crisis</h1>
            <p style={{
                fontSize: '2.5rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '3rem',
                fontWeight: 700,
                color: 'var(--red)'
            }}>
                Gabes, Tunisia
            </p>
            <p style={{ fontSize: '2rem' }}>150,000 people living in a toxic fog.</p>
            <p style={{ fontSize: '2rem', marginTop: '1rem' }}>50 years of silence. 0 data points.</p>
        </div>
    );
};

export default Slide04_Opening;
