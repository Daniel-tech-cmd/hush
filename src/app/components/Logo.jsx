import { FaPlane } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="relative inline-block">
      {/* Text with gradient */}
      <span
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black font-extrabold"
        style={{ fontWeight: "800", fontSize: "1.5rem" }}
      >
        Jetspeedcargo
      </span>

      {/* SVG Curved Path */}
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        className="absolute"
        style={{ top: "-10px", left: "40px" }}
      >
        <path
          d="M10,15 C40,0, 80,0, 110,15" // Curved path from left to right
          stroke="url(#gradient)" // Reference to gradient fill
          strokeWidth="2"
          fill="none"
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "transparent", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Airplane icon */}
      <span
        className="absolute text-blue-500"
        style={{
          top: "0.01rem", // Position below the line
          left: "9rem",
          display: "inline-flex",
          alignItems: "center",
          transform: "rotate(30deg)", // Adjusted angle to follow curve direction
        }}
      >
        <FaPlane size={16} />
      </span>
    </div>
  );
};

export default Logo;
