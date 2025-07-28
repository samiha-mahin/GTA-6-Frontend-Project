import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowBigDown } from "lucide-react";

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2.5,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2.5,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full h-full rotate-[-10deg] scale-[1.7] sm:rotate-0 sm:scale-150">
          <div className="landing relative overflow-hidden w-full h-screen bg-black">
            {/* NAVBAR */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6 sm:py-10 sm:px-10">
              <div className="logo flex gap-1 sm:gap-[5px]">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-[60px] h-1 sm:w-15 sm:h-2 bg-white"></div>
                  <div className="line w-[30px] h-1 sm:w-8 sm:h-2 bg-white"></div>
                  <div className="line w-[20px] h-1 sm:w-5 sm:h-2 bg-white"></div>
                </div>
                <h3 className="text-xl sm:text-2xl -mt-1 sm:-mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* IMAGES SECTION */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              {/* TEXT */}
              <div className="text text-white flex flex-col gap-2 sm:gap-3 absolute top-10 sm:top-30 left-1/2 -translate-x-1/2 text-center sm:text-left">
                <h1 className="text-5xl sm:text-[9rem] leading-none -ml-0 sm:-ml-40">
                  grand
                </h1>
                <h1 className="text-5xl sm:text-[9rem] leading-none ml-0 sm:ml-20">
                  theft
                </h1>
                <h1 className="text-5xl sm:text-[9rem] leading-none -ml-0 sm:-ml-40">
                  auto
                </h1>
              </div>

              {/* CHARACTER IMAGE */}
              <img
                className="absolute character bottom-[-100%] sm:-bottom-[150%] left-1/2 -translate-x-1/2 h-[60%] sm:h-[75%]"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* BOTTOM BAR */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-4 py-6 sm:px-10 sm:py-10 bg-gradient-to-t from-black to-transparent">
              {/* Scroll Section - hidden on mobile */}
              <div className="hidden sm:flex gap-4 items-center">
                <ArrowBigDown size={28} className="w-6 h-6" />
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>

              {/* PS5 Image - still centered and responsive */}
              <img
                className="absolute h-[40px] sm:h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="./ps5.png"
                alt="PS5"
              />
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center bg-black px-10 py-20">
            <div className="cntnr min-h-screen flex flex-wrap md:flex-nowrap gap-10 text-white w-full max-w-[1400px]">
              {/* Left Image */}
              <div className="limg relative py-10 w-full md:w-1/2 md:h-auto">
                <img
                  className="absolute scale-[1.2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>

              {/* Right Content */}
              <div className="rg w-full md:w-1/2 flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Still Running,
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold">Not Hunting</h1>
                <p className="mt-6 text-lg font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto.
                </p>
                <p className="mt-4 text-lg font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit...
                </p>
                <p className="mt-4 text-lg font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit...
                </p>
                <button className="bg-yellow-500 px-6 py-4 text-black mt-8 text-2xl w-fit">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
