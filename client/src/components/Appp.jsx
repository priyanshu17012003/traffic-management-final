import React, { useRef, useState } from "react";
import { Flex, SkeletonText } from "@chakra-ui/react";

import { useJsApiLoader } from "@react-google-maps/api";

import PopUp from "./PopUp";
import GoogleMapDisplay from "./GoogleMapDisplay";
import gasStationIcon from "./gasStations.jpeg";
const center = { lat: 48.8584, lng: 2.2945 };

function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCE-07OqyB1ze3XgMCta9qH95p4bhENiLg",
    libraries: ["places"],
  });

  const trafficLayerOptions = {
    styles: [
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ hue: "#ff0000" }], // Red color for traffic areas
      },
    ],
  };

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [shortestRouteIndex, setShortestRouteIndex] = useState(null);
  const [showTraffic, setShowTraffic] = useState(false);
  const originRef = useRef();
  const destinationRef = useRef();
  const [routesInfo, setRoutesInfo] = useState([]);
  const [gasStations, setGasStations] = useState([]);
  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute(travelMode) {
    if (!originRef.current.value || !destinationRef.current.value) {
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const mode = String(travelMode).toUpperCase(); // Ensure travelMode is a valid string
    const results = await new Promise((resolve, reject) => {
      directionsService.route(
        {
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          travelMode: mode,
          provideRouteAlternatives: true,
        },
        (response, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            resolve(response);
          } else {
            reject(new Error(`Directions request failed: ${status}`));
          }
        }
      );
    });

    const updatedRoutesInfo = results.routes.map((route) => {
      const distance = route.legs[0]?.distance?.text || "N/A";
      const duration = route.legs[0]?.duration?.text || "N/A";
      return { distance, duration, mode };
    });

    setDirectionsResponse(results);
    setRoutesInfo(updatedRoutesInfo);

    let shortestIndex = 0;
    let shortestDistance = updatedRoutesInfo[0].distance;
    updatedRoutesInfo.forEach((route, index) => {
      if (route.distance < shortestDistance) {
        shortestDistance = route.distance;
        shortestIndex = index;
      }
    });

    setShortestRouteIndex(shortestIndex);
    if (results && results.routes) {
      const routeBounds = results.routes[0].bounds;
      const gasStationsRequest = {
        bounds: routeBounds,
        type: "gas_station",
      };

      const placesService = new window.google.maps.places.PlacesService(map);
      placesService.nearbySearch(gasStationsRequest, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setGasStations(results);
        }
      });
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setShortestRouteIndex(null);
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <GoogleMapDisplay
        setMap={setMap}
        directionsResponse={directionsResponse}
        shortestRouteIndex={shortestRouteIndex}
        showTraffic={showTraffic}
        trafficLayerOptions={trafficLayerOptions}
        gasStations={gasStations}
        center={center}
        gasStationIcon={gasStationIcon}
      />

      <PopUp
        destinationRef={destinationRef}
        originRef={originRef}
        calculateRoute={calculateRoute}
        clearRoute={clearRoute}
        directionsResponse={directionsResponse}
        routesInfo={routesInfo}
        shortestRouteIndex={shortestRouteIndex}
        showTraffic={showTraffic}
        setShowTraffic={setShowTraffic}
      />
    </Flex>
  );
}

export default App;
