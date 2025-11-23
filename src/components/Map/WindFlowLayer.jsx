import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './WindFlowLayer.module.css';

const WindFlowLayer = () => {
    const map = useMap();
    const [windData, setWindData] = useState({ speed: 10, direction: 45 }); // Default NE

    useEffect(() => {
        // Fetch real-time wind data for Gabes
        const fetchWindData = async () => {
            try {
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=33.88&longitude=10.10&current_weather=true'
                );
                const data = await response.json();
                if (data.current_weather) {
                    setWindData({
                        speed: data.current_weather.windspeed,
                        direction: data.current_weather.winddirection
                    });
                    console.log("Real-time wind data fetched:", data.current_weather);
                }
            } catch (error) {
                console.error("Failed to fetch wind data:", error);
            }
        };

        fetchWindData();
        // Refresh every 15 minutes
        const interval = setInterval(fetchWindData, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!map) return;

        // Create a pane for the wind layer
        if (!map.getPane('windPane')) {
            map.createPane('windPane');
            map.getPane('windPane').style.zIndex = 350;
            map.getPane('windPane').style.pointerEvents = 'none';
        }

        const windLines = [];
        const numLines = 120;

        // Helper to create quadratic bezier curve points
        const getCurvePoints = (start, end, control) => {
            const points = [];
            for (let t = 0; t <= 1; t += 0.1) {
                const lat = (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * control[0] + t * t * end[0];
                const lng = (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * control[1] + t * t * end[1];
                points.push([lat, lng]);
            }
            return points;
        };

        // Gabes Area Bounds
        const bounds = {
            minLat: 33.84,
            maxLat: 33.94,
            minLng: 10.05,
            maxLng: 10.15
        };

        // Calculate vector based on wind direction (degrees)
        // Wind direction is "coming from". So if dir is 0 (North), wind blows South.
        // We want the flow direction (where it's going).
        // Flow Angle = Wind Dir + 180.
        const flowAngleRad = ((windData.direction + 180) % 360) * (Math.PI / 180);

        // Base movement vector length (approx 0.03 degrees lat/lng)
        const vectorLen = 0.03;
        const latDistBase = Math.cos(flowAngleRad) * vectorLen; // Lat is Y-axis
        const lngDistBase = Math.sin(flowAngleRad) * vectorLen; // Lng is X-axis

        for (let i = 0; i < numLines; i++) {
            const startLat = bounds.minLat + Math.random() * (bounds.maxLat - bounds.minLat);
            const startLng = bounds.minLng + Math.random() * (bounds.maxLng - bounds.minLng);

            // Add randomness to the vector
            const latDist = latDistBase + (Math.random() - 0.5) * 0.01;
            const lngDist = lngDistBase + (Math.random() - 0.5) * 0.01;

            const endLat = startLat + latDist;
            const endLng = startLng + lngDist;

            // Control point
            const controlLat = (startLat + endLat) / 2 + (Math.random() - 0.5) * 0.005;
            const controlLng = (startLng + endLng) / 2 + (Math.random() - 0.5) * 0.005;

            const path = getCurvePoints([startLat, startLng], [endLat, endLng], [controlLat, controlLng]);

            // Speed based on real wind speed (faster wind = shorter duration)
            // Base duration ~4s. If speed is high (e.g. 30km/h), duration drops.
            const speedFactor = Math.max(0.5, 20 / (windData.speed || 10));
            const duration = (2 + Math.random() * 3) * speedFactor;
            const delay = Math.random() * 5;

            const polyline = L.polyline(path, {
                color: 'rgba(255, 255, 255, 0.3)',
                weight: 1 + Math.random(),
                className: styles.windLine,
                pane: 'windPane',
                dashArray: '8, 25',
            });

            windLines.push({ polyline, duration, delay });
        }

        windLines.forEach(({ polyline, duration, delay }) => {
            polyline.addTo(map);
            const pathElement = polyline.getElement();
            if (pathElement) {
                pathElement.style.animationDuration = `${duration}s`;
                pathElement.style.animationDelay = `-${delay}s`;
            }
        });

        return () => {
            windLines.forEach(({ polyline }) => polyline.remove());
        };
    }, [map, windData]); // Re-run when windData changes

    return null;
};

export default WindFlowLayer;
