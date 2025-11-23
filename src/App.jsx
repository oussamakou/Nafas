import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import PollutionMap from './components/Map/PollutionMap';
import About from './components/Sections/About';
import Community from './components/Sections/Community';
import Researchers from './components/Sections/Researchers';
import Hero from './components/Sections/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <main className={styles.main}>
        <section id="map" className={`${styles.mapSection} fade-in`}>
          <PollutionMap />
        </section>

        <Dashboard />

        <About />
        <Community />
        <Researchers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
