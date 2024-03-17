// import "bootstrap/dist/css/bootstrap.min.css";

// const Card = ({ fcard }) => {
//   return (
//     <div
//       className="flex flex-col justify-space-between"
//       style={{ maxWidth: "20rem" }}
//     >
//       <img src={fcard.src} className="card-img-top" alt="..." />
//       <div className="card-body" style={{ width: "100%" }}>
//         <h5 className="card-title">{fcard.title}</h5>
//         <p className="card-text">{fcard.body}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import "bootstrap/dist/css/bootstrap.min.css";

// const Card = ({ fcard }) => {
//   return (
//     <div className="flex flex-col justify-between items-center space-y-4 transition duration-300 ease-in-out transform hover:scale-105" style={{ maxWidth: "20rem" }}>
//     <img src={fcard.src} className="card-img-top" alt="..." />
//     <div className="card-body text-center" style={{ width: "100%" }}>
//       <h5 className="card-title mb-4 text-4xl font-bold text-blue-700">{fcard.title}</h5>
//       <p className="card-text mb-4 text-xl text-gray-600 font-semibold">{fcard.body}</p>
//     </div>
//   </div>
//   );
// };

// export default Card;

import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ fcard }) => {
  return (
    <div className="flex flex-col justify-between items-center space-y-4 transition duration-300 ease-in-out transform hover:scale-105" style={{ maxWidth: "20rem" }}>
      <img src={fcard.src} className="card-img-top" alt="..." />
      <div className="card-body text-center" style={{ width: "100%" }}>
        <h5 className="card-title mb-4 text-4xl font-bold text-blue-700">{fcard.title}</h5>
        <p className="card-text mb-4 text-xl text-gray-600 font-semibold">{fcard.body}</p>
      </div>
    </div>
  );
};

export default Card;


