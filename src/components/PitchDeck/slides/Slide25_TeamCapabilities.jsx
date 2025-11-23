import React from 'react';

const Slide25_TeamCapabilities = () => {
    return (
        <div className="slide active">
            <h2>Team Capabilities & Track Record</h2>
            <div className="grid-2" style={{ marginTop: '2rem' }}>
                <div className="glass-panel" style={{ textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--accent)' }}>Technical Skills</h3>
                    <ul style={{ marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• <strong>IoT Development:</strong> ESP32, Arduino, Raspberry Pi</li>
                        <li>• <strong>Backend:</strong> Node.js, Express, REST APIs</li>
                        <li>• <strong>Frontend:</strong> React, Real-time Dashboards</li>
                        <li>• <strong>Cloud:</strong> AWS IoT Core, InfluxDB, MQTT</li>
                        <li>• <strong>Mobile:</strong> SMS Integration (Twilio), WhatsApp API</li>
                        <li>• <strong>Data Science:</strong> Python, ML Calibration Models</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left' }}>
                    <h3 style={{ color: 'var(--green)' }}>Previous Projects</h3>
                    <ul style={{ marginTop: '1rem', fontSize: '1rem' }}>
                        <li>• <strong>Smart Agriculture System:</strong> Soil moisture sensors + automated irrigation (2023)</li>
                        <li>• <strong>Campus Energy Monitor:</strong> Real-time power consumption dashboard for university (2024)</li>
                        <li>• <strong>Hackathon Wins:</strong> 2nd Place - Esprit Innovation Challenge (IoT Category)</li>
                    </ul>
                </div>
            </div>

            <div className="glass-panel" style={{ marginTop: '2rem', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--text-muted)' }}>Why We're Uniquely Positioned</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</p>
                        <h4 style={{ color: 'var(--accent)' }}>Local Knowledge</h4>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            We understand Tunisian regulatory dynamics, municipal procurement, and cultural context.
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</p>
                        <h4 style={{ color: 'var(--green)' }}>Personal Motivation</h4>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            Salsabil's illness makes this personal. We're solving OUR problem, not a hypothetical one.
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</p>
                        <h4 style={{ color: 'var(--text-muted)' }}>Execution Speed</h4>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            We built this entire platform in 24 hours. Imagine what we can do with 6 months.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide25_TeamCapabilities;
