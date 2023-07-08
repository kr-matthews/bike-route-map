import { VIDEOS } from "../videos";

export const ROUTES = {
  third: {
    name: "3rd",
    legs: [{ videos: { eastbound: VIDEOS.thirdEb, westbound: null } }],
  },
  offBroadway: {
    name: "Off-Broadway",
    legs: [{ videos: { eastbound: null, westbound: VIDEOS.offBroadwayWb } }],
  },
  tenth: {
    name: "10th",
    legs: [
      { videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb } },
    ],
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
  carrall: {
    name: "Carrall",
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: null },
      },
    ],
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
  powell: {
    name: "Powell",
    legs: [{ videos: { eastbound: VIDEOS.powellEb, westbound: null } }],
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
  valley: {
    name: "Valley",
    legs: [{ videos: { northbound: null, southbound: VIDEOS.valleySb } }],
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
  cvg: {
    name: "Central Valley Greenway",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: {} },
    ],
  },
  yukon: {
    name: "Yukon",
    legs: [{ videos: {} }],
  },
  mosaic: {
    name: "Mosaic",
    legs: [{ videos: {} }],
  },
};
