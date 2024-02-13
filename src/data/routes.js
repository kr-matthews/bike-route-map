import { VIDEOS } from "./videos";

// Potential future additions
// Burnaby:
// SFU: (to do)
// UBC: east mall; west mall; imperial trail; acadia; stadium; toronto/agronomy; thunderbird; osoyoos+
// Richmond: queen's canal; river pkwy; minoru; no. 6 paths; lynas (no. 2 bridge); bridgeport connection; no. 2 path; river trail/dyke
// YVR: ferguson; russ baker; bridgeport bridge; paths
// New Westminster:
// North Vancouver: grand blvd; cotton/main/lower/esplanade/1st; 4th; keith; capilano; dollarton; mt seymour
// West Vancouver: marine dr; mathers+; old train; hwy; keith;
// Surrey: scott rd; alex fraser; timbers; fraser hwy;
// Delta: alex fraser bridge

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
    legs: [
      {
        distance: 2.4,
        videos: {
          eastbound: VIDEOS.twentySecondEb,
          westbound: VIDEOS.twentySecondWb,
        },
      },
    ],
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
  agnes: {
    name: "Agnes St",
    legs: [{ distance: 0.9, videos: {} }],
  },
  alberni: {
    name: "Alberni St",
    legs: [{ distance: 0.6, videos: {} }],
  },
  alder: {
    name: "Alder",
    legs: [{ distance: 0.7, videos: { northbound: VIDEOS.alderNb } }],
  },
  alderbridge: {
    name: "Alderbridge Way Path",
    shortName: "Alderbridge Path",
    legs: [{ distance: 1.6, videos: {} }],
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
    legs: [{ distance: 6.7, videos: { northbound: VIDEOS.balaclavaNb } }],
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
        videos: {
          eastbound: VIDEOS.bcParkwayBurnabyEb,
          westbound: VIDEOS.bcParkwayBurnabyWb,
        },
      },
      {
        name: "New Westminster",
        distance: 6.8,
        videos: { westbound: VIDEOS.bcParkwayNewWestminsterWb },
      },
      {
        name: "Surrey",
        distance: 6.4,
        videos: {
          eastbound: VIDEOS.bcParkwaySurreyEb,
          westbound: VIDEOS.bcParkwaySurreyWb,
        },
      },
    ],
  },
  beatty: {
    name: "Beatty St",
    legs: [{ distance: 0.9, videos: { southbound: VIDEOS.beattySb } }],
  },
  beresford: {
    name: "Beresford",
    legs: [{ distance: 2.0, videos: {} }],
  },
  bigBendPath: {
    name: "Big Bend Path",
    legs: [{ distance: 4.7, videos: {} }],
  },
  blanca: {
    name: "Blanca St",
    legs: [{ distance: 1.2, videos: {} }],
  },
  boundary: {
    name: "Boundary Trail",
    legs: [{ distance: 0.6, videos: {} }],
  },
  boyd: {
    name: "Boyd St",
    legs: [{ distance: 2.4, videos: {} }],
  },
  boydTrail: {
    name: "Boyd St Trail",
    legs: [{ distance: 1.0, videos: {} }],
  },
  bridgeportTrail: {
    name: "Bridgeport Trail",
    legs: [{ distance: 1.5, videos: {} }],
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    shortName: "Brunette Fraser Gr.",
    legs: [
      { name: "Burnaby", distance: 9.1, videos: {} },
      { name: "New Westminster", distance: 4.4, videos: {} },
    ],
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
    legs: [{ distance: 0.9, videos: { southbound: VIDEOS.buteSb } }],
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    legs: [{ distance: 2.9, videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    legs: [
      {
        distanceMax: 4,
        distanceMin: 1.7,
        videos: { southbound: VIDEOS.cambieSb },
      },
    ],
  },
  cambieGastown: {
    name: "Cambie St (Gastown)",
    shortName: "Cambie (Gastown)",
    legs: [
      {
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
    legs: [{ distance: 1.4, videos: { northbound: VIDEOS.carderoNb } }],
  },
  cariboo: {
    name: "Cariboo",
    legs: [{ distanceMax: 2.2, distanceMin: 1.8, videos: {} }],
  },
  carnarvon: {
    name: "Carnarvon St",
    legs: [{ distance: 0.9, videos: {} }],
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
        distance: 1.9,
        videos: {
          eastbound: VIDEOS.comoxHelmckenEb,
          westbound: VIDEOS.comoxHelmckenWb,
        },
      },
    ],
  },
  crabappleRidge: {
    name: "Crabapple Ridge",
    legs: [{ distance: 7.2, videos: {} }],
  },
  crosstownRichmond: {
    name: "Crosstown",
    legs: [{ distance: 3.8, videos: {} }],
  },
  crosstownNewWestminster: {
    name: "Crosstown Greenway",
    shortName: "Crosstown Gr.",
    legs: [{ distanceMin: 7.0, distanceMax: 7.5, videos: {} }],
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
  ewen: {
    name: "Ewen Ave Greenway",
    legs: [{ distance: 2.6, videos: {} }],
  },
  francesUnion: {
    name: "Frances Union",
    legs: [{ distance: 6.8, videos: {} }],
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    legs: [{ distance: 3.4, videos: { eastbound: VIDEOS.fraserForeshoreEb } }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    legs: [
      { name: "Southlands", distance: 1, videos: {} },
      { name: "Fraser River Park", distance: 0.6, videos: {} },
      { name: "Marpole", distance: 0.3, videos: {} },
      {
        name: "Fraserview",
        distance: 1.9,
        videos: { eastbound: VIDEOS.fraserRiverFraserviewEb },
      },
      { name: "River District", distance: 1.6, videos: {} },
    ],
  },
  fraserwoodTrail: {
    name: "Fraserwood Trail",
    legs: [{ distance: 1.7, videos: {} }],
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
    legs: [{ distance: 2.4, videos: { northbound: VIDEOS.glenlyonNb } }],
  },
  granville: {
    name: "Granville Ave",
    legs: [{ distance: 4.2, videos: {} }],
  },
  haro: {
    name: "Haro",
    legs: [{ distance: 1.4, videos: { westbound: VIDEOS.haroWb } }],
  },
  hastingsPark: {
    name: "Hastings Park",
    legs: [
      { name: "Pandora <-> Windermere", videos: {} },
      { name: "Pandora <-> Cassiar", distance: 1.5, videos: {} },
      { name: "Pandora <-> Portside", distance: 1.5, videos: {} },
      { name: "Windermere <-> Cassiar", distance: 0.7, videos: {} },
      {
        name: "Windermere <-> Portside",
        distance: 1.0,
        videos: { southbound: VIDEOS.hastingsPortsideWindermere },
      },
      { name: "Cassiar <-> Portside", videos: {} },
    ],
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
  howes: {
    name: "Howes St",
    legs: [{ distance: 1.0, videos: {} }],
  },
  imperial: {
    name: "Imperial Dr",
    legs: [{ distance: 1.1, videos: {} }],
  },
  inverness: {
    name: "Inverness",
    legs: [{ distance: 3.1, videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    legs: [{ distance: 1.2, videos: { eastbound: VIDEOS.keeferEb } }],
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    legs: [{ distance: 2.3, videos: {} }],
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
    legs: [{ distance: 9.8, videos: {} }],
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
  londonDublin: {
    name: "London/Dublin Greenway",
    shortName: "London/Dublin Gr.",
    legs: [{ distance: 2.7, videos: {} }],
  },
  lougheed: {
    name: "Lougheed Highway",
    legs: [{ distanceMax: 15.8, distanceMin: 15.1, videos: {} }],
  },
  marineNw: {
    name: "NW Marine",
    legs: [{ distance: 7.1, videos: {} }],
  },
  marineSw: {
    name: "SW Marine",
    legs: [{ distance: 10.7, videos: { eastbound: VIDEOS.swMarineEb } }],
  },
  marineWay: {
    name: "Marine Way",
    legs: [{ distance: 6.5, videos: { eastbound: VIDEOS.marineWayEb } }],
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
  metrotown: {
    name: "Metrotown",
    legs: [
      { distance: 2.5, videos: { counterclockwise: VIDEOS.metrotownCcw } },
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
  millenniumTrail: {
    name: "Millennium Trail",
    legs: [{ distance: 1.4, videos: {} }],
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
  nelsonAve: {
    name: "Nelson Ave Path",
    legs: [{ distance: 0.4, videos: {} }],
  },
  nicola: {
    name: "Nicola",
    legs: [{ distance: 0.3, videos: { northbound: VIDEOS.nicolaNb } }],
  },
  no3: {
    name: "No. 3 Rd",
    legs: [{ distanceMax: 2.9, videos: {} }],
  },
  northSouth: {
    name: "North/South",
    legs: [{ distance: 2.9, videos: { southbound: VIDEOS.northSouthSb } }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    legs: [{ distance: 1.9, videos: {} }],
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland St",
    legs: [{ distance: 2.5, videos: {} }],
  },
  odlin: {
    name: "Odlin",
    legs: [{ distance: 2.1, videos: {} }],
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
  parkside: {
    name: "Parkside",
    legs: [{ distance: 3.6, videos: {} }],
  },
  pender: {
    name: "Pender St",
    legs: [{ distance: 0.4, videos: { eastbound: VIDEOS.penderEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    legs: [{ distance: 3.1, videos: {} }],
  },
  portRoyalRiverTrail: {
    name: "Port Royal River Trail",
    shortName: "Port Royal River T.",
    legs: [{ distance: 1.1, videos: {} }],
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
  queensboroughBridge: {
    name: "Queensborough Bridge",
    shortName: "Queensborough B.",
    legs: [{ distance: 1.1, videos: {} }],
  },
  railwayGreenway: {
    name: "Railway Greenway",
    legs: [{ distance: 5, videos: {} }],
  },
  railway: {
    name: "Railway St",
    legs: [{ distance: 4.2, videos: {} }],
  },
  richards: {
    name: "Richards",
    legs: [{ distance: 1.7, videos: {} }],
  },
  ridgeway: {
    name: "Ridgeway",
    legs: [
      {
        distanceMin: 17.3,
        distanceMax: 18.2,
        videos: { westbound: VIDEOS.ridgewayWb },
      },
    ],
  },
  royalOak: {
    name: "Royal Oak Urban Trail",
    shortName: "Royal Oak Trail",
    legs: [{ distance: 1.3, videos: { southbound: VIDEOS.royalOakSb } }],
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    legs: [{ distance: 3.7, videos: {} }],
  },
  rupert: {
    name: "Rupert St",
    legs: [{ distance: 1.8, videos: { northbound: VIDEOS.rupertNb } }],
  },
  seaIslandConnector: {
    name: "Sea Island Connector",
    shortName: "Sea Island Conn.",
    legs: [{ distance: 0.8, videos: {} }],
  },
  seaIslandWay: {
    name: "Sea Island Way",
    legs: [{ distance: 1.9, videos: { eastbound: VIDEOS.seaIslandWayEb } }],
  },
  seaToRiver: {
    name: "Sea to River",
    legs: [{ distance: 9.6, videos: { northbound: VIDEOS.seaToRiverNb } }],
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
      {
        name: "Pacific/Expo",
        distance: 3.3,
        videos: { westbound: VIDEOS.seasideBypassExpoWb },
      },
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
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    legs: [{ distance: 2, videos: {} }],
  },
  shellRoadTrail: {
    name: "Shell Road Trail",
    legs: [{ distance: 5.3, videos: {} }],
  },
  smithe: {
    name: "Smithe St",
    legs: [
      { distance: 1.2, videos: { westbound: VIDEOS.cambieBridgeSmitheNb } },
    ],
  },
  southDyke: {
    name: "South Dyke Rd",
    legs: [{ distance: 2.1, videos: {} }],
  },
  southeast: {
    name: "Southeast",
    legs: [{ distance: 5.3, videos: {} }],
  },
  spiritTrail: {
    name: "Spirit Trail",
    legs: [{ distance: 11.0, videos: {} }],
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
    legs: [
      {
        distance: 1.0,
        videos: { eastbound: VIDEOS.terminalEb, westbound: VIDEOS.terminalWb },
      },
    ],
  },
  university: {
    name: "University Blvd",
    legs: [{ distance: 2.6, videos: {} }],
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    legs: [{ distance: 2.0, videos: {} }],
  },
  valley: {
    name: "Valley",
    legs: [{ distance: 3.9, videos: { southbound: VIDEOS.valleySb } }],
  },
  victory: {
    name: "Victory",
    legs: [{ distance: 3.7, videos: {} }],
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
  westminsterHwy: {
    name: "Westminster Highway",
    shortName: "Westminster Hwy",
    legs: [{ distance: 13.3, videos: {} }],
  },
  williams: {
    name: "Williams Rd",
    legs: [{ distance: 7.3, videos: {} }],
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    legs: [{ distance: 2.2, videos: { southbound: VIDEOS.willingdonSb } }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    legs: [{ distance: 1.3, videos: {} }],
  },
  windermere: {
    name: "Windermere",
    legs: [{ distance: 0.4, videos: { southbound: VIDEOS.windermereSb } }],
  },
  windsor: {
    name: "Windsor",
    legs: [{ distance: 4.4, videos: { northbound: VIDEOS.windsorNb } }],
  },
  woodwardsSaunders: {
    name: "Woodwards Rd/Saunders Rd",
    shortName: "Woodwards Rd",
    legs: [{ distance: 4.2, videos: {} }],
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
