import { BIKE_ROUTE_DATA } from "../../data";

const eastWest = BIKE_ROUTE_DATA.filter((route) =>
  route.legs.some((leg) =>
    ["eastbound", "westbound"].some(
      (direction) => leg.videos[direction] !== undefined
    )
  )
);
const northSouth = BIKE_ROUTE_DATA.filter((route) =>
  route.legs.some((leg) =>
    ["eastbound", "westbound"].some(
      (direction) => leg.videos[direction] !== undefined
    )
  )
);

export default function Preview() {
  return (
    <div>
      East-West Routes:
      {eastWest.map((route) => (
        <div key={route.name}>
          {route.legs.length === 1
            ? route.name
            : `${route.name}: ${route.legs.map((leg) => leg.name).join(", ")}`}
        </div>
      ))}
      <br />
      North-South Routes:
      {northSouth.map((route) => (
        <div key={route.name}>
          {route.legs.length === 1
            ? route.name
            : `${route.name}: ${route.legs.map((leg) => leg.name).join(", ")}`}
        </div>
      ))}
    </div>
  );
}
