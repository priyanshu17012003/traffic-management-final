// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import './componentsHeader/Header.css'
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [menuOpen, setMenuOpen] = useState(false);
  
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//   <header className="p-3" style={{ backgroundColor: '#212529' }}>
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//           <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             <ul className="nav">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <div>
//             <Link to="/profile" className="btn btn-warning">
//               {currentUser ? (
//                 <img
//                   src={currentUser.profilePicture}
//                   alt="profile"
//                   className="h-7 w-7 rounded-full object-cover"
//                 />
//               ) : (
//                 'Sign In'
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header> 

   
//   );
// }

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <header className="p-3" style={{ backgroundColor: '#212529' }}>
    //   <div className="container">
    //     <div className="flex justify-between items-center">
    //       <div>
    //         <Link to="/" className="text-white text-lg font-bold">
    //           XMAP
    //         </Link>
    //       </div>
    //       <div className="hidden md:block">
    //         <nav>
    //           <ul className="flex space-x-4">
    //             <li>
    //               <Link to="/" className="text-white">
    //                 Home
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/about" className="text-white">
    //                 About
    //               </Link>
    //             </li>
    //             </ul>
    //             </nav>
    //             <div>
    //          <Link to="/profile" className="btn btn-warning">
    //            {currentUser ? (
    //              <img
    //                src={currentUser.profilePicture}
    //                alt="profile"
    //                className="h-7 w-7 rounded-full object-cover"
    //              />
    //            ) : (
    //              'Sign In'
    //            )}
    //          </Link>
    //        </div>
    //       </div>
    //       <div className="md:hidden">
    //         <button onClick={toggleMenu} className="text-white">
    //           <GiHamburgerMenu className="h-6 w-6" />
    //         </button>
    //       </div>
    //     </div>
    //     {menuOpen && (
    //       <div className="md:hidden mt-2">
    //         <ul className="flex flex-col space-y-2">
    //           <li>
    //             <Link to="/" className="text-white">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/about" className="text-white">
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //           <Link to="/profile" className="btn btn-warning">
    //            {currentUser ? (
    //              <img
    //                src={currentUser.profilePicture}
    //                alt="profile"
    //                className="h-7 w-7 rounded-full object-cover"
    //              />
    //            ) : (
    //              'Sign In'
    //            )}
    //          </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </header>

    <header className="p-3" style={{ backgroundColor: '#212529' }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-white text-lg font-bold">
              XMAP
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/about" className="text-white">
              About
            </Link>
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>
          <div className="hidden md:block">
            <Link to="/profile" className="btn btn-warning">
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                'Sign In'
              )}
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              
              <li>
                <Link to="/profile" className="btn btn-warning">
                  {currentUser ? (
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  ) : (
                    'Sign In'
                  )}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

