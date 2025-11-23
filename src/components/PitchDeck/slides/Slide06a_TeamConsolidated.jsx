import React from 'react';

const Slide06a_TeamConsolidated = () => {
    return (
        <div className="slide active">
            <h2>The Team</h2>
            <div style={{
                position: 'relative',
                width: '800px',
                height: '500px',
                margin: '0 auto',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
                <img
                    src="/team_oussama_aziz.jpg"
                    alt="Oussama & Aziz"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
                    padding: '2rem'
                }}>
                    <h3 style={{ margin: 0, fontSize: '2.5rem' }}>Oussama & Aziz</h3>
                    <p style={{ margin: 0, textAlign: 'left', color: 'var(--accent)', fontSize: '1.5rem' }}>
                        Co-Founders of Team SABKHA
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide06a_TeamConsolidated;
