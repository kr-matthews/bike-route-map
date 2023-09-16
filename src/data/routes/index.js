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
    name: "16th Ave",
    legs: [{ videos: {} }],
  },
  twentySecond: {
    name: "22nd Ave",
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
    name: "Alberni St",
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
    legs: [{ videos: { southbound: VIDEOS.arthurLaingSb } }],
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
    name: "Beatty St",
    legs: [{ videos: {} }],
  },
  blanca: {
    name: "Blanca St",
    legs: [{ videos: {} }],
  },
  burnaby: {
    name: "Burnaby",
    legs: [{ videos: {} }],
  },
  burrard: {
    name: "Burrard St",
    legs: [
      {
        videos: { northbound: VIDEOS.burrardNb, southbound: VIDEOS.burrardSb },
      },
    ],
  },
  bute: {
    name: "Bute",
    legs: [{ videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    legs: [
      { name: "South Vancouver", videos: { southbound: VIDEOS.cambieSb } },
      { name: "Gastown", videos: { northbound: VIDEOS.cambieGastownNb } },
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
  centralParkLoop: {
    name: "Central Park Loop",
    legs: [{ videos: {} }],
  },
  centralValleyGreenway: {
    name: "Central Valley Greenway",
    shortName: "Central Valley Gr.",
    legs: [
      {
        name: "Vancouver",
        videos: { eastbound: VIDEOS.centralValleyVancouverEb },
      },
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  chancellor: {
    name: "Chancellor Blvd",
    legs: [{ videos: {} }],
  },
  chilco: {
    name: "Chilco",
    legs: [{ videos: { southbound: VIDEOS.chilcoSb } }],
  },
  columbia: {
    name: "Columbia",
    legs: [{ videos: { northbound: VIDEOS.columbiaNb } }],
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
    legs: [{ videos: { northbound: VIDEOS.dumfriesNb } }],
  },
  dunbar: {
    name: "Dunbar St",
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
    name: "Garden City Rd",
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
  hastingsPark: {
    name: "Hastings Park",
    legs: [
      { name: "Pandora <-> Windermere", videos: {} },
      { name: "Pandora <-> Cassiar", videos: {} },
      { name: "Pandora <-> Portside", videos: {} },
      { name: "Windermere <-> Cassiar", videos: {} },
      { name: "Windermere <-> Portside", videos: {} },
      { name: "Cassiar <-> Portside", videos: {} },
    ],
  },
  heather: {
    name: "Heather",
    legs: [{ videos: { southbound: VIDEOS.heatherSb } }],
  },
  highbury: {
    name: "Highbury St",
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
  homer: {
    name: "Homer St",
    legs: [{ videos: {} }],
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
    name: "Kerr St",
    legs: [{ videos: { southbound: VIDEOS.kerrSb } }],
  },
  killarney: {
    name: "Killarney",
    legs: [{ videos: {} }],
  },
  kingEdward: {
    name: "King Edward Ave",
    legs: [{ videos: {} }],
  },
  knightStreetBridge: {
    name: "Knight Street Bridge",
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
    legs: [
      { name: "SW Marine", videos: { eastbound: VIDEOS.swMarineEb } },
      { name: "NW Marine", videos: {} },
    ],
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
    name: "Nanaimo St",
    legs: [{ videos: {} }],
  },
  nelson: {
    name: "Nelson St",
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
  },
  nicola: {
    name: "Nicola",
    legs: [{ videos: { northbound: VIDEOS.nicolaNb } }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    legs: [{ videos: {} }],
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
  pender: {
    name: "Pender St",
    legs: [{ videos: {} }],
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
    legs: [{ videos: { northbound: VIDEOS.princeEdwardNb } }],
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
    name: "Rupert St",
    legs: [{ videos: { northbound: VIDEOS.rupertNb } }],
  },
  seaside: {
    name: "Seaside",
    legs: [
      { name: "Coal Harbour", videos: {} },
      { name: "Stanley Park", videos: {} },
      { name: "West End", videos: {} },
      { name: "False Creek", videos: {} },
      { name: "Kitsilano", videos: {} },
      { name: "Jericho & Spanish Banks", videos: {} },
    ],
  },
  seasideBypass: {
    name: "Seaside Bypass",
    legs: [
      { name: "Beach", videos: {} },
      { name: "Pacific/Expo", videos: {} },
      // includes quebec
      { name: "False Creek South", videos: {} },
      // whyte?
      { name: "York", videos: { eastbound: VIDEOS.yorkEb } },
      { name: "3rd", videos: { eastbound: VIDEOS.thirdEb } },
      { name: "NW Marine & 4th", videos: {} },
    ],
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
    name: "Smithe St",
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmithNb } }],
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    legs: [
      { name: "Seawall", videos: {} },
      { name: "Lost Lagoon", videos: {} },
    ],
  },
  sunrise: {
    name: "Sunrise",
    legs: [{ videos: { northbound: VIDEOS.sunriseNb } }],
  },
  terminalPath: {
    name: "Terminal Ave Path",
    legs: [{ videos: {} }],
  },
  university: {
    name: "University Blvd",
    legs: [{ videos: {} }],
  },
  valley: {
    name: "Valley",
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    legs: [{ videos: { southbound: VIDEOS.walesDuchessSb } }],
  },
  waterfront: {
    name: "Waterfront St",
    legs: [{ videos: {} }],
  },
  windermere: {
    name: "Windermere",
    legs: [{ videos: {} }],
  },
  windsor: {
    name: "Windsor",
    legs: [{ videos: { northbound: VIDEOS.windsorNb } }],
  },
  york: {
    name: "York",
    legs: [{ videos: { eastbound: VIDEOS.yorkEb } }],
  },
  yukon: {
    name: "Yukon",
    legs: [{ videos: { southbound: VIDEOS.yukonSb } }],
  },
};
