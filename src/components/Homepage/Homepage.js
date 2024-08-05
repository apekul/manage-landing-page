import React from "react";

// Components
import Hero from "./Hero";
import InfoComponent from "./InfoComponent";

function Homepage() {
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <Hero />
        <InfoComponent />
      </div>
    </section>
  );
}

export default Homepage;
