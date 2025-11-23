import React from 'react';

const Slide01_Logo = () => {
    return (
        <div className="slide active">
            <img
                src="/nafas_logo.png"
                alt="Nafas"
                style={{
                    height: '300px',
                    filter: 'drop-shadow(0 0 50px var(--accent-glow))',
                    animation: 'glow-pulse 3s infinite'
                }}
            />
            <p style={{
                position: 'fixed',
                bottom: '10px',
                left: '10px',
                fontSize: '0.8rem',
                color: 'var(--green)',
                background: 'rgba(0,0,0,0.5)',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                zIndex: 1000
            }}>
                ✓ React Version
            </p>
        </div>
    );
};

export default Slide01_Logo;
