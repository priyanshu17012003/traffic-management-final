import { Autocomplete } from "@react-google-maps/api";
import { Input, Box } from "@chakra-ui/react";
import { FaCar, FaWalking, FaBicycle, FaBus } from "react-icons/fa";
import { useState } from "react";

const PopUp = ({
  destinationRef,
  originRef,
  calculateRoute,
  clearRoute,
  directionsResponse,
  routesInfo,
  shortestRouteIndex,
  showTraffic,
  setShowTraffic,
}) => {
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [selectedMode, setSelectedMode] = useState(null);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const hideDiv = () => {
    setIsDivVisible(false);
  };

  const showDiv = () => {
    setIsDivVisible(true);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <>
      <button onClick={toggleDivVisibility}>Toggle Div Visibility</button>

      {isDivVisible && (
        <div className="p-4 rounded-lg m-4 bg-white shadow-lg md:w-full md:max-w-md absolute left-1/2 transform -translate-x-1/2 lg:left-[1%] lg:transform-none">
          <Autocomplete className="m-2">
            <Input
              type="text"
              className="md:text-[18px] text-[10px]"
              placeholder="Origin"
              ref={originRef}
            />
          </Autocomplete>
          <Autocomplete className="m-2">
            <Input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>

          <Box className="flex flex-wrap justify-center gap-4">
            <FaCar
              size={30}
              onClick={() => handleModeSelect("DRIVING")}
              cursor="pointer"
            />
            <FaWalking
              size={30}
              onClick={() => handleModeSelect("WALKING")}
              cursor="pointer"
            />
            <FaBicycle
              size={30}
              onClick={() => handleModeSelect("BICYCLING")}
              cursor="pointer"
            />
            <FaBus
              size={30}
              onClick={() => handleModeSelect("TRANSIT")}
              cursor="pointer"
            />
          </Box>

          {selectedMode && (
            <button
              className="bg-pink-500 md:text-[18px] text-[10px] text-white py-2 px-4 rounded mt-2 m-2"
              onClick={() => calculateRoute(selectedMode)}
            >
              Calculate Route
            </button>
          )}
          <button
            aria-label="Clear route"
            onClick={clearRoute}
            className="text-pink-500 md:text-[18px] text-[10px] py-2 px-4 rounded border border-pink-500 m-2"
          >
            Reset
          </button>
          {directionsResponse && (
            <div className="mt-4 font-bold md:text-[18px] text-[10px]">
              <p>{selectedMode}</p>
              <p>Routes Information:</p>
              <div className="mt-2">
                {directionsResponse.routes.map((route, index) => (
                  <p key={index}>
                    Route {index + 1}: Distance - {routesInfo[index]?.distance},
                    Duration - {routesInfo[index]?.duration}
                  </p>
                ))}
              </div>
            </div>
          )}

          {routesInfo.length > 1 && (
            <div className="mt-4 font-bold md:text-[18px] text-[10px]">
              <p>Recommendations based on routes:</p>
              {routesInfo.map((route, index) => (
                <p
                  key={index}
                  className={
                    index === shortestRouteIndex
                      ? "text-green-500 mt-2"
                      : "text-red-500 mt-2"
                  }
                >
                  Route {index + 1}:{" "}
                  {index === shortestRouteIndex
                    ? "Take this route for a shorter distance."
                    : "Consider the shortest route for the least distance."}
                </p>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowTraffic(!showTraffic)}
            className="bg-teal-500 md:text-[18px] text-[10px] text-white py-2 px-4 rounded mt-4 m-2"
          >
            {showTraffic ? "Hide Traffic" : "Show Traffic"}
          </button>

          <button
            onClick={hideDiv}
            className="bg-gray-500 md:text-[18px] text-[10px] text-white py-2 px-4 rounded mt-4 ml-auto"
          >
            Hide
          </button>
        </div>
      )}

      {!isDivVisible && (
        <button
          onClick={showDiv}
          className="bg-gray-500 md:text-[18px] text-[10px] text-white py-2 px-4 rounded mt-4 absolute top-4 right-4"
        >
          Show
        </button>
      )}
    </>
  );
};

export default PopUp;