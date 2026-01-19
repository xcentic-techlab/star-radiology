import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["#0EA5E9", "#6366F1", "#22C55E", "#F97316", "#EC4899"];


export default function CircularBenefits({ benefits }) {
  const [active, setActive] = useState(0);

  const size = 400;
  const radius = 170;
  const center = size / 2;
  const stepAngle = 360 / benefits.length;

  return (
 <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-8 pb-10">

      <div className="relative flex justify-center lg:justify-start lg:-ml-30">


        <div className="relative" style={{ width: size, height: size }}>

<svg
  width={size}
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  className="rotate-[-90deg]"
  style={{
    backgroundColor: "transparent",
    overflow: "visible",
    filter: "none",
  }}
>
  <rect width="100%" height="100%" fill="transparent" />

  {benefits.map((_, index) => {
    const startAngle = index * stepAngle;
    const gap = 20;
    const endAngle = startAngle + stepAngle - gap;
    const color = COLORS[index];
    const isActive = index === active;

    const polarToCartesian = (angle) => {
      const rad = (angle * Math.PI) / 180;
      return {
        x: center + radius * Math.cos(rad),
        y: center + radius * Math.sin(rad),
      };
    };

    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArcFlag = stepAngle > 180 ? 1 : 0;

    return (
      <motion.path
        key={index}
        d={`M ${start.x} ${start.y} 
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`}
        stroke={isActive ? color : "#E5E7EB"}
        strokeWidth={40}
        fill="none"
        strokeLinecap="round"
        style={{
          transition: "stroke 0.4s ease, filter 0.4s ease",
          filter: isActive
            ? `drop-shadow(0 0 14px ${color}88)`
            : "none",
        }}
      />
    );
  })}
</svg>
          <div className="absolute inset-20 rounded-full bg-white shadow-lg flex flex-col items-center justify-center">
            <span className="text-xs text-slate-500">KEY BENEFITS</span>
            <span className="text-xl font-semibold text-slate-900">
              {active + 1} / {benefits.length}
            </span>
          </div>
        </div>
      </div>


      <div className="relative space-y-6">

       {benefits.map((item, index) => {
  const isActive = index === active;
  const color = COLORS[index];

  const getPath = () => {
    if (index === 0 || index === 1) {
      return "M10 60 C 90 5, 170 5, 250 60";
    }

    if (index === 2) {
      return "M10 60 L250 60";
    }


    return "M10 60 C 90 115, 170 115, 250 60";
  };

  return (
    
    <motion.div
      key={index}
      onMouseEnter={() => setActive(index)}
       onClick={() => setActive(index)}
      className="relative cursor-pointer flex items-center gap-6"
    >

      <svg
        className="absolute -left-[260px] top-1/2 -translate-y-1/2 pointer-events-none"
        width="260"
        height="120"
        viewBox="0 0 260 120"
      >
        {/* Line */}
        <motion.path
          d={getPath()}
          fill="none"
          stroke={isActive ? color : "#E5E7EB"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={{
            pathLength: isActive ? 1 : 0.35,
            opacity: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
        <circle
          cx="10"
          cy="60"
          r="4"
          fill={isActive ? color : "#CBD5E1"}
        />
        <circle
          cx="250"
          cy="60"
          r="4"
          fill={isActive ? color : "#CBD5E1"}
        />
      </svg>
      <motion.div
        animate={{
          boxShadow: isActive
            ? `0 0 0 2px ${color}55, 0 18px 40px ${color}40`
            : "0 10px 25px rgba(0,0,0,0.06)",
          borderColor: isActive ? color : "#E5E7EB",
          scale: isActive ? 1.03 : 1,
        }}
        transition={{ duration: 0.35 }}
        className="flex-1 rounded-xl border bg-white p-5 relative"
      >
        <div className="flex gap-4 items-start">

          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-white shrink-0"
            style={{
              backgroundColor: isActive ? color : "#CBD5E1",
              transition: "0.3s",
            }}
          >
            {index + 1}
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">
              {item.title}
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              {item.desc}
            </p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
})}

      </div>
    </div>
  );
}
