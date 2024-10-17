import React, { useEffect, useState } from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
} from "react-icon-cloud";

const useIcons = (slugs) => {
  const [icons, setIcons] = useState();
  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 100,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

function SkillCloud({ slugs }) {
  const icons = useIcons(slugs);

  return (
    <div style={{ position: "relative" }}>
      <Cloud>{icons}</Cloud>
      <div
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            fontSize: "24px",
            fontWeight: "bold",
            mixBlendMode: "difference", 
            color: "purple", 
          }}
      >
        Explore
      </div>
    </div>
  );
}

export default SkillCloud;
