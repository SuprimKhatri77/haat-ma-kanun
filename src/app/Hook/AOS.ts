"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS(options?: AOS.AosOptions) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      ...options, // allow custom overrides
    });
  }, []);
}
