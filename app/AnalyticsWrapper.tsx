"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-3ZRB8V2X38"; // Replace with your Google Analytics ID

export default function AnalyticsWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
