import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import styles from './Charts.module.css';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const CorrelationChart = () => {
    // Mock data: High pollution when wind is around 45 degrees (NE)
    const data = {
        datasets: [
            {
                label: 'PM2.5 vs Wind Direction',
                data: Array.from({ length: 50 }, () => {
                    const windDir = Math.random() * 360;
                    // Simulate higher pollution around 45 degrees (NE)
                    let pollution = 20 + Math.random() * 30;
                    if (windDir > 30 && windDir < 60) {
                        pollution += 100 + Math.random() * 50;
                    }
                    return { x: windDir, y: pollution };
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: '#94a3b8' }
            },
            title: {
                display: true,
                text: 'Pollution Source Analysis',
                color: '#f8fafc',
                font: { size: 16 }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `Wind: ${context.raw.x.toFixed(0)}° | PM2.5: ${context.raw.y.toFixed(0)}`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 360,
                title: {
                    display: true,
                    text: 'Wind Direction (Degrees)',
                    color: '#94a3b8'
                },
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            },
            y: {
                title: {
                    display: true,
                    text: 'PM2.5 Concentration',
                    color: '#94a3b8'
                },
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <Scatter options={options} data={data} />
        </div>
    );
};

export default CorrelationChart;
