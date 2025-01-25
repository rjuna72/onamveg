export const gtag = (...args: any[]) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag(...args);
    }
  };
  