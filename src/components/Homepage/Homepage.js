import React from "react";

// Components
import Hero from "./Hero";
import InfoComponent from "./InfoComponent";
import Review from "./Reviews/Review";
import Banner from "./Banner";

function Homepage() {
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <Hero />
        <InfoComponent />
      </div>
      <Review />
      <Banner />
    </section>
  );
}

export default Homepage;
