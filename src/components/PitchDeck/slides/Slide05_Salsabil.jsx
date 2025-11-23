import React from 'react';

const Slide05_Salsabil = () => {
    return (
        <div className="slide active" style={{
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/salsabil_silhouette.png') no-repeat center center/cover"
        }}>
            <h2>Salsabil's Story</h2>
            <div style={{ maxWidth: '900px', textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Three years ago, my sister Salsabil came to university here.</p>
                <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Within a year, she developed chronic respiratory illness. She was 21.</p>
                <div className="glass-panel" style={{ marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.8rem', color: 'var(--red)' }}>Doctors couldn't prove the cause.</p>
                    <p style={{ fontSize: '1.6rem', marginTop: '1rem' }}>No Data. No Accountability. No Connection.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide05_Salsabil;
