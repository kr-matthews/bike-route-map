import { VIEWS } from "../sidebar/Sidebar";
import routesIcon from "../../images/routes.svg";
import routesSelectedIcon from "../../images/routesDark.svg";
import upgradesIcon from "../../images/upgrade.svg";
import upgradesSelectedIcon from "../../images/upgradeDark.svg";
import aboutIcon from "../../images/info.svg";
import aboutSelectedIcon from "../../images/infoDark.svg";
import legendIcon from "../../images/question.svg";
import legendSelectedIcon from "../../images/questionDark.svg";
import filtersIcon from "../../images/filter.svg";
import filtersSelectedIcon from "../../images/filterDark.svg";
import settingsIcon from "../../images/cog.svg";
import settingsSelectedIcon from "../../images/cogDark.svg";

export default function PanelIcon({ view, navigateTo, isSelected }) {
  return (
    <span
      style={{
        cursor: isSelected ? undefined : "pointer",
      }}
      title={view.name}
      onClick={isSelected ? undefined : () => navigateTo(view)}
    >
      <img
        src={getSrc(view, isSelected)}
        alt={view.name}
        style={{ height: "1.75em" }}
      />
    </span>
  );
}

const getSrc = (view, isSelected) => {
  switch (view.key) {
    case VIEWS.routes.key:
      return isSelected ? routesSelectedIcon : routesIcon;

    case VIEWS.upgrades.key:
      return isSelected ? upgradesSelectedIcon : upgradesIcon;

    case VIEWS.about.key:
      return isSelected ? aboutSelectedIcon : aboutIcon;

    case VIEWS.legend.key:
      return isSelected ? legendSelectedIcon : legendIcon;

    case VIEWS.filters.key:
      return isSelected ? filtersSelectedIcon : filtersIcon;

    case VIEWS.settings.key:
      return isSelected ? settingsSelectedIcon : settingsIcon;

    default:
      return isSelected ? legendSelectedIcon : legendIcon;
  }
};
