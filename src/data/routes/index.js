import { VIDEOS } from "../videos";

// !! add remaining Vancouver routes (the confusing ones, like seaside (bypass)...)

export const ROUTES = {
  // ? are these legs of seaside bypass?
  third: {
    name: "3rd",
    legs: [{ videos: { eastbound: VIDEOS.thirdEb } }],
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
    legs: [],
  },
  fortyFifth: {
    name: "45th",
    legs: [{ videos: { westbound: VIDEOS.fortyFifthWb } }],
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
    legs: [{ videos: { eastbound: VIDEOS.alexanderEb } }],
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
      { name: "Vancouver", videos: { eastbound: VIDEOS.bcParkwayVancouverEb } },
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
  canadaLine: {
    name: "Canada Line Path",
    // !!! CLP: replace videos, remove legs
    legs: [
      { name: "Richmond", videos: {} },
      {
        name: "North Arm Bridge",
        videos: {
          northbound: VIDEOS.northArmBridgeNb,
          southbound: VIDEOS.northArmBridgeSb,
        },
      },
      {
        name: "Vancouver",
        videos: {
          northbound: VIDEOS.cambieSeparatedNb,
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
        videos: { northbound: VIDEOS.carrallNb },
      },
    ],
  },
  cassiar: {
    name: "Cassiar",
    legs: [],
  },
  cvg: {
    name: "Central Valley Greenway",
    shortName: "Central Valley G.",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  chilco: {
    name: "Chilco",
    legs: [{ videos: { southbound: VIDEOS.chilcoSb } }],
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
    legs: [{ videos: { northbound: VIDEOS.dunbarNb } }],
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
    legs: [{ videos: { northbound: VIDEOS.highburyNb } }],
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
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
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
    shortName: "Masumi Mitsui G.",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.masumiMitsuiEb,
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
        },
      },
      {
        name: "Burnaby",
        videos: {},
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
  nicola: {
    name: "Nicola",
    legs: [{ videos: { northbound: VIDEOS.nicolaNb } }],
  },
  offBroadway: {
    name: "Off-Broadway",
    legs: [{ videos: { westbound: VIDEOS.offBroadwayWb } }],
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
    legs: [{ videos: { eastbound: VIDEOS.powellEb } }],
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
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
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
  york: {
    name: "York",
    legs: [{ videos: { eastbound: VIDEOS.yorkEb } }],
  },
  yukon: {
    name: "Yukon",
    legs: [],
  },
};
