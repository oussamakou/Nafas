import React from 'react';
import styles from './Sections.module.css';

const About = () => {
    return (
        <section id="about" className="container fade-in">
            <h2 className={styles.sectionTitle}>About Nafas</h2>

            <div className={styles.aboutGrid}>
                <div className={styles.aboutContent}>
                    <div className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
                        <h3 className={styles.subtitle}>The Problem</h3>
                        <p className={styles.text}>
                            For decades, the GCT facility in Gabes has been releasing toxic pollutants, including Hydrogen Fluoride (HF) and Sulfur Dioxide (SO2).
                            This has devastated the local ecosystem, destroyed the "Gulf of Gabes Desert" seagrass meadows, and caused severe health issues like fluorosis and respiratory diseases.
                        </p>

                        <h3 className={styles.subtitle} style={{ marginTop: '2rem' }}>Our Mission</h3>
                        <p className={styles.text}>
                            Nafas is a citizen science initiative deploying a network of low-cost air quality sensors.
                            We aim to provide independent, transparent data to hold polluters accountable and protect the health of Gabes' residents.
                        </p>

                        <h3 className={styles.subtitle} style={{ marginTop: '2rem' }}>The Tech</h3>
                        <p className={styles.text}>
                            Our sensors use experimental passive sampling for Fluoride and laser scattering for PM2.5.
                            Data is transmitted via LoRaWAN to our central server, providing real-time updates to this dashboard.
                        </p>
                    </div>
                </div>

                <div className={styles.testimonialColumn}>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>
                            "We have the highest rates of bone disease in the country. My son asks me why his teeth are brown. What do I tell him?"
                        </p>
                        <p className={styles.quoteAuthor}>- A mother from Gabes</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
