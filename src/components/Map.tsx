import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import Pin from "../assets/logos/gfg-pin-o.svg";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [37.112965, -76.434074];

export default function HQMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [ready, setReady] = useState(false);

  // Wait until container has non-zero size before initializing map
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkSize = () => {
      if (container.offsetWidth && container.offsetHeight) {
        setReady(true);
      } else {
        // Try again on next animation frame
        requestAnimationFrame(checkSize);
      }
    };

    checkSize();
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
      zoom: 16,
      scrollWheelZoom: false,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      { subdomains: "abcd" }
    ).addTo(map);

    const customIcon = L.divIcon({
      className: "",
      html: `
        <div class="marker-visual">
          <div class="pulse-ring"></div>
          <img src="${Pin}" class="marker-icon"/>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    L.marker(position, { icon: customIcon })
      .addTo(map)
      .bindPopup("Grand Forge Games HQ");

    mapRef.current = map;

    requestAnimationFrame(() => {
      map.invalidateSize();
      map.setView(position, 16);
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
        height: "400px",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .marker-visual {
            position: absolute;
            transform: translate(-50%, -100%);
            pointer-events: none;
          }
          .marker-icon {
            width: 85px;
            height: 85px;
            object-fit: contain;
            display: block;
            pointer-events: auto;
          }
          .pulse-ring {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 85px;
            height: 85px;
            border-radius: 50%;
            background: rgba(194,65,12,0.5);
            animation: pulse 1.5s infinite;
            transform: translateX(-50%);
            z-index: -1;
          }
          @keyframes pulse {
            0% { transform: scale(0.8); opacity: 0.7; }
            70% { transform: scale(2.2); opacity: 0; }
            100% { opacity: 0; }
          }
          .leaflet-tile-pane {
            filter: brightness(1.15) contrast(0.9);
          }
        `}
      </style>
    </div>
  );
}