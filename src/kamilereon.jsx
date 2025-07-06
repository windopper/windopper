import React from "react";

export default function Kamilereon() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
        fontSize: "14px",
        fontWeight: 500,
        background:
          "linear-gradient(135deg, rgba(10, 10, 10, 1) 0%, rgba(25, 25, 25, 1) 50%, rgba(15, 15, 15, 1) 100%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        padding: "12px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow effect */}
      <div 
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
          pointerEvents: "none"
        }}
      />
      
      {/* Main content */}
      <div style={{ 
        color: "#f8fafc", 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        gap: "12px",
        position: "relative",
      }}>
        <span style={{ fontSize: "18px" }}>✨</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ 
              fontWeight: "700", 
              fontSize: "15px",
              background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              kamilereon
            </span>
          </div>
          <span style={{ 
            fontSize: "11px", 
            color: "#94a3b8",
            fontWeight: "400",
            letterSpacing: "0.3px"
          }}>
            웹/AI/SW 개발 블로그
          </span>
        </div>
      </div>

      {/* Right side info */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "4px",
        position: "relative",
      }}>
        <div style={{
          display: "flex",
          gap: "6px",
          alignItems: "center"
        }}>
          <div style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "4px",
              padding: "2px 4px"
            }}>
              <span style={{
                fontSize: "7px",
                color: "#cbd5e1",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Next.js
              </span>
            </div>
        </div>
        <span style={{
          fontSize: "9px",
          color: "#475569",
          fontWeight: "400",
          letterSpacing: "0.5px"
        }}>
          kamilereon.net
        </span>
      </div>
    </div>
  );
}

const KamilereonSvg = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 800 800"
    width="24"
    height="24"
    style={{ flexShrink: 0 }}
  >
    <defs>
      <filter
        id="kamilereon-filter"
        width="400%"
        height="400%"
        x="-100%"
        y="-100%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feGaussianBlur
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="SourceGraphic"
          result="blur"
          stdDeviation="40 28"
        ></feGaussianBlur>
      </filter>
      <filter
        id="kamilereon-filter2"
        width="400%"
        height="400%"
        x="-100%"
        y="-100%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feGaussianBlur
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="SourceGraphic"
          result="blur"
          stdDeviation="60 24"
        ></feGaussianBlur>
      </filter>
      <linearGradient id="kamilereon-grad" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(271, 91%, 70%)"></stop>
        <stop offset="50%" stopColor="hsl(280, 69%, 65%)"></stop>
        <stop offset="100%" stopColor="hsl(271, 91%, 80%)"></stop>
      </linearGradient>
    </defs>
    <g
      fill="none"
      stroke="url(#kamilereon-grad)"
      strokeWidth="36"
      transform="rotate(45 400 400)"
    >
      <circle
        cx="400"
        cy="400"
        r="180"
        filter="url(#kamilereon-filter)"
        opacity="0.8"
      ></circle>
      <circle
        cx="420"
        cy="380"
        r="160"
        filter="url(#kamilereon-filter2)"
        opacity="0.3"
      ></circle>
      <circle
        cx="380"
        cy="420"
        r="140"
        filter="url(#kamilereon-filter2)"
        opacity="0.2"
      ></circle>
      <circle 
        cx="400"
        cy="400"
        r="180"
        opacity="0.9"
      ></circle>
      {/* Inner decorative elements */}
      <path
        d="M320 400 L400 320 L480 400 L400 480 Z"
        opacity="0.6"
        strokeWidth="24"
      ></path>
    </g>
  </svg>
);
