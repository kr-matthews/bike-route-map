import Leg from "./Leg";

export default function Route({ route }) {
  return route.legs.map((leg) => (
    <Leg key={route.name + leg.name} leg={leg} route={route} />
  ));
}
