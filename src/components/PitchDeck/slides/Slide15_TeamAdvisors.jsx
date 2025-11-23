import React from 'react';

const Slide15_TeamAdvisors = () => {
    return (
        <div className="slide active">
            <h2>Team & Advisors</h2>
            <div className="team-grid">
                <div className="team-card">
                    <div className="team-icon">👨‍💻</div>
                    <h3>Core Team</h3>
                    <p>3 CS engineers specializing in IoT & data visualization.</p>
                </div>
                <div className="team-card">
                    <div className="team-icon">🔬</div>
                    <h3>Technical Advisor</h3>
                    <p><strong>Dr. Salah Hamdi</strong><br />Gabes University<br />Validating sensor deployments.</p>
                </div>
                <div className="team-card">
                    <div className="team-icon">⚖️</div>
                    <h3>Regulatory Advisor</h3>
                    <p><strong>Former ANPE Deputy</strong><br />Drafted 2020 Environmental Code.</p>
                </div>
            </div>
            <p style={{ marginTop: '3rem', fontSize: '1.6rem' }}>"We build software. We partner for domain expertise."</p>
        </div>
    );
};

export default Slide15_TeamAdvisors;
