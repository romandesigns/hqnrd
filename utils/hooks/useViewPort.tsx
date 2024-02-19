"use client";

import { useState, useEffect } from "react";

function useViewportDimensions() {
  const [viewportDimensions, setViewportDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Function to update viewport dimensions
    function handleResize() {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once

  return viewportDimensions;
}

export default useViewportDimensions;
