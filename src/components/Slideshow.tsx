import React, { useState, useEffect, useRef } from "react";

const images = import.meta.glob("../assets/slideshow/*.png", { eager: true }) as Record<string, { default: string }>;
const slideUrls = Object.values(images).map((img) => img.default);

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideUrls.length);
        setFade(true);
      }, 300);
    }, 6000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const changeSlide = (nextIndex: number) => {
    if (!fade) return; // prevents double transitions

    setFade(false);

    setTimeout(() => {
      setCurrent(nextIndex);
      setFade(true);
    }, 300);

    resetTimer();
  };

  const prevSlide = () =>
    changeSlide((current - 1 + slideUrls.length) % slideUrls.length);

  const nextSlide = () =>
    changeSlide((current + 1) % slideUrls.length);

  if (slideUrls.length === 0) {
    return <div className="slide-placeholder">No slides found</div>;
  }

  const handleDotClick = (index) => {
    if (!fade) return;

    setFade(false);

    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);

    resetTimer();
  };

  return (
    <section className="slideshow">
      <div className="slide-placeholder">
        <img
          key={current}
          src={slideUrls[current]}
          alt={`Slide ${current + 1}`}
          className="slide-image"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: fade ? 1 : 0
          }}
        />

        <button
          onClick={prevSlide}
          className="slide-arrow prev"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="slide-arrow next"
        >
          ›
        </button>
      </div>
      <div className="caption">
        <p>
          All images captured within Unreal Engine.
        </p>
      </div>
      <div className="dots">
        {slideUrls.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}