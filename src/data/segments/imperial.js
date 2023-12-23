import { DISCOVER_15TH, IMPERIAL_16TH, IMPERIAL_29TH } from "../intersections";

export const IMPERIAL = [
  {
    description: "imperial",
    type: "shared",
    positions: [
      IMPERIAL_29TH,
      [49.24943, -123.20478],
      [49.24983, -123.20377],
      [49.2504, -123.20283],
      [49.25112, -123.20207],
      [49.25189, -123.20156],
      [49.25275, -123.20134],
      [49.25362, -123.20142],
      [49.25435, -123.20171],
      [49.25653, -123.20294],
      [49.25741, -123.2032],
      IMPERIAL_16TH,
    ],
  },
  {
    description: "connection to ridgeway",
    type: "quiet",
    positions: [IMPERIAL_16TH, DISCOVER_15TH],
  },
];
