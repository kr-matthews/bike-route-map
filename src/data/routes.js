import { VIDEOS } from "./videos";

//// Potential future additions
// Vancouver:
// Burnaby: sprott @ hwy 1
// SFU:
// UBC: (extend agronomy (toronto), acadia?)
// Richmond: south dyke; railway later continuation, and around that;
// YVR: ferguson; inglis; other paths...; ...more
// New Westminster:
// North Vancouver: grand blvd; cotton/main/lower/esplanade/1st; 4th; keith; capilano; dollarton; mt seymour
// West Vancouver: marine dr; mathers+; old train; hwy; keith;
// Surrey: scott rd; alex fraser; timbers; fraser hwy;
// Delta:

export const VANCOUVER = "Vancouver";
export const UBC = "UBC";
export const BURNABY = "Burnaby";
export const RICHMOND = "Richmond";
export const NEW_WESTMINSTER = "New Westminster";
export const VISIBLE = "Visible (approx.)";
export const ALL = "All";

export const ROUTES = {
  third: {
    name: "3rd",
    legs: [{ videos: { eastbound: VIDEOS.thirdEb } }],
  },
  fourth: {
    name: "4th",
    legs: [
      {
        videos: { eastbound: VIDEOS.fourthEb, westbound: VIDEOS.fourthWb },
      },
    ],
  },
  tenth: {
    name: "10th",
    legs: [
      {
        videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb },
      },
    ],
  },
  fourteenth: {
    name: "14th",
    legs: [{ videos: { westbound: VIDEOS.fourteenthWb } }],
  },
  sixteenth: {
    name: "16th Ave",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.sixteenthEb,
          westbound: VIDEOS.sixteenthWb,
        },
      },
    ],
  },
  twentySecond: {
    name: "22nd Ave",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.twentySecondEb,
          westbound: VIDEOS.twentySecondWb,
        },
      },
    ],
  },
  twentyNinth: {
    name: "29th",
    legs: [{ videos: { westbound: VIDEOS.twentyNinthWb } }],
  },
  fortyFifth: {
    name: "45th",
    legs: [{ videos: { westbound: VIDEOS.fortyFifthWb } }],
  },
  sixtySeventh: {
    name: "67th",
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  acadia: {
    name: "Acadia Rd",
    legs: [{ videos: {} }],
  },
  adanac: {
    name: "Adanac",
    legs: [{ videos: { westbound: VIDEOS.adanacWb } }],
  },
  agnes: {
    name: "Agnes St",
    legs: [{ videos: {} }],
  },
  agronomy: {
    name: "Agronomy Rd",
    legs: [{ videos: {} }],
  },
  alberni: {
    name: "Alberni St",
    legs: [{ videos: { eastbound: VIDEOS.alberniEb } }],
  },
  alder: {
    name: "Alder",
    legs: [{ videos: { northbound: VIDEOS.alderNb } }],
  },
  alderbridge: {
    name: "Alderbridge Way Path",
    shortName: "Alderbridge Path",
    legs: [{ videos: { westbound: VIDEOS.alderbridgeWb } }],
  },
  alexander: {
    name: "Alexander",
    legs: [{ videos: { eastbound: VIDEOS.alexanderEb } }],
  },
  alexFraserBridge: {
    name: "Alex Fraser Bridge",
    legs: [{ videos: {} }],
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    legs: [{ videos: { northbound: VIDEOS.arbutusGreenwayNb } }],
  },
  arthurLaingBridge: {
    name: "Arthur Laing Bridge",
    // shortName: "Arthur Laing B.",
    legs: [
      {
        videos: {
          northbound: VIDEOS.arthurLaingNb,
          southbound: VIDEOS.arthurLaingSb,
        },
      },
    ],
  },
  balaclava: {
    name: "Balaclava",
    legs: [{ videos: { northbound: VIDEOS.balaclavaNb } }],
  },
  barnet: {
    name: "Barnet Highway",
    legs: [{ videos: {} }],
  },
  bcParkway: {
    name: "BC Parkway",
    legs: [
      {
        name: "Vancouver",
        videos: {
          eastbound: VIDEOS.bcParkwayVancouverEb,
          westbound: VIDEOS.bcParkwayVancouverWb,
        },
      },
      {
        name: "29th Ave Station: Alternate Westbound Route",
        videos: { westbound: VIDEOS.bcParkway29thStation },
      },
      {
        name: "Burnaby",
        videos: {
          eastbound: VIDEOS.bcParkwayBurnabyEb,
          westbound: VIDEOS.bcParkwayBurnabyWb,
        },
      },
      {
        name: "New Westminster",
        videos: { westbound: VIDEOS.bcParkwayNWWb },
      },
      {
        name: "22nd St Station: Alternate Route",
        videos: { eastbound: VIDEOS.bcParkway22ndStation },
      },
      {
        name: "Surrey",
        videos: {
          eastbound: VIDEOS.bcParkwaySurreyEb,
          westbound: VIDEOS.bcParkwaySurreyWb,
        },
      },
    ],
  },
  beatty: {
    name: "Beatty St",
    legs: [
      {
        videos: { northbound: VIDEOS.beattyNb, southbound: VIDEOS.beattySb },
      },
    ],
  },
  bigBendPath: {
    name: "Big Bend Path",
    legs: [{ videos: {} }],
  },
  blanca: {
    name: "Blanca St",
    legs: [
      {
        videos: { northbound: VIDEOS.blancaNb, southbound: VIDEOS.blancaSb },
      },
    ],
  },
  boundary: {
    name: "Boundary Trail",
    legs: [{ videos: { southbound: VIDEOS.boundaryTrailSb } }],
  },
  boyd: {
    name: "Boyd St",
    legs: [{ videos: {} }],
  },
  boydTrail: {
    name: "Boyd St Trail",
    legs: [{ videos: { westbound: VIDEOS.boydTrailWb } }],
  },
  bridgeportTrail: {
    name: "Bridgeport Trail",
    legs: [{ videos: { eastbound: VIDEOS.bridgeportTrailEb } }],
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    shortName: "Brunette Fraser Gr.",
    legs: [
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  burnaby: {
    name: "Burnaby",
    legs: [{ videos: { westbound: VIDEOS.burnabyWb } }],
  },
  burnabyMtnPkwy: {
    name: "Burnaby Mountain Parkway",
    shortName: "Burnaby Mtn Pkwy",
    legs: [{ videos: {} }],
  },
  burrard: {
    name: "Burrard St",
    legs: [
      {
        videos: { northbound: VIDEOS.burrardNb, southbound: VIDEOS.burrardSb },
      },
      {
        name: "Seaside Connection via Bridge",
        videos: { southbound: VIDEOS.burrardBridgeSb },
      },
    ],
  },
  bute: {
    name: "Bute",
    legs: [{ videos: { southbound: VIDEOS.buteSb } }],
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    legs: [{ videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    legs: [
      {
        videos: { southbound: VIDEOS.cambieSb },
      },
      {
        name: "Connection with Ontario via 42nd Ave",
        videos: { eastbound: VIDEOS.fortySecondEb },
      },
    ],
  },
  cambieGastown: {
    name: "Cambie St (Gastown)",
    shortName: "Cambie (Gastown)",
    isOneWay: true,
    legs: [
      {
        videos: { northbound: VIDEOS.cambieGastownNb },
      },
    ],
  },
  cambieBridge: {
    name: "Cambie Bridge",
    legs: [
      {
        videos: {
          northbound: VIDEOS.cambieBridgeSmitheNb,
          southbound: VIDEOS.cambieBridgeNelsonSb,
        },
      },
    ],
  },
  canadaLine: {
    name: "Canada Line Path",
    legs: [
      { videos: { southbound: VIDEOS.canadaLineSb } },
      {
        name: "North Arm Bridge",
        videos: {
          northbound: VIDEOS.northArmBridgeNb,
          southbound: VIDEOS.northArmBridgeSb,
        },
      },
    ],
  },
  cardero: {
    name: "Cardero",
    legs: [{ videos: { northbound: VIDEOS.carderoNb } }],
  },
  cariboo: {
    name: "Cariboo",
    legs: [{ videos: {} }],
  },
  carnarvon: {
    name: "Carnarvon St",
    legs: [{ videos: {} }],
  },
  carrall: {
    name: "Carrall",
    legs: [{ videos: { northbound: VIDEOS.carrallNb } }],
  },
  cassiar: {
    name: "Cassiar",
    legs: [{ videos: { southbound: VIDEOS.cassiarSb } }],
  },
  centralParkPerimeterTrail: {
    name: "Central Park Perimeter Trail",
    shortName: "Central Park Perim.",
    legs: [
      {
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
        videos: {
          eastbound: VIDEOS.centralValleyVancouverEb,
          westbound: VIDEOS.centralValleyVancouverWb,
        },
      },
      { name: "Burnaby", videos: {} },
      {
        name: "New Westminster",
        videos: { northbound: VIDEOS.centralValleyNWNb },
      },
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
  crabappleRidge: {
    name: "Crabapple Ridge",
    legs: [{ videos: {} }],
  },
  crosstownRichmond: {
    name: "Crosstown",
    legs: [{ videos: {} }],
  },
  crosstownNewWestminster: {
    name: "Crosstown Greenway",
    shortName: "Crosstown Gr.",
    legs: [{ videos: {} }],
  },
  cypress: {
    name: "Cypress",
    legs: [{ videos: { northbound: VIDEOS.cypressNb } }],
  },
  deerLakeParkway: {
    name: "Deer Lake Parkway Urban Trail",
    shortName: "Deer Lake Pkwy T.",
    legs: [{ videos: { eastbound: VIDEOS.deerLakePkwyEb } }],
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
    legs: [{ videos: { westbound: VIDEOS.dunsmuirWb } }],
  },
  dunsmuirMelvillePender: {
    name: "Dunsmuir St/Melville St/Pender St",
    shortName: "Dunsmuir/Melville",
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.lionsGateBridgeNb } }],
  },
  eastMall: {
    name: "East Mall",
    legs: [{ videos: {} }],
  },
  ewen: {
    name: "Ewen Ave Greenway",
    legs: [{ videos: { westbound: VIDEOS.ewenWb } }],
  },
  francesUnion: {
    name: "Frances Union",
    legs: [{ videos: { westbound: VIDEOS.francesUnionWb } }],
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    legs: [{ videos: { eastbound: VIDEOS.fraserForeshoreEb } }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    legs: [
      { name: "Southlands", videos: {} },
      { name: "Fraser River Park", videos: {} },
      { name: "Marpole", videos: {} },
      {
        name: "Fraserview",
        videos: { eastbound: VIDEOS.fraserRiverFraserviewEb },
      },
      { name: "River District", videos: {} },
    ],
  },
  fraserwoodTrail: {
    name: "Fraserwood Trail",
    legs: [{ videos: {} }],
  },
  gaglardi: {
    name: "Gaglardi Way",
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
  georgia: {
    name: "Georgia St",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.lionsGateBridgeSb,
          westbound: VIDEOS.lionsGateBridgeNb,
        },
      },
    ],
  },
  gilbert: {
    name: "Gilbert Rd",
    legs: [{ videos: {} }],
  },
  gladstone: {
    name: "Gladstone",
    legs: [{ videos: { northbound: VIDEOS.gladstoneNb } }],
  },
  glenlyon: {
    name: "Glenlyon Urban Trail",
    legs: [{ videos: { northbound: VIDEOS.glenlyonNb } }],
  },
  granville: {
    name: "Granville Ave",
    legs: [{ videos: {} }],
  },
  haro: {
    name: "Haro",
    legs: [{ videos: { westbound: VIDEOS.haroWb } }],
  },
  hastingsPark: {
    name: "Hastings Park",
    legs: [
      {
        name: "Windermere <-> Portside",
        videos: { southbound: VIDEOS.hastingsPortsideWindermere },
      },
      {
        name: "Pandora <-> Cassiar",
        videos: { westbound: VIDEOS.hastingsCassiarPandora },
      },
      { name: "Pandora <-> Portside", videos: {} },
      {
        name: "Windermere <-> Cassiar",
        videos: { northbound: VIDEOS.hastingsWindermereCassiar },
      },
      {
        name: "Cassiar <-> Portside",
        videos: { southbound: VIDEOS.hastingsPortsideCassiar },
      },
      { name: "Pandora <-> Windermere", videos: {} },
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
  highlandParkLine: {
    name: "Highland Park Line",
    legs: [{ videos: { eastbound: VIDEOS.highlandParKLineEb } }],
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
    isOneWay: true,
    legs: [{ videos: { northbound: VIDEOS.homerNb } }],
  },
  hornby: {
    name: "Hornby",
    legs: [{ videos: { northbound: VIDEOS.hornbyNb } }],
  },
  howes: {
    name: "Howes St",
    legs: [{ videos: { northbound: VIDEOS.howesNb } }],
  },
  imperial: {
    name: "Imperial Dr",
    legs: [{ videos: {} }],
  },
  imperialPowerline: {
    name: "Imperial Trail/Powerline Trail",
    shortName: "Imperial/Powerline",
    legs: [{ videos: {} }],
  },
  inverness: {
    name: "Inverness",
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    legs: [{ videos: { eastbound: VIDEOS.keeferEb } }],
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    legs: [{ videos: {} }],
  },
  kent: {
    name: "Kent",
    legs: [{ videos: { westbound: VIDEOS.kentWb } }],
  },
  kerr: {
    name: "Kerr St",
    legs: [
      {
        videos: { northbound: VIDEOS.kerrNb, southbound: VIDEOS.kerrSb },
      },
    ],
  },
  killarney: {
    name: "Killarney",
    legs: [{ videos: { eastbound: VIDEOS.killarneyEb } }],
  },
  kingEdward: {
    name: "King Edward Ave",
    legs: [{ videos: {} }],
  },
  knightStreetBridge: {
    name: "Knight Street Bridge",
    legs: [
      {
        name: "to/from Inverness",
        videos: {
          northbound: VIDEOS.knightStBridgeNb,
          southbound: VIDEOS.knightStBridgeSb,
        },
      },
    ],
  },
  lakes: {
    name: "Lakes",
    legs: [{ videos: { northbound: VIDEOS.lakesNb } }],
  },
  lakewood: {
    name: "Lakewood",
    legs: [{ videos: { northbound: VIDEOS.lakewoodNb } }],
  },
  lionsGate: {
    name: "Lions Gate Bridge & Stanley Park Causeway",
    shortName: "Lions Gate Bridge",
    legs: [
      {
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
    legs: [{ videos: {} }],
  },
  lougheed: {
    name: "Lougheed Highway",
    legs: [{ videos: {} }],
  },
  lynas: {
    name: "Lynas Lane",
    legs: [{ videos: {} }],
  },
  marineNw: {
    name: "NW Marine",
    legs: [{ videos: { eastbound: VIDEOS.nwMarineEb } }],
  },
  marineSw: {
    name: "SW Marine",
    legs: [{ videos: { eastbound: VIDEOS.swMarineEb } }],
  },
  marineWay: {
    name: "Marine Way",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.marineWayEb,
          westbound: VIDEOS.marineWayWb,
        },
      },
    ],
  },
  masumiMitsui: {
    name: "Masumi Mitsui Greenway",
    shortName: "Masumi Mitsui Gr.",
    legs: [
      {
        videos: {
          eastbound: VIDEOS.masumiMitsuiEb,
          westbound: VIDEOS.masumiMitsuiWb,
        },
      },
    ],
  },
  metrotown: {
    name: "Metrotown",
    legs: [{ videos: { counterclockwise: VIDEOS.metrotownCcw } }],
  },
  middleArm: {
    name: "Middle Arm Trail",
    legs: [{ videos: {} }],
  },
  midtown: {
    name: "Midtown",
    legs: [
      {
        name: "Vancouver",
        videos: { eastbound: VIDEOS.midtownVancouverEb },
      },
      {
        name: "Burnaby",
        videos: { westbound: VIDEOS.midtownBurnabyWb },
      },
    ],
  },
  millenniumTrail: {
    name: "Millennium Trail",
    legs: [{ videos: {} }],
  },
  minoru: {
    name: "Minoru Blvd",
    legs: [{ videos: {} }],
  },
  mosaic: {
    name: "Mosaic",
    legs: [{ videos: { southbound: VIDEOS.mosaicSb } }],
  },
  nanaimo: {
    name: "Nanaimo St",
    legs: [
      {
        videos: { northbound: VIDEOS.nanaimoNb, southbound: VIDEOS.nanaimoSb },
      },
    ],
  },
  nelson: {
    name: "Nelson St",
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
  },
  nelsonAve: {
    name: "Nelson Ave Path",
    legs: [{ videos: { southbound: VIDEOS.nelsonPathSb } }],
  },
  nicola: {
    name: "Nicola",
    legs: [{ videos: { northbound: VIDEOS.nicolaNb } }],
  },
  no2: {
    name: "No. 2 Rd",
    legs: [{ videos: {} }],
  },
  no2Bridge: {
    name: "No. 2 Rd Bridge",
    legs: [{ videos: {} }],
  },
  no2Path: {
    name: "No. 2 Path",
    legs: [{ videos: {} }],
  },
  no3: {
    name: "No. 3 Rd",
    legs: [{ videos: { northbound: VIDEOS.no3Nb } }],
  },
  no6Path: {
    name: "No. 6 Rd Path",
    legs: [{ videos: {} }],
  },
  northSouth: {
    name: "North/South",
    legs: [{ videos: { southbound: VIDEOS.northSouthSb } }],
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland St",
    legs: [{ videos: {} }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    legs: [
      {
        videos: { northbound: VIDEOS.oakNb, southbound: VIDEOS.oakSb },
      },
    ],
  },
  odlin: {
    name: "Odlin",
    legs: [{ videos: {} }],
  },
  offBroadway: {
    name: "Off Broadway",
    legs: [{ videos: { westbound: VIDEOS.offBroadwayWb } }],
  },
  ontario: {
    name: "Ontario",
    legs: [
      { videos: { northbound: VIDEOS.ontarioNb } },
      {
        name: "Connection with Oakridge Station via 42nd Ave",
        videos: { eastbound: VIDEOS.fortySecondEb },
      },
    ],
  },
  pandora: {
    name: "Pandora",
    legs: [
      {
        videos: { eastbound: VIDEOS.pandoraEb, westbound: VIDEOS.pandoraWb },
      },
    ],
  },
  parkside: {
    name: "Parkside",
    legs: [{ videos: {} }],
  },
  pender: {
    name: "Pender St",
    legs: [{ videos: { eastbound: VIDEOS.penderEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    legs: [{ videos: {} }],
  },
  portRoyalRiverTrail: {
    name: "Port Royal River Trail",
    shortName: "Port Royal River T.",
    legs: [{ videos: { eastbound: VIDEOS.portRoyalEb } }],
  },
  portside: {
    name: "Portside",
    legs: [{ videos: { eastbound: VIDEOS.portsideEb } }],
  },
  powell: {
    name: "Powell",
    legs: [{ videos: { eastbound: VIDEOS.powellEb } }],
  },
  princeEdward: {
    name: "Prince Edward",
    legs: [{ videos: { northbound: VIDEOS.princeEdwardNb } }],
  },
  queensboroughBridge: {
    name: "Queensborough Bridge",
    shortName: "Queensborough B.",
    legs: [
      {
        videos: {
          northbound: VIDEOS.queensboroughBridgeNb,
          southbound: VIDEOS.queensboroughBridgeSb,
        },
      },
    ],
  },
  railwayGreenway: {
    name: "Railway Greenway",
    legs: [{ videos: {} }],
  },
  railway: {
    name: "Railway St",
    legs: [{ videos: {} }],
  },
  richards: {
    name: "Richards",
    legs: [{ videos: { southbound: VIDEOS.richardsSb } }],
  },
  ridgeway: {
    name: "Ridgeway",
    legs: [
      {
        videos: { westbound: VIDEOS.ridgewayWb },
      },
    ],
  },
  riverPkwy: {
    name: "River Parkway",
    legs: [{ videos: {} }],
  },
  royalOak: {
    name: "Royal Oak",
    shortName: "Royal Oak",
    legs: [{ videos: { southbound: VIDEOS.royalOakSb } }],
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    legs: [{ videos: { westbound: VIDEOS.rumbleWb } }],
  },
  rupert: {
    name: "Rupert St",
    legs: [
      {
        videos: { northbound: VIDEOS.rupertNb, southbound: VIDEOS.rupertSb },
      },
    ],
  },
  russBaker: {
    name: "Russ Baker Way",
    legs: [{ videos: {} }],
  },
  seaIslandConnector: {
    name: "Sea Island Connector",
    shortName: "Sea Island Conn.",
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.seaIslandConnectorWb } }],
  },
  seaIslandPath: {
    name: "Sea Island Path",
    legs: [{ videos: {} }],
  },
  seaIslandWay: {
    name: "Sea Island Way",
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.seaIslandWayEb } }],
  },
  seaside: {
    name: "Seaside",
    legs: [
      {
        name: "Coal Harbour",
        videos: { westbound: VIDEOS.seasideCoalHarbourWb },
      },
      {
        name: "Stanley Park",
        videos: { counterclockwise: VIDEOS.seasideStanleyPark },
      },
      { name: "West End", videos: {} },
      { name: "False Creek", videos: {} },
      {
        name: "Kitsilano",
        videos: { westbound: VIDEOS.seasideKitsWb },
      },
      { name: "Jericho & Spanish Banks", videos: {} },
    ],
  },
  seasideBypass: {
    name: "Seaside Bypass",
    legs: [
      { name: "Beach", videos: {} },
      {
        name: "Pacific/Expo",
        videos: {
          eastbound: VIDEOS.seasideBypassPacificEb,
          westbound: VIDEOS.seasideBypassExpoWb,
        },
      },
      {
        // includes quebec
        name: "False Creek South",
        videos: { eastbound: VIDEOS.seasideBypassFalseCreekSouthEb },
      },
      { name: "York", videos: { eastbound: VIDEOS.yorkEb } },
      { name: "3rd", videos: { eastbound: VIDEOS.thirdEb } },
      {
        name: "NW Marine & 4th",
        videos: { eastbound: VIDEOS.seasideBypassMarine4thEb },
      },
      { name: "Whyte", videos: {} },
    ],
  },
  seaToRiver: {
    name: "Sea to River",
    legs: [{ videos: { northbound: VIDEOS.seaToRiverNb } }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    legs: [
      {
        videos: {
          northbound: VIDEOS.secondNarrowsNb,
          southbound: VIDEOS.secondNarrowsSb,
        },
      },
    ],
  },
  sfuPaths: {
    name: "Simon Fraser University Paths",
    shortName: "SFU Paths",
    legs: [{ videos: {} }],
  },
  shellRoadTrail: {
    name: "Shell Road Trail",
    legs: [
      {
        videos: { northbound: VIDEOS.shellNb, southbound: VIDEOS.shellSb },
      },
    ],
  },
  smithe: {
    name: "Smithe St",
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmitheNb } }],
  },
  southDyke: {
    name: "South Dyke Rd",
    legs: [{ videos: { eastbound: VIDEOS.southDykeEb } }],
  },
  southeast: {
    name: "Southeast",
    legs: [{ videos: {} }],
  },
  spiritTrail: {
    name: "Spirit Trail",
    legs: [{ videos: {} }],
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    isOneWay: true,
    legs: [
      {
        name: "Seawall",
        videos: { counterclockwise: VIDEOS.seasideStanleyPark },
      },
      {
        name: "Lost Lagoon",
        videos: { counterclockwise: VIDEOS.lostLagoonEb },
      },
    ],
  },
  stevestonHwy: {
    name: "Steveston Highway Path",
    shortName: "Steveston Hwy Path",
    legs: [{ videos: { eastbound: VIDEOS.stevestonEb } }],
  },
  sunrise: {
    name: "Sunrise",
    legs: [{ videos: { northbound: VIDEOS.sunriseNb } }],
  },
  terminalPath: {
    name: "Terminal Ave Path",
    legs: [
      {
        videos: { eastbound: VIDEOS.terminalEb, westbound: VIDEOS.terminalWb },
      },
    ],
  },
  thunderbird: {
    name: "Thunderbird Blvd/Osoyoos Cr",
    shortName: "Thunderbird Blvd",
    legs: [{ videos: {} }],
  },
  transCanada: {
    name: "Trans Canada Trail (Burnaby)",
    shortName: "Trans Canada Trail",
    legs: [{ videos: { westbound: VIDEOS.seaToRiverNb } }],
  },
  university: {
    name: "University Blvd",
    legs: [{ videos: {} }],
  },
  universityDrE: {
    name: "University Dr E",
    isOneWay: true,
    legs: [{ videos: {} }],
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    legs: [{ videos: {} }],
  },
  valley: {
    name: "Valley",
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  victory: {
    name: "Victory",
    legs: [{ videos: { eastbound: VIDEOS.victoryEb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    legs: [{ videos: { southbound: VIDEOS.walesDuchessSb } }],
  },
  waterfront: {
    name: "Waterfront St",
    legs: [{ videos: { eastbound: VIDEOS.waterfrontEb } }],
  },
  wesbrook: {
    name: "Wesbrook Mall",
    legs: [{ videos: { southbound: VIDEOS.wesbrookSb } }],
  },
  westDyke: {
    name: "West Dyke Trail",
    legs: [{ videos: {} }],
  },
  westMall: {
    name: "West Mall",
    legs: [{ videos: {} }],
  },
  westminsterHwy: {
    name: "Westminster Highway",
    shortName: "Westminster Hwy",
    legs: [{ videos: { westbound: VIDEOS.westminsterWb } }],
  },
  williams: {
    name: "Williams Rd",
    legs: [{ videos: {} }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    legs: [{ videos: {} }],
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    legs: [{ videos: { southbound: VIDEOS.willingdonSb } }],
  },
  windermere: {
    name: "Windermere",
    legs: [
      {
        videos: {
          northbound: VIDEOS.windermereNb,
          southbound: VIDEOS.windermereSb,
        },
      },
    ],
  },
  windsor: {
    name: "Windsor",
    legs: [{ videos: { northbound: VIDEOS.windsorNb } }],
  },
  woodwardsSaunders: {
    name: "Woodwards Rd/Saunders Rd",
    shortName: "Woodwards Rd",
    legs: [{ videos: {} }],
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
