import { useContext } from "react";
import { DemoContext } from "../../App";
import Panel from "./Panel";

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
      </div>
    </Panel>
  );
}
