import { useState } from "react";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";
import Legend from "./Legend";

// !!! move styling to css files
export default function Preview({ mapRef }) {
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
