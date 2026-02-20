import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Clock,
  Package,
  Wrench,
  Code,
  Globe,
  Cloud,
} from "lucide-react";

const badges = [
  { icon: Workflow, text: "WORKFLOW-READY" },
  { icon: Clock,    text: "REAL-TIME INTELLIGENCE" },
  { icon: Package,  text: "MULTI-INDUSTRY-FIT" },
  { icon: Wrench,   text: "CUSTOMIZABLE OUTPUTS" },
  { icon: Code,     text: "API-DRIVEN" },
  { icon: Globe,    text: "LOCALIZATION-READY" },
  { icon: Cloud,    text: "HYBRID DEPLOYMENT" },
];

const duplicatedBadges = [...badges, ...badges];

const InfiniteCarousel = () => {
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 640 ? 15 : 30);
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden pt-16 py-4">

      {/* Gradient fade — left */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 
        bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />

      {/* Gradient fade — right */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 
        bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />

      {/* Animated carousel */}
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {duplicatedBadges.map((badge, index) => (
          <div
            key={`${badge.text}-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 
              rounded-full border border-zinc-800 backdrop-blur-sm 
              whitespace-nowrap shrink-0"
          >
            <badge.icon className="w-5 h-5 text-white" strokeWidth={2} />
            <span className="text-sm font-medium tracking-wide text-white uppercase">
              {badge.text}
            </span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default InfiniteCarousel;