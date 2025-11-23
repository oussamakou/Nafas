import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import styles from './WindOverlay.module.css';

const WindOverlay = () => {
    const map = useMap();

    useEffect(() => {
        // This is a simplified visualization of wind.
        // In a real app, we would use a library like leaflet-velocity or a canvas layer.
        // Here we will add a custom control that shows general wind direction.

        const WindControl = L.Control.extend({
            onAdd: function () {
                const div = L.DomUtil.create('div', styles.windControl);
                div.innerHTML = `
          <div class="${styles.windWidget}">
            <div class="${styles.windIcon}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg)">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
            <div class="${styles.windInfo}">
              <span class="${styles.label}">Wind Direction</span>
              <span class="${styles.value}">NE (From GCT)</span>
              <span class="${styles.speed}">12 km/h</span>
            </div>
          </div>
        `;
                return div;
            }
        });

        const windControl = new WindControl({ position: 'topright' });
        map.addControl(windControl);

        return () => {
            map.removeControl(windControl);
        };
    }, [map]);

    return null;
};

export default WindOverlay;
