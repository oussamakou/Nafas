import React, { useState, useEffect } from 'react';
import { Activity, Info, Users } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/nafas_logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="Nafas Logo" className={styles.logoImg} />
                    <div className={styles.logoWrapper}>
                        <span className={styles.logoText}>Nafas</span>
                        <span className={styles.tagline}>Breathe the Truth</span>
                    </div>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="#map" className={styles.active}><Activity size={18} /> Live Map</a></li>
                    <li><a href="#analytics"><Activity size={18} /> Analytics</a></li>
                    <li><a href="#about"><Info size={18} /> About</a></li>
                    <li><a href="#community"><Users size={18} /> Community</a></li>
                </ul>
                <button className="btn">Get Alerts</button>
            </div>
        </nav>
    );
};

export default Navbar;
