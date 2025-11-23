import React, { useState, useEffect } from 'react';
import { AlertTriangle, Send, CheckCircle, Bell, X } from 'lucide-react';
import styles from './Sections.module.css';

const Community = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Simulate API call and subsequent SMS delivery
        setTimeout(() => {
            setEmail('');
            // Trigger the mock phone notification
            setShowNotification(true);
        }, 1500);
    };

    // Auto-hide notification after 8 seconds
    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => setShowNotification(false), 8000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    return (
        <section id="community" className="container fade-in">
            <h2 className={styles.sectionTitle}>For the Community</h2>

            <div className={`${styles.alertBox} ${styles.alertUnhealthy}`}>
                <AlertTriangle className={styles.alertIcon} size={32} />
                <div>
                    <h3 className={styles.alertTitle}>Health Advisory: Unhealthy Air Quality</h3>
                    <p className={styles.alertText}>
                        The AQI is currently <strong>Red (155)</strong> in the Industrial Zone.
                        It is recommended that children, the elderly, and those with respiratory problems limit prolonged outdoor exertion.
                    </p>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '700px', margin: '3rem auto', textAlign: 'center' }}>
                <h3 className={styles.subtitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Get Pollution Alerts</h3>
                <p className={styles.text} style={{ marginBottom: '2rem' }}>
                    Receive instant SMS & Email notifications when pollution levels exceed safe thresholds in your area.
                    Join 1,200+ citizens protecting their health.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.downloadBtn}>
                            JOIN THE MOVEMENT <Send size={16} />
                        </button>
                    </form>
                ) : (
                    <div className={styles.successMessage}>
                        <CheckCircle size={48} className={styles.successIcon} />
                        <h3>Welcome to Nafas!</h3>
                        <p>You have been added to the alert network.</p>
                        <p className={styles.simulationText}>(Watch your screen for a demo alert...)</p>
                        <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                            Register another email
                        </button>
                    </div>
                )}
            </div>

            {/* Mock Phone Notification */}
            <div className={`${styles.mockNotification} ${showNotification ? styles.show : ''}`}>
                <div className={styles.notificationHeader}>
                    <div className={styles.notificationApp}>
                        <div className={styles.appIcon}><Bell size={12} color="white" /></div>
                        <span>MESSAGES • now</span>
                    </div>
                    <button onClick={() => setShowNotification(false)} className={styles.closeBtn}><X size={14} /></button>
                </div>
                <div className={styles.notificationBody}>
                    <div className={styles.sender}>Nafas Alert</div>
                    <div className={styles.message}>
                        ⚠️ <strong>WARNING:</strong> High SO2 levels detected in Bouchamma (165 µg/m³). AQI is Unhealthy. Close windows and avoid outdoor activities.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
