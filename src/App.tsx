import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Project from "./pages/Project";


export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <Footer />
    </div>
  );
}
