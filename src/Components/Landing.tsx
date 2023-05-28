import landing from "../assets/landing.svg";
export function Landing() {
  return (
    <section className="pb-20">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 pt-24">
            <div className="mw-xl mw-lg-2xl mx-auto mx-lg-0">
              <a
                className="btn d-inline-flex px-2 py-1 mb-6 align-items-center btn-success-light rounded-pill"
                href="#"
              >
                <span className="me-1 fw-semibold">
                  Supercharge Your Learning Journey
                </span>
                <svg
                  width="15"
                  height="15"
                  viewbox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <h1 className="h2 mb-6">
                Boost Your Grades and Knowledge with StudyBuddy Today!
              </h1>
              <p className="mw-lg fs-7 mb-10">
                Experience the power of artificial intelligence to simplify your
                studying process.
              </p>
              <div className="d-sm-flex align-items-center mb-24">
                <a
                  className="btn d-block d-sm-inline-block mb-4 mb-sm-0 me-sm-6 btn-primary"
                  href="#"
                >
                  Join Now
                </a>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <img
                  className="mb-5 mb-sm-0 me-sm-6"
                  src="flaro-assets/logos/brands/brand.png"
                  alt=""
                />
                <img
                  className="mb-5 mb-sm-0 me-sm-6"
                  src="flaro-assets/logos/brands/brand2.png"
                  alt=""
                />
                <img src="flaro-assets/logos/brands/brand3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-24">
            <div className="mw-2xl mx-auto">
              <img
                className="img-fluid"
                style={{ height: "600px" }}
                src={landing}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs">
        <div className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"></div>
        <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
          <div className="d-flex align-items-center">
            <a className="me-auto h4 mb-0 text-decoration-none" href="#">
              <img
                className="img-fluid"
                src="flaro-assets/logos/flaro-logo-black.svg"
                alt=""
              />
            </a>
            <a className="navbar-close" href="#">
              <svg
                width="24"
                height="24"
                viewbox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="py-16">
            <ul className="nav flex-column">
              <li className="nav-item mb-8">
                <a className="nav-link text-dark" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item mb-8">
                <a className="nav-link text-dark" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item mb-8">
                <a className="nav-link text-dark" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="btn w-100 fw-medium" href="#">
              Login
            </a>
            <a className="btn w-100 btn-primary" href="#">
              Sign in
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
