import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HeroBatles from "./components/HeroBatles";
import HeroNews from "./components/HeroNews";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <HeroBatles />
      <HeroNews />
      <Footer />
    </>
  );
}

export default App;
