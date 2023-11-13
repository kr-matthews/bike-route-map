import { useState } from "react";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";
import Legend from "./Legend";

// !! move styling to css files
// !! add wrapper component with drop-down to select child: Preview, Legend, etc

export default function Sidebar({ mapRef }) {
  const [isLegendVisible, setIsLegendVisible] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "625px",
        // required to hide animation bug when transitioning height
        overflow: "hidden",
        backgroundColor: "AliceBlue",
      }}
    >
      {isLegendVisible ? (
        <Legend hide={() => setIsLegendVisible(false)} />
      ) : (
        <>
          <Routes showLegend={() => setIsLegendVisible(true)} />
          <SelectedRoute mapRef={mapRef} />
        </>
      )}
    </div>
  );
}
