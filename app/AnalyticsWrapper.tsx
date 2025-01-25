"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { gtag } from "./gtag"; // Adjust the path to your utility file

const GA_TRACKING_ID = "G-3ZRB8V2X38";

export default function AnalyticsWrapper() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}
