import { VIDEOS } from "../videos";

// !! add missing un-named segments for existing routes
// TODO: separate by city? add cities: [...] property?
// TODO: add remaining Vancouver routes (the confusing ones, like seaside (bypass)...)

export const ROUTES = {
  // ? are these legs of seaside bypass?
  third: {
    name: "3rd",
    legs: [{ videos: { eastbound: VIDEOS.thirdEb, westbound: null } }],
  },
  fourth: {
    name: "4th",
    legs: [{ videos: { eastbound: VIDEOS.fourthEb } }],
  },
  tenth: {
    name: "10th",
    legs: [
      { videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb } },
    ],
  },
  fourteenth: {
    name: "14th",
    legs: [],
  },
  twentySecond: {
    name: "22nd",
    legs: [{ videos: { westbound: VIDEOS.twentySecondEb } }],
  },
  twentyNinth: {
    name: "29th",
    legs: [{ videos: {} }],
  },
  fortyFifth: {
    name: "45th",
    legs: [],
  },
  sixtySeventh: {
    name: "67th",
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  adanac: {
    name: "Adanac",
    legs: [],
  },
  alberni: {
    name: "Alberni",
    legs: [],
  },
  alder: {
    name: "Alder",
    legs: [],
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
  arbutus: {
    name: "Arbutus Greenway",
    legs: [],
  },
  balaclava: {
    name: "Balaclava",
    legs: [],
  },
  bcParkway: {
    name: "BC Parkway",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: { eastbound: VIDEOS.bcParkwayBurnabyEb } },
      { name: "New Westminster", videos: {} },
      { name: "Surrey", videos: {} },
    ],
  },
  beatty: {
    name: "Beatty",
    legs: [],
  },
  blanca: {
    name: "Blanca",
    legs: [],
  },
  burnaby: {
    name: "Burnaby",
    legs: [],
  },
  burrard: {
    name: "Burrard",
    legs: [],
  },
  bute: {
    name: "Bute",
    legs: [],
  },
  cambie: {
    name: "Cambie",
    legs: [
      {
        name: "Marine Drive Station Separated Path",
        videos: { northbound: VIDEOS.cambieSeparatedNb },
      },
      { name: "On-Street", videos: {} },
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
  cardero: {
    name: "Cardero",
    legs: [],
  },
  carrall: {
    name: "Carrall",
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: null },
      },
    ],
  },
  cassiar: {
    name: "Cassiar",
    legs: [],
  },
  chilco: {
    name: "Chilco",
    legs: [],
  },
  columbia: {
    name: "Columbia",
    legs: [],
  },
  comoxHelmcken: {
    name: "Comox Helmcken",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.comoxHelmckenEb,
          westbound: VIDEOS.comoxHelmckenWb,
        },
      },
    ],
  },
  cvg: {
    name: "Central Valley Greenway",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  cypress: {
    name: "Cypress",
    legs: [],
  },
  dumfries: {
    name: "Dumfries",
    legs: [],
  },
  dunbar: {
    name: "Dunbar",
    legs: [],
  },
  dunsmuir: {
    name: "Dunsmuir",
    legs: [],
  },
  gardenCity: {
    name: "Garden City",
    legs: [
      {
        videos: {
          northbound: VIDEOS.gardenCityNb,
          southbound: VIDEOS.gardenCitySb,
        },
      },
    ],
  },
  gladstone: {
    name: "Gladstone",
    legs: [],
  },
  haro: {
    name: "Haro",
    legs: [{ videos: { westbound: VIDEOS.haroWb } }],
  },
  heather: {
    name: "Heather",
    legs: [],
  },
  highbury: {
    name: "Highbury",
    legs: [],
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
  hornby: {
    name: "Hornby",
    legs: [],
  },
  inverness: {
    name: "Inverness",
    legs: [],
  },
  keefer: {
    name: "Keefer",
    legs: [],
  },
  kent: {
    name: "Kent",
    legs: [],
  },
  kerr: {
    name: "Kerr",
    legs: [],
  },
  killarney: {
    name: "Killarney",
    legs: [],
  },
  kingEdward: {
    name: "King Edward",
    legs: [],
  },
  lakewood: {
    name: "Lakewood",
    legs: [],
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
    name: "Masumi Mitsui Greenway (57th)",
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
  nanaimo: {
    name: "Nanaimo",
    legs: [],
  },
  nelson: {
    name: "Nelson",
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
  },
  northArmBridge: {
    name: "North Arm Bridge (Canada Line Bridge)",
    legs: [
      {
        videos: {
          northbound: VIDEOS.northArmBridgeNb,
          southbound: VIDEOS.northArmBridgeSb,
        },
      },
    ],
  },
  offBroadway: {
    name: "Off-Broadway",
    legs: [{ videos: { eastbound: null, westbound: VIDEOS.offBroadwayWb } }],
  },
  ontario: {
    name: "Ontario",
    legs: [],
  },
  pandora: {
    name: "Pandora",
    legs: [{ videos: { eastbound: VIDEOS.pandoraEb } }],
  },
  powell: {
    name: "Powell",
    legs: [{ videos: { eastbound: VIDEOS.powellEb, westbound: null } }],
  },
  princeEdward: {
    name: "Prince Edward",
    legs: [],
  },
  richards: {
    name: "Richards",
    legs: [],
  },
  ridgeway: {
    name: "Ridgeway",
    legs: [],
  },
  rupert: {
    name: "Rupert",
    legs: [],
  },
  smithe: {
    name: "Smithe",
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmithNb } }],
  },
  sunrise: {
    name: "Sunrise",
    legs: [],
  },
  valley: {
    name: "Valley",
    legs: [{ videos: { northbound: null, southbound: VIDEOS.valleySb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    legs: [],
  },
  windermere: {
    name: "Windermere",
    legs: [],
  },
  windsor: {
    name: "Windsor",
    legs: [],
  },
  yukon: {
    name: "Yukon",
    legs: [{ videos: {} }],
  },
};
