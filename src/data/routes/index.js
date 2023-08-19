import { VIDEOS } from "../videos";

export const ROUTES = {
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
    legs: [{ videos: { westbound: VIDEOS.fourteenthWb } }],
  },
  sixteenth: {
    name: "16th",
    legs: [{ videos: {} }],
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
    legs: [{ videos: { westbound: VIDEOS.fortyFifthWb } }],
  },
  sixtySeventh: {
    name: "67th",
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  adanac: {
    name: "Adanac",
    legs: [{ videos: {} }],
  },
  alberni: {
    name: "Alberni",
    legs: [{ videos: {} }],
  },
  alder: {
    name: "Alder",
    legs: [{ videos: { northbound: VIDEOS.alderNb } }],
  },
  alexander: {
    name: "Alexander",
    legs: [{ videos: { eastbound: VIDEOS.alexanderEb } }],
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    legs: [{ videos: {} }],
  },
  arthurLaingBridge: {
    name: "Arthur Laing Bridge",
    // shortName: "Arthur Laing B.",
    legs: [{ videos: {} }],
  },
  balaclava: {
    name: "Balaclava",
    legs: [{ videos: {} }],
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
    legs: [{ videos: {} }],
  },
  blanca: {
    name: "Blanca",
    legs: [{ videos: {} }],
  },
  burnaby: {
    name: "Burnaby",
    legs: [{ videos: {} }],
  },
  burrard: {
    name: "Burrard",
    legs: [{ videos: { northbound: VIDEOS.burrardNb } }],
  },
  bute: {
    name: "Bute",
    legs: [{ videos: {} }],
  },
  cambie: {
    name: "Cambie",
    legs: [{ videos: {} }],
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
        videos: { northbound: VIDEOS.cambieSeparatedNb },
      },
    ],
  },
  cardero: {
    name: "Cardero",
    legs: [{ videos: {} }],
  },
  carrall: {
    name: "Carrall",
    legs: [{ videos: { northbound: VIDEOS.carrallNb } }],
  },
  cassiar: {
    name: "Cassiar",
    legs: [{ videos: {} }],
  },
  cvg: {
    name: "Central Valley Greenway",
    shortName: "Central Valley Gr.",
    legs: [
      { name: "Vancouver", videos: {} },
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  chancellor: {
    name: "Chancellor",
    legs: [{ videos: {} }],
  },
  chilco: {
    name: "Chilco",
    legs: [{ videos: { southbound: VIDEOS.chilcoSb } }],
  },
  columbia: {
    name: "Columbia",
    legs: [{ videos: {} }],
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
    legs: [{ videos: {} }],
  },
  dumfries: {
    name: "Dumfries",
    legs: [{ videos: {} }],
  },
  dunbar: {
    name: "Dunbar",
    legs: [{ videos: { northbound: VIDEOS.dunbarNb } }],
  },
  dunsmuir: {
    name: "Dunsmuir",
    legs: [{ videos: {} }],
  },
  francesUnion: {
    name: "Frances Union",
    legs: [{ videos: {} }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    legs: [{ videos: {} }],
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
    legs: [{ videos: { northbound: VIDEOS.gladstoneNb } }],
  },
  haro: {
    name: "Haro",
    legs: [{ videos: { westbound: VIDEOS.haroWb } }],
  },
  heather: {
    name: "Heather",
    legs: [{ videos: {} }],
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
    legs: [{ videos: {} }],
  },
  inverness: {
    name: "Inverness",
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    legs: [{ videos: {} }],
  },
  kent: {
    name: "Kent",
    legs: [{ videos: {} }],
  },
  kerr: {
    name: "Kerr",
    legs: [{ videos: {} }],
  },
  killarney: {
    name: "Killarney",
    legs: [{ videos: {} }],
  },
  kingEdward: {
    name: "King Edward",
    legs: [{ videos: {} }],
  },
  lakewood: {
    name: "Lakewood",
    legs: [{ videos: {} }],
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
  marine: {
    name: "Marine",
    legs: [{ videos: {} }],
  },
  masumiMitsui: {
    name: "Masumi Mitsui Greenway",
    shortName: "Masumi Mitsui Gr.",
    legs: [{ videos: { eastbound: VIDEOS.masumiMitsuiEb } }],
  },
  midtown: {
    name: "Midtown",
    legs: [
      {
        name: "Vancouver",
        videos: { eastbound: VIDEOS.midtownVancouverEb },
      },
      { name: "Burnaby", videos: {} },
    ],
  },
  mosaic: {
    name: "Mosaic",
    legs: [{ videos: {} }],
  },
  nanaimo: {
    name: "Nanaimo",
    legs: [{ videos: {} }],
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
    legs: [{ videos: {} }],
  },
  pandora: {
    name: "Pandora",
    legs: [{ videos: { eastbound: VIDEOS.pandoraEb } }],
  },
  portside: {
    name: "Portside",
    legs: [{ videos: {} }],
  },
  powell: {
    name: "Powell",
    legs: [{ videos: { eastbound: VIDEOS.powellEb } }],
  },
  princeEdward: {
    name: "Prince Edward",
    legs: [{ videos: {} }],
  },
  richards: {
    name: "Richards",
    legs: [{ videos: {} }],
  },
  ridgeway: {
    name: "Ridgeway",
    legs: [{ videos: {} }],
  },
  rumble: {
    name: "Rumble",
    legs: [{ videos: {} }],
  },
  rupert: {
    name: "Rupert",
    legs: [{ videos: {} }],
  },
  seaside: {
    name: "Seaside",
    legs: [{ videos: {} }],
  },
  seasideBypass: {
    name: "Seaside Bypass",
    legs: [{ videos: {} }],
  },
  seaToRiver: {
    name: "Sea to River",
    legs: [{ videos: {} }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    legs: [{ videos: {} }],
  },
  smithe: {
    name: "Smithe",
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmithNb } }],
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    legs: [{ videos: {} }],
  },
  sunrise: {
    name: "Sunrise",
    legs: [{ videos: {} }],
  },
  university: {
    name: "University",
    legs: [{ videos: {} }],
  },
  valley: {
    name: "Valley",
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    legs: [{ videos: {} }],
  },
  windermere: {
    name: "Windermere",
    legs: [{ videos: {} }],
  },
  windsor: {
    name: "Windsor",
    legs: [{ videos: {} }],
  },
  york: {
    name: "York",
    legs: [{ videos: { eastbound: VIDEOS.yorkEb } }],
  },
  yukon: {
    name: "Yukon",
    legs: [{ videos: {} }],
  },
};
