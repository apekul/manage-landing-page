import React from "react";

// Components
import Hero from "./Hero";
import InfoComponent from "./InfoComponent";
import Review from "./Reviews/Review";

function Homepage() {
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <Hero />
        <InfoComponent />
      </div>
      <Review />
    </section>
  );
}

export default Homepage;
