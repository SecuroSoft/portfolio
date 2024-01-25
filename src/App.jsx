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
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route caseSensitive={true} path="/" element={<Home />} />
          <Route caseSensitive={true} path="/development" element={<Development />} />
          <Route caseSensitive={true} path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
