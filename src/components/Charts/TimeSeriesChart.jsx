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
    Legend,
} from 'chart.js';
import { HISTORICAL_DATA } from '../../data/mockData';
import styles from './Charts.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TimeSeriesChart = () => {
    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#94a3b8'
                }
            },
            title: {
                display: true,
                text: '24-Hour Pollution Trends',
                color: '#f8fafc',
                font: {
                    size: 16
                }
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#334155'
                },
                ticks: {
                    color: '#94a3b8'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                grid: {
                    color: '#334155'
                },
                ticks: {
                    color: '#94a3b8'
                },
                title: {
                    display: true,
                    text: 'PM2.5 (µg/m³)',
                    color: '#38bdf8'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    color: '#94a3b8'
                },
                title: {
                    display: true,
                    text: 'Fluoride (µg/m³)',
                    color: '#8f3f97'
                }
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <Line options={options} data={HISTORICAL_DATA} />
        </div>
    );
};

export default TimeSeriesChart;
