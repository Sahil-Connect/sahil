import { HiArrowRight } from "react-icons/hi2";
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

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
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


export default function TrackOrdersPage() {
  return (
    <main className="space-y-2">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Track Orders</h1>
          </div>
        </div>
        <div>
          <Card title="Order Information">
            <form className="space-y-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="#ED3413"
                  className="input input-sm input-bordered bg-slate-100"
                />
              </div>
              <div className="btn btn-sm btn-primary">
                <input type="submit" value="Search" />
                <HiArrowRight />
              </div>
            </form>
          </Card>
        </div>
      </div>
      <MyComponent />
    </main>
  );
}
