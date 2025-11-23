import React from 'react';
import { Activity, ArrowRight, Wind } from 'lucide-react';
import styles from './Hero.module.css';
import heroBg from '../../assets/gabes_hazy_skyline_over_a_beach.png';

const Hero = () => {
    const scrollToAlerts = () => {
        const element = document.getElementById('community');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <div className={styles.heroGrid}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            PROTECTING EVERY <br />
                            <span className={styles.highlight}>BREATH</span> IN GABES
                        </h1>
                        <p className={styles.subtitle}>
                            Real-time air quality monitoring to empower our community and hold polluters accountable.
                        </p>
                        <div className={styles.actions}>
                            <button onClick={scrollToAlerts} className={`${styles.btn} ${styles.btnPrimary}`}>
                                SIGN UP FOR ALERTS
                            </button>
                            <button className={`${styles.btn} ${styles.btnSecondary}`}>
                                LEARN MORE <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.statusCard}>
                        <div className={styles.cardHeader}>
                            <Activity className={styles.icon} size={24} />
                            <span className={styles.cardLabel}>LIVE CITY STATUS</span>
                        </div>

                        <div className={styles.mainStatus}>
                            <div className={styles.aqiBadge}>
                                <span className={styles.aqiValue}>155</span>
                                <span className={styles.aqiLabel}>AQI</span>
                            </div>
                            <div className={styles.statusText}>
                                <span className={styles.statusTitle}>UNHEALTHY</span>
                                <span className={styles.statusDesc}>High levels of PM2.5 & SO₂</span>
                            </div>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>Highest PM2.5</span>
                                <span className={styles.statValue}>165 µg/m³</span>
                                <span className={styles.statSub}>Near GCT</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>Wind Flow</span>
                                <div className={styles.windValue}>
                                    <Wind size={16} /> NE @ 12km/h
                                </div>
                                <span className={styles.statSub}>From Industrial Zone</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
