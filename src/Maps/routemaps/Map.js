import React, { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

<<<<<<< HEAD:src/Maps/routemaps/Map.js
const MapMarkersComponent = dynamic(() => import('./MapMarkersComponent'), {
=======
const MapMarkersComponent = dynamic(() => import('src/pages/assets-management/sites/components/MapMarkerComponent'), {
>>>>>>> 3fd82e980e4acecaf7cab5dabd641df501b56b6a:src/pages/assets-management/sites/components/Map.jsx
  ssr: false // Disable server-side rendering for this component
})

const Map = ({ cities, selectedCity, flag }) => {
<<<<<<< HEAD:src/Maps/routemaps/Map.js
  const LatLngBounds = L.latLngBounds(cities?.map(city => [city.lat, city.lon]))
=======
  const LatLngBounds = L.latLngBounds(cities?.map(city => [city?.lat, city?.lon]))
>>>>>>> 3fd82e980e4acecaf7cab5dabd641df501b56b6a:src/pages/assets-management/sites/components/Map.jsx

  const mapRef = useRef()
  useEffect(() => {
    // Check if window object is defined (client-side)
    if (typeof window !== 'undefined') {
      // Import Leaflet dynamically
      import('leaflet')
        .then(L => {
          // Use Leaflet code here
          const map = L.map('map').setView([51.505, -0.09], 13)
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
        })
        .catch(error => {
          console.error('Error loading Leaflet:', error)
        })
    }
  }, [])

  const calculateCenter = () => {
    if (cities && cities.length > 0) {
      let totalLat = 0
      let totalLng = 0
      cities.forEach(city => {
        totalLat += city.lat
        totalLng += city.lon
      })
      const averageLat = totalLat / cities.length
      const averageLng = totalLng / cities.length

      return [averageLat, averageLng]
    } else {
      return [24.774265, 46.738586]
    }
  }

  // console.log(markerIcon)

  return (
    <MapContainer
      key={Math.random()}
      center={flag ? [selectedCity?.lat, selectedCity?.lon] : calculateCenter()}
      bounds={LatLngBounds}
      style={{ width: '100%', height: '70vh' }}
      zoom={flag ? 6 : 12} // Set the desired zoom level
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {flag && <MapMarkersComponent selectedCity={selectedCity} />}

      {cities?.map(city => {
        const customIcon = new L.Icon({
          iconUrl: `data:image/png;base64,${city?.route?.markerIcon || ''}`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        })

        return (
          <>
            <Marker key={city.id} position={[city.lat, city.lon]} icon={customIcon}>
              <Popup>
                {city.name} <br /> Coordinates: {city.lat}, {city.lon}
              </Popup>
            </Marker>
          </>
        )
      })}
    </MapContainer>
  )
}

export default Map