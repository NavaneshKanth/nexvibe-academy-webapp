import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      // Check if the script has already been added to avoid duplicates
      if (container.current.querySelector('script')) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "OANDA:XAUUSD",
              "title": "Gold to USD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en",
          "showSymbolLogo": true,
          "largeChartUrl": ""
        }
      `;
      container.current.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        if (container.current && container.current.contains(script)) {
          container.current.removeChild(script);
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* The copyright div has been removed */}
    </div>
  );
}

export default memo(TradingViewWidget);