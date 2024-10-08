export function Hero() {
  return (
    <section id="home-section" className="hero">
      <style>
        {`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @media (min-width: 768px) { /* Adjust the breakpoint as needed */
            .animate-from-right {
              animation: slideInFromRight 1s ease-out forwards;
              height: 1000px;
              width: 1000px;
              border-radius: 100%;
              background-color: #132023;
              position: absolute;
              left: -15%;
              top: -30%;
              /* z-index: -10; */
            }
          }
        `}
      </style>
      <div className="animate-from-right"></div>
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(images/bg_1.png)" }}
              >
                <div className="overlay"></div>
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I&apos;m <span>Anjum Zia</span>
                  </h1>
                  <h2 className="mb-4">A Freelance Video Editor</h2>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4 mx-2">
                      Hire me
                    </a>
                    <a
                      href="#projects-section"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(/images/bg_2.png)" }}
              >
                <div className="overlay"></div>
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I&apos;m a <span>video editor</span> based in India
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4 mx-2">
                      Hire me
                    </a>
                    <a
                      href="#projects-section"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
