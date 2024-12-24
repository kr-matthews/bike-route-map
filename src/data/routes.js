import { REGIONS } from "./regions";
import { VIDEOS } from "./videos";

//// Potential future additions
// Vancouver:
// Burnaby: sprott @ hwy 1
// SFU:
// UBC: (extend agronomy (toronto), acadia?)
// Richmond: south dyke; ...and around steveston
// YVR:
// New Westminster:
// North Vancouver: lions gate village; queensbury; necklace: grand blvd & keith; capilano; dollarton; mt seymour;
// West Vancouver: spirit trail alt.?; ...more
// Surrey: scott rd; alex fraser; serpentine; timbers; fraser hwy;
// Delta:

export const ROUTES = {
  first2nd: {
    name: "1st/2nd St",
    regions: [REGIONS.northVancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.first2ndEb, westbound: VIDEOS.first2ndWb },
      },
    ],
  },
  third: {
    name: "3rd",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.thirdEb } }],
  },
  thirdNv: {
    name: "3rd St",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  fourth: {
    name: "4th",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.fourthEb, westbound: VIDEOS.fourthWb },
      },
    ],
  },
  fourthNV: {
    name: "4th St",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { westbound: VIDEOS.fourthNVWb } }],
  },
  tenth: {
    name: "10th",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb },
      },
    ],
  },
  fourteenth: {
    name: "14th",
    regions: [REGIONS.vancouver],
    legs: [
      {
        name: "Original Alder <-> Prince Edward",
        videos: {
          eastbound: VIDEOS.fourteenthEb,
          westbound: VIDEOS.fourteenthWb,
        },
      },
      {
        name: "2024 Extension to Arbutus Greenway",
        videos: {
          westbound: VIDEOS.fourteenthExtWb,
        },
      },
    ],
  },
  fourteenthGap: {
    name: "14th Ave Gap",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.fourteenthGapWb } }],
  },
  fifteenth: {
    name: "15th St",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  sixteenth: {
    name: "16th Ave",
    regions: [REGIONS.ubc],
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
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.twentyNinthWb } }],
  },
  fortyFifth: {
    name: "45th",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
  },
  acadia: {
    name: "Acadia Rd",
    regions: [REGIONS.ubc],
    legs: [{ videos: {} }],
  },
  adanac: {
    name: "Adanac",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.adanacWb } }],
  },
  agnes: {
    name: "Agnes St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: {} }],
  },
  agronomy: {
    name: "Agronomy Rd/Toronto Rd",
    shortName: "Agronomy/Toronto",
    regions: [REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.agronomyEb } }],
  },
  alberni: {
    name: "Alberni St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.alberniEb, westbound: VIDEOS.alberniWb },
      },
    ],
  },
  alder: {
    name: "Alder",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.alderNb, southbound: VIDEOS.alderSb } },
    ],
  },
  alderbridge: {
    name: "Alderbridge Way Path",
    shortName: "Alderbridge Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.alderbridgeWb } }],
  },
  alexander: {
    name: "Alexander",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.richmond, REGIONS.delta],
    legs: [{ videos: {} }],
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.arbutusGreenwayNb } }],
  },
  arthurLaingBridge: {
    name: "Arthur Laing Bridge",
    // shortName: "Arthur Laing B.",
    regions: [REGIONS.vancouver, REGIONS.richmond],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.balaclavaNb } }],
  },
  barnet: {
    name: "Barnet Hwy",
    regions: [REGIONS.burnaby, REGIONS.portMoody],
    legs: [{ videos: { eastbound: VIDEOS.barnetEb } }],
  },
  bcParkway: {
    name: "BC Parkway",
    regions: [
      REGIONS.vancouver,
      REGIONS.burnaby,
      REGIONS.newWestminster,
      REGIONS.surrey,
    ],
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
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.beattyNb, southbound: VIDEOS.beattySb },
      },
    ],
  },
  bellevue: {
    name: "Bellevue Ave",
    regions: [REGIONS.westVancouver],
    legs: [{ videos: { westbound: VIDEOS.bellevueWb } }],
  },
  bewickeGreenway: {
    name: "Bewicke Greenway",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  bigBendPath: {
    name: "Big Bend Path",
    regions: [REGIONS.burnaby],
    legs: [{ videos: {} }],
  },
  blanca: {
    name: "Blanca St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.blancaNb, southbound: VIDEOS.blancaSb },
      },
    ],
  },
  boundary: {
    name: "Boundary Trail",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { southbound: VIDEOS.boundaryTrailSb } }],
  },
  boyd: {
    name: "Boyd St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: {} }],
  },
  boydTrail: {
    name: "Boyd St Trail",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { westbound: VIDEOS.boydTrailWb } }],
  },
  bridgeportTrail: {
    name: "Bridgeport Trail",
    regions: [REGIONS.richmond],
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
    regions: [REGIONS.burnaby, REGIONS.newWestminster],
    shortName: "Brunette Fraser Gr.",
    legs: [{ videos: { southbound: VIDEOS.brunetteFraserSb } }],
  },
  burnaby: {
    name: "Burnaby",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.burnabyEb, westbound: VIDEOS.burnabyWb } },
    ],
  },
  burnabyMtnPkwy: {
    name: "Burnaby Mountain Parkway",
    shortName: "Burnaby Mtn Pkwy",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { eastbound: VIDEOS.burnabyMtnEb } }],
  },
  burrard: {
    name: "Burrard St",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.buteNb, southbound: VIDEOS.buteSb } },
    ],
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: {} }],
  },
  cambie: {
    name: "Cambie St",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [
      {
        videos: { northbound: VIDEOS.cambieGastownNb },
      },
    ],
  },
  cambieBridge: {
    name: "Cambie Bridge",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.cambieBridgeSmitheNb,
          southbound: VIDEOS.cambieBridgeNelsonSb,
        },
      },
      {
        name: "Seawall to Seawall",
        videos: {
          northbound: VIDEOS.cambieBridgeNb,
          southbound: VIDEOS.cambieBridgeSb,
        },
      },
    ],
  },
  canadaLine: {
    name: "Canada Line Path",
    regions: [REGIONS.vancouver, REGIONS.richmond],
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
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.carderoNb, southbound: VIDEOS.carderoSb },
      },
    ],
  },
  cariboo: {
    name: "Cariboo",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.caribooSb } }],
  },
  carnarvon: {
    name: "Carnarvon St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: {} }],
  },
  carrall: {
    name: "Carrall",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: VIDEOS.carrallSb },
      },
    ],
  },
  cassiar: {
    name: "Cassiar",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.cassiarSb } }],
  },
  caulfeild: {
    name: "Caulfeild",
    regions: [REGIONS.westVancouver],
    legs: [{ videos: {} }],
  },
  centralParkPerimeterTrail: {
    name: "Central Park Perimeter Trail",
    shortName: "Central Park Perim.",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: { clockwise: VIDEOS.centralParkPerimeterTrailCw },
      },
    ],
  },
  centralValleyGreenway: {
    name: "Central Valley Greenway",
    shortName: "Central Valley Gr.",
    regions: [REGIONS.vancouver, REGIONS.burnaby, REGIONS.newWestminster],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.champlainHeightsGapWb } }],
  },
  chancellor: {
    name: "Chancellor Blvd",
    regions: [REGIONS.ubc],
    legs: [{ videos: { westbound: VIDEOS.chancellorWb } }],
  },
  chesterfield: {
    name: "Chesterfield Ave",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  chilco: {
    name: "Chilco",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.chilcoNb, southbound: VIDEOS.chilcoSb } },
    ],
  },
  columbia: {
    name: "Columbia",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.columbiaNb } }],
  },
  comoxHelmcken: {
    name: "Comox Helmcken",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.pittMeadows],
    legs: [
      {
        videos: { eastbound: VIDEOS.cprTrailEb, westbound: VIDEOS.cprTrailWb },
      },
    ],
  },
  crabappleRidge: {
    name: "Crabapple Ridge",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  crosstownRichmond: {
    name: "Crosstown",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.crosstownRichmondWb } }],
  },
  crosstownNewWestminster: {
    name: "Crosstown Greenway",
    shortName: "Crosstown Gr.",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: {} }],
  },
  cypress: {
    name: "Cypress",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.cypressNb, southbound: VIDEOS.cypressSb },
      },
    ],
  },
  deerLakeParkway: {
    name: "Deer Lake Parkway Urban Trail",
    shortName: "Deer Lake Pkwy T.",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { eastbound: VIDEOS.deerLakePkwyEb } }],
  },
  dumfries: {
    name: "Dumfries",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.dunbarNb, southbound: VIDEOS.dunbarSb } },
    ],
  },
  dunsmuir: {
    name: "Dunsmuir",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.dunsmuirEb, westbound: VIDEOS.dunsmuirWb },
      },
    ],
  },
  dunsmuirMelvillePender: {
    name: "Dunsmuir St/Melville St/Pender St",
    shortName: "Dunsmuir/Melville",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.lionsGateBridgeNb } }],
  },
  eastMall: {
    name: "East Mall",
    regions: [REGIONS.ubc],
    legs: [{ videos: { southbound: VIDEOS.eastMallSb } }],
  },
  edmonds: {
    name: "Edmonds",
    regions: [REGIONS.burnaby],
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
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { westbound: VIDEOS.ewenWb } }],
  },
  ferguson: {
    name: "Ferguson Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.fergusonEb } }],
  },
  fergusonPath: {
    name: "Ferguson Rd Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.fergusonPathWb } }],
  },
  forbesEsplanade: {
    name: "Forbes/Esplanade",
    regions: [REGIONS.northVancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.forbesEsplanadeEb,
          westbound: VIDEOS.forbesEsplanadeWb,
        },
      },
    ],
  },
  francesUnion: {
    name: "Frances Union",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { westbound: VIDEOS.francesUnionWb } }],
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { eastbound: VIDEOS.fraserForeshoreEb } }],
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  gaglardi: {
    name: "Gaglardi Way",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.gaglardiSb } }],
  },
  gardenCity: {
    name: "Garden City Rd",
    regions: [REGIONS.richmond],
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
    regions: [REGIONS.portMoody, REGIONS.coquitlam],
    legs: [{ videos: { southbound: VIDEOS.gatensburySb } }],
  },
  georgia: {
    name: "Georgia St",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.gilbertNb } }],
  },
  gladstone: {
    name: "Gladstone",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.glenlyonNb } }],
  },
  goldenEars: {
    name: "Golden Ears Bridge",
    regions: [REGIONS.langley, REGIONS.mapleRidge],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  granville: {
    name: "Granville Ave",
    regions: [REGIONS.richmond],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.grauerEb } }],
  },
  haro: {
    name: "Haro",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.haroEb, westbound: VIDEOS.haroWb } }],
  },
  hastingsPark: {
    name: "Hastings Park",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.heatherSb } }],
  },
  highbury: {
    name: "Highbury St",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.highburyNb } }],
  },
  highlandParkLine: {
    name: "Highland Park Line",
    regions: [REGIONS.burnaby],
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
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { northbound: VIDEOS.homerNb } }],
  },
  hornby: {
    name: "Hornby",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.hornbyNb, southbound: VIDEOS.hornbySb } },
    ],
  },
  horseshoeBay: {
    name: "Horseshoe Bay Dr",
    regions: [REGIONS.westVancouver],
    legs: [{ videos: {} }],
  },
  howes: {
    name: "Howes St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { northbound: VIDEOS.howesNb } }],
  },
  imperial: {
    name: "Imperial Dr",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.imperialNb } }],
  },
  imperialPowerline: {
    name: "Imperial Trail/Powerline Trail",
    shortName: "Imperial/Powerline",
    regions: [REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.imperialPowerlineEb } }],
  },
  inglis: {
    name: "Inglis Dr",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  inverness: {
    name: "Inverness",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
  },
  keefer: {
    name: "Keefer",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.keeferEb, westbound: VIDEOS.keeferWb } },
    ],
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.kensingtonNb } }],
  },
  kent: {
    name: "Kent",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.kentWb } }],
  },
  kerr: {
    name: "Kerr St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.kerrNb, southbound: VIDEOS.kerrSb },
      },
    ],
  },
  killarney: {
    name: "Killarney",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [{ videos: {} }],
  },
  knightStreetBridge: {
    name: "Knight Street Bridge",
    regions: [REGIONS.vancouver, REGIONS.richmond],
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
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.lakesNb } }],
  },
  lakewood: {
    name: "Lakewood",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.lakewoodNb } }],
  },
  lionsGate: {
    name: "Lions Gate Bridge & Stanley Park Causeway",
    shortName: "Lions Gate Bridge",
    regions: [REGIONS.vancouver, REGIONS.westVancouver],
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
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.londonDublinEb } }],
  },
  lougheed: {
    name: "Lougheed Hwy",
    regions: [REGIONS.burnaby, REGIONS.coquitlam],
    legs: [
      {
        name: "Burnaby/Coquitlam",
        videos: { eastbound: VIDEOS.lougheedEb, westbound: VIDEOS.lougheedWb },
      },
    ],
  },
  lowLevel: {
    name: "Low Level Rd",
    regions: [REGIONS.northVancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.lowLevelEb, westbound: VIDEOS.lowLevelWb },
      },
    ],
  },
  lynas: {
    name: "Lynas Ln",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.lynasNb } }],
  },
  mackay: {
    name: "MacKay",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  mainCotton: {
    name: "Main St/Cotton Rd",
    regions: [REGIONS.northVancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.mainCottonEb,
          westbound: VIDEOS.mainCottonWb,
        },
      },
    ],
  },
  marineNw: {
    name: "NW Marine",
    shortName: "NW Marine (UBC)",
    regions: [REGIONS.vancouver, REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.nwMarineEb } }],
  },
  marineSw: {
    name: "SW Marine",
    shortName: "SW Marine (UBC)",
    regions: [REGIONS.vancouver, REGIONS.ubc],
    legs: [
      {
        videos: { eastbound: VIDEOS.swMarineEb, westbound: VIDEOS.swMarineWb },
      },
    ],
  },
  marineNv: {
    name: "Marine Dr/3rd St (North Vancouver)",
    shortName: "Marine/3rd (NV)",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  marineWv: {
    name: "Marine Dr (West Vancouver)",
    shortName: "Marine Dr (WV)",
    regions: [REGIONS.westVancouver],
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
    regions: [REGIONS.burnaby],
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
    regions: [REGIONS.coquitlam, REGIONS.portCoquitlam],
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
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.mcdonaldBeachTrailWb } }],
  },
  metrotown: {
    name: "Metrotown",
    regions: [REGIONS.burnaby],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.middleArmEb } }],
  },
  midtown: {
    name: "Midtown",
    regions: [REGIONS.vancouver, REGIONS.burnaby],
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
    regions: [REGIONS.newWestminster],
    legs: [{ videos: {} }],
  },
  miller: {
    name: "Miller Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  minoru: {
    name: "Minoru Blvd",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  mosaic: {
    name: "Mosaic",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.mosaicNb, southbound: VIDEOS.mosaicSb } },
    ],
  },
  nanaimo: {
    name: "Nanaimo St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.nanaimoNb, southbound: VIDEOS.nanaimoSb },
      },
    ],
  },
  nelson: {
    name: "Nelson St",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
  },
  nelsonAve: {
    name: "Nelson Ave Path",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.nelsonPathSb } }],
  },
  nicola: {
    name: "Nicola",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.nicolaNb, southbound: VIDEOS.nicolaSb } },
    ],
  },
  no2: {
    name: "No. 2 Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.no2Nb } }],
  },
  no2Bridge: {
    name: "No. 2 Rd Bridge",
    regions: [REGIONS.richmond],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.no2PathNb } }],
  },
  no3: {
    name: "No. 3 Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.no3Nb, southbound: VIDEOS.no3Sb } }],
  },
  no6Path: {
    name: "No. 6 Rd Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  northSouth: {
    name: "North/South",
    regions: [REGIONS.burnaby],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland/Burris",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { eastbound: VIDEOS.oaklandBurrisEb } }],
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    regions: [REGIONS.vancouver, REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.oakNb, southbound: VIDEOS.oakSb },
      },
    ],
  },
  odlin: {
    name: "Odlin",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.odlinWb } }],
  },
  offBroadway: {
    name: "Off Broadway",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.pandoraEb, westbound: VIDEOS.pandoraWb },
      },
    ],
  },
  parkside: {
    name: "Parkside",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.parksideNb } }],
  },
  pender: {
    name: "Pender St",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.penderEb, westbound: VIDEOS.penderWb } },
    ],
  },
  pittRiverBridge: {
    name: "Pitt River Bridge",
    regions: [REGIONS.portCoquitlam, REGIONS.pittMeadows],
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
    regions: [REGIONS.portCoquitlam],
    legs: [{ name: "South Pitt River", videos: { eastbound: VIDEOS.pocoEb } }],
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    regions: [REGIONS.coquitlam, REGIONS.surrey],
    legs: [{ videos: {} }],
  },
  portRoyalRiverTrail: {
    name: "Port Royal River Trail",
    shortName: "Port Royal River T.",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.portRoyalEb } }],
  },
  portside: {
    name: "Portside",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.portsideEb } }],
  },
  portsideGap: {
    name: "Portside Gap",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.portsideGapWb } }],
  },
  powell: {
    name: "Powell",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.powellEb, westbound: VIDEOS.powellWb } },
    ],
  },
  princeEdward: {
    name: "Prince Edward",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.newWestminster],
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
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.railwaySb } }],
  },
  railwayGreenway: {
    name: "Railway Greenway",
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.railwayGreenwaySb } }],
  },
  richards: {
    name: "Richards",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.richardsSb } }],
  },
  ridgeway: {
    name: "Ridgeway",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { westbound: VIDEOS.ridgewayWb },
      },
    ],
  },
  riverPkwy: {
    name: "River Pkwy",
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.riverPkwySb } }],
  },
  royalOak: {
    name: "Royal Oak",
    shortName: "Royal Oak",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.royalOakSb } }],
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { westbound: VIDEOS.rumbleWb } }],
  },
  rupert: {
    name: "Rupert St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.rupertNb, southbound: VIDEOS.rupertSb },
      },
    ],
  },
  russBaker: {
    name: "Russ Baker Way",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: {
          northbound: VIDEOS.russBakerNb,
          southbound: VIDEOS.russBakerSb,
        },
      },
    ],
  },
  stAndrews: {
    name: "St Andrews Ave",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  stJohns: {
    name: "Saint Johns St Path",
    regions: [REGIONS.portMoody],
    legs: [{ videos: { eastbound: VIDEOS.stJohnsEb } }],
  },
  seaIslandConnector: {
    name: "Sea Island Connector",
    shortName: "Sea Island Conn.",
    regions: [REGIONS.richmond],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.seaIslandConnectorWb } }],
  },
  seaIslandPath: {
    name: "Sea Island Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.seaIslandPathNb } }],
  },
  seaIslandWay: {
    name: "Sea Island Way",
    regions: [REGIONS.richmond],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.seaIslandWayEb } }],
  },
  seaside: {
    name: "Seaside",
    regions: [REGIONS.vancouver],
    legs: [
      {
        name: "Coal Harbour",
        videos: {
          eastbound: VIDEOS.seasideCoalHarbourEb,
          westbound: VIDEOS.seasideCoalHarbourWb,
        },
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
    regions: [REGIONS.vancouver],
    legs: [
      {
        name: "Beach",
        videos: {
          eastbound: VIDEOS.seasideBypassBeachEb,
          westbound: VIDEOS.seasideBypassBeachWb,
        },
      },
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
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.seaToRiverNb } }],
  },
  seaview: {
    name: "Seaview",
    regions: [REGIONS.westVancouver],
    legs: [{ videos: { westbound: VIDEOS.seaviewWb } }],
  },
  secondNarrowsBridge: {
    name: "Second Narrows Bridge",
    shortName: "Second Narrows Br.",
    regions: [REGIONS.vancouver, REGIONS.northVancouver],
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
    regions: [REGIONS.burnaby],
    legs: [
      {
        name: "Burnaby Mountain Parkway",
        videos: { eastbound: VIDEOS.burnabyMtnPathEb },
      },
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
        name: "South Campus Road Lane",
        videos: { westbound: VIDEOS.sCampusEb },
      },
      {
        name: "Greenhouse Lane/Nelson Way",
        videos: {
          eastbound: VIDEOS.greenhousePathEb,
          westbound: VIDEOS.greenhousePathWb,
        },
      },
      {
        name: "University Drive East",
        videos: { westbound: VIDEOS.universityDrEPathWb },
      },
    ],
  },
  shellRoadTrail: {
    name: "Shell Rd Trail",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.shellNb, southbound: VIDEOS.shellSb },
      },
    ],
  },
  smithe: {
    name: "Smithe St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.smitheEb,
          westbound: VIDEOS.cambieBridgeSmitheNb,
        },
      },
    ],
  },
  southDyke: {
    name: "South Dyke Rd",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.southDykeEb } }],
  },
  southeast: {
    name: "Southeast",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { westbound: VIDEOS.southeastWb } }],
  },
  spiritTrail: {
    name: "Spirit Trail",
    regions: [REGIONS.westVancouver, REGIONS.northVancouver],
    legs: [{ videos: { eastbound: VIDEOS.spiritTrailEb } }],
  },
  stanleyParkLoop: {
    name: "Stanley Park Loop",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [
      {
        name: "Seawall",
        videos: { counterclockwise: VIDEOS.seasideStanleyPark },
      },
      {
        name: "Lost Lagoon",
        videos: {
          eastbound: VIDEOS.lostLagoonEb,
          westbound: VIDEOS.lostLagoonWb,
        },
      },
    ],
  },
  stevestonHwy: {
    name: "Steveston Hwy Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.stevestonEb } }],
  },
  sunrise: {
    name: "Sunrise",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.sunriseNb } }],
  },
  tatlow: {
    name: "Tatlow",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
  },
  templeton: {
    name: "Templeton St",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: {
          northbound: VIDEOS.templetonNb,
          southbound: VIDEOS.templetonSb,
        },
      },
    ],
  },
  terminalPath: {
    name: "Terminal Ave Path",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.terminalEb, westbound: VIDEOS.terminalWb },
      },
    ],
  },
  thunderbird: {
    name: "Thunderbird Blvd/Osoyoos Cr",
    shortName: "Thunderbird Blvd",
    regions: [REGIONS.ubc],
    legs: [{ videos: {} }],
  },
  transCanadaHwy: {
    name: "Trans Canada Hwy",
    isIncomplete: true,
    regions: [REGIONS.westVancouver],
    legs: [{ name: "West Vancouver", videos: {} }],
  },
  transCanadaTrail: {
    name: "Trans Canada Trail",
    isIncomplete: true,
    regions: [REGIONS.vancouver, REGIONS.burnaby],
    legs: [{ name: "Burnaby", videos: { westbound: VIDEOS.seaToRiverNb } }],
  },
  university: {
    name: "University Blvd",
    regions: [REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.universityEb } }],
  },
  universityDrE: {
    name: "University Dr E",
    regions: [REGIONS.burnaby],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.universityDrEEb } }],
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { southbound: VIDEOS.uptownDowntownSb } }],
  },
  valley: {
    name: "Valley",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.valleySb } }],
  },
  victory: {
    name: "Victory",
    regions: [REGIONS.burnaby],
    legs: [
      { videos: { eastbound: VIDEOS.victoryEb, westbound: VIDEOS.victoryWb } },
    ],
  },
  walesDuchess: {
    name: "Wales Duchess",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.walesDuchessSb } }],
  },
  waterfront: {
    name: "Waterfront St",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.ubc],
    legs: [{ videos: { southbound: VIDEOS.wesbrookSb } }],
  },
  westDyke: {
    name: "West Dyke Trail",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
  },
  westMall: {
    name: "West Mall",
    regions: [REGIONS.ubc],
    legs: [{ videos: {} }],
  },
  westminsterHwy: {
    name: "Westminster Hwy",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.westminsterWb } }],
  },
  westportMathers: {
    name: "Westport/Southridge/Westmount/Mathers+",
    shortName: "Westport/Mathers+",
    regions: [REGIONS.westVancouver],
    legs: [{ videos: { westbound: VIDEOS.westportMathersWb } }],
  },
  williams: {
    name: "Williams Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.williamsEb } }],
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.willingdonLinearNb } }],
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.willingdonSb } }],
  },
  windermere: {
    name: "Windermere",
    regions: [REGIONS.vancouver],
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
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.windsorNb, southbound: VIDEOS.windsorSb },
      },
    ],
  },
  woodwardsSaunders: {
    name: "Woodwards/Saunders",
    shortName: "Woodwards",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.woodwardsSaundersEb } }],
  },
  york: {
    name: "York",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.yorkEb, westbound: VIDEOS.yorkWb } }],
  },
  yukon: {
    name: "Yukon",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.yukonSb } }],
  },
};
