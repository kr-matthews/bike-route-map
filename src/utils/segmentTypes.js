import {
  COLOUR_COMFORTABLE,
  COLOUR_COMFORTABLE_ONE_WAY,
  COLOUR_ELEVATED_BORDER,
  COLOUR_OTHER,
  COLOUR_OTHER_ONE_WAY,
  COLOUR_PAINTED_ONE_WAY,
  COLOUR_QUIET,
  COLOUR_QUIET_ONE_WAY,
  COLOUR_SHARED,
  COLOUR_SHARED_ONE_WAY,
  COLOUR_SHOULDER_ONE_WAY,
  COLOUR_UNDERGROUND_BORDER,
} from "./constants";

// ? should probably just be a class?

export const TYPE_TYPES = [
  {
    key: "comfortable",
    name: "Separated",
    colour: COLOUR_COMFORTABLE,
    oneWayColour: COLOUR_COMFORTABLE_ONE_WAY,
    description:
      "Physically separated from traffic (except at intersections of course): dedicated lane or protected path (possibly mixed with pedestrians).",
  },
  {
    key: "quiet",
    name: "Quiet Street",
    colour: COLOUR_QUIET,
    oneWayColour: COLOUR_QUIET_ONE_WAY,
    description:
      'Quiet, local street. What is "quiet" is subjective; some quiet streets may get busier at certain times of day.',
  },
  {
    key: "painted",
    name: "Painted Lane",
    oneWayColour: COLOUR_PAINTED_ONE_WAY,
    description:
      "Painted lane beside high-volume and/or high-speed traffic without significant physical protection. May or may not be directly beside parked cars.",
  },
  {
    key: "shared",
    name: "Shared Lane",
    colour: COLOUR_SHARED,
    oneWayColour: COLOUR_SHARED_ONE_WAY,
    description: "Shared lane with high-volume and/or high-speed traffic.",
  },
  {
    key: "shoulder",
    name: "Highway Shoulder",
    oneWayColour: COLOUR_SHOULDER_ONE_WAY,
    description: "Unprotected shoulder beside very high-speed traffic.",
  },
  {
    key: "other",
    name: "Narrow Sidewalk or Rough Trail",
    colour: COLOUR_OTHER,
    oneWayColour: COLOUR_OTHER_ONE_WAY,
    description:
      "Separated from traffic but poor quality, such as a narrow sidewalk shared with pedestrians or a rough trail.",
  },
];

const comfortableTypes = [
  "dedicated",
  "combined",
  "mixed",
  "comfortable", // a mix of the above
  undefined, // catch-all (mostly for legacy reasons)
];

export const getType = (key) => TYPE_TYPES.find((t) => t.key === key);

export const normalizeType = (type) =>
  comfortableTypes.includes(type) ? "comfortable" : type;

const alwaysOneWayTypes = ["painted", "shoulder"];

export const isAlwaysOneWay = (typeObject) =>
  alwaysOneWayTypes.includes(typeObject.key);

export const DIRECTION_TYPES = [
  {
    key: undefined, // hm...
    name: "Two-way",
    description: "Travel is allowed in either direction.",
  },
  {
    key: "recommended",
    name: "One-way Recommended",
    description:
      "Both directions of travel are allowed, but typically only one is useful. Directional arrows only appear when sufficiently zoomed in.",
  },
  {
    key: "required",
    name: "One-way",
    description:
      "Only one direction of travel is allowed. A lighter colour. Directional arrows only appear when sufficiently zoomed in.",
  },
];

export const getDirection = (key) => DIRECTION_TYPES.find((d) => d.key === key);

export const isOneWay = (directionObject) => directionObject.key === "required";

export const ELEVATION_TYPES = [
  {
    key: 1,
    name: "Elevated",
    colour: COLOUR_ELEVATED_BORDER,
    description:
      "Bridge or other elevated surface. You can't directly connect to/from the roads/paths below.",
  },
  {
    key: 0,
    name: "Surface Level",
    description: "",
  },
  {
    key: -1,
    name: "Underground/ Covered",
    colour: COLOUR_UNDERGROUND_BORDER,
    description:
      "A tunnel or other covered area. You can't directly connect to/from the roads/paths above.",
  },
];

export const getElevation = (key) => ELEVATION_TYPES.find((e) => e.key === key);

export const normalizeElevation = (elevation) =>
  elevation <= -1 ? -1 : elevation >= 1 ? 1 : 0;
