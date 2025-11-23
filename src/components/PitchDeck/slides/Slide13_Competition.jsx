import React from 'react';

const Slide13_Competition = () => {
    return (
        <div className="slide active">
            <h2>Why Us? (vs PurpleAir/IQAir)</h2>
            <div className="grid-3">
                <div className="card">
                    <span className="card-icon">💲</span>
                    <h3>1. Cost</h3>
                    <p className="highlight">60 TND vs 300 USD</p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Our build cost vs competitor retail price</p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>We build locally using commodity hardware</p>
                </div>
                <div className="card">
                    <span className="card-icon">🌍</span>
                    <h3>2. Locals first</h3>
                    <p className="highlight">prioritize citizens</p>
                    <p>we do alert our platform users of intoxicated areas</p>
                </div>
                <div className="card">
                    <span className="card-icon">🧪</span>
                    <h3>3. Industrial Focus</h3>
                    <p className="highlight">Fluoride & Phosphate</p>
                    <p>We track industrial compounds that consumer sensors ignore</p>
                </div>
            </div>
            <p style={{ marginTop: '3rem', fontSize: '1.6rem' }}>"We're built for markets they don't serve."</p>
        </div>
    );
};

export default Slide13_Competition;
