export const SENSORS = [
  {
    id: 1,
    name: "GCT Industrial Zone",
    lat: 33.905,
    lng: 10.105,
    pm25: 165,
    pm10: 210,
    fluoride: 4.2,
    aqi: 165, // Unhealthy
    windDir: 45, // NE
    windSpeed: 12,
  },
  {
    id: 2,
    name: "Gabes City Center",
    lat: 33.883,
    lng: 10.098,
    pm25: 85,
    pm10: 110,
    fluoride: 1.8,
    aqi: 85, // Moderate
    windDir: 40,
    windSpeed: 8,
  },
  {
    id: 3,
    name: "Chenini Oasis",
    lat: 33.870,
    lng: 10.060,
    pm25: 45,
    pm10: 60,
    fluoride: 0.5,
    aqi: 45, // Good
    windDir: 50,
    windSpeed: 5,
  },
  {
    id: 4,
    name: "Teboulbou School",
    lat: 33.850,
    lng: 10.120,
    pm25: 110,
    pm10: 140,
    fluoride: 2.1,
    aqi: 110, // Unhealthy for Sensitive Groups
    windDir: 45,
    windSpeed: 10,
  },
  {
    id: 5,
    name: "Ghannouch Residential",
    lat: 33.930,
    lng: 10.080,
    pm25: 140,
    pm10: 180,
    fluoride: 3.5,
    aqi: 140, // Unhealthy for Sensitive Groups
    windDir: 60,
    windSpeed: 11,
  }
];

export const HISTORICAL_DATA = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [
    {
      label: 'PM2.5 (µg/m³)',
      data: [45, 50, 120, 140, 90, 70],
      borderColor: '#38bdf8',
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      tension: 0.4,
    },
    {
      label: 'Fluoride (µg/m³)',
      data: [1.2, 1.1, 3.5, 4.0, 2.5, 1.8],
      borderColor: '#8f3f97',
      backgroundColor: 'rgba(143, 63, 151, 0.2)',
      tension: 0.4,
      yAxisID: 'y1',
    }
  ]
};
