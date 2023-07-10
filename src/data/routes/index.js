import { VIDEOS } from "../videos";

// !! add routes for existing videos
// !! add missing un-named segments for existing routes

export const ROUTES = {
  third: {
    name: "3rd",
    legs: [{ videos: { eastbound: VIDEOS.thirdEb, westbound: null } }],
  },
  tenth: {
    name: "10th",
    legs: [
      { videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb } },
    ],
  },
  twentyNinth: {
    name: "29th",
    legs: [{ videos: {} }],
  },
  alexander: {
    name: "Alexander",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.alexanderEb,
          westbound: null,
        },
      },
    ],
  },
  cambieBridge: {
    name: "Cambie Bridge",
    legs: [
      {
        videos: {
          northbound: VIDEOS.cambieBridgeSmithNb,
          southbound: VIDEOS.cambieBridgeNelsonSb,
        },
      },
    ],
  },
  carrall: {
    name: "Carrall",
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: null },
      },
    ],
  },
  cvg: {
    name: "Central Valley Greenway",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: {} },
    ],
  },
  haro: {
    name: "Haro",
    legs: [{ videos: { westbound: VIDEOS.haroWb } }],
  },
  hillcrest: {
    name: "Hillcrest",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.hillcrestEb,
          westbound: VIDEOS.hillcrestWb,
        },
      },
    ],
  },
  lionsGate: {
    name: "Lions Gate Bridge",
    legs: [
      {
        videos: {
          northbound: VIDEOS.lionsGateBridgeNb,
          southbound: VIDEOS.lionsGateBridgeSb,
        },
      },
    ],
  },
  masumiMitsui: {
    name: "Masumi Mitsui Greenway",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.masumiMitsuiEb,
          westbound: null,
        },
      },
    ],
  },
  midtown: {
    name: "Midtown",
    legs: [
      {
        name: "Vancouver",
        videos: {
          eastbound: VIDEOS.midtownVancouverEb,
          westbound: null,
        },
      },
      {
        name: "Burnaby",
        videos: {
          eastbound: null,
          westbound: null,
        },
      },
    ],
  },
  mosaic: {
    name: "Mosaic",
    legs: [{ videos: {} }],
  },
  offBroadway: {
    name: "Off-Broadway",
    legs: [{ videos: { eastbound: null, westbound: VIDEOS.offBroadwayWb } }],
  },
  powell: {
    name: "Powell",
    legs: [{ videos: { eastbound: VIDEOS.powellEb, westbound: null } }],
  },
  smithe: {
    name: "Smithe",
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmithNb } }],
  },
  valley: {
    name: "Valley",
    legs: [{ videos: { northbound: null, southbound: VIDEOS.valleySb } }],
  },
  yukon: {
    name: "Yukon",
    legs: [{ videos: {} }],
  },
};
