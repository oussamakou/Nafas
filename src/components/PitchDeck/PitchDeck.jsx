import React, { useState, useEffect } from 'react';
import './PitchDeck.css';

// Import all slide components
import Slide01_Logo from './slides/Slide01_Logo';
import Slide03_Agenda from './slides/Slide03_Agenda';
import Slide05_Salsabil from './slides/Slide05_Salsabil';
import Slide06_Problem from './slides/Slide06_Problem';
import Slide06a_TeamConsolidated from './slides/Slide06a_TeamConsolidated';
import Slide07a_CurrentSolutions from './slides/Slide07a_CurrentSolutions';
import Slide07_Solution from './slides/Slide07_Solution';
import Slide08a_Innovation from './slides/Slide08a_Innovation';
import Slide08_CustomerSegments from './slides/Slide08_CustomerSegments';
import Slide09_Dashboard from './slides/Slide09_Dashboard';
import Slide10_Revenue from './slides/Slide10_Revenue';
import Slide11_Financials from './slides/Slide11_Financials';
import Slide13a_Impact from './slides/Slide13a_Impact';
import Slide13_Competition from './slides/Slide13_Competition';
import Slide14_Growth from './slides/Slide14_Growth';
import Slide16_Closing from './slides/Slide16_Closing';
import Slide17_Questions from './slides/Slide17_Questions';

const PitchDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // OPTIMIZED ORDER (Team moved to #3)
    const slides = [
        // ACT 1: THE HOOK
        Slide01_Logo,                   // 1. Logo
        Slide03_Agenda,                 // 2. Agenda (Planning)
        Slide06a_TeamConsolidated,      // 3. Team (establish credibility)
        Slide05_Salsabil,               // 4. Salsabil's Story (emotional hook)
        Slide06_Problem,                // 5. Problem Breakdown (NO DATA, NO ACTION)
        Slide07_Solution,               // 6. The Solution (Nafas overview)

        // ACT 2: THE SOLUTION
        Slide07a_CurrentSolutions,      // 7. Current Solutions (ANPE vs Nafas)
        Slide08a_Innovation,            // 8. Innovation (simplified)
        Slide09_Dashboard,              // 9. Dashboard Demo

        // ACT 3: THE BUSINESS
        Slide10_Revenue,                // 10. Revenue Streams - was 11
        Slide13a_Impact,                // 11. Impact (honest projections)
        Slide13_Competition,            // 12. Competition
        Slide14_Growth,                 // 13. Growth Strategy

        // ACT 4: THE ASK
        Slide11_Financials,             // 15. The Ask & Financials - MOVED UP
        Slide16_Closing,                // 16. Closing
        Slide17_Questions               // 17. Questions
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const CurrentSlideComponent = slides[currentSlide];

    return (
        <div className="pitch-deck-container">
            <div className="progress" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
            <div className="slide-number">{currentSlide + 1} / {totalSlides}</div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            <CurrentSlideComponent />

            <div className="controls">
                <button className="btn" onClick={prevSlide}>← Previous</button>
                <button className="btn" onClick={nextSlide}>Next →</button>
            </div>
        </div>
    );
};

export default PitchDeck;
