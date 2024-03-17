import { Box, Text } from "@chakra-ui/react";
const Boxes = ({ gasStations }) => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      m={4}
      bgColor="white"
      shadow="base"
      minW="container.md"
      zIndex="1"
    >
      <Text fontWeight="bold">Nearby Gas Stations:</Text>
      <ul>
        {gasStations.map((station, index) => (
          <li key={index}>{station.name}</li>
        ))}
      </ul>
    </Box>
  );
};
export default Boxes;