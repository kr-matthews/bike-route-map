import { VIEWS } from "./Sidebar";
import PanelIcon from "../icons/PanelIcon";

export default function Panel({ name, title, navigateTo, children }) {
  return (
    <div
      style={{
        paddingLeft: "1em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <h2 style={{ paddingLeft: 15 }}>{title ?? name}</h2>
      <span
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        {Object.values(VIEWS).map((view) => (
          <span key={view.key} style={{ marginLeft: "5px" }}>
            <PanelIcon
              view={view}
              navigateTo={navigateTo}
              isSelected={view.name === name}
            />
          </span>
        ))}
      </span>
      {children}
    </div>
  );
}
