import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-300 hover:bg-yellow-400 transition duration-300 font-semibold">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Repeat the same structure for other sections */}

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                {/* <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a> */}
                <div className="text-3xl">
                  {" "}
                  <FaFacebook />
                </div>
              </li>
              <li className="ms-3">
                {/* <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a> */}
                <div className="text-3xl">
                  {" "}
                  <IoLogoYoutube />
                </div>
              </li>
              <li className="ms-3">
                {/* <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a> */}
                <div className="text-3xl">
                  {" "}
                  <FaSquareXTwitter />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
