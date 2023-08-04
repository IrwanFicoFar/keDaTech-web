"use client";

import React, { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

export const AnimationCloudImage = ({
  direction,
  children,
  duration = 2,
}: {
  direction: string;
  children: ReactNode;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView
            ? "none"
            : direction === "left"
            ? "translateX(-100%)"
            : direction === "top"
            ? "translateY(-100%)"
            : direction === "bottom"
            ? "translateY(100%)"
            : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transitionDelay: "revert-layer",
          transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
