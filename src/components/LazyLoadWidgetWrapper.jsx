import React, { useState, useEffect, useRef } from "react";

const LazyLoadWidgetWrapper = ({ children, height = "400px" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        {
          root: null,
          rootMargin: "200px", // Load when 200px from the viewport
          threshold: 0,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    } else {
      // Fallback for older browsers
      setIsLoaded(true);
    }
  }, []);

  const skeletonStyles = {
    height: height,
    width: "100%",
  };

  return (
    <div ref={containerRef}>
      {!isLoaded && (
        <div className="animate-pulse bg-[var(--color-bg-subtle)] rounded-lg" style={skeletonStyles}></div>
      )}
      {isLoaded && children}
    </div>
  );
};

export default LazyLoadWidgetWrapper;