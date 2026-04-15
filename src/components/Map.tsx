import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import Pin from "../assets/logos/gfg-pin-o.svg";
import "leaflet/dist/leaflet.css";

export default function HQMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [ready, setReady] = useState(false);

  const position: [number, number] = [37.112965, -76.434074];

  // Wait until container has non-zero width and height
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const waitForSize = () => {
      if (container.offsetWidth && container.offsetHeight) {
        setReady(true);
      } else {
        requestAnimationFrame(waitForSize);
      }
    };

    waitForSize();
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    // Remove old map if exists
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = L.map(containerRef.current, {
      center: position,
      zoom: 15,
      scrollWheelZoom: false,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      { subdomains: "abcd" }
    ).addTo(map);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png",
      { 
        subdomains: "abcd", 
        // attribution: "&copy; Carto" 
      }
    ).addTo(map);

    const customIcon = L.divIcon({
      className: "",
      html: `<div style="
                position:absolute;
                transform:translate(-50%,-100%);
                width:85px;
                height:85px;
              ">
              <div style="
                position:absolute;
                bottom:-40px;
                left:0;
                width:85px;
                height:85px;
                z-index:-1;
                border-radius:50%;
                background:rgba(194,65,12,0.8);
                animation:pulse 1.5s infinite;
                transform:translateX(-50%);
              "></div>
              <img src="${Pin}" 
                style="
                width:85px;
                height:85px;
                object-fit:contain;
              " />
             </div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    L.marker(position, { icon: customIcon }).addTo(map);

    mapRef.current = map;

    // Force recalculation after next paint
    requestAnimationFrame(() => {
      map.invalidateSize();
      map.setView(position, 10);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [ready]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "80vw",
        height: "40vh",
        margin: "0 auto",
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.7; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}