import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Forsaken from "./pages/Forsaken";
import TemporalUrgency from "./pages/TemporalUrgency";
import About from "./pages/About";
import Projects from "./pages/Projects";




export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/forsaken" element={<Forsaken />} />
        <Route path="/temporal-urgency" element={<TemporalUrgency/>} />
      </Routes>

      <Footer />
    </div>
  );
}
