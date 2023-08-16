import React, { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const API_KEY = 'jjHmZjlQ0LhxADwObAQt6bVVnLbQAysK';
const SEARCH_API_URL = `https://api.tomtom.com/search/2/search/restaurants.json?key=${API_KEY}&lat=6.442872&lon=3.337854`; // Olodi Apapa Lagos coordinates

interface Restaurant {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

function MapWithRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get(SEARCH_API_URL);
        const data = response.data.results;

        const restaurantsData = data.map((restaurant: any) => ({
          id: restaurant.id,
          name: restaurant.poi.name,
          address: restaurant.address.freeformAddress,
          lat: restaurant.position.lat,
          lon: restaurant.position.lon,
        }));

        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const map = L.map('map').setView([6.442872, 3.337854], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    restaurants.forEach((restaurant) => {
      L.marker([restaurant.lat, restaurant.lon])
        .addTo(map)
        .bindPopup(`<b>${restaurant.name}</b><br>${restaurant.address}`);
    });
  }, [restaurants]);

  return <div id="map" style={{ height: '500px' }} />;
}

export default MapWithRestaurants;