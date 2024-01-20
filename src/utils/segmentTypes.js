import {
  COLOUR_COMFORTABLE,
  COLOUR_COMFORTABLE_ONE_WAY,
  COLOUR_ELEVATED_BORDER,
  COLOUR_OTHER,
  COLOUR_PAINTED_ONE_WAY,
  COLOUR_SHARED,
  COLOUR_SHOULDER_ONE_WAY,
  COLOUR_UNDERGROUND_BORDER,
} from "./constants";

export const TYPE_TYPES = [
  {
    name: "Comfortable",
    dispatchKey: "showComfortable",
    colour: COLOUR_COMFORTABLE,
    description:
      "Local street, dedicated/protected lane/path, or mixed with pedestrians.",
    props: { type: "comfortable" },
  },
  {
    name: "Painted Lane",
    dispatchKey: "showPainted",
    colour: COLOUR_PAINTED_ONE_WAY,
    description:
      "Painted lane beside high-volume and/or high-speed traffic without significant physical protection. May or may not be directly beside parked cars.",
    props: { type: "painted" },
  },
  {
    name: "Shared Lane",
    dispatchKey: "showShared",
    colour: COLOUR_SHARED,
    description: "Shared lane with high-volume and/or high-speed traffic.",
    props: { type: "shared" },
  },
  {
    name: "Highway Shoulder",
    dispatchKey: "showShoulder",
    colour: COLOUR_SHOULDER_ONE_WAY,
    description: "Unprotected shoulder beside very high-speed traffic.",
    props: { type: "shoulder" },
  },
  {
    name: "Other",
    dispatchKey: "showOther",
    colour: COLOUR_OTHER,
    description:
      "Separated from traffic but poor quality, such as a narrow sidewalk shared with pedestrians or a rough trail.",
    props: { type: "other" },
  },
];

const alwaysOneWayTypes = ["painted", "shoulder"];

export const isAlwaysOneWay = (typeObject) =>
  alwaysOneWayTypes.includes(typeObject.props.type);

export const DIRECTION_TYPES = [
  {
    name: "Two-way",
    colour: COLOUR_COMFORTABLE,
    description: "Travel is allowed in either direction.",
    props: { oneWay: undefined },
  },
  {
    name: "One-way Recommended",
    colour: COLOUR_COMFORTABLE,
    description:
      "Both directions of travel are allowed, but typically only one is useful. Directional arrows only appear when sufficiently zoomed in.",
    props: { oneWay: "recommended" },
  },
  {
    name: "One-way",
    colour: COLOUR_COMFORTABLE_ONE_WAY,
    description:
      "Only one direction of travel is allowed. A lighter colour. Directional arrows only appear when sufficiently zoomed in.",
    props: { oneWay: "required" },
  },
];

export const isOneWay = (directionObject) =>
  directionObject.props.oneWay === "required";

export const ELEVATION_TYPES = [
  {
    name: "Elevated",
    colour: COLOUR_ELEVATED_BORDER,
    description:
      "Bridge or other elevated surface. You can't directly connect to/from the roads/paths below.",
    props: { elevation: 1 },
  },
  {
    name: "Surface Level",
    description: "",
    props: { elevation: 0 },
  },
  {
    name: "Underground/ Covered",
    colour: COLOUR_UNDERGROUND_BORDER,
    description:
      "A tunnel or other covered area. You can't directly connect to/from the roads/paths above.",
    props: { elevation: -1 },
  },
];

// export const TODO_TYPES = [
//   {
//     name: "Closed",
//     colour: COLOUR_CLOSED,
//     description: "For long-term construction or other reasons.",
//     props: { isClosed: true },
//   },
// ];
