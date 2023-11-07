import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/Development";
import Services from "./pages/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development" element={<Development />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
