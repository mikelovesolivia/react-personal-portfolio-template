import React, { useEffect, useRef } from "react";

const VisitorMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//rf.revolvermaps.com/0/0/8.js?i=5i2a08saqti&m=0&c=ff0000&cr1=ffffff&f=arial&l=33";
    script.async = true;

    if (mapContainer.current) {
      mapContainer.current.appendChild(script);
    }

    return () => {
      if (mapContainer.current) {
        mapContainer.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={mapContainer} style={{ width: "25%" }}></div>;
};

export default VisitorMap;
