import Map from "./components/map/Map";
import Preview from "./components/preview/Preview";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Map />
      <Preview />
    </div>
  );
}
