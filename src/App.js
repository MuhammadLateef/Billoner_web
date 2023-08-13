import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Bitmart from "./components/Bitmart";
import EcoSystem from "./components/EcoSystem";
import Viddeo from "./components/Viddeo";
import Team from "./components/Team";
import Accomulator from "./components/Accomulator";
import Footer from "./layout/Footer";
import Tokenomics from "./components/Tokenomics";
import RoadmapCards from "./components/RoadmapCards";
import SlickSlider1 from "./components/SlickSlider1";
import Message from "./components/Message";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavBar />
        <Header />
        <SlickSlider1 />
        <Bitmart />
        <EcoSystem />
        <Viddeo />
        <Tokenomics />
        <RoadmapCards />
        <Team />
        <Accomulator />
        <Footer />
        <Message />
      </div>
    </>
  );
}

export default App;
