import React from 'react';

const Slide06_Problem = () => {
    return (
        <div className="slide active">
            <h2>The Invisible Crisis</h2>
            <div className="grid-2">
                <div className="card" style={{ borderColor: 'var(--red)' }}>
                    <span className="card-icon">❌</span>
                    <h3>NO DATA</h3>
                    <p>Industrial zones across North Africa lack air monitoring infrastructure. We are flying blind.</p>
                </div>
                <div className="card" style={{ borderColor: 'var(--red)' }}>
                    <span className="card-icon">😷</span>
                    <h3>NO ACTION</h3>
                    <p>Without data, cities can't regulate, factories can't improve, and families can't protect themselves.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide06_Problem;
