"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (process.env.NODE_ENV === "production" && projectId) {
      const initClarity = () => Clarity.init(projectId);

      if ('requestIdleCallback' in window) {
        requestIdleCallback(initClarity);
      } else {
        setTimeout(initClarity, 3000);
      }
    }
  }, []);

  return null;
}
