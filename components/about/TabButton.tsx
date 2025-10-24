// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// interface TabButtonProps {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
//   onLayout: (rect: DOMRect) => void;
// }

// export default function TabButton({
//   active,
//   onClick,
//   children,
//   onLayout,
// }: TabButtonProps) {
//   const ref = useRef<HTMLButtonElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (active && ref.current) {
//       onLayout(ref.current.getBoundingClientRect());
//     }
//   }, [active, onLayout]);

//   return (
//     <button
//       ref={ref}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`py-2.5 text-base cursor-pointer w-1/3 font-medium transition-colors relative z-10 overflow-hidden ${
//         active ? "text-white" : "text-[#A3ADB2] hover:text-white"
//       }`}
//     >
//       {!active && isHovered && (
//         <motion.div
//           className="absolute inset-y-0 left-0 bg-white/5 rounded-2xl z-0"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{
//             duration: 0.5,
//             ease: "easeOut",
//           }}
//         />
//       )}
//       <span className="relative z-10 tracking-wide">{children}</span>
//     </button>
//   );
// }

"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  onLayout: (rect: DOMRect) => void;
}

export default function TabButton({
  active,
  onClick,
  children,
  onLayout,
}: TabButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (active && ref.current) {
      onLayout(ref.current.getBoundingClientRect());
    }
  }, [active, onLayout]);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`py-1.5 sm:py-2.5 text-xs lg:text-base cursor-pointer ${
        children === "Recommended" ? "w-[40%]" : "w-1/3"
      } font-medium transition-colors relative z-10 overflow-hidden ${
        active ? "text-white" : "text-[#A3ADB2] hover:text-white"
      }`}
    >
      {!active && isHovered && (
        <motion.div
          className="absolute inset-y-0 left-0 bg-white/5 rounded-xl sm:rounded-2xl z-0"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      )}
      <span className="relative z-10 tracking-wide truncate px-1 sm:px-2">
        {children}
      </span>
    </button>
  );
}
