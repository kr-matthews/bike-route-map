import L from "leaflet";

const length = (segment) =>
  segment.positions.reduce((accumulator, currPosition, index) => {
    if (index === 0) return 0;

    const prevPosition = segment.positions[index - 1];
    const nextLength = L.latLng(prevPosition).distanceTo(
      L.latLng(currPosition)
    );
    return accumulator + nextLength;
  }, 0);

const isOneWayReqOrRec = (segment) => (segment.oneWay ? 0.5 : 1);

export const sumWeightedLengths = (segments) =>
  segments.reduce(
    (accumulator, segment) =>
      accumulator + isOneWayReqOrRec(segment) * length(segment),
    0
  );
