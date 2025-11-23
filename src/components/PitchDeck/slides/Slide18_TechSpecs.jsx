import React from 'react';

const Slide18_TechSpecs = () => {
    return (
        <div className="slide active">
            <h2>Technical Architecture</h2>
            <div className="grid-3">
                <div className="card" style={{ borderColor: 'var(--accent)' }}>
                    <span className="card-icon">📡</span>
                    <h3>Hardware Node</h3>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• <strong>MCU:</strong> ESP32 (Dual Core, WiFi/BLE)</li>
                        <li>• <strong>PM Sensor:</strong> PMS5003 (Laser Scattering)</li>
                        <li>• <strong>Gas Sensor:</strong> MICS-6814 (NO2, CO, NH3)</li>
                        <li>• <strong>Comms:</strong> LoRaWAN (SX1276) - 10km Range</li>
                        <li>• <strong>Power:</strong> Solar + LiPo Battery Backup</li>
                    </ul>
                </div>
                <div className="card" style={{ borderColor: 'var(--green)' }}>
                    <span className="card-icon">☁️</span>
                    <h3>Cloud Infrastructure</h3>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• <strong>Protocol:</strong> MQTT over TLS</li>
                        <li>• <strong>Backend:</strong> Node.js / Express Microservices</li>
                        <li>• <strong>Database:</strong> InfluxDB (Time-Series)</li>
                        <li>• <strong>Hosting:</strong> AWS IoT Core</li>
                        <li>• <strong>Security:</strong> AES-256 Encryption</li>
                    </ul>
                </div>
                <div className="card" style={{ borderColor: 'var(--text-muted)' }}>
                    <span className="card-icon">📊</span>
                    <h3>Data Processing</h3>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <li>• <strong>Calibration:</strong> ML Model (Random Forest)</li>
                        <li>• <strong>Validation:</strong> Cross-reference with Sat Data</li>
                        <li>• <strong>Alerts:</strong> Twilio API (SMS/WhatsApp)</li>
                        <li>• <strong>API:</strong> RESTful JSON for 3rd parties</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide18_TechSpecs;
