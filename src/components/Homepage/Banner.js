import React from "react";
import bgSimplify from "../../assets/images/bg-simplify-section-desktop.svg";
import bgSimplifyMobile from "../../assets/images/bg-simplify-section-mobile.svg";
function Banner() {
  return (
    <section
      className="bg-bright-red py-14 bg-bottom bg-cover"
      style={{ backgroundImage: `url(${bgSimplify})` }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-[500]">
          Simplify how your team <br /> works today.
        </h1>
        <button className="text-bright-red px-8 py-3 rounded-full bg-white shadow-bright-red shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Banner;
