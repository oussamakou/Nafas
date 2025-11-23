import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>&copy; 2025 Nafas. Built for the people of Gabes.</p>
                <p className={styles.disclaimer}>Data is collected via experimental citizen science sensors.</p>
            </div>
        </footer>
    );
};

export default Footer;
