"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function mapInit() {
    // Request the needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);
    // Get the gmp-map element.
    const mapElement = document.querySelector('gmp-map');
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Set map options.
    innerMap.setOptions({
        mapTypeControl: false,
    });
    const locations = [
        { title: 'Country Club Plaza, Kansas City, MO', position: { lat: 39.0413, lng: -94.5918 } },
        { title: 'New Haven SDA Church, Overland Park, KS', position: { lat: 38.9825, lng: -94.6700 } },
        { title: 'Johnson County Fair, Gardner, KS', position: { lat: 38.8125, lng: -94.9183 } },
        { title: 'Salvation Army, Lawrence, KS', position: { lat: 38.9717, lng: -95.2353 } },
        { title: 'Loose Park, Kansas City, MO', position: { lat: 39.0487, lng: -94.5968 } },
        { title: 'Shawnee Mission Park, Shawnee, KS', position: { lat: 39.0083, lng: -94.7417 } },
        { title: 'River Market, Kansas City, MO', position: { lat: 39.1053, lng: -94.5862 } },
        { title: 'Mid-America Sports Complex, Olathe, KS', position: { lat: 38.8817, lng: -94.8194 } },
        { title: 'Washington Square Park, Kansas City, MO', position: { lat: 39.0997, lng: -94.5786 } },
        { title: 'SDA Multicultural Community Church, Kansas City, MO', position: { lat: 39.0917, lng: -94.5783 } },
        { title: 'Oak Park Mall, Overland Park, KS', position: { lat: 38.9667, lng: -94.6889 } },
        { title: 'Artist Alley, Chanute, KS', position: { lat: 37.6792, lng: -95.4572 } },
        { title: 'Biblesta, Humbolt, KS', position: { lat: 37.8028, lng: -95.4353 } },
        { title: 'Los Angeles, CA', position: { lat: 34.0522, lng: -118.2437 } },
    ];
    const north = Math.max(...locations.map(location => location.position.lat));
    const south = Math.min(...locations.map(location => location.position.lat));
    const east = Math.max(...locations.map(location => location.position.lng));
    const west = Math.min(...locations.map(location => location.position.lng));
    // Fit the map view so every marker is visible.
    innerMap.fitBounds({ north, south, east, west });
    for (const location of locations) {
        new AdvancedMarkerElement({
            map: innerMap,
            position: location.position,
            title: location.title,
        });
    }
    document.getElementById("locations").innerHTML = locations.map(location => `<li>${location.title}</li>`).join("");
}
mapInit();
