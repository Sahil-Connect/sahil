import { HiArrowSmallRight } from "react-icons/hi2";
import { Card } from "ui";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "550px",
};

const currentLocation = { lat: 4.841655610396733, lng: 31.614388667253447 };

const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY as string;
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(currentLocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentLocation}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {currentLocation && (
        <Marker position={currentLocation} title="Current Location" />
      )}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default function Home() {
  return (
    <section className="space-y-4">
      <Card>
        <h1 className="font-medium leading-none text-lg md:text-2xl">
          Radisson Blu
        </h1>
      </Card>
      <MyComponent />
    </section>
  );
}
