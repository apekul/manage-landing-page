import React from "react";

// Components
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}

export default App;
