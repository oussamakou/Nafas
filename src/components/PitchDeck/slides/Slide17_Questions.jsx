import React from 'react';

const Slide17_Questions = () => {
    return (
        <div className="slide active">
            <h1 style={{ fontSize: '8rem', marginBottom: '4rem' }}>Questions?</h1>

            <div style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px var(--accent-glow)'
            }}>
                <img
                    src="/nafas_qr.png"
                    alt="Scan for Live Demo"
                    style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                />
                <p style={{ color: 'black', fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: 'bold' }}>Live Demo</p>
            </div>

            {/* Background Audio */}
            <audio autoPlay loop style={{ display: 'none' }} ref={(audio) => {
                if (audio) {
                    audio.volume = 0.003; // Low volume
                    audio.currentTime = 34; // Start at 34s
                }
            }}>
                <source src="/nafas_song.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default Slide17_Questions;
