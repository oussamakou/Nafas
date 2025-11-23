import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styles from './SensorMarker.module.css';

// Updated Color System - More Saturated
const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#22c55e'; // Green-500
    if (aqi <= 100) return '#eab308'; // Yellow-500
    if (aqi <= 150) return '#f97316'; // Orange-500
    if (aqi <= 200) return '#dc2626'; // Red-600
    return '#9333ea'; // Purple-600
};

// Size mapping based on user description
const getCloudSize = (pm25) => {
    if (pm25 >= 160) return 300; // Bouchamma (Large)
    if (pm25 >= 130) return 250; // Channouch (Med-Large)
    if (pm25 >= 100) return 200; // Teboulbou (Medium)
    if (pm25 >= 80) return 160;  // Gabes City (Small-Medium)
    return 120;                  // Chemin Oasis (Small)
};

const SensorMarker = ({ sensor }) => {
    const color = getAQIColor(sensor.aqi);
    const size = getCloudSize(sensor.pm25);

    // Create irregular cloud shape using multiple overlapping divs
    const cloudHtml = `
    <div class="${styles.markerContainer}" style="width: ${size}px; height: ${size}px;">
      <div class="${styles.labelGroup}">
        <span class="${styles.locationName}">${sensor.name}</span>
        <span class="${styles.aqiValue}">${sensor.aqi}</span>
      </div>
      <div class="${styles.cloudShape}">
        <div class="${styles.cloudBlob} ${styles.blob1}" style="background: ${color};"></div>
        <div class="${styles.cloudBlob} ${styles.blob2}" style="background: ${color};"></div>
        <div class="${styles.cloudBlob} ${styles.blob3}" style="background: ${color};"></div>
        <div class="${styles.cloudBlob} ${styles.blob4}" style="background: ${color};"></div>
      </div>
    </div>
  `;

    const cloudIcon = L.divIcon({
        className: styles.customIcon,
        html: cloudHtml,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 4],
    });

    return (
        <Marker position={[sensor.lat, sensor.lng]} icon={cloudIcon}>
            <Popup className={styles.popup}>
                <div className={styles.popupContent}>
                    <h3>{sensor.name}</h3>
                    <div className={styles.metricRow}>
                        <span className={styles.label}>AQI</span>
                        <span className={styles.value} style={{ color }}>{sensor.aqi}</span>
                    </div>
                    <div className={styles.metricRow}>
                        <span className={styles.label}>PM2.5</span>
                        <span className={styles.value}>{sensor.pm25} µg/m³</span>
                    </div>
                    <div className={styles.metricRow}>
                        <span className={styles.label}>Fluoride</span>
                        <span className={styles.value}>{sensor.fluoride} µg/m³</span>
                    </div>
                    <div className={styles.metricRow}>
                        <span className={styles.label}>Wind</span>
                        <span className={styles.value}>{sensor.windDir}° / {sensor.windSpeed} km/h</span>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
};

export default SensorMarker;
