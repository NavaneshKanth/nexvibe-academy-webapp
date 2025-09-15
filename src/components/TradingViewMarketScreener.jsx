import React, { useEffect, useRef, memo } from "react";

function TradingViewMarketScreener() {
  const container = useRef();

  useEffect(() => {
    // Check if the script has already been added to avoid duplicates
    if (container.current.querySelector('script')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "600",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "forex",
        "showToolbar": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en"
      }`;
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewMarketScreener);