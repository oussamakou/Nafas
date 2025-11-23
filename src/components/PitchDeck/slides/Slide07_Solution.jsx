import React from 'react';

const Slide07_Solution = () => {
    return (
        <div className="slide active">
            <img src="/nafas_logo.png" alt="Nafas" className="logo-img" style={{ height: '100px', marginBottom: '1rem' }} />
            <h2>The Solution</h2>
            <div className="grid-2">
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">✅</span>
                    <h3>Real-Time Network</h3>
                    <p>Low-cost IoT sensors deployed at scale to visualize the invisible.</p>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">💰</span>
                    <h3>Profitable Service</h3>
                    <p>We sell the data to those who need it most: Municipalities & Industry.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide07_Solution;
