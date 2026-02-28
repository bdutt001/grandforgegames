import React from "react";
import { useState, useEffect } from "react";

// Tell TypeScript that the imported modules have a 'default' string (URL)
const images = import.meta.glob("../assets/slideshow/*.png", { eager: true }) as Record<string, { default: string }>;

const slideUrls = Object.values(images).map((img) => img.default);

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideUrls.length);
        setFade(true); // fade-in new slide
      }, 300); // matches fade transition duration
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const changeSlide = (nextIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIndex);
      setFade(true);
    }, 300);
    
  };

  const prevSlide = () =>
    changeSlide((current - 1 + slideUrls.length) % slideUrls.length);
  const nextSlide = () => changeSlide((current + 1) % slideUrls.length);

  if (slideUrls.length === 0) {
    return <div className="slide-placeholder">No slides found</div>;
  }

  return (
    <section className="slideshow">
      <div className="slide-placeholder">
        <img
          src={slideUrls[current]}
          alt={`Slide ${current + 1}`}
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: fade ? 1 : 0
          }}
        />

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
