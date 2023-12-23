import { VIDEOS } from "../videos";

// !!! handle non-routes, allow them to be previewed sometimes?

export const ROUTES = {
  third: {
    name: "3rd",
    legs: [{ distance: 2.4, videos: { eastbound: VIDEOS.thirdEb } }],
  },
  fourth: {
    name: "4th",
    legs: [{ distance: 2.8, videos: { eastbound: VIDEOS.fourthEb } }],
  },
  tenth: {
    name: "10th",
    legs: [
      {
        distance: 7.3,
        videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb },
      },
    ],
  },
  fourteenth: {
    name: "14th",
    legs: [{ distance: 2.5, videos: { westbound: VIDEOS.fourteenthWb } }],
  },
  sixteenth: {
    name: "16th Ave",
    legs: [{ distance: 2.5, videos: {} }],
  },
  twentySecond: {
    name: "22nd Ave",
    legs: [{ distance: 2.4, videos: { westbound: VIDEOS.twentySecondEb } }],
  },
  twentyNinth: {
    name: "29th",
    legs: [{ distance: 7.8, videos: { westbound: VIDEOS.twentyNinthWb } }],
  },
  fortyFifth: {
    name: "45th",
    legs: [{ distance: 9.2, videos: { westbound: VIDEOS.fortyFifthWb } }],
  },
  sixtySeventh: {
    name: "67th",
    legs: [{ distance: 1.6, videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  adanac: {
    name: "Adanac",
    legs: [{ distance: 5.8, videos: { westbound: VIDEOS.adanacWb } }],
  },
  alberni: {
    name: "Alberni St",
    legs: [{ distance: 0.6, videos: {} }],
  },
  alder: {
    name: "Alder",
    legs: [{ distance: 0.7, videos: { northbound: VIDEOS.alderNb } }],
  },
  alexander: {
    name: "Alexander",
    legs: [{ distance: 1.3, videos: { eastbound: VIDEOS.alexanderEb } }],
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    legs: [{ distance: 8.5, videos: { northbound: VIDEOS.arbutusGreenwayNb } }],
  },
  arthurLaingBridge: {
    name: "Arthur Laing Bridge",
    // shortName: "Arthur Laing B.",
    legs: [{ distance: 1.3, videos: { southbound: VIDEOS.arthurLaingSb } }],
  },
  balaclava: {
    name: "Balaclava",
    legs: [{ distance: 6.7, videos: {} }],
  },
  barnet: {
    name: "Barnet Highway",
    legs: [{ distance: 8.3, videos: {} }],
  },
  bcParkway: {
    name: "BC Parkway",
    legs: [
      {
        name: "Vancouver",
        distance: 4.7,
        videos: {
          eastbound: VIDEOS.bcParkwayVancouverEb,
          westbound: VIDEOS.bcParkwayVancouverWb,
        },
      },
      {
        name: "Burnaby",
        distance: 7,
        videos: { eastbound: VIDEOS.bcParkwayBurnabyEb },
      },
      { name: "New Westminster", distance: 6.8, videos: {} },
      { name: "Surrey", distance: 6.4, videos: {} },
    ],
  },
  beatty: {
    name: "Beatty St",
    legs: [{ distance: 0.9, videos: { southbound: VIDEOS.beattySb } }],
  },
  blanca: {
    name: "Blanca St",
    legs: [{ distance: 1.2, videos: {} }],
  },
  bridgeportTrail: {
    name: "Bridgeport Trail",
    legs: [{ distance: 1.5, videos: {} }],
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    shortName: "Brunette Fraser G.",
    legs: [
      { name: "Burnaby", distance: 9.1, videos: {} },
      { name: "New Westminster", distance: 4.4, videos: {} },
    ],
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    legs: [{ distance: 2.9, videos: {} }],
  },
  burnaby: {
    name: "Burnaby",
    legs: [{ distance: 0.9, videos: {} }],
  },
  burrard: {
    name: "Burrard St",
    legs: [
      {
        distanceMin: 1.7,
        distanceMax: 3.4,
        videos: { northbound: VIDEOS.burrardNb, southbound: VIDEOS.burrardSb },
      },
    ],
  },
  bute: {
    name: "Bute",
    legs: [{ distance: 0.9, videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    legs: [
      {
        name: "South Vancouver",
        distanceMax: 4,
        distanceMin: 1.7,
        videos: { southbound: VIDEOS.cambieSb },
      },
      {
        name: "Gastown",
        distance: 0.4,
        videos: { northbound: VIDEOS.cambieGastownNb },
      },
    ],
  },
  cambieBridge: {
    name: "Cambie Bridge",
    legs: [
      {
        distance: 1,
        videos: {
          northbound: VIDEOS.cambieBridgeSmitheNb,
          southbound: VIDEOS.cambieBridgeNelsonSb,
        },
      },
    ],
  },
  canadaLine: {
    name: "Canada Line Path",
    legs: [{ distance: 3.2, videos: {} }],
  },
  cardero: {
    name: "Cardero",
    legs: [{ distance: 1.4, videos: {} }],
  },
  carrall: {
    name: "Carrall",
    legs: [{ distance: 0.9, videos: { northbound: VIDEOS.carrallNb } }],
  },
  cassiar: {
    name: "Cassiar",
    legs: [{ distance: 1.2, videos: { southbound: VIDEOS.cassiarSb } }],
  },
  centralParkPerimeterTrail: {
    name: "Central Park Perimeter Trail",
    shortName: "Central Park Perim.",
    legs: [
      {
        distance: 3.5,
        videos: { clockwise: VIDEOS.centralParkPerimeterTrailCw },
      },
    ],
  },
  centralValleyGreenway: {
    name: "Central Valley Greenway",
    shortName: "Central Valley Gr.",
    legs: [
      {
        name: "Vancouver",
        distance: 6.7,
        videos: { eastbound: VIDEOS.centralValleyVancouverEb },
      },
      { name: "Burnaby", distance: 11.9, videos: {} },
      { name: "New Westminster", distance: 5.4, videos: {} },
    ],
  },
  chancellor: {
    name: "Chancellor Blvd",
    legs: [{ distance: 3.1, videos: {} }],
  },
  chilco: {
    name: "Chilco",
    legs: [{ distance: 0.7, videos: { southbound: VIDEOS.chilcoSb } }],
  },
  columbia: {
    name: "Columbia",
    legs: [{ distance: 0.6, videos: { northbound: VIDEOS.columbiaNb } }],
  },
  comoxHelmcken: {
    name: "Comox Helmcken",
    legs: [
      {
        distance: 2.5,
        videos: {
          eastbound: VIDEOS.comoxHelmckenEb,
          westbound: VIDEOS.comoxHelmckenWb,
        },
      },
    ],
  },
  cypress: {
    name: "Cypress",
    legs: [{ distance: 8.4, videos: { northbound: VIDEOS.cypressNb } }],
  },
  deerLakeParkway: {
    name: "Deer Lake Parkway Urban Trail",
    shortName: "Deer Lake Pkwy T.",
    legs: [{ distance: 2.4, videos: { eastbound: VIDEOS.deerLakePkwyEb } }],
  },
  dumfries: {
    name: "Dumfries",
    legs: [{ distance: 4.9, videos: { northbound: VIDEOS.dumfriesNb } }],
  },
  dunbar: {
    name: "Dunbar St",
    legs: [{ distance: 3, videos: { northbound: VIDEOS.dunbarNb } }],
  },
  dunsmuir: {
    name: "Dunsmuir",
    legs: [{ distance: 1.6, videos: {} }],
  },
  francesUnion: {
    name: "Frances Union",
    legs: [{ distance: 6.8, videos: {} }],
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    legs: [{ distance: 3.4, videos: {} }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    legs: [{ videos: {} }],
  },
  gardenCity: {
    name: "Garden City Rd",
    legs: [
      {
        distance: 5.6,
        videos: {
          northbound: VIDEOS.gardenCityNb,
          southbound: VIDEOS.gardenCitySb,
        },
      },
    ],
  },
  gladstone: {
    name: "Gladstone",
    legs: [{ distance: 1.7, videos: { northbound: VIDEOS.gladstoneNb } }],
  },
  glenlyon: {
    name: "Glenlyon Urban Trail",
    legs: [{ distance: 2.4, videos: {} }],
  },
  granville: {
    name: "Granville Ave",
    legs: [{ distance: 4, videos: {} }],
  },
  haro: {
    name: "Haro",
    legs: [{ distance: 1.4, videos: { westbound: VIDEOS.haroWb } }],
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
    isIncomplete: true,
  },
  heather: {
    name: "Heather",
    legs: [{ distance: 7.3, videos: { southbound: VIDEOS.heatherSb } }],
  },
  highbury: {
    name: "Highbury St",
    legs: [{ distance: 0.8, videos: { northbound: VIDEOS.highburyNb } }],
  },
  hillcrest: {
    name: "Hillcrest",
    legs: [
      {
        distance: 2.6,
        videos: {
          eastbound: VIDEOS.hillcrestEb,
          westbound: VIDEOS.hillcrestWb,
        },
      },
    ],
  },
  homer: {
    name: "Homer St",
    legs: [{ distance: 1.1, videos: { northbound: VIDEOS.homerNb } }],
  },
  hornby: {
    name: "Hornby",
    legs: [{ distance: 2.1, videos: { northbound: VIDEOS.hornbyNb } }],
  },
  inverness: {
    name: "Inverness",
    legs: [{ distance: 3.1, videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    legs: [{ distance: 1.2, videos: { eastbound: VIDEOS.keeferEb } }],
  },
  kent: {
    name: "Kent",
    legs: [{ distance: 7.5, videos: {} }],
  },
  kerr: {
    name: "Kerr St",
    legs: [{ distance: 2.6, videos: { southbound: VIDEOS.kerrSb } }],
  },
  killarney: {
    name: "Killarney",
    legs: [{ distance: 1, videos: { eastbound: VIDEOS.killarneyEb } }],
  },
  kingEdward: {
    name: "King Edward Ave",
    legs: [{ distance: 2.1, videos: {} }],
  },
  knightStreetBridge: {
    name: "Knight Street Bridge",
    legs: [{ distance: 2.2, videos: { southbound: VIDEOS.knightStBridgeSb } }],
  },
  lakes: {
    name: "Lakes",
    legs: [{ videos: {} }],
    isIncomplete: true,
  },
  lakewood: {
    name: "Lakewood",
    legs: [{ distance: 2.8, videos: { northbound: VIDEOS.lakewoodNb } }],
  },
  lionsGate: {
    name: "Lions Gate Bridge",
    legs: [
      {
        distance: 4,
        videos: {
          northbound: VIDEOS.lionsGateBridgeNb,
          southbound: VIDEOS.lionsGateBridgeSb,
        },
      },
    ],
  },
  lougheed: {
    name: "Lougheed Highway",
    legs: [{ distanceMax: 15.8, distanceMin: 15.1, videos: {} }],
  },
  marine: {
    name: "Marine",
    legs: [
      { name: "NW Marine", distance: 7.1, videos: {} },
      {
        name: "SW Marine",
        distance: 10.7,
        videos: { eastbound: VIDEOS.swMarineEb },
      },
    ],
  },
  marineWay: {
    name: "Marine Way",
    legs: [{ distance: 6.5, videos: {} }],
  },
  masumiMitsui: {
    name: "Masumi Mitsui Greenway",
    shortName: "Masumi Mitsui Gr.",
    legs: [
      {
        distance: 7.3,
        videos: {
          eastbound: VIDEOS.masumiMitsuiEb,
          westbound: VIDEOS.masumiMitsuiWb,
        },
      },
    ],
  },
  midtown: {
    name: "Midtown",
    legs: [
      {
        name: "Vancouver",
        distance: 14.1,
        videos: { eastbound: VIDEOS.midtownVancouverEb },
      },
      {
        name: "Burnaby",
        distance: 8.4,
        videos: { westbound: VIDEOS.midtownBurnabyWb },
      },
    ],
  },
  mosaic: {
    name: "Mosaic",
    legs: [{ distance: 3.5, videos: { southbound: VIDEOS.mosaicSb } }],
  },
  nanaimo: {
    name: "Nanaimo St",
    legs: [{ distance: 1.6, videos: { southbound: VIDEOS.nanaimoSb } }],
  },
  nelson: {
    name: "Nelson St",
    legs: [
      { distance: 0.4, videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } },
    ],
  },
  nicola: {
    name: "Nicola",
    legs: [{ distance: 0.3, videos: { northbound: VIDEOS.nicolaNb } }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    legs: [{ distance: 1.9, videos: {} }],
  },
  offBroadway: {
    name: "Off Broadway",
    legs: [{ distance: 11.7, videos: { westbound: VIDEOS.offBroadwayWb } }],
  },
  ontario: {
    name: "Ontario",
    legs: [{ distance: 7.3, videos: { northbound: VIDEOS.ontarioNb } }],
  },
  pandora: {
    name: "Pandora",
    legs: [{ distance: 2.2, videos: { eastbound: VIDEOS.pandoraEb } }],
  },
  pender: {
    name: "Pender St",
    legs: [{ distance: 0.4, videos: { eastbound: VIDEOS.penderEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    legs: [{ distance: 3.1, videos: {} }],
  },
  portside: {
    name: "Portside",
    legs: [{ distance: 3, videos: { eastbound: VIDEOS.portsideEb } }],
  },
  powell: {
    name: "Powell",
    legs: [{ distance: 0.9, videos: { eastbound: VIDEOS.powellEb } }],
  },
  princeEdward: {
    name: "Prince Edward",
    legs: [{ distance: 4.6, videos: { northbound: VIDEOS.princeEdwardNb } }],
  },
  railway: {
    name: "Railway St",
    legs: [{ distance: 4.2, videos: {} }],
  },
  railwayGreenway: {
    name: "Railway Greenway",
    legs: [{ distance: 5, videos: {} }],
  },
  richards: {
    name: "Richards",
    legs: [{ distance: 1.7, videos: {} }],
  },
  ridgeway: {
    name: "Ridgeway",
    legs: [{ distanceMin: 17.3, distanceMax: 18.2, videos: {} }],
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    legs: [{ distance: 3.3, videos: {} }],
  },
  rupert: {
    name: "Rupert St",
    legs: [{ distance: 1.8, videos: { northbound: VIDEOS.rupertNb } }],
  },
  seaside: {
    name: "Seaside",
    legs: [
      { name: "Coal Harbour", videos: {} },
      { name: "Stanley Park", videos: {} },
      { name: "West End", videos: {} },
      { name: "False Creek", videos: {} },
      {
        name: "Kitsilano",
        distance: 4.6,
        videos: { westbound: VIDEOS.seasideKitsWb },
      },
      { name: "Jericho & Spanish Banks", distance: 3.7, videos: {} },
    ],
  },
  seasideBypass: {
    name: "Seaside Bypass",
    legs: [
      { name: "Beach", videos: {} },
      { name: "Pacific/Expo", videos: {} },
      {
        // includes quebec
        name: "False Creek South",
        distance: 4.5,
        videos: { eastbound: VIDEOS.seasideBypassFalseCreekSouthEb },
      },
      // whyte?
      { name: "York", distance: 1.4, videos: { eastbound: VIDEOS.yorkEb } },
      { name: "3rd", distance: 2.4, videos: { eastbound: VIDEOS.thirdEb } },
      { name: "NW Marine & 4th", distance: 4, videos: {} },
    ],
  },
  seaToRiver: {
    name: "Sea to River",
    legs: [{ distance: 9.6, videos: {} }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    legs: [{ distance: 2, videos: {} }],
  },
  shellRoadTrail: {
    name: "Shell Road Trail",
    legs: [{ videos: {} }],
    isIncomplete: true,
  },
  smithe: {
    name: "Smithe St",
    legs: [
      { distance: 1.2, videos: { westbound: VIDEOS.cambieBridgeSmitheNb } },
    ],
  },
  spiritTrail: {
    name: "Spirit Trail",
    legs: [{ videos: {} }],
    isIncomplete: true,
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    legs: [
      { name: "Seawall", distance: 8.3, videos: {} },
      { name: "Lost Lagoon", distance: 1.1, videos: {} },
    ],
  },
  sunrise: {
    name: "Sunrise",
    legs: [{ distance: 10.4, videos: { northbound: VIDEOS.sunriseNb } }],
  },
  terminalPath: {
    name: "Terminal Ave Path",
    legs: [{ distance: 1, videos: {} }],
  },
  university: {
    name: "University Blvd",
    legs: [{ distance: 2.6, videos: {} }],
  },
  valley: {
    name: "Valley",
    legs: [{ distance: 3.9, videos: { southbound: VIDEOS.valleySb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    legs: [{ distance: 2.1, videos: { southbound: VIDEOS.walesDuchessSb } }],
  },
  waterfront: {
    name: "Waterfront St",
    legs: [{ distance: 1.7, videos: { eastbound: VIDEOS.waterfrontEb } }],
  },
  wesbrook: {
    name: "Wesbrook Mall",
    legs: [{ distance: 3.4, videos: {} }],
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    legs: [{ distance: 2.2, videos: {} }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    legs: [{ distance: 1.3, videos: {} }],
  },
  windermere: {
    name: "Windermere",
    legs: [{ distance: 0.4, videos: {} }],
  },
  windsor: {
    name: "Windsor",
    legs: [{ distance: 4.4, videos: { northbound: VIDEOS.windsorNb } }],
  },
  york: {
    name: "York",
    legs: [{ distance: 1.4, videos: { eastbound: VIDEOS.yorkEb } }],
  },
  yukon: {
    name: "Yukon",
    legs: [{ distance: 2.7, videos: { southbound: VIDEOS.yukonSb } }],
  },
};
