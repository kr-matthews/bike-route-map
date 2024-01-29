import { VIEWS } from "../sidebar/Sidebar";
import aboutIcon from "../../images/info.svg";
import legendIcon from "../../images/question.svg";
import filtersIcon from "../../images/filter.svg";

export default function PanelIcon({ view, navigateTo }) {
  return (
    <span
      style={{
        cursor: "pointer",
      }}
      title={view.name}
      onClick={() => navigateTo(view)}
    >
      <img src={getSrc(view)} alt={view.key} style={{ height: "1.75em" }} />
    </span>
  );
}

const getSrc = (view) => {
  switch (view.key) {
    case VIEWS.about.key:
      return aboutIcon;

    case VIEWS.legend.key:
      return legendIcon;

    case VIEWS.filters.key:
      return filtersIcon;

    default:
      return legendIcon;
  }
};
