import React, { useState } from "react";

const images = import.meta.glob("../assets/sprites/*.png", { eager: true });
// const slideUrls = Object.values(images).map((img) => img.default);

const captions = {
  "1-TeraPotion.png": "Tera Potion",
  "2-MazkavZwei.png": "Mazkavethian Zweihander",
  "3-MoonPotion.png": "Moon Potion",
  "4-Longsword.png": "Longsword",
  "5-MyceneanRapier.png": "Mycenean Rapier",
  "6-SunPotion.png": "Sun Potion"
};

const slides = Object.entries(images).map(([path, img]) => {
  const fileName = path.split("/").pop();

  return {
    src: img.default,
    caption: captions[fileName] || "Unknown Artifact"
  };
});

export default function SpriteSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const changeSlide = (index) => {
    if (!fade) return;

    setFade(false);

    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  if (slides.length === 0) {
    return <div className="sprite-placeholder">No slides found</div>;
  }

  return (
    <section className="sprite-slideshow">
      <div className="sprite-placeholder">
        <img
          key={current}
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          className="slide-image"
          onClick={nextSlide}
        />
      </div>
      <div className = "description">
        <p>{slides[current].caption}</p>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </section>
    
  );
}