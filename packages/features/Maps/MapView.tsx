import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  OverlayView,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  HiOutlineFlag,
  HiOutlineMapPin,
  HiOutlineArrowUpCircle,
} from "react-icons/hi2";

const defaultCenter = {
  lat: -1.94995,
  lng: 30.05885,
};

const mapContainerStyle = {
  width: "100%",
  height: "75vh",
};

type LocationType = "Origin" | "Destination" | "CurrentLocation";

const origin = {
  id: 4,
  name: "Heaven Restaurant",
  description:
    "An upscale restaurant featuring local and international dishes.",
  lat: -1.9446,
  lng: 30.0593,
  icon: HiOutlineMapPin,
  type: "Origin",
};

const destination = {
  id: 5,
  name: "Kigali Marriott Hotel",
  description: "A luxury hotel with top-notch dining options.",
  lat: -1.95174,
  lng: 30.06185,
  icon: HiOutlineFlag,
  type: "Destination",
};

// lat: -1.94815,
// lng: 30.06057,
const currentLocation = {
  id: 6,
  name: "Current Location",
lat: -1.94815,
lng: 30.06057,
  icon: HiOutlineArrowUpCircle,
  type: "CurrentLocation",
};

export const cleanMapStyle = [
  {
    // Hide all businesses/POIs that aren't ours
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    // Hide transit stations/lines
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    // Keep only major road labels
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "simplified" }],
  },
  {
    // Simplify road network visibility
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    // Hide business districts
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    // Minimal landmark labels
    featureType: "landscape.man_made",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const CurrentLocationMarker = ({ currentLocation }) => {
  return (
    <div
      className={`flex items-center gap-2 w-fit bg-accent  rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center rounded-full
        border-accent/40 
      border-2 shadow-accent/10 shadow-sm p-2`}
    >
      <currentLocation.icon
        className={`text-primary-foreground/80`}
        size={24}
      />
    </div>
  );
};

const LocationMarker = ({ location }) => {
  return (
    <div
    className={
      "flex items-center gap-2 w-40 bg-background/55 backdrop-blur supports-[backdrop-filter]:bg-background/20 rounded-2xl shadow-lg transition-all duration-200"
    }
  >
    <div
      className={`flex items-center justify-center rounded-full bg-primary/50 border-secondary/40 border-2 shadow-secondary/20 shadow-sm p-2`}
    >
      <location.icon
        className={`text-secondary-foreground/10`} size={20}
      />
    </div>

    {/* Text Content */}
    <div className="py-1">
      <p
        className={`font-medium text-secondary-foreground`}
      >
        {location.name}
      </p>
    </div>
  </div>
  );
};

export const MapView = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const fetchDirections = useCallback(
    (start: google.maps.LatLngLiteral, end: google.maps.LatLngLiteral) => {
      if (!mapRef.current) {
        console.log("Map ref not available");
        return;
      }

      const directionsService = new google.maps.DirectionsService();
      console.log("Fetching directions from:", start, "to:", end);

      directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          console.log("Direction service status:", status);
          if (status === google.maps.DirectionsStatus.OK && result) {
            console.log("Received directions:", result);
            setDirections(result);
          } else {
            console.error("Failed to get directions:", status);
          }
        }
      );
    },
    []
  );

  React.useEffect(() => {
    console.log(
      "Effect running with origin:",
      origin,
      "destination:",
      destination
    );
    const start = { lat: origin.lat, lng: origin.lng };
    const end = { lat: destination.lat, lng: destination.lng };
    fetchDirections(start, end);
  }, [fetchDirections, origin, destination]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={14}
          onLoad={onMapLoad}
          options={{
            styles: cleanMapStyle,
            fullscreenControl: false,
            gestureHandling: "greedy",
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP,
            },
          }}
        >
          {[origin, destination, currentLocation].map((location) => {
            return (
              <React.Fragment key={location.id}>
                <OverlayView
                  position={{
                    lat: location.lat,
                    lng: location.lng,
                  }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  getPixelPositionOffset={(width, height) => ({
                    x: -(width / 2),
                    y: -(height + 20),
                  })}
                >
                  {location.type === "CurrentLocation" ? (
                    <CurrentLocationMarker currentLocation={location} />
                  ) : (
                    <LocationMarker location={location} />
                  )}
                </OverlayView>
              </React.Fragment>
            );
          })}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "#067a46",
                  strokeWeight: 6,
                  strokeOpacity: 0.8,
                },
              }}
            />
          )}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
