import { useContext } from "react";
import { FilterContext } from "../../App";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";
import UpgradeVideo from "./UpgradeVideo";
import { BLACK } from "../../utils/colours";

export default function UpgradeDetail({ mapRef }) {
  const { selectedUpgrade, selectUpgrade, highlightUpgrade } =
    useContext(FilterContext);
  const { title, id, position, notes, region, routeNames } = selectedUpgrade;

  return (
    selectedUpgrade && (
      <>
        <ZoomToIcon
          onClick={() => mapRef.fitBounds([position, position])}
          onMouseOver={() => highlightUpgrade(id)}
          onMouseOut={() => highlightUpgrade(null)}
        />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "0.5em",
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            color: BLACK,
          }}
        >
          <span
            onMouseOver={() => highlightUpgrade(id)}
            onMouseOut={() => highlightUpgrade(null)}
          >
            {title}
          </span>
        </h2>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "4px",
            marginTop: 0,
            color: BLACK,
          }}
        >
          {routeNames.join(", ")} ({region.name})
        </h4>
        <CloseIcon onClick={() => selectUpgrade(null)} />
        <div style={{ overflow: "auto" }}>
          {notes && (
            <p
              style={{ paddingLeft: "1em", paddingRight: "1em", color: BLACK }}
            >
              {notes}
            </p>
          )}
          <UpgradeVideo upgrade={selectedUpgrade} />
        </div>
      </>
    )
  );
}
