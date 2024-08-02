import React from "react";
import herImg from "../../assets/images/illustration-intro.svg";
function Hero() {
  return (
    <div className="flex justify-between bg-red-200">
      <div className="w-1/2">
        <div className=" bg-blue-200">
          <h1 className="text-4xl font-[700]">
            Bring everyone together to build better products.
          </h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <button>Get Started</button>
      </div>
      <div className="bg-yellow-200 px-0">
        <img src={herImg} alt="homepage" />
      </div>
    </div>
  );
}

export default Hero;
