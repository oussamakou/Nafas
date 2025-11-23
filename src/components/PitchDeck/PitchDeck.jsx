import React, { useState, useEffect } from 'react';
import './PitchDeck.css';

// Import all slide components
import Slide01_Logo from './slides/Slide01_Logo';
import Slide05_Salsabil from './slides/Slide05_Salsabil';
import Slide06a_TeamConsolidated from './slides/Slide06a_TeamConsolidated';
import Slide07a_CurrentSolutions from './slides/Slide07a_CurrentSolutions';
import Slide08a_Innovation from './slides/Slide08a_Innovation';
import Slide09_Dashboard from './slides/Slide09_Dashboard';
import Slide10_Revenue from './slides/Slide10_Revenue';
import Slide11_Financials from './slides/Slide11_Financials';
import Slide13a_Impact from './slides/Slide13a_Impact';
import Slide13_Competition from './slides/Slide13_Competition';
import Slide09a_MarketSize from './slides/Slide09a_MarketSize';
import Slide16_Closing from './slides/Slide16_Closing';
import Slide17_Questions from './slides/Slide17_Questions';
import Slide18_TechSpecs from './slides/Slide18_TechSpecs';
import Slide19_GoToMarket from './slides/Slide19_GoToMarket';
import Slide20_FinancialDetail from './slides/Slide20_FinancialDetail';
import Slide21_Regulatory from './slides/Slide21_Regulatory';
import Slide22_CompetitiveAnalysis from './slides/Slide22_CompetitiveAnalysis';
import Slide23_RiskMitigation from './slides/Slide23_RiskMitigation';
import Slide24_UseOfFunds from './slides/Slide24_UseOfFunds';
import Slide25_TeamCapabilities from './slides/Slide25_TeamCapabilities';
import Slide26_SocialImpact from './slides/Slide26_SocialImpact';

const PitchDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // OPTIMIZED ORDER (13 Main Slides + 9 Hidden Backup Slides)
    const slides = [
        // ACT 1: THE HOOK
        Slide01_Logo,                   // 1. Logo
        Slide06a_TeamConsolidated,      // 2. Team (Credibility first)
        Slide05_Salsabil,               // 3. Salsabil's Story (Emotional hook)

        // ACT 2: THE SOLUTION
        Slide07a_CurrentSolutions,      // 4. Current Solutions (ANPE vs Nafas)
        Slide08a_Innovation,            // 5. Innovation (Tech & Model)
        Slide09_Dashboard,              // 6. Dashboard Demo

        // ACT 3: THE BUSINESS
        Slide10_Revenue,                // 7. Revenue Streams
        Slide13a_Impact,                // 8. Impact
        Slide13_Competition,            // 9. Competition (vs Global)
        Slide09a_MarketSize,            // 10. Market Size (Scale)

        // ACT 4: THE ASK
        Slide11_Financials,             // 11. The Ask & Financials
        Slide16_Closing,                // 12. Closing
        Slide17_Questions,              // 13. Questions

        // HIDDEN SLIDES (For Deep Dive Q&A)
        Slide18_TechSpecs,              // 14. Technical Architecture
        Slide19_GoToMarket,             // 15. Go-To-Market Strategy
        Slide20_FinancialDetail,        // 16. Financial Projections (3 Years)
        Slide21_Regulatory,             // 17. Regulatory Landscape
        Slide22_CompetitiveAnalysis,    // 18. Competitive Analysis Table
        Slide23_RiskMitigation,         // 19. Risk Mitigation
        Slide24_UseOfFunds,             // 20. Use of Funds Breakdown
        Slide25_TeamCapabilities,       // 21. Team Capabilities
        Slide26_SocialImpact            // 22. Social Impact Metrics
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
