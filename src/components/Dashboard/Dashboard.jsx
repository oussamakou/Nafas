import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Activity, Wind, CloudRain, AlertCircle, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';
import styles from './Dashboard.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const Dashboard = () => {
    // Mock Data for the Trend Chart
    const data = {
        labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', 'Now'],
        datasets: [
            {
                label: 'PM2.5 Levels',
                data: [45, 59, 80, 120, 165, 155, 140],
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(239, 68, 68, 0.5)'); // Red
                    gradient.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
                    return gradient;
                },
                borderColor: '#ef4444',
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#94a3b8',
                bodyColor: '#fff',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
            },
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { color: '#94a3b8' },
            },
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                ticks: { color: '#94a3b8' },
                suggestedMax: 200,
            },
        },
    };

    return (
        <section id="dashboard" className={`container fade-in ${styles.dashboardSection}`}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>Live Environmental Dashboard</h2>
                <div className={styles.lastUpdated}>
                    <span className={styles.pulse}></span> Live Updates
                </div>
            </div>

            <div className={styles.dashboardGrid}>
                {/* Key Metric Cards */}
                <div className={`${styles.card} ${styles.aqiCard}`}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Air Quality Index</span>
                        <Activity size={18} className={styles.icon} />
                    </div>
                    <div className={styles.mainMetric}>
                        <span className={styles.value}>155</span>
                        <span className={styles.unit}>AQI</span>
                    </div>
                    <div className={styles.statusBadge}>Unhealthy</div>
                    <div className={styles.trend}>
                        <ArrowUp size={14} /> +12% vs yesterday
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>PM2.5 Concentration</span>
                        <CloudRain size={18} className={styles.icon} />
                    </div>
                    <div className={styles.mainMetric}>
                        <span className={styles.value}>165</span>
                        <span className={styles.unit}>µg/m³</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '85%', background: '#ef4444' }}></div>
                    </div>
                    <p className={styles.cardSub}>Critical levels in Bouchamma</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Sulfur Dioxide (SO₂)</span>
                        <AlertCircle size={18} className={styles.icon} />
                    </div>
                    <div className={styles.mainMetric}>
                        <span className={styles.value}>450</span>
                        <span className={styles.unit}>ppb</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '60%', background: '#f97316' }}></div>
                    </div>
                    <p className={styles.cardSub}>Elevated near Industrial Zone</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Wind Conditions</span>
                        <Wind size={18} className={styles.icon} />
                    </div>
                    <div className={styles.mainMetric}>
                        <span className={styles.value}>12</span>
                        <span className={styles.unit}>km/h</span>
                    </div>
                    <div className={styles.windDirection}>
                        <span className={styles.compass}>NE</span>
                        <span className={styles.directionText}>Blowing towards City</span>
                    </div>
                </div>

                {/* Main Trend Chart (Spans 2 columns on large screens) */}
                <div className={`${styles.card} ${styles.chartCard}`}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>24h Pollution Trend (PM2.5)</span>
                        <TrendingUp size={18} className={styles.icon} />
                    </div>
                    <div className={styles.chartContainer}>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
