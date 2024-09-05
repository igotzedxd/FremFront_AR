import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Showcase from "./components/showcase/Showcase";
import Udvikling from "./components/udvikling/Udvikling";
import Future from "./components/future/Future";
import Footer from "./components/footer/Footer";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <About />
      <Showcase />
      <Udvikling />
      <Future />
      <Footer />
    </>
  );
}

export default App;
