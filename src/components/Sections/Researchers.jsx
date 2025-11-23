import React from 'react';
import { Download, Database } from 'lucide-react';
import styles from './Sections.module.css';

const Researchers = () => {
    return (
        <section id="researchers" className="container fade-in" style={{ marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>For Researchers</h2>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Database size={32} color="var(--color-accent)" />
                        <h3 className={styles.subtitle} style={{ marginBottom: 0 }}>Open Data Access</h3>
                    </div>
                    <p className={styles.text}>
                        We believe in complete transparency. Access our full historical dataset of sensor readings,
                        including raw PM2.5, PM10, Fluoride, and meteorological data.
                        Available in CSV and JSON formats for independent analysis.
                    </p>
                </div>
                <div>
                    <button className={styles.downloadBtn}>
                        <Download size={20} /> Download Full Dataset (CSV)
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Researchers;
