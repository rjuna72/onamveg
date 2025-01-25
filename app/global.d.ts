/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
      gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
    }
  }
  
  export {};
  