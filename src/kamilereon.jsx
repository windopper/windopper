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