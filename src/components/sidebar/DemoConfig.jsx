import { useContext } from "react";
import { DemoContext } from "../../App";
import Panel from "./Panel";
import { ROUTES } from "../../data/routes";

export default function DemoConfig({ navigateTo, demoPanel }) {
  const closeAndNavigateTo = (view) => {
    demoPanel.setIsActive(false);
    navigateTo(view);
  };

  const demo = useContext(DemoContext);

  return (
    <Panel name="Demo Panel" navigateTo={closeAndNavigateTo}>
      <div
        style={{ overflowY: "scroll", overflow: "auto", paddingRight: "1em" }}
      >
        <button onClick={demo.resetAnimation}>Reset</button>
        <button onClick={demo.startAnimation}>Start</button>
        <br />
        <select onChange={(e) => demo.setRoute(e.target.value)}>
          <option value={null}>
            <em>No route selected</em>
          </option>
          {Object.values(ROUTES).map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </Panel>
  );
}
