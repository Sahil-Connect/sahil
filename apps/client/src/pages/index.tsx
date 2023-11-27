import { HiArrowSmallRight } from "react-icons/hi2";
import { Card } from "ui";
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '400px'
};

const center = {
  lat: 4.859363,
  lng: 31.57125000000001
};

const googleMapsApiKey = process.env.NEXT_PUBLIC_API_KEY as string;

console.log(googleMapsApiKey);
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default function Home() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="font-medium leading-none text-lg md:text-2xl">
          Dashboard
        </h1>
        <p className="text-sm">Welcome back, Keji.</p>
      </div>

      <MyComponent />
    </section>
  )
}
