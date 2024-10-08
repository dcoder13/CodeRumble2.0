"use client";
import { HeroFooter, Lumi, Navbar } from "../components";

const Hero = () => (
  <>
    <Navbar />
    <div className="flex flex-col min-h-[100svh]">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dtg1mnp9u/image/upload/v1728221525/heroLogo_dvbhar.webp)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <Lumi />
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = "https://www.techgig.com/coderumble2.0")
          }
          className="md:hidden bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold hover:bg-[#282828] hover:scale-105 transition-transform duration-300 z-50"
        >
          Register Now
        </button>
      </div>
      <div className="mt-auto mb-4">
        <HeroFooter />
      </div>
    </div>
  </>
);

export default Hero;
