import React from "react";
import herImg from "../../assets/images/illustration-intro.svg";
function Hero() {
  return (
    <div className="flex justify-between py-10">
      <section className="flex flex-col justify-center items-start">
        <header className="">
          <h1 className="text-6xl font-[700] text-dark-blue">
            Bring everyone <br /> together to build <br /> better products.
          </h1>
          <p className="py-10 text-xl text-dark-grayish-blue font-[500]">
            Manage makes it simple for software teams <br /> to plan day-to-day
            tasks while keeping the <br /> larger team goals in view.
          </p>
        </header>
        <button className="bg-bright-red px-8 py-3 rounded-full text-white shadow-bright-red shadow-md">
          Get Started
        </button>
      </section>
      <aside className="relative">
        <img src={herImg} alt="homepage" className="relative z-20" />
        <div className="bg-bright-red w-[25rem] opacity-15 h-[70rem] rotate-[45deg] rounded-b-full absolute -bottom-[3rem] -right-[8rem] z-10"></div>
      </aside>
    </div>
  );
}

export default Hero;
