import { VIDEOS } from "./videos";

//// Potential future additions
// Vancouver:
// Burnaby: sprott @ hwy 1
// SFU:
// UBC: (extend agronomy (toronto), acadia?)
// Richmond: south dyke; ...and around steveston
// YVR:
// New Westminster:
// North Vancouver: grand blvd; cotton/main/lower/esplanade/1st; 4th; keith; capilano; dollarton; mt seymour
// West Vancouver: spirit trail alt.; caulfield+; ...more
// Surrey: scott rd; alex fraser; serpentine; timbers; fraser hwy;
// Delta:

export const VANCOUVER = "Vancouver";
export const UBC = "UBC";
export const BURNABY = "Burnaby";
export const RICHMOND = "Richmond";
export const NEW_WESTMINSTER = "New Westminster";
export const SURREY = "Surrey";
export const WEST_VANCOUVER = "West Vancouver";
export const NORTH_VANCOUVER = "North Vancouver";
export const DELTA = "Delta";
export const PORT_MOODY = "Port Moody";
export const COQUITLAM = "Coquitlam";
export const PORT_COQUITLAM = "Port Coquitlam";
export const PITT_MEADOWS = "Pitt Meadows";
export const MAPLE_RIDGE = "Maple Ridge";
export const LANGLEY = "Langley";
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
  templeton: {
    name: "Templeton St",
    cities: [RICHMOND],
    legs: [
      {
        videos: {
          northbound: VIDEOS.templetonNb,
          southbound: VIDEOS.templetonSb,
        },
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.fourteenthEb,
          westbound: VIDEOS.fourteenthWb,
        },
      },
    ],
  },
  fourteenthGap: {
    name: "14th Ave Gap",
    isGap: true,
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.fourteenthGapWb } }],
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.fortyFifthEb,
          westbound: VIDEOS.fortyFifthWb,
        },
      },
    ],
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
    name: "Agronomy Rd/Toronto Rd",
    shortName: "Agronomy/Toronto",
    cities: [UBC],
    legs: [{ videos: { eastbound: VIDEOS.agronomyEb } }],
  },
  alberni: {
    name: "Alberni St",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.alberniEb, westbound: VIDEOS.alberniWb },
      },
    ],
  },
  alder: {
    name: "Alder",
    cities: [VANCOUVER],
    legs: [
      { videos: { northbound: VIDEOS.alderNb, southbound: VIDEOS.alderSb } },
    ],
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.alexanderEb,
          westbound: VIDEOS.alexanderWb,
        },
      },
    ],
  },
  alexFraserBridge: {
    name: "Alex Fraser Bridge",
    cities: [RICHMOND, DELTA],
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
    name: "Barnet Hwy",
    cities: [BURNABY, PORT_MOODY],
    legs: [{ videos: { eastbound: VIDEOS.barnetEb } }],
  },
  bcParkway: {
    name: "BC Parkway",
    cities: [VANCOUVER, BURNABY, NEW_WESTMINSTER, SURREY],
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
  bellevue: {
    name: "Bellevue Ave",
    cities: [WEST_VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.bellevueWb } }],
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.bridgeportTrailEb,
          westbound: VIDEOS.bridgeportTrailWb,
        },
      },
    ],
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    cities: [BURNABY, NEW_WESTMINSTER],
    shortName: "Brunette Fraser Gr.",
    legs: [{ videos: { southbound: VIDEOS.brunetteFraserSb } }],
  },
  burnaby: {
    name: "Burnaby",
    cities: [VANCOUVER],
    legs: [
      { videos: { eastbound: VIDEOS.burnabyEb, westbound: VIDEOS.burnabyWb } },
    ],
  },
  burnabyMtnPkwy: {
    name: "Burnaby Mountain Parkway",
    shortName: "Burnaby Mtn Pkwy",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.burnabyMtnEb } }],
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
    legs: [
      { videos: { northbound: VIDEOS.buteNb, southbound: VIDEOS.buteSb } },
    ],
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
        videos: { northbound: VIDEOS.cambieNb, southbound: VIDEOS.cambieSb },
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
      {
        name: "River Dr Path",
        videos: { eastbound: VIDEOS.riverDrPathEb },
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
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: VIDEOS.carrallSb },
      },
    ],
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
      {
        name: "Broadway & Victoria Dr: Alternate Route",
        videos: { eastbound: VIDEOS.centralValleyVancouverEbAlt },
      },
      { name: "Burnaby", videos: { westbound: VIDEOS.centralValleyBurnabyWb } },
      {
        name: "New Westminster",
        videos: { northbound: VIDEOS.centralValleyNWNb },
      },
    ],
  },
  champlainHeightsGap: {
    name: "Champlain Heights Gap",
    isGap: true,
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.champlainHeightsGapWb } }],
  },
  chancellor: {
    name: "Chancellor Blvd",
    cities: [UBC],
    legs: [{ videos: { westbound: VIDEOS.chancellorWb } }],
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
  cprTrail: {
    name: "CPR Trail",
    cities: [PITT_MEADOWS],
    legs: [
      {
        videos: { eastbound: VIDEOS.cprTrailEb, westbound: VIDEOS.cprTrailWb },
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
    legs: [{ videos: { westbound: VIDEOS.crosstownRichmondWb } }],
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
    legs: [
      {
        videos: { northbound: VIDEOS.cypressNb, southbound: VIDEOS.cypressSb },
      },
    ],
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
    legs: [
      {
        videos: {
          northbound: VIDEOS.dumfriesNb,
          southbound: VIDEOS.dumfriesSb,
        },
      },
    ],
  },
  dunbar: {
    name: "Dunbar St",
    cities: [VANCOUVER],
    legs: [
      { videos: { northbound: VIDEOS.dunbarNb, southbound: VIDEOS.dunbarSb } },
    ],
  },
  dunsmuir: {
    name: "Dunsmuir",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { eastbound: VIDEOS.dunsmuirEb, westbound: VIDEOS.dunsmuirWb },
      },
    ],
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
    legs: [{ videos: { southbound: VIDEOS.eastMallSb } }],
  },
  edmonds: {
    name: "Edmonds",
    cities: [BURNABY],
    legs: [
      {
        name: "Sample's Path",
        videos: { southbound: VIDEOS.edmondsSamplesSb },
      },
      {
        name: "Byrne Creek Secondary/18th St/Salisbury Ave",
        videos: { eastbound: VIDEOS.edmonds18thNb },
      },
      {
        name: "15th St/Britton St/Kingsway Ave",
        videos: { northbound: VIDEOS.highlandParkLineWb },
      },
      {
        name: "18th Ave/19th Ave",
        videos: { northbound: VIDEOS.edmonds18thEb },
      },
      { name: "Stride Ave/16th Ave", videos: {} },
    ],
  },
  ewen: {
    name: "Ewen Ave Greenway",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { westbound: VIDEOS.ewenWb } }],
  },
  ferguson: {
    name: "Ferguson Rd",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.fergusonEb } }],
  },
  fergusonPath: {
    name: "Ferguson Rd Path",
    cities: [RICHMOND],
    legs: [{ videos: { westbound: VIDEOS.fergusonPathWb } }],
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
    legs: [{ videos: { southbound: VIDEOS.gaglardiSb } }],
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
  gatensbury: {
    name: "Gatensbury St/Rd",
    cities: [PORT_MOODY, COQUITLAM],
    legs: [{ videos: { southbound: VIDEOS.gatensburySb } }],
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
    legs: [{ videos: { northbound: VIDEOS.gilbertNb } }],
  },
  gladstone: {
    name: "Gladstone",
    cities: [VANCOUVER],
    legs: [
      {
        videos: {
          northbound: VIDEOS.gladstoneNb,
          southbound: VIDEOS.gladstoneSb,
        },
      },
    ],
  },
  glenlyon: {
    name: "Glenlyon Urban Trail",
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.glenlyonNb } }],
  },
  goldenEars: {
    name: "Golden Ears Bridge",
    cities: [LANGLEY, MAPLE_RIDGE],
    legs: [
      {
        videos: {
          northbound: VIDEOS.goldenEarsBridgeNb,
          southbound: VIDEOS.goldenEarsBridgeSb,
        },
      },
    ],
  },
  grantMcconachie: {
    name: "Grant McConachie Way",
    shortName: "Grant McConachie",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  granville: {
    name: "Granville Ave",
    cities: [RICHMOND],
    legs: [
      { videos: { westbound: VIDEOS.granvilleWb } },
      {
        name: "Connection from Garden City Rd",
        videos: { westbound: VIDEOS.citation },
      },
    ],
  },
  grauer: {
    name: "Grauer Rd",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.grauerEb } }],
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.highlandParkLineEb,
          westbound: VIDEOS.highlandParkLineWb,
        },
      },
    ],
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
    legs: [
      { videos: { northbound: VIDEOS.hornbyNb, southbound: VIDEOS.hornbySb } },
    ],
  },
  horseshoeBay: {
    name: "Horseshoe Bay Dr",
    cities: [WEST_VANCOUVER],
    legs: [{ videos: {} }],
  },
  howes: {
    name: "Howes St",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { northbound: VIDEOS.howesNb } }],
  },
  imperial: {
    name: "Imperial Dr",
    cities: [VANCOUVER],
    legs: [{ videos: { northbound: VIDEOS.imperialNb } }],
  },
  imperialPowerline: {
    name: "Imperial Trail/Powerline Trail",
    shortName: "Imperial/Powerline",
    cities: [UBC],
    legs: [{ videos: { eastbound: VIDEOS.imperialPowerlineEb } }],
  },
  inglis: {
    name: "Inglis Dr",
    cities: [RICHMOND],
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
    legs: [
      { videos: { eastbound: VIDEOS.keeferEb, westbound: VIDEOS.keeferWb } },
    ],
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.kensingtonNb } }],
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
    legs: [
      {
        videos: {
          eastbound: VIDEOS.killarneyEb,
          westbound: VIDEOS.killarneyWb,
        },
      },
    ],
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
        name: "between Inverness and Bridgeport Rd",
        videos: {
          northbound: VIDEOS.knightStBridgeNb,
          southbound: VIDEOS.knightStBridgeSb,
        },
      },
      {
        name: "exiting to Borden St via 64th Ave",
        videos: { northbound: VIDEOS.knightStBridgeVia64th },
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
    cities: [VANCOUVER, WEST_VANCOUVER],
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
    legs: [{ videos: { eastbound: VIDEOS.londonDublinEb } }],
  },
  lougheed: {
    name: "Lougheed Hwy",
    cities: [BURNABY, COQUITLAM],
    legs: [
      {
        name: "Burnaby/Coquitlam",
        videos: { eastbound: VIDEOS.lougheedEb, westbound: VIDEOS.lougheedWb },
      },
    ],
  },
  lynas: {
    name: "Lynas Ln",
    cities: [RICHMOND],
    legs: [{ videos: { northbound: VIDEOS.lynasNb } }],
  },
  marineNw: {
    name: "NW Marine",
    cities: [VANCOUVER, UBC],
    legs: [{ videos: { eastbound: VIDEOS.nwMarineEb } }],
  },
  marineSw: {
    name: "SW Marine",
    cities: [VANCOUVER, UBC],
    legs: [
      {
        videos: { eastbound: VIDEOS.swMarineEb, westbound: VIDEOS.swMarineWb },
      },
    ],
  },
  marineDr: {
    name: "Marine Dr (West Vancouver)",
    shortName: "Marine (West V.)",
    cities: [WEST_VANCOUVER],
    legs: [
      { videos: { westbound: VIDEOS.marineDrWb } },
      {
        name: "St Georges Ave: Alternate Route",
        videos: { eastbound: VIDEOS.stGeorgesEb },
      },
      {
        name: "Greenleaf Rd: Alternate Route",
        videos: { eastbound: VIDEOS.greenleafEb },
      },
      {
        name: "Water Ln/Piccadilly S: Alternate Route",
        videos: { eastbound: VIDEOS.waterPiccadillyEb },
      },
    ],
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
  marryHillBypass: {
    name: "Mary Hill Bypass",
    isIncomplete: true,
    cities: [COQUITLAM, PORT_COQUITLAM],
    legs: [
      {
        name: "Coquitlam River",
        videos: { eastbound: VIDEOS.lougheedEb, westbound: VIDEOS.lougheedWb },
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
  mcdonaldBeachTrail: {
    name: "McDonald Beach Trail",
    shortName: "McDonald Beach T.",
    cities: [RICHMOND],
    legs: [{ videos: { westbound: VIDEOS.mcdonaldBeachTrailWb } }],
  },
  metrotown: {
    name: "Metrotown",
    cities: [BURNABY],
    legs: [
      {
        videos: {
          clockwise: VIDEOS.metrotownCw,
          counterclockwise: VIDEOS.metrotownCcw,
        },
      },
    ],
  },
  middleArm: {
    name: "Middle Arm Trail",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.middleArmEb } }],
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
  miller: {
    name: "Miller Rd",
    cities: [RICHMOND],
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
    legs: [
      { videos: { northbound: VIDEOS.nicolaNb, southbound: VIDEOS.nicolaSb } },
    ],
  },
  no2: {
    name: "No. 2 Rd",
    cities: [RICHMOND],
    legs: [{ videos: { northbound: VIDEOS.no2Nb } }],
  },
  no2Bridge: {
    name: "No. 2 Rd Bridge",
    cities: [RICHMOND],
    legs: [
      {
        videos: {
          northbound: VIDEOS.no2BridgeNb,
          southbound: VIDEOS.no2BridgeSb,
        },
      },
    ],
  },
  no2Path: {
    name: "No. 2 Rd Path",
    cities: [RICHMOND],
    legs: [{ videos: { northbound: VIDEOS.no2PathNb } }],
  },
  no3: {
    name: "No. 3 Rd",
    cities: [RICHMOND],
    legs: [{ videos: { northbound: VIDEOS.no3Nb, southbound: VIDEOS.no3Sb } }],
  },
  no6Path: {
    name: "No. 6 Rd Path",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  northSouth: {
    name: "North/South",
    cities: [BURNABY],
    legs: [
      {
        videos: {
          northbound: VIDEOS.northSouthNb,
          southbound: VIDEOS.northSouthSb,
        },
      },
    ],
  },
  nService: {
    name: "North Service Rd",
    cities: [RICHMOND],
    legs: [{ videos: {} }],
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland/Burris",
    cities: [BURNABY],
    legs: [{ videos: { eastbound: VIDEOS.oaklandBurrisEb } }],
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
    legs: [{ videos: { westbound: VIDEOS.odlinWb } }],
  },
  offBroadway: {
    name: "Off Broadway",
    cities: [VANCOUVER],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.offBroadwayEb,
          westbound: VIDEOS.offBroadwayWb,
        },
      },
    ],
  },
  ontario: {
    name: "Ontario",
    cities: [VANCOUVER],
    legs: [
      {
        videos: { northbound: VIDEOS.ontarioNb, southbound: VIDEOS.ontarioSb },
      },
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
    legs: [{ videos: { northbound: VIDEOS.parksideNb } }],
  },
  pender: {
    name: "Pender St",
    cities: [VANCOUVER],
    legs: [
      { videos: { eastbound: VIDEOS.penderEb, westbound: VIDEOS.penderWb } },
    ],
  },
  pittRiverBridge: {
    name: "Pitt River Bridge",
    cities: [PORT_COQUITLAM, PITT_MEADOWS],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.pittRiverBridgeEb,
          westbound: VIDEOS.pittRiverBridgeWb,
        },
      },
    ],
  },
  pocoTrail: {
    name: "Traboulay PoCo Trail",
    shortName: "PoCo Trail",
    isIncomplete: true,
    cities: [PORT_COQUITLAM],
    legs: [{ name: "South Pitt River", videos: { eastbound: VIDEOS.pocoEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    cities: [COQUITLAM, SURREY],
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
  portsideGap: {
    name: "Portside Gap",
    isGap: true,
    cities: [VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.portsideGapWb } }],
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
  railway: {
    name: "Railway Ave",
    cities: [RICHMOND],
    legs: [{ videos: { southbound: VIDEOS.railwaySb } }],
  },
  railwayGreenway: {
    name: "Railway Greenway",
    cities: [RICHMOND],
    legs: [{ videos: { southbound: VIDEOS.railwayGreenwaySb } }],
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
    name: "River Pkwy",
    cities: [RICHMOND],
    legs: [{ videos: { southbound: VIDEOS.riverPkwySb } }],
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
    legs: [
      {
        videos: {
          northbound: VIDEOS.russBakerNb,
          southbound: VIDEOS.russBakerSb,
        },
      },
    ],
  },
  stJohns: {
    name: "Saint Johns St Path",
    cities: [PORT_MOODY],
    legs: [{ videos: { eastbound: VIDEOS.stJohnsEb } }],
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
    legs: [{ videos: { northbound: VIDEOS.seaIslandPathNb } }],
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
      {
        name: "False Creek",
        videos: { clockwise: VIDEOS.seasideFalseCreekCw },
      },
      {
        name: "Kitsilano",
        videos: { westbound: VIDEOS.seasideKitsWb },
      },
      {
        name: "Jericho & Spanish Banks",
        videos: { westbound: VIDEOS.seasideJerichoWb },
      },
    ],
  },
  seasideBypass: {
    name: "Seaside Bypass",
    cities: [VANCOUVER],
    legs: [
      { name: "Beach", videos: { westbound: VIDEOS.seasideBypassBeachWb } },
      {
        name: "Pacific/Expo",
        videos: {
          eastbound: VIDEOS.seasideBypassPacificEb,
          westbound: VIDEOS.seasideBypassExpoWb,
        },
      },
      {
        name: "False Creek South",
        videos: {
          eastbound: VIDEOS.seasideBypassFalseCreekSouthEb,
          westbound: VIDEOS.seasideBypassFalseCreekSouthWb,
        },
      },
      { name: "York & 3rd", videos: {} },
      {
        name: "NW Marine & 4th",
        videos: { eastbound: VIDEOS.seasideBypassMarine4thEb },
      },
      { name: "Whyte", videos: { westbound: VIDEOS.seasideBypassWhyteWb } },
    ],
  },
  seaToRiver: {
    name: "Sea to River",
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.seaToRiverNb } }],
  },
  seaview: {
    name: "Seaview",
    cities: [WEST_VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.seaviewWb } }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    cities: [VANCOUVER, NORTH_VANCOUVER],
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
    legs: [
      { name: "Burnaby Mountain Parkway", videos: {} },
      {
        name: "University Drive West",
        videos: { westbound: VIDEOS.universityDrWPathWb },
      },
      { name: "Gaglardi Way", videos: { northbound: VIDEOS.gaglardiPathNb } },
      {
        name: "South Campus Road",
        videos: { westbound: VIDEOS.sCampusPathNWb },
      },
      {
        name: "Greenhouse Lane/Nelson Way",
        videos: { eastbound: VIDEOS.greenhousePathEb },
      },
      {
        name: "University Drive East",
        videos: { westbound: VIDEOS.universityDrEPathWb },
      },
    ],
  },
  shellRoadTrail: {
    name: "Shell Rd Trail",
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
    cities: [WEST_VANCOUVER, NORTH_VANCOUVER],
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
    name: "Steveston Hwy Path",
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
  transCanadaHwy: {
    name: "Trans Canada Hwy",
    isIncomplete: true,
    cities: [WEST_VANCOUVER],
    legs: [{ name: "West Vancouver", videos: {} }],
  },
  transCanadaTrail: {
    name: "Trans Canada Trail",
    isIncomplete: true,
    cities: [VANCOUVER, BURNABY],
    legs: [{ name: "Burnaby", videos: { westbound: VIDEOS.seaToRiverNb } }],
  },
  university: {
    name: "University Blvd",
    cities: [UBC],
    legs: [{ videos: { eastbound: VIDEOS.universityEb } }],
  },
  universityDrE: {
    name: "University Dr E",
    cities: [BURNABY],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.universityDrEEb } }],
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    cities: [NEW_WESTMINSTER],
    legs: [{ videos: { southbound: VIDEOS.uptownDowntownSb } }],
  },
  valley: {
    name: "Valley",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  victory: {
    name: "Victory",
    cities: [BURNABY],
    legs: [
      { videos: { eastbound: VIDEOS.victoryEb, westbound: VIDEOS.victoryWb } },
    ],
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
    name: "Westminster Hwy",
    cities: [RICHMOND],
    legs: [{ videos: { westbound: VIDEOS.westminsterWb } }],
  },
  westportMathers: {
    name: "Westport/Southridge/Westmount/Mathers+",
    shortName: "Westport/Mathers+",
    cities: [WEST_VANCOUVER],
    legs: [{ videos: { westbound: VIDEOS.westportMathersWb } }],
  },
  williams: {
    name: "Williams Rd",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.williamsEb } }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    cities: [BURNABY],
    legs: [{ videos: { northbound: VIDEOS.willingdonLinearNb } }],
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
    legs: [
      {
        videos: { northbound: VIDEOS.windsorNb, southbound: VIDEOS.windsorSb },
      },
    ],
  },
  woodwardsSaunders: {
    name: "Woodwards/Saunders",
    shortName: "Woodwards",
    cities: [RICHMOND],
    legs: [{ videos: { eastbound: VIDEOS.woodwardsSaundersEb } }],
  },
  york: {
    name: "York",
    cities: [VANCOUVER],
    legs: [{ videos: { eastbound: VIDEOS.yorkEb, westbound: VIDEOS.yorkWb } }],
  },
  yukon: {
    name: "Yukon",
    cities: [VANCOUVER],
    legs: [{ videos: { southbound: VIDEOS.yukonSb } }],
  },
};
