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
export const VISIBLE = "In view (approx.)";
export const ALL = "All";

export const ROUTES = {
  third: {
    name: "3rd",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.thirdEb } }],
  },
  fourth: {
    name: "4th",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.fourthEb, westbound: VIDEOS.fourthWb },
      },
    ],
  },
  tenth: {
    name: "10th",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb },
      },
    ],
  },
  fourteenth: {
    name: "14th",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.fourteenthWb } }],
  },
  sixteenth: {
    name: "16th Ave",
    cities: [UBC],
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
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.twentyNinthWb } }],
  },
  fortyFifth: {
    name: "45th",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.fortyFifthWb } }],
  },
  sixtySeventh: {
    name: "67th",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  acadia: {
    name: "Acadia Rd",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  adanac: {
    name: "Adanac",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.adanacWb } }],
  },
  agnes: {
    name: "Agnes St",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  agronomy: {
    name: "Agronomy Rd",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  alberni: {
    name: "Alberni St",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.alberniEb } }],
  },
  alder: {
    name: "Alder",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.alderNb } }],
  },
  alderbridge: {
    name: "Alderbridge Way Path",
    shortName: "Alderbridge Path",
    cities: [RICHMOND],
    legs: [{ videos: { westbound: VIDEOS.alderbridgeWb } }],
  },
  alexander: {
    name: "Alexander",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.alexanderEb } }],
  },
  alexFraserBridge: {
    name: "Alex Fraser Bridge",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.arbutusGreenwayNb } }],
  },
  arthurLaingBridge: {
    name: "Arthur Laing Bridge",
    // shortName: "Arthur Laing B.",
    cities: [VANCOUVER, RICHMOND],
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
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.balaclavaNb } }],
  },
  barnet: {
    name: "Barnet Highway",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  bcParkway: {
    name: "BC Parkway",
    cities: [VANCOUVER, BURNABY, NEW_WESTMINSTER],
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
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.beattyNb, southbound: VIDEOS.beattySb },
      },
    ],
  },
  bigBendPath: {
    name: "Big Bend Path",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  blanca: {
    name: "Blanca St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.blancaNb, southbound: VIDEOS.blancaSb },
      },
    ],
  },
  boundary: {
    name: "Boundary Trail",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { southbound: VIDEOS.boundaryTrailSb } }],
  },
  boyd: {
    name: "Boyd St",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  boydTrail: {
    name: "Boyd St Trail",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { westbound: VIDEOS.boydTrailWb } }],
  },
  bridgeportTrail: {
    name: "Bridgeport Trail",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.bridgeportTrailEb } }],
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    cities: [BURNABY, NEW_WESTMINSTER],
    shortName: "Brunette Fraser Gr.",
    legs: [
      { name: "Burnaby", videos: {} },
      { name: "New Westminster", videos: {} },
    ],
  },
  burnaby: {
    name: "Burnaby",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.burnabyWb } }],
  },
  burnabyMtnPkwy: {
    name: "Burnaby Mountain Parkway",
    shortName: "Burnaby Mtn Pkwy",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  burrard: {
    name: "Burrard St",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.buteSb } }],
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    isOneWay: true,
    legs: [
      {
        videos: { northbound: VIDEOS.cambieGastownNb },
      },
    ],
  },
  cambieBridge: {
    name: "Cambie Bridge",
    cities: [VANCOUVER],
    legs: [
      {
        videos: {
          northbound: VIDEOS.cambieBridgeSmitheNb,
          southbound: VIDEOS.cambieBridgeNelsonSb,
        },
      },
      {
        name: "Seawall to Seawall",
        videos: { southbound: VIDEOS.cambieBridgeSb },
      },
    ],
  },
  canadaLine: {
    name: "Canada Line Path",
    cities: [VANCOUVER, RICHMOND],
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
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.carderoNb } }],
  },
  cariboo: {
    name: "Cariboo",
    cities: [BURNABY],
    legs: [{ videos: { southbound: VIDEOS.caribooSb } }],
  },
  carnarvon: {
    name: "Carnarvon St",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  carrall: {
    name: "Carrall",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.carrallNb } }],
  },
  cassiar: {
    name: "Cassiar",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.cassiarSb } }],
  },
  centralParkPerimeterTrail: {
    name: "Central Park Perimeter Trail",
    shortName: "Central Park Perim.",
    cities: [BURNABY],
    legs: [
      {
        videos: { clockwise: VIDEOS.centralParkPerimeterTrailCw },
      },
    ],
  },
  centralValleyGreenway: {
    name: "Central Valley Greenway",
    shortName: "Central Valley Gr.",
    cities: [VANCOUVER, BURNABY, NEW_WESTMINSTER],
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
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  chilco: {
    name: "Chilco",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.chilcoSb } }],
  },
  columbia: {
    name: "Columbia",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.columbiaNb } }],
  },
  comoxHelmcken: {
    name: "Comox Helmcken",
    cities: [VANCOUVER],
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
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  crosstownRichmond: {
    name: "Crosstown",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  crosstownNewWestminster: {
    name: "Crosstown Greenway",
    shortName: "Crosstown Gr.",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  cypress: {
    name: "Cypress",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.cypressNb } }],
  },
  deerLakeParkway: {
    name: "Deer Lake Parkway Urban Trail",
    shortName: "Deer Lake Pkwy T.",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.deerLakePkwyEb } }],
  },
  dumfries: {
    name: "Dumfries",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.dumfriesNb } }],
  },
  dunbar: {
    name: "Dunbar St",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.dunbarNb } }],
  },
  dunsmuir: {
    name: "Dunsmuir",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.dunsmuirWb } }],
  },
  dunsmuirMelvillePender: {
    name: "Dunsmuir St/Melville St/Pender St",
    shortName: "Dunsmuir/Melville",
    cities: [VANCOUVER],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.lionsGateBridgeNb } }],
  },
  eastMall: {
    name: "East Mall",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  ewen: {
    name: "Ewen Ave Greenway",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { westbound: VIDEOS.ewenWb } }],
  },
  francesUnion: {
    name: "Frances Union",
    cities: [BURNABY],
    legs: [{ videos: { westbound: VIDEOS.francesUnionWb } }],
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.fraserForeshoreEb } }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    cities: [VANCOUVER],
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
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  gaglardi: {
    name: "Gaglardi Way",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  gardenCity: {
    name: "Garden City Rd",
    cities: [RICHMOND],
    legs: [
      {
        videos: {
          northbound: VIDEOS.gardenCityNb,
          southbound: VIDEOS.gardenCitySb,
        },
      },
      {
        name: "Connection to Granville Ave",
        videos: { westbound: VIDEOS.citation },
      },
    ],
  },
  georgia: {
    name: "Georgia St",
    cities: [VANCOUVER],
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
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  gladstone: {
    name: "Gladstone",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.gladstoneNb } }],
  },
  glenlyon: {
    name: "Glenlyon Urban Trail",
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.glenlyonNb } }],
  },
  granville: {
    name: "Granville Ave",
    cities: [RICHMOND],
    legs: [
      { videos: {} },
      {
        name: "Connection from Garden City Rd",
        videos: { westbound: VIDEOS.citation },
      },
    ],
  },
  haro: {
    name: "Haro",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.haroWb } }],
  },
  hastingsPark: {
    name: "Hastings Park",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.heatherSb } }],
  },
  highbury: {
    name: "Highbury St",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.highburyNb } }],
  },
  highlandParkLine: {
    name: "Highland Park Line",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.highlandParKLineEb } }],
  },
  hillcrest: {
    name: "Hillcrest",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    isOneWay: true,
    legs: [{ videos: { northbound: VIDEOS.homerNb } }],
  },
  hornby: {
    name: "Hornby",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.hornbyNb } }],
  },
  howes: {
    name: "Howes St",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { northbound: VIDEOS.howesNb } }],
  },
  imperial: {
    name: "Imperial Dr",
    cities: [VANCOUVER],
    legs: [{ videos: {} }],
  },
  imperialPowerline: {
    name: "Imperial Trail/Powerline Trail",
    shortName: "Imperial/Powerline",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  inverness: {
    name: "Inverness",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.keeferEb } }],
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  kent: {
    name: "Kent",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.kentWb } }],
  },
  kerr: {
    name: "Kerr St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.kerrNb, southbound: VIDEOS.kerrSb },
      },
    ],
  },
  killarney: {
    name: "Killarney",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.killarneyEb } }],
  },
  kingEdward: {
    name: "King Edward Ave",
    cities: [VANCOUVER],
    legs: [{ videos: {} }],
  },
  knightStreetBridge: {
    name: "Knight Street Bridge",
    cities: [VANCOUVER, RICHMOND],
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
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.lakesNb } }],
  },
  lakewood: {
    name: "Lakewood",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.lakewoodNb } }],
  },
  lionsGate: {
    name: "Lions Gate Bridge & Stanley Park Causeway",
    shortName: "Lions Gate Bridge",
    cities: [VANCOUVER],
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
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  lougheed: {
    name: "Lougheed Highway",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  lynas: {
    name: "Lynas Lane",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  marineNw: {
    name: "NW Marine",
    cities: [VANCOUVER, UBC],
    legs: [{ videos: { eastbound: VIDEOS.nwMarineEb } }],
  },
  marineSw: {
    name: "SW Marine",
    cities: [VANCOUVER, UBC],
    legs: [{ videos: { eastbound: VIDEOS.swMarineEb } }],
  },
  marineWay: {
    name: "Marine Way",
    cities: [BURNABY],
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
    cities: [VANCOUVER],
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
    cities: [BURNABY],
    legs: [{ videos: { counterclockwise: VIDEOS.metrotownCcw } }],
  },
  middleArm: {
    name: "Middle Arm Trail",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  midtown: {
    name: "Midtown",
    cities: [VANCOUVER, BURNABY],
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
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  minoru: {
    name: "Minoru Blvd",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  mosaic: {
    name: "Mosaic",
    cities: [VANCOUVER],
    legs: [
      { videos: { northbound: VIDEOS.mosaicNb, southbound: VIDEOS.mosaicSb } },
    ],
  },
  nanaimo: {
    name: "Nanaimo St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.nanaimoNb, southbound: VIDEOS.nanaimoSb },
      },
    ],
  },
  nelson: {
    name: "Nelson St",
    cities: [VANCOUVER],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
  },
  nelsonAve: {
    name: "Nelson Ave Path",
    cities: [BURNABY],
    legs: [{ videos: { southbound: VIDEOS.nelsonPathSb } }],
  },
  nicola: {
    name: "Nicola",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.nicolaNb } }],
  },
  no2: {
    name: "No. 2 Rd",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  no2Bridge: {
    name: "No. 2 Rd Bridge",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  no2Path: {
    name: "No. 2 Path",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  no3: {
    name: "No. 3 Rd",
    cities: [RICHMOND],
    legs: [{ videos: { northbound: VIDEOS.no3Nb } }],
  },
  no6Path: {
    name: "No. 6 Rd Path",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  northSouth: {
    name: "North/South",
    cities: [BURNABY],
    legs: [{ videos: { southbound: VIDEOS.northSouthSb } }],
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland St",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    cities: [VANCOUVER, RICHMOND],
    legs: [
      {
        videos: { northbound: VIDEOS.oakNb, southbound: VIDEOS.oakSb },
      },
    ],
  },
  odlin: {
    name: "Odlin",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  offBroadway: {
    name: "Off Broadway",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.offBroadwayWb } }],
  },
  ontario: {
    name: "Ontario",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.pandoraEb, westbound: VIDEOS.pandoraWb },
      },
    ],
  },
  parkside: {
    name: "Parkside",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  pender: {
    name: "Pender St",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.penderEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    cities: [],
    legs: [{ videos: {} }],
  },
  portRoyalRiverTrail: {
    name: "Port Royal River Trail",
    shortName: "Port Royal River T.",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { eastbound: VIDEOS.portRoyalEb } }],
  },
  portside: {
    name: "Portside",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.portsideEb } }],
  },
  powell: {
    name: "Powell",
    cities: [VANCOUVER],
    legs: [
      { videos: { eastbound: VIDEOS.powellEb, westbound: VIDEOS.powellWb } },
    ],
  },
  princeEdward: {
    name: "Prince Edward",
    cities: [VANCOUVER],
    legs: [
      {
        videos: {
          northbound: VIDEOS.princeEdwardNb,
          southbound: VIDEOS.princeEdwardSb,
        },
      },
    ],
  },
  queensboroughBridge: {
    name: "Queensborough Bridge",
    shortName: "Queensborough B.",
    cities: [NEW_WESTMINSTER],
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
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  railway: {
    name: "Railway St",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  richards: {
    name: "Richards",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.richardsSb } }],
  },
  ridgeway: {
    name: "Ridgeway",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { westbound: VIDEOS.ridgewayWb },
      },
    ],
  },
  riverPkwy: {
    name: "River Parkway",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  royalOak: {
    name: "Royal Oak",
    shortName: "Royal Oak",
    cities: [BURNABY],
    legs: [{ videos: { southbound: VIDEOS.royalOakSb } }],
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    cities: [BURNABY],
    legs: [{ videos: { westbound: VIDEOS.rumbleWb } }],
  },
  rupert: {
    name: "Rupert St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.rupertNb, southbound: VIDEOS.rupertSb },
      },
    ],
  },
  russBaker: {
    name: "Russ Baker Way",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  seaIslandConnector: {
    name: "Sea Island Connector",
    shortName: "Sea Island Conn.",
    cities: [RICHMOND],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.seaIslandConnectorWb } }],
  },
  seaIslandPath: {
    name: "Sea Island Path",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  seaIslandWay: {
    name: "Sea Island Way",
    cities: [RICHMOND],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.seaIslandWayEb } }],
  },
  seaside: {
    name: "Seaside",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
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
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.seaToRiverNb } }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    cities: [VANCOUVER],
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
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  shellRoadTrail: {
    name: "Shell Road Trail",
    cities: [RICHMOND],
    legs: [
      {
        videos: { northbound: VIDEOS.shellNb, southbound: VIDEOS.shellSb },
      },
    ],
  },
  smithe: {
    name: "Smithe St",
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.cambieBridgeSmitheNb } }],
  },
  southDyke: {
    name: "South Dyke Rd",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { eastbound: VIDEOS.southDykeEb } }],
  },
  southeast: {
    name: "Southeast",
    cities: [BURNABY],
    legs: [{ videos: { westbound: VIDEOS.southeastWb } }],
  },
  spiritTrail: {
    name: "Spirit Trail",
    cities: [],
    legs: [{ videos: {} }],
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    cities: [VANCOUVER],
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
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.stevestonEb } }],
  },
  sunrise: {
    name: "Sunrise",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.sunriseNb } }],
  },
  terminalPath: {
    name: "Terminal Ave Path",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.terminalEb, westbound: VIDEOS.terminalWb },
      },
    ],
  },
  thunderbird: {
    name: "Thunderbird Blvd/Osoyoos Cr",
    shortName: "Thunderbird Blvd",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  transCanada: {
    name: "Trans Canada Trail (Burnaby)",
    shortName: "Trans Canada Trail",
    cities: [BURNABY],
    legs: [{ videos: { westbound: VIDEOS.seaToRiverNb } }],
  },
  university: {
    name: "University Blvd",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  universityDrE: {
    name: "University Dr E",
    cities: [BURNABY],
    isOneWay: true,
    legs: [{ videos: {} }],
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: {} }],
  },
  valley: {
    name: "Valley",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  victory: {
    name: "Victory",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.victoryEb } }],
  },
  walesDuchess: {
    name: "Wales Duchess",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.walesDuchessSb } }],
  },
  waterfront: {
    name: "Waterfront St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.waterfrontEb,
          westbound: VIDEOS.waterfrontWb,
        },
      },
    ],
  },
  wesbrook: {
    name: "Wesbrook Mall",
    cities: [UBC],
    legs: [{ videos: { southbound: VIDEOS.wesbrookSb } }],
  },
  westDyke: {
    name: "West Dyke Trail",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  westMall: {
    name: "West Mall",
    cities: [UBC],
    legs: [{ videos: {} }],
  },
  westminsterHwy: {
    name: "Westminster Highway",
    shortName: "Westminster Hwy",
    cities: [RICHMOND],
    legs: [{ videos: { westbound: VIDEOS.westminsterWb } }],
  },
  williams: {
    name: "Williams Rd",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    cities: [BURNABY],
    legs: [{ videos: {} }],
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    cities: [BURNABY],
    legs: [{ videos: { southbound: VIDEOS.willingdonSb } }],
  },
  windermere: {
    name: "Windermere",
    cities: [VANCOUVER],
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
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.windsorNb } }],
  },
  woodwardsSaunders: {
    name: "Woodwards Rd/Saunders Rd",
    shortName: "Woodwards Rd",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  york: {
    name: "York",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.yorkEb } }],
  },
  yukon: {
    name: "Yukon",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.yukonSb } }],
  },
};
