// import Card from "./Card";

// const Cards=()=>{

//     const fcards=[
//         {
//             src:'./assests/gas-pump.png',
//             title:'Gas Station',
//             body:'Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively'
//         },
//         {
//             src:'./assests/route.png',
//             title:'Dynamic Route',
//             body:"This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path among multiple alternate routes from the starting point to the destination."
//         },
//         {
//             src:'./assests/warning.png',
//             title:'Real time Traffic updates ',
//             body:'This platform provides real-time traffic updates. With live updates on congestion and other potential delays, you can make informed decisions to reroute and avoid traffic jams. '
//         }
//     ]

//     return(
//         <>
//             {fcards.map((fcard)=>(
//                 <Card key={fcard.title} fcard={fcard}></Card>
//             ))}
//         </>
//     );
// }

// export default Cards;

// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
// import "./Cards.css";

// const Cards = () => {
//   const fcards = [
//     {
//       src: "./assests/gas-pump.png",
//       title: "Gas Station",
//       body: "Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively",
//     },
//     {
//       src: "./assests/route.png",
//       title: "Dynamic Route",
//       body: "This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path alternate routes.",
//     },
//     {
//       src: "./assests/warning.png",
//       title: "Real time Traffic updates ",
//       body: "This platform provides real-time traffic updates. With live updates on congestion,traffic situations and other potential delays, you can make informed decisions to reroute and avoid traffic jams to reach your destination.",
//     },
//   ];

//   return (
//     <div className="grid gird-col-3 gap-6">
//       {fcards.map((fcard, index) => (
//         <div className="col-md-4" key={index} style={{ width: "300px" }}>
//           <Card fcard={fcard} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
// import "./Cards.css";

// const Cards = () => {
//   const fcards = [
//     {
//       src: "./assests/gas-pump.png",
//       title: "Gas Station",
//       body: "Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively",
//     },
//     {
//       src: "./assests/route.png",
//       title: "Dynamic Route",
//       body: "This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path alternate routes.",
//     },
//     {
//       src: "./assests/warning.png",
//       title: "Real time Traffic updates ",
//       body: "This platform provides real-time traffic updates. With live updates on congestion,traffic situations and other potential delays, you can make informed decisions to reroute and avoid traffic jams to reach your destination.",
//     },
//   ];

//   return (
//     <div className="flex justify-between">
//       {fcards.map((fcard, index) => (
//         <div key={index} className="flex-auto p-4" style={{ maxWidth: "30%" }}>
//           <Card fcard={fcard} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
// import "./Cards.css";

// const Cards = () => {
//   const fcards = [
//     {
//       src: "./assests/route.png",
//       title: "Dynamic Route",
//       body: "This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path alternate routes.",
//     },
//     {
//       src: "./assests/warning.png",
//       title: "Real time Traffic updates ",
//       body: "This platform provides real-time traffic updates. With live updates on congestion,traffic situations and other potential delays, you can make informed decisions to reroute and avoid traffic jams to reach your destination.",
//     },
//     {
//       src: "./assests/gas-pump.png",
//       title: "Gas Station",
//       body: "Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively",
//     }
//   ];

//   return (
//     <center>
//     <div className="flex space-x-10 mt-6">
//       {fcards.map((fcard, index) => (
//         <div key={index} className="flex-auto" style={{ width: "30%" }}>
//           <Card fcard={fcard} />
//         </div>
//       ))}
//     </div>
//     </center>
//   );
// };

// export default Cards;

// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./Card";
// import "./Cards.css";

// const Cards = () => {
//   const fcards = [
//     {
//       src: "./assests/route.png",
//       title: "Dynamic Route",
//       body: "This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path alternate routes.",
//     },
//     {
//       src: "./assests/warning.png",
//       title: "Real time Traffic updates ",
//       body: "This platform provides real-time traffic updates. With live updates on congestion,traffic situations and other potential delays, you can make informed decisions to reroute and avoid traffic jams to reach your destination.",
//     },
//     {
//       src: "./assests/gas-pump.png",
//       title: "Gas Station",
//       body: "Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively",
//     }
//   ];

//   return (
//     <center>
//       <div className="flex flex-wrap justify-center md:justify-start md:flex-row flex-col md:space-x-10 space-y-10 md:space-y-0 mt-6">
//         {fcards.map((fcard, index) => (
//           <div key={index} className="flex-auto" style={{ width: "30%" }}>
//             <Card fcard={fcard} />
//           </div>
//         ))}
//       </div>
//     </center>
//   );
// };

// export default Cards;

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const fcards = [
    {
      src: "./assests/route.png",
      title: "Dynamic Route",
      body: "This platform provides the optimal path among alternate routes between the source and destination.Unlock the power of efficient route planning with our platform's feature that identifies the optimal path alternate routes.",
    },
    {
      src: "./assests/warning.png",
      title: "Real time Traffic updates ",
      body: "This platform provides real-time traffic updates. With live updates on congestion,traffic situations and other potential delays, you can make informed decisions to reroute and avoid traffic jams to reach your destination.",
    },
    {
      src: "./assests/gas-pump.png",
      title: "Gas Station",
      body: "Display of all available petrol pumps along the route from the starting point to the final destination.With accurate and up-to-date information on petrol pump locations, users can plan their refueling stops effectively",
    }
  ];

  return (
    <center>
      <div className="flex flex-wrap justify-center md:justify-start md:flex-row flex-col md:space-x-10 space-y-10 md:space-y-0 mt-6">
        {fcards.map((fcard, index) => (
          <div key={index} className="flex-auto md:w-1/3 w-full"> {/* Set width dynamically */}
            <Card fcard={fcard} />
          </div>
        ))}
      </div>
    </center>
  );
};

export default Cards;

