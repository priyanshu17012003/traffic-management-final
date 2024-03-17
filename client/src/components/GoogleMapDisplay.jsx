import { Box } from "@chakra-ui/react";
import {
  GoogleMap,
  DirectionsRenderer,
  TrafficLayer,
  Marker,
} from "@react-google-maps/api";

const GoogleMapDisplay = ({
  setMap,
  directionsResponse,
  shortestRouteIndex,
  showTraffic,
  trafficLayerOptions,
  gasStations,
  center,
  gasStationIcon,
}) => {
  return (
    <Box position="absolute" left={0} top={0} h="100%" w="100%">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={setMap}
      >
        {directionsResponse &&
          directionsResponse.routes.map((route, index) => (
            <DirectionsRenderer
              key={index}
              directions={{ ...directionsResponse, routes: [route] }}
              options={{
                polylineOptions: {
                  strokeColor: index === shortestRouteIndex ? "green" : "red",
                  strokeOpacity: 0.6,
                  strokeWeight: 6,
                },
              }}
            />
          ))}
        {showTraffic && <TrafficLayer options={trafficLayerOptions} />}

        {gasStations.map((station, index) => (
          <Marker
            key={index}
            position={{
              lat: station.geometry.location.lat(),
              lng: station.geometry.location.lng(),
            }}
            title={station.name}
            icon={gasStationIcon}
          />
        ))}
      </GoogleMap>
    </Box>
  );
};
export default GoogleMapDisplay;
