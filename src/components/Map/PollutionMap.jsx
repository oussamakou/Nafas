import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { SENSORS } from '../../data/mockData';
import SensorMarker from './SensorMarker';
import WindOverlay from './WindOverlay';
import WindFlowLayer from './WindFlowLayer';
import styles from './PollutionMap.module.css';

const PollutionMap = () => {
    const gabesPosition = [33.8815, 10.0982]; // Center of Gabes
    const [isLegendOpen, setIsLegendOpen] = useState(true);

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={gabesPosition}
                zoom={13}
                scrollWheelZoom={false}
                className={styles.map}
                style={{ height: '100%', width: '100%', background: '#0f172a' }}
            >
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <WindFlowLayer />
                {SENSORS.map(sensor => (
                    <SensorMarker key={sensor.id} sensor={sensor} />
                ))}
                <WindOverlay />
            </MapContainer>

            <div className={`${styles.legend} ${!isLegendOpen ? styles.legendCollapsed : ''}`}>
                <div className={styles.legendHeader} onClick={() => setIsLegendOpen(!isLegendOpen)}>
                    <h4>AIR QUALITY INDEX</h4>
                    {isLegendOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </div>

                {isLegendOpen && (
                    <div className={styles.legendGrid}>
                        <div className={styles.legendItem}><span className={styles.colorBlock} style={{ background: '#22c55e' }}></span> <span className={styles.legendLabel}>Good</span></div>
                        <div className={styles.legendItem}><span className={styles.colorBlock} style={{ background: '#eab308' }}></span> <span className={styles.legendLabel}>Moderate</span></div>
                        <div className={styles.legendItem}><span className={styles.colorBlock} style={{ background: '#f97316' }}></span> <span className={styles.legendLabel}>Unhealthy SG</span></div>
                        <div className={styles.legendItem}><span className={styles.colorBlock} style={{ background: '#dc2626' }}></span> <span className={styles.legendLabel}>Unhealthy</span></div>
                        <div className={styles.legendItem}><span className={styles.colorBlock} style={{ background: '#9333ea' }}></span> <span className={styles.legendLabel}>Very Unhealthy</span></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PollutionMap;
