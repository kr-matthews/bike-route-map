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
// North Vancouver: queensbury; necklace: grand blvd & keith; dollarton; mt seymour;
// West Vancouver: spirit trail alt.?; ...more
// Surrey: scott rd; serpentine; timbers; fraser hwy;
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
    notes:
      "Flat, lots of cars. The painted lane portion is sometimes right beside parked cars, sometimes beside the curb.",
  },
  third: {
    name: "3rd",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.thirdEb } }],
    notes: "Quiet and mostly flat. Lots of stop signs.",
  },
  thirdNv: {
    name: "3rd St",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
    notes:
      "Steep hill, lots of cars. Eastbound shared lane portion is a downhill bus/bike-only lane. The painted lanes are beside the curb (no parked cars). There is some varying infrastructure extending west to Saint Davids Ave which is not yet mapped.",
  },
  fourth: {
    name: "4th",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.fourthEb, westbound: VIDEOS.fourthWb },
      },
    ],
    notes:
      "Steep hill with an awkward transition at the west end. Some cars. The lane abruptly disappears a few times which is dangerous. The painted lanes are often beside parked cars, though not eastbound east of NW Marine.",
  },
  fourthNV: {
    name: "4th St",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { westbound: VIDEOS.fourthNVWb } }],
    notes:
      "Quiet-ish street with steep hill at the east end. No traffic calming.",
  },
  tenth: {
    name: "10th",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.tenthEb, westbound: VIDEOS.tenthWb },
      },
    ],
    notes:
      "Quiet street with some small hills. Configuration at Arbutus has improved since filming. Traffic light is being added at 10th & Victoria early 2025.",
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
    notes: "Quiet but narrow at times. Extended west from Alder in late 2024.",
  },
  fourteenthGap: {
    name: "14th Ave Gap",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.fourteenthGapWb } }],
    notes:
      "The city intends to fill this gap eventually, but the exact route is not clear. You cannot cross Knight St at 14th. Using/crossing Kingsway is uncomfortable, but you can time the lights to do it when traffic isn't moving; or use 15th Ave and St George St, but you'll have to dismount briefly going eastbound.",
  },
  fifteenth: {
    name: "15th St",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { eastbound: VIDEOS.fifteenthEb } }],
    notes: "Flat, but traffic volumes can get uncomfortably high at times.",
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
    notes:
      "Mostly flat with few intersections but lots of cars. The painted lanes in the east half are right beside parked cars. Can continue on the road at roundabouts but the intention is to use the sidewalks. Awkward to turn left onto Marine Dr at the west end.",
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
    notes:
      "Hills and lots of cars. One of the worst bike routes in the city, and doesn't have proper connections at either end. The painted lanes are beside parked cars.",
  },
  twentyNinth: {
    name: "29th",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.twentyNinthWb } }],
    notes:
      "A big dip in the middle around Valley/Yew with steep hills. The west end doesn't have enough traffic calming but the rest is quiet. The westbound painted lane through Hillcrest is beside parked cars; eastbound is not.",
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
    notes:
      "Mostly quiet streets, with some hills. Easy to miss some the turns. For some reason, the east end is at Nanaimo St, even though 45th Ave continues to be a (different) bike route (Ridgeway) until Boundary Rd.",
  },
  sixtySeventh: {
    name: "67th",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.sixtySeventhPlusWb } }],
    notes:
      "Flat. No traffic calming, can get very busy with cars. Crossing Granville can be confusing.",
  },
  acadia: {
    name: "Acadia Rd",
    regions: [REGIONS.ubc],
    legs: [{ videos: {} }],
    notes:
      "Flat and quiet. There appears to be a shared use path beside the road at times, but it's not marked as such. It's unclear whether the route continues to Chancellor and/or NW Marine.",
  },
  adanac: {
    name: "Adanac",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.adanacWb } }],
    notes:
      "Lots of hills towards the east. Between Rupert and Boundary can get very busy with cars, the rest is traffic calmed. The city plans on adding separated bike lanes to that part.",
  },
  agnes: {
    name: "Agnes St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.agnesEb } }],
    notes:
      "Relatively flat and quiet. The city plans on adding a similar route up Seventh St.",
  },
  agronomy: {
    name: "Agronomy Rd/Toronto Rd",
    shortName: "Agronomy/Toronto",
    regions: [REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.agronomyEb } }],
    notes:
      "Flat and relatively quiet. It's easy to miss the turn onto Western Pkwy.",
  },
  alberni: {
    name: "Alberni St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.alberniEb, westbound: VIDEOS.alberniWb },
      },
    ],
    notes:
      "Flat. The east half is often completely full of cars. The west half is very quiet since it's a dead-end for cars. The eastbound painted lane is beside parked cars; westbound mostly is not.",
  },
  alder: {
    name: "Alder",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.alderNb, southbound: VIDEOS.alderSb } },
    ],
    notes: "Quiet-ish. The north half is quite steep.",
  },
  alderbridge: {
    name: "Alderbridge Way Path",
    shortName: "Alderbridge Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.alderbridgeWb } }],
    notes:
      "Very flat. For some reason there's a short gap right in the middle which is just a narrow muddy desire path. Lots of pedestrians using the west portion.",
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
    notes:
      "Flat-ish. A wide street, so cars often go very fast. The connection with Carrall can be confusing.",
  },
  alexFraserBridge: {
    name: "Alex Fraser Bridge",
    regions: [REGIONS.richmond, REGIONS.delta],
    legs: [
      {
        videos: {
          northbound: VIDEOS.alexFraserNb,
          southbound: VIDEOS.alexFraserSb,
        },
      },
      {
        name: "Underneath the south end",
        videos: {
          eastbound: VIDEOS.alexFraserUnder,
        },
      },
    ],
    notes:
      "The bridge sidewalk has a lot of obstacles, and the bridge itself is very high. The connections on the north/west end are a bit confusing.",
  },
  alpha: {
    name: "Alpha Ave",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.alphaSb } }],
    notes:
      "New in 2025. A short shared use path on a gentle hill. It crosses a few driveways.",
  },
  arbutusGreenway: {
    name: "Arbutus Greenway",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.arbutusGreenwayNb } },
      {
        name: "Fir St connection with Granville Connector",
        videos: { southbound: VIDEOS.granvilleConnectorFirSb },
      },
    ],
    notes:
      "A former railway. Not very flat, but the hills at either end are very gradual. The King Edward intersection was upgraded in late 2024. The city plans to upgrade the 41st intersection next. The portion at Broadway is closed until around 2026 due to subway construction.",
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
    notes:
      "Very uncomfortable, especially when it's windy. And it only connects to SW Marine in Vancouver which is even worse.",
  },
  balaclava: {
    name: "Balaclava",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.balaclavaNb,
          southbound: VIDEOS.balaclavaSb,
        },
      },
    ],
    notes:
      "Steep at times, with several turns which are easy to miss. The north end has way too many stop signs.",
  },
  barnet: {
    name: "Barnet Hwy",
    regions: [REGIONS.burnaby, REGIONS.portMoody],
    legs: [{ videos: { eastbound: VIDEOS.barnetEb } }],
    notes:
      "Some hills. Next to high-speed traffic, but the shoulder tends to be quite wide.",
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
        videos: {
          eastbound: VIDEOS.bcParkwayNWEb,
          westbound: VIDEOS.bcParkwayNWWb,
        },
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
    notes:
      "The quality varies a lot. There are lots of hills. Burnaby is planning on upgrading several sections. New Westminster is upgrading the Stewardson portion in 2024/2025. The east end in Surrey can be quite bad, and it's not well-signed so it's not clear where the route ends. The Pattullo bridge is the worst, but it's being replaced.",
  },
  beatty: {
    name: "Beatty St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.beattyNb, southbound: VIDEOS.beattySb },
      },
    ],
    notes:
      "The south end is a hill. It's protected, but often that protection is flimsy posts. The city intends to upgrade it eventually.",
  },
  bellevue: {
    name: "Bellevue Ave",
    regions: [REGIONS.westVancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.bellevueEb, westbound: VIDEOS.bellevueWb },
      },
    ],
    notes:
      "The east end is flat and has a lot of traffic and all-way stops. The west end is quiet, but quite narrow and with some minor hills.",
  },
  bewickeGreenway: {
    name: "Bewicke Greenway",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { northbound: VIDEOS.bewickeNb } }],
    notes:
      "A nice mostly flat shared use path, but the 2 intersections at the north end take forever to cross.",
  },
  bigBendPath: {
    name: "Big Bend Path",
    regions: [REGIONS.burnaby],
    legs: [
      { videos: { southbound: VIDEOS.bigBendSb } },
      {
        name: "Trapp Ave Alternate Branch",
        videos: { eastbound: VIDEOS.bigBendTrappEb },
      },
    ],
    notes:
      "Very flat. The path briefly disappears at the train track crossing at Marine and North Fraser.",
  },
  blanca: {
    name: "Blanca St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.blancaNb, southbound: VIDEOS.blancaSb },
      },
    ],
    notes:
      "A flat, wide, fast street. But there is rarely much traffic. The southbound painted lane is beside the curb.",
  },
  boundary: {
    name: "Boundary Trail",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { southbound: VIDEOS.boundaryTrailSb } }],
    notes:
      "Very flat. It's not clear how far north the trail extends; it becomes covered in vines and looks abandoned.",
  },
  boyd: {
    name: "Boyd St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.boydEb, westbound: VIDEOS.boydWb } }],
    notes:
      "Very flat. The painted lanes are mostly beside the curb. Traveling east is a bit awkward as you have to briefly switch to the left side, then switch back. The city plans on improving this route.",
  },
  boydTrail: {
    name: "Boyd St Trail",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { westbound: VIDEOS.boydTrailWb } }],
    notes: "Very flat. A nice alternative to the road.",
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
    notes:
      "Very flat. Can be a bit narrow at times. Lots of bunnies. Not very useful since it doesn't connect to anything.",
  },
  brunetteFraser: {
    name: "Brunette Fraser Regional Greenway",
    regions: [REGIONS.burnaby, REGIONS.newWestminster],
    shortName: "Brunette Fraser Gr.",
    legs: [{ videos: { southbound: VIDEOS.brunetteFraserSb } }],
    notes:
      "The signage for this route is very lacking. Its almost impossible to follow without taking a wrong turn. Lots of steep hills. The south end is a dead-end, but eventually it will hopefully continue to Quayside.",
  },
  burnaby: {
    name: "Burnaby",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.burnabyEb, westbound: VIDEOS.burnabyWb } },
    ],
    notes:
      "The west is a gradual hill. Too many stop signs. Should be extended all the way to Beach Ave.",
  },
  burnabyMtnPkwy: {
    name: "Burnaby Mountain Parkway",
    shortName: "Burnaby Mtn Pkwy",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.burnabyMtnEb,
          westbound: VIDEOS.burnabyMtnWb,
        },
      },
    ],
    notes:
      "Very steep and beside fast traffic. Better to use the adjacent shared use path, but unfortunately that only exists for the top half of the route (though the city plans to extend it all the way down), and does not allow you to cross Gaglardi directly.",
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
        videos: {
          northbound: VIDEOS.burrardBridgeNb,
          southbound: VIDEOS.burrardBridgeSb,
        },
      },
    ],
    notes:
      "Steep in Kits and when entering downtown. Most useful for crossing the bridge. In Kits, Cypress is better. Downtown, Hornby is better. The painted lane in Kits is beside the curb; downtown, it's beside parked cars.",
  },
  bute: {
    name: "Bute",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.buteNb, southbound: VIDEOS.buteSb } },
    ],
    notes:
      "Flat with lots of traffic calming. The city intends to extend this all the way to the water at both ends and make it a greenway; those parts will be significantly steeper. The pedestrianized section at Robson is being upgraded in 2024/2025.",
  },
  byrneCreek: {
    name: "Byrne Creek Urban Trail",
    shortName: "Byrne Creek Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { westbound: VIDEOS.byrneCreekWb } }],
    notes:
      "A hill. Unfortunately this doesn't quite connect to Glenlyon Urban Trail at the south end. The path continues, but it's hardly suitable for a bike.",
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
    notes:
      "A big hill. Mostly a painted lane between parked cars and fast-moving traffic. The section around Little Mountain is (very) slowly becoming fully separated.",
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
    notes: "A one-way, downhill route to Gastown.",
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
    notes:
      "Surprisingly flat. There are a ton of connections at both ends, and it can be hard to pick/follow the one you want. The northbound side is shared with pedestrians.",
  },
  canadaLine: {
    name: "Canada Line Path",
    regions: [REGIONS.vancouver, REGIONS.richmond],
    legs: [
      {
        videos: {
          northbound: VIDEOS.canadaLineNb,
          southbound: VIDEOS.canadaLineSb,
        },
      },
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
    notes:
      "Follows the Canada Line (kind of) over, and on either side of, the Fraser River north arm. The portion at Kent, on the north side of the bridge, is terrible. Besides that, quite good.",
  },
  capilano: {
    name: "Capilano Rd",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
    notes:
      "A long steep hill up to Grouse Mountain. Unfortunately the painted lane frequently disappears. It extends north of the Trans-Canada Highway, but I have not mapped that. For the mapped portion, the painted lanes are beside the curb.",
  },
  cardero: {
    name: "Cardero",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.carderoNb, southbound: VIDEOS.carderoSb },
      },
    ],
    notes:
      "Moderate hill at each end. The north end is very busy with cars and desperately needs improving. The rest is quite good.",
  },
  cariboo: {
    name: "Cariboo",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: { northbound: VIDEOS.caribooNb, southbound: VIDEOS.caribooSb },
      },
    ],
    notes:
      "Going southbound, it's extremely easy to miss any of the turns. The painted lanes are beside the curb. The north end is a steep hill.",
  },
  carnarvon: {
    name: "Carnarvon St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { westbound: VIDEOS.carnarvonWb } }],
    notes:
      "A gradual hill connecting to New Westminster station on the Expo line. The west half is just a busy car road.",
  },
  carrall: {
    name: "Carrall",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.carrallNb, southbound: VIDEOS.carrallSb },
      },
    ],
    notes:
      "Very flat. One of the first protected bike routes to be built in Vancouver. Unfortunately, it was poorly designed and you often have cars blocking the 'protected' lane.",
  },
  cassiar: {
    name: "Cassiar",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.cassiarSb } }],
    notes:
      "Flat-ish. Crossing Hastings is not great; technically you must dismount (nobody does).",
  },
  caulfeild: {
    name: "Caulfeild",
    regions: [REGIONS.westVancouver],
    legs: [
      { name: "West branch", videos: { northbound: VIDEOS.caulfeildWestNb } },
      { name: "East branch", videos: { southbound: VIDEOS.caulfeildEastSb } },
    ],
    notes: "Steep winding hills with roads intended for cars.",
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
    notes:
      "A flat shared use path. Unfortunately, it's right beside 2 very unpleasant roads - Imperial and Boundary - filled with noisy cars.",
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
    notes:
      "Mostly flat through Vancouver and Burnaby, but New Westminster has lots of hills. The path near Burnaby Lake was paved late 2024. Winston St has been partially closed for construction for years. Improvements along E Columbia St and Sherbrooke St were finished in early 2025. The route has an annoying unnecessary steep detour at Cumberland St.",
  },
  champlainHeightsGap: {
    name: "Champlain Heights Gap",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.champlainHeightsGapEb,
          westbound: VIDEOS.champlainHeightsGapWb,
        },
      },
    ],
    notes:
      "A critical gap between Masumi Mitsui Greenway and Rumble St Urban Trail. You can stick to the road, or take some more direct paths, but it's unclear whether bikes are technically allowed on those paths.",
  },
  chancellor: {
    name: "Chancellor Blvd",
    regions: [REGIONS.ubc],
    legs: [{ videos: { westbound: VIDEOS.chancellorWb } }],
    notes:
      "Some gradual hills and fast cars. The painted lanes are beside the curb. Accessing the path at Tasmania Cr can be confusing as it's not well signed.",
  },
  chesterfield: {
    name: "Chesterfield Ave",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
    notes:
      "Very steep, lots of cars. This route continues north to 23rd St, just short of the Trans-Canada Highway.",
  },
  chilco: {
    name: "Chilco",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.chilcoNb, southbound: VIDEOS.chilcoSb } },
    ],
    notes: "A steep hill at the north end. Quiet with much traffic calming.",
  },
  columbia: {
    name: "Columbia",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.columbiaNb } }],
    notes:
      "A wide industrial road which is not clearly marked as a bike route, nor very useful given Ontario and Yukon nearby.",
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
    notes:
      "Some steep hills, relatively little traffic. The city intends to extend it down Helmcken to False Creek, but that might be decades away.",
  },
  cprTrail: {
    name: "CPR Trail",
    regions: [REGIONS.pittMeadows],
    legs: [
      {
        videos: { eastbound: VIDEOS.cprTrailEb, westbound: VIDEOS.cprTrailWb },
      },
    ],
    notes: "Very flat. The north section at Kennedy Rd isn't as good.",
  },
  crabappleRidge: {
    name: "Crabapple Ridge",
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.crabappleSb } }],
    notes:
      "Very flat, and also very hard to follow the almost 30 turns you need to make. The indirectness adds about 2km of distance. It's not entirely clear where the route ends in Steveston.",
  },
  crosstownRichmond: {
    name: "Crosstown",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.crosstownRichmondWb } }],
    notes:
      "Very flat, but lots of turns so easy to get lost. The only reasonable route it connects to is Railway Greenway.",
  },
  crosstownNewWestminster: {
    name: "Crosstown Greenway",
    shortName: "Crosstown Gr.",
    regions: [REGIONS.newWestminster],
    legs: [
      { videos: { eastbound: VIDEOS.crosstownNWEb } },
      {
        name: "Richmond St/Surrey St connection to Burnaby",
        videos: { northbound: VIDEOS.crosstownNWExtNb },
      },
    ],
    notes:
      "Lots of hills. There are 2 options in the middle; one is quieter and steeper, one is flatter and has more traffic. The bridge crossing McBride is annoying, but the adjacent community center was just rebuilt.",
  },
  cypress: {
    name: "Cypress",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.cypressNb, southbound: VIDEOS.cypressSb },
      },
    ],
    notes:
      "Constant hills. Lots of traffic calming in the north, but the whole thing is quiet. The south tip in Marpole is hard to follow (better to just take the Arbutus Greenway there). Several major streets are annoying to cross without a light: 57th, 49th, 33rd, King Edward.",
  },
  deerLakeParkway: {
    name: "Deer Lake Parkway Urban Trail",
    shortName: "Deer Lake Pkwy T.",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.deerLakePkwyEb,
          westbound: VIDEOS.deerLakePkwyWb,
        },
      },
    ],
    notes: "Besides the hill at the west end, it's very flat.",
  },
  drake: {
    name: "Drake",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.drakeEb } }],
    notes:
      "New mid-2025 bike path. A bit of a hill. In the future it will extend all the way to Pacific Blvd.",
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
    notes:
      "Lots of hills but quiet. To the south, Borden St is also a bike route, but for some reason is not labelled as 'Dumfries.'",
  },
  dunbar: {
    name: "Dunbar St",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.dunbarNb, southbound: VIDEOS.dunbarSb } },
    ],
    notes:
      "Steep and lots of cars. The painted lanes beside parked cars. Doesn't connect to anything at the north end. The uphill at the south end is very uncomfortable.",
  },
  dunsmuir: {
    name: "Dunsmuir",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.dunsmuirEb, westbound: VIDEOS.dunsmuirWb },
      },
    ],
    notes:
      "Not very flat. The city is planning to extend this protected route along Melville, Jervis, Hastings, and Broughton to connect to Seaside.",
  },
  dunsmuirMelvillePender: {
    name: "Dunsmuir St/Melville St/Pender St",
    shortName: "Dunsmuir/Melville",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.lionsGateBridgeNb } }],
    notes:
      "Uncomfortable, one-way downhill route. The painted lane is mostly beside parked cars. The city is planning on replacing this with an extension of the separated lane on Dunsmuir, via Melville, Jervis, Hastings, and Broughton - which will no longer connect to Georgia.",
  },
  eastMall: {
    name: "East Mall",
    regions: [REGIONS.ubc],
    legs: [{ videos: { southbound: VIDEOS.eastMallSb } }],
    notes:
      "The south bit is not great, but the rest is quiet and flat. The painted lanes are beside parked cars.",
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
    notes:
      "This bike network is constantly being updated in phases, so what's shown here may be out-of-date. Mostly pretty good and flat, but lacking signage so it can be easy to get lost.",
  },
  ewen: {
    name: "Ewen Ave Greenway",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { westbound: VIDEOS.ewenWb } }],
    notes:
      "Very flat shared use path. Sometimes there are large poles awkwardly in the middle of the path.",
  },
  ferguson: {
    name: "Ferguson Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.fergusonEb } }],
    notes:
      "Very flat. The portion beside the shared use path is a new realignment of the road in late 2024. There is a lot of traffic up to the buildings around McDonald Rd, then it gets a lot quieter.",
  },
  fergusonPath: {
    name: "Ferguson Rd Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.fergusonPathWb } }],
    notes:
      "A brand new, very flat shared use path from late 2024. Unfortunately, you need to use roads to get to it, and it doesn't go all the way to Iona Island.",
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
    notes:
      "Forbes is a hill, the rest is flat. Upgraded from painted to (mostly) separated in around 2023. The light timings can be awkward going west.",
  },
  francesUnion: {
    name: "Frances Union",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { westbound: VIDEOS.francesUnionWb } }],
    notes:
      "Several steep hills, especially at each end. Quiet, but some major road crossings are not great. The path through Kensington Park is not super clear.",
  },
  fraserForeshoreTrail: {
    name: "Fraser Foreshore Urban Trail",
    shortName: "Fraser Foreshore T.",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { eastbound: VIDEOS.fraserForeshoreEb } }],
    notes:
      "A wide, flat, shared use path. Easy to accidentally continue on Glenlyon Pkwy Urban Trail instead of taking the correct turn. The trail continues to the east, but bikes are not allowed.",
  },
  fraserRiverTrail: {
    name: "Fraser River Trail",
    regions: [REGIONS.vancouver],
    legs: [
      {
        name: "Southlands",
        videos: {
          eastbound: VIDEOS.fraserRiverSouthlandsEb,
          westbound: VIDEOS.fraserRiverSouthlandsWb,
        },
      },
      { name: "Fraser River Park", videos: {} },
      { name: "Marpole", videos: {} },
      {
        name: "Fraserview",
        videos: { eastbound: VIDEOS.fraserRiverFraserviewEb },
      },
      { name: "River District", videos: {} },
    ],
    notes:
      "The city plans, in the very long term, to form a continuous trail. For now, it's very disjoint and the individual sections are often not very useful or convenient.",
  },
  fraserwoodTrail: {
    name: "Fraserwood Trail",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
    notes: "Quite narrow at times but very flat. The east portion is gravel.",
  },
  gaglardi: {
    name: "Gaglardi Way",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          northbound: VIDEOS.gaglardiNb,
          southbound: VIDEOS.gaglardiSb,
        },
      },
    ],
    notes:
      "A long steep hill up to SFU. Besides heavy car traffic which is all going above the speed limit. The shoulder briefly gets extremely narrow when crossing over Government St.",
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
    notes:
      "Very flat, lots of cars. The painted lanes are beside the curb. The south portion is very bad. The north portion has had flimsy bollards added since filming.",
  },
  gatensbury: {
    name: "Gatensbury St/Rd",
    regions: [REGIONS.portMoody, REGIONS.coquitlam],
    legs: [{ videos: { southbound: VIDEOS.gatensburySb } }],
    notes: "The north winding part is a very very steep hill.",
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
    notes:
      "Very flat. The painted lanes are beside the curb, but close to turning and fast moving cars.",
  },
  gilbert: {
    name: "Gilbert Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.gilbertNb } }],
    notes:
      "Terrible bike route, fast cars will not leave sufficient space when passing - especially on the bridge. The painted lanes are beside the curb. The city plans on adding a shared use path to improve part of this route.",
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
    notes:
      "A relatively steep hill north of 30th. Lots of cars during school drop-off/pick-up at the north end.",
  },
  glenlyon: {
    name: "Glenlyon Urban Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.glenlyonNb } }],
    notes:
      "Surface has lots of tree roots in places. Flat, except the north tip which is steep. Connecting to Sea to River at the north end is unclear - either use a dirt desire path, or the busy roads.",
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
    notes:
      "Going south, it's easy to miss the transition from shoulder to sidewalk. The roundabouts at the north end aren't very comfortable to use.",
  },
  grantMcconachie: {
    name: "Grant McConachie Way",
    shortName: "Grant McConachie",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.grantMcConachieEb,
          westbound: VIDEOS.grantMcConachieWb,
        },
      },
    ],
    notes:
      "A very flat shoulder next to heavy traffic. Connect from Arthur Laing bridge via the path. Transition to N Service Rd to reach the actual terminal; this route ends before it gets there.",
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
    notes:
      "Very flat, lots of cars. The painted lanes are beside the curb, but also often become a right-turn lane for cars. Sometimes there are flimsy posts separating the lane.",
  },
  granvilleConnector: {
    name: "Granville Connector",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.granvilleConnectorNb,
          southbound: VIDEOS.granvilleConnectorSb,
        },
      },
      {
        name: "Fir St connection with Arbutus Greenway",
        videos: { southbound: VIDEOS.granvilleConnectorFirSb },
      },
      {
        name: "From downtown Granville St",
        videos: { southbound: VIDEOS.granvilleConnectorGranvilleSb },
      },
    ],
    notes:
      "New mid-2025 bike path over the Granville St Bridge. A 'quick-build' approach which will be upgraded in the future, and will eventually include a connection to 10th along the Fir St off-ramp.",
  },
  grauer: {
    name: "Grauer Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.grauerEb } }],
    notes: "A flat and quiet road.",
  },
  haro: {
    name: "Haro",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.haroEb, westbound: VIDEOS.haroWb } }],
    notes: "A big hill in the middle, but quiet.",
  },
  hastingsPark: {
    name: "Hastings Park",
    regions: [REGIONS.vancouver],
    legs: [
      {
        name: "Windermere <-> Portside",
        videos: {
          northbound: VIDEOS.hastingsWindermerePortside,
          southbound: VIDEOS.hastingsPortsideWindermere,
        },
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
    notes:
      "Numerous paths throughout the park. Some are easy to follow, others are confusing. The amphitheatre is being rebuilt on Miller Rd (as of mid 2024) so that section may be closed.",
  },
  heather: {
    name: "Heather",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.heatherSb } }],
    notes:
      "Lots of hills, some steep. Potentially confusing to follow between 52nd and 37th. The portion south of 49th has no traffic calming and can get very busy at times unfortunately.",
  },
  highbury: {
    name: "Highbury St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.highburyNb,
          southbound: VIDEOS.highburySb,
        },
      },
    ],
    notes:
      "A gentle hill. No traffic calming, but is usually relatively quiet.",
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
    notes:
      "Relatively flat path. The configuration at Kingsway has changed several times.",
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
    notes:
      "Annoyingly indirect. Quiet but lots of hills. Involves a short alley.",
  },
  homer: {
    name: "Homer St",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { northbound: VIDEOS.homerNb } }],
    notes:
      "The painted lane is beside parked cars, and the parking width is narrow. Plenty of hills. When Richards used to be one-way southbound, this was more useful, but now Richards is a much better (two-way) alternative.",
  },
  hornby: {
    name: "Hornby",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.hornbyNb, southbound: VIDEOS.hornbySb } },
    ],
    notes:
      "Not very flat, but a great connection between the Burrard Bridge and the Convention Center. The light timing is not great for southbound cyclists.",
  },
  horseshoeBay: {
    name: "Horseshoe Bay Dr",
    regions: [REGIONS.westVancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.horseshoeBayNb,
          southbound: VIDEOS.horseshoeBaySb,
        },
      },
    ],
    notes:
      "Lots of hills. The shoulder is quite narrow a couple of times, but most traffic is on the Sea-to-Sky Highway instead of here.",
  },
  howes: {
    name: "Howes St",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { northbound: VIDEOS.howesNb } }],
    notes:
      "Very flat. The south half is a nice shared use path, but the north half is terrible. Consider Wood St or Boundary Trail instead.",
  },
  imperial: {
    name: "Imperial Dr",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.imperialNb } }],
    notes: "Relatively flat. Quiet-ish, but the cars go very fast.",
  },
  imperialLandingTrail: {
    name: "Imperial Landing Trail",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.imperialLandingWb } }],
    notes: "A flat shared use path which varies a lot in width.",
  },
  imperialPowerline: {
    name: "Imperial Trail/Powerline Trail",
    shortName: "Imperial/Powerline",
    regions: [REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.imperialPowerlineEb } }],
    notes:
      "A gentle hill to the east. The shared use path gets wider as you go east, but also busier, with lots of dogs.",
  },
  inglis: {
    name: "Inglis Dr",
    regions: [REGIONS.richmond],
    legs: [{ videos: {} }],
    notes: "Very flat.",
  },
  inverness: {
    name: "Inverness",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.invernessSb } }],
    notes:
      "Very steep. Quiet, but cars will be impatient to pass you going uphill. The configuration at Marine is confusing, you briefly travel on the left of opposing bikes.",
  },
  keefer: {
    name: "Keefer",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.keeferEb, westbound: VIDEOS.keeferWb } },
    ],
    notes:
      "Some minor hills. The west half is quite bad, the east half is quiet. Use Adanac instead though.",
  },
  kensington: {
    name: "Kensington Urban Trail",
    shortName: "Kensington Trail",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          northbound: VIDEOS.kensingtonNb,
          southbound: VIDEOS.kensingtonSb,
        },
      },
    ],
    notes:
      "Flat in the middle with hills at either end. The north end connects to nothing, best to exit early to Central Valley Greenway. Pedestrian lights won't change for you unless you press the button - extremely poor design. The intersection at Canada Way is annoying.",
  },
  kent: {
    name: "Kent",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.kentWb } }],
    notes:
      "Flat. The painted lanes are beside the curb. Generally, the further east you go the better this route is. But the surface is extremely bad in multiple places. The west portion might be the worst bike route in the city. The east has had detours for years due to adjacent construction.",
  },
  kerr: {
    name: "Kerr St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.kerrNb, southbound: VIDEOS.kerrSb },
      },
    ],
    notes:
      "Very steep hill. The painted lanes north of Rosemont Dr are beside parked cars; south, they are beside the curb, sometimes with parked cars on your left. When the road curves at the north end, considering turning onto/from Kerr instead of using Rupert.",
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
    notes:
      "A brief alternative to Ridgeway which is one block over. Unfortunately it's a lot hillier than Ridgeway, but quieter and has a light instead of a 4-way stop at Elliott.",
  },
  kingEdward: {
    name: "W King Edward Ave",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.kingEdwardEb,
          westbound: VIDEOS.kingEdwardWb,
        },
      },
    ],
    notes:
      "Flat in the middle with significant climbs out in either direction. The painted lanes are usually beside parked cars. The intersection at Arbutus was improved in late 2024. In 2025 the route was extending west from Quesnel Dr to Dunbar St.",
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
    notes:
      "One of the worst bridges, extremely narrow sidewalk, very annoying to pass a pedestrian. The slip lanes mid-way across are very bad to cross too. The south end doesn't connect to anything. The north end has several connections but some are unclear. The shared lane on Marine is mostly a bus lane and you only use it when traffic is stopped at a red light so it's ok.",
  },
  lakes: {
    name: "Lakes",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.lakesNb } }],
    notes:
      "Multiple steep hills. The portion along Sperling varies a lot but is overall quite bad. You can skip part of Sperling by using the path along Kensington. A new pedestrian/cyclist overpass of the Trans-Canada Highway is being built just to the east of this.",
  },
  lakewood: {
    name: "Lakewood",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.lakewoodNb,
          southbound: VIDEOS.lakewoodSb,
        },
      },
    ],
    notes:
      "Much hillier than the nearby car routes (such as Victoria and Nanaimo) unfortunately. But relatively quiet.",
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
    notes:
      "A long gradual climb then descent in both directions. Pedestrians can only use the east side of the causeway, but both sides of the bridge.",
  },
  lionsGateVillage: {
    name: "Lions Gate Village",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { southbound: VIDEOS.lionsGateVillageSb } }],
    notes:
      "A connection between the Lions Gate Bridge and Capilano Rd. There are sharrows on the ground, but no signs directing you toward any destination so you'll likely miss the shared use path in the middle.",
  },
  londonDublin: {
    name: "London/Dublin Greenway",
    shortName: "London/Dublin Gr.",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.londonDublinEb } }],
    notes:
      "The west end has a steep hill. It's a 'greenway' but is basically entirely on-street, though mostly quiet. The east end used to connect to the school, but the school was rebuilt on the other side of the property and is no longer accessible from here.",
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
    notes:
      "A very uncomfortable route for the most part, though some sections are separated and nice. The east end, intertwined with the Trans-Canada Highway, is extremely uncomfortable, especially westbound. At the west end, it's best to connect to Central Valley Greenway via the path along Gilmore. The painted lanes are beside the curb.",
  },
  lowLevel: {
    name: "Low Level Rd",
    regions: [REGIONS.northVancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.lowLevelEb, westbound: VIDEOS.lowLevelWb },
      },
    ],
    notes:
      "A reasonably wide shoulder on a fast road with very few intersections.",
  },
  lynas: {
    name: "Lynas Ln",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.lynasNb } }],
    notes:
      "Very flat. The north part gets a lot of cars at times. Mainly useful as a connection with the No. 2 Bridge; connect to that via Dover Cr.",
  },
  mackay: {
    name: "MacKay",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { southbound: VIDEOS.mackaySb } }],
    notes:
      "A short, flat path. There are a few poles in the middle of the path. The path itself doesn't connect with anything comfortable at the north end, though you can use the painted lane to connect with Hamilton/16th.",
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
    notes:
      "Flat. The painted lanes are beside the curb. Car traffic gets really backed up and you can pass it all. The 'detour' at the east end, away from Main St, is a little annoying - especially westbound, when it takes up to 3 minutes to turn left back onto Main St. But the separated lane there is new from 2024.",
  },
  marineNw: {
    name: "NW Marine",
    shortName: "NW Marine (UBC)",
    regions: [REGIONS.vancouver, REGIONS.ubc],
    legs: [{ videos: { eastbound: VIDEOS.nwMarineEb } }],
    notes:
      "A long steep hill up to UBC and a milder hill at the east end, but flat besides that. Quite uncomfortable. Much of the painted lanes are beside parked cars, sometimes perpendicular parking.",
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
    notes:
      "A long gradual hill with lots of traffic. The portions with a shoulder are quite wide, but crossing the slip lanes at 16th is quite horrible. The painted lanes are beside the curb.",
  },
  marineNv: {
    name: "Marine Dr/3rd St (North Vancouver)",
    shortName: "Marine/3rd (NV)",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { westbound: VIDEOS.marineNvWb } }],
    notes:
      "Flat. One of the worst routes in the area. Some of the shared lane portions are bus lanes, which is not so bad, but most aren't, and even those that are frequently allow right-turning vehicles. The painted lanes are mostly beside the curb.",
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
    notes:
      "Lots of hills, but still the most flat way to get to Horseshoe Bay. The painted lanes are beside the curb. Most drivers are reasonable, but with the winding road it's very unpleasant to be passed. Some sections have a brief alternate route, usually to allow you to do a steep climb without worrying about traffic behind you, but often involve extra hills.",
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
    notes:
      "Flat, besides the very east end. The shoulder is often full of rocks and other debris. The intersection with Boundary is very hostile towards cyclists and pedestrians, you will need to dismount",
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
    notes:
      "Extremely unpleasant. Minor hills. It appears that you can continue east via the shoulder (which I haven't mapped), but it's much nicer to use PoCo Trail.",
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
    notes:
      "Not very flat. Hardly a greenway - it's mostly on-street with little traffic calming. The east end is different depending on which direction you're traveling, which can be confusing - it seems unnecessary too, Lynbrook would be fine both directions. The route shifts to 58th briefly at Langara, which is annoying - 59th is wide enough for a separated lane. Unfortunately many drivers use this route to access Knight St.",
  },
  mcdonaldBeachTrail: {
    name: "McDonald Beach Trail",
    shortName: "McDonald Beach T.",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.mcdonaldBeachTrailWb } }],
    notes:
      "Very flat, but the surface has lots of holes/indentations, which may be full of water.",
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
    notes:
      "Relatively flat, but extremely busy. It doesn't actually go to Metrotown, just circles around it. It's unclear what purpose this route serves. A straight(ish) route from the skytrain station to Sussex, connecting to the mall, would be much more useful.",
  },
  middleArm: {
    name: "Middle Arm Trail",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.middleArmEb } }],
    notes:
      "Very flat, but the surface varies a lot in quality and is often gravel. Confusingly, it's a dead-end shortly after Cambie Rd.",
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
    notes:
      "There are a lot of hills. The east bit of Vancouver, on 29th, is particularly bad - hills combined with fast traffic. The signage in Burnaby is lacking, so it's not entirely clear where the route ends, and its easy to miss multiple turns near the Trans-Canada Highway.",
  },
  millenniumTrail: {
    name: "Millennium Trail",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { southbound: VIDEOS.millenniumSb } }],
    notes: "Lots of hills.",
  },
  miller: {
    name: "Miller Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.millerWb } }],
    notes:
      "Very flat. The east portion is quite uncomfortable, especially eastbound.",
  },
  minoru: {
    name: "Minoru Blvd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.minoruNb } }],
    notes:
      "Very flat, lots of traffic. The painted lanes are beside the curb. The painted lanes may be closed at CF Richmond Center due to construction.",
  },
  mosaic: {
    name: "Mosaic",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.mosaicNb, southbound: VIDEOS.mosaicSb } },
    ],
    notes:
      "Lots of hills, but mostly quiet. The south (east) end leads to an alley which eventually connects to BC Parkway. The Grandview Cut was closed to cars around 2022.",
  },
  nanaimo: {
    name: "Nanaimo St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.nanaimoNb, southbound: VIDEOS.nanaimoSb },
      },
    ],
    notes:
      "Gentle hills. Between fast traffic and parked cars, but there is a sufficient buffer. Doesn't really connect to anything in the south half.",
  },
  nelson: {
    name: "Nelson St",
    regions: [REGIONS.vancouver],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.cambieBridgeNelsonSb } }],
    notes:
      "One-way downhill connection to the Cambie St Bridge. The light timing works very well. Watch for turning cars though.",
  },
  nelsonAve: {
    name: "Nelson Ave Path",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.nelsonPathSb } }],
    notes:
      "Flat. Good access to Bonsor, but doesn't connect to any reasonable routes at the north end.",
  },
  nicola: {
    name: "Nicola",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.nicolaNb, southbound: VIDEOS.nicolaSb } },
    ],
    notes:
      "A hill. In theory quiet, but there can be traffic. Mostly useful for coming off of Georgia from the Lions Gate Bridge and transitioning to Haro, though you could do that on Cardero.",
  },
  no2: {
    name: "No. 2 Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.no2Nb } }],
    notes:
      "Painted lane over the bridge, beside the curb. Relatively flat. You can use the sidewalk as a shared use path instead. Doesn't connect to anything at the south end, and Westminster Hwy is not good for cyclists.",
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
    notes:
      "The shared use sidewalk of the bridge - the only comfortable way to cross to Sea Island. There are no signs saying you have to use the right side, so I'd recommend the west side for both directions. The east side can only be accessed by briefly using the busy River Rd. As of 2024 there is some construction on the southwest side, so access to Dover Cr may be closed - which is the best way to exit the bridge.",
  },
  no2Path: {
    name: "No. 2 Rd Path",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.no2PathNb, southbound: VIDEOS.no2PathSb },
      },
    ],
    notes: "Very flat shared use path.",
  },
  no3: {
    name: "No. 3 Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.no3Nb, southbound: VIDEOS.no3Sb } }],
    notes:
      "Very flat. The painted lanes are beside the curb, and sometimes slightly elevated from the road. Northbound is quite bad, and southbound is absolutely terrible. Access from Granville Ave is recommended via Buswell St and Cook Rd, but these are also not good roads for cycling.",
  },
  no6Path: {
    name: "No. 6 Rd Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.no6PathSb } }],
    notes:
      "A couple of brief shared use paths, which don't connect to each other, nor anything else really besides Westminster Hwy at the south end.",
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
    notes:
      "Two very different halves. The north half is flat but busy with traffic - and doesn't connect to anything at all; consider Willingdon instead. The south half is a steep hill but relatively calm.",
  },
  nService: {
    name: "North Service Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.nServiceEb } }],
    notes:
      "Very flat. Probably the best way to approach the YVR terminal, from the shared use sidewalk on Templeton Station Rd.",
  },
  oaklandBurris: {
    name: "Oakland St/Burris St",
    shortName: "Oakland/Burris",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.oaklandBurrisEb,
          westbound: VIDEOS.oaklandBurrisWb,
        },
      },
    ],
    notes:
      "A long steep hill with lots of traffic. The painted lanes are beside the curb. At the east end, you can continue and connect with Midtown. At the west end, going eastbound is confusing as you briefly use an adjacent street, and the shared use paths on Dover and southwards on Royal Oak don't quite connect to anything.",
  },
  oakStreetBridge: {
    name: "Oak Street Bridge",
    regions: [REGIONS.vancouver, REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.oakNb, southbound: VIDEOS.oakSb },
      },
    ],
    notes:
      "Bikes are not allowed on the road. It doesn't say anywhere that you need to use the right sidewalk; the west side is much more useful for both north- and southbound travel. The surface is very bumpy. The annoying barriers at the south end of the east side may have been adjusted since filming.",
  },
  odlin: {
    name: "Odlin",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.odlinWb } }],
    notes:
      "Very flat. Some parts lack any signage, and it's easy to miss some turns. The east end is very close to the end of Shell Rd Trail, but there's no connection. Odlin park doesn't have proper curb ramps for cyclists. It's not exactly clear where the route ends at the west.",
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
    notes:
      "The west portion is useful (but steep). East of Heather is annoyingly indirect, and has plenty of hills; better to use 10th. Crossing Cambie and using Yukon is uncomfortable, it's much better to use Ash, 5th, and the path along 2nd in-between (this is also shorter and less steep).",
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
    notes:
      "Long steep uphill, some flat-ish, then long steep downhill. Much of the north and middle is traffic calmed, but cars can use it as a shortcut between 49th and Marine. Still one of the best north-south routes outside of downtown.",
  },
  pandora: {
    name: "Pandora",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.pandoraEb, westbound: VIDEOS.pandoraWb },
      },
    ],
    notes:
      "Some hills and some traffic calming. A few major road crossings (Commercial and Victoria) have no light, which is uncomfortable. It's annoying that the west end has such a detour to get to Powell.",
  },
  parkside: {
    name: "Parkside",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.parksideNb } }],
    notes:
      "Very flat. The connections are either end are quite bad and there's nothing in the middle. It can be hard to follow north of Granville. At the north end, you cannot cross Westminster Hwy, so will have to approach/leave via the eastbound shoulder.",
  },
  pender: {
    name: "Pender St",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.penderEb, westbound: VIDEOS.penderWb } },
    ],
    notes:
      "A hill, lots of cars. The painted lanes are beside the curb. Before Dunsmuir was a bike route, the whole of Pender was the only east-west bike route around here (mostly just a shared lane with heavy traffic). Now only the painted portion remains as a bike route.",
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
    notes:
      "Surprisingly wide. The switch-back at the west end is annoying. The unofficial gravel path at the east end is not recommended.",
  },
  pocoTrail: {
    name: "Traboulay PoCo Trail",
    shortName: "PoCo Trail",
    isIncomplete: true,
    regions: [REGIONS.portCoquitlam],
    legs: [{ name: "South Pitt River", videos: { eastbound: VIDEOS.pocoEb } }],
    notes:
      "This route extends in a big loop, through Colony Farm, Gates Park, Hyde Creek Nature Reserve, the Deboville Slough, and along the Pitt River. The Pitt River portion is flat, and in many places you'd be better off taking the road as the trail is narrow, plus the CPR crossing area is of low quality and confusing.",
  },
  portMannBridge: {
    name: "Port Mann Bridge",
    regions: [REGIONS.coquitlam, REGIONS.surrey],
    legs: [{ videos: {} }],
    notes:
      "A long climb. It can get very windy. The connections at the north end are quite bad, besides the United Blvd path which abruptly ends.",
  },
  portRoyalRiverTrail: {
    name: "Port Royal River Trail",
    shortName: "Port Royal River T.",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.portRoyalEb } }],
    notes: "Flat, varying surface quality.",
  },
  portside: {
    name: "Portside",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.portsideEb, westbound: VIDEOS.portsideWb },
      },
    ],
    notes:
      "Some hills, too much traffic at times. The road surface varies a lot (Wall St and Bridgeway have bad sections). The city would like to continue this west along Powell to McLean, but re-allocating space is tricky. The city is also currently planning to upgrade much of this route with more traffic calming and/or separated lanes.",
  },
  portsideGap: {
    name: "Portside Gap",
    isGap: true,
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.portsideGapWb } }],
    notes:
      "The city would like to fill this gap along Powell between McLean and Wall, but re-allocating space is tricky. Currently, outside of rush hour, it can be done westbound, but eastbound is very bad due to needing to turn left onto Water.",
  },
  powell: {
    name: "Powell",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.powellEb, westbound: VIDEOS.powellWb } },
    ],
    notes:
      "A gentle hill for the overpass. The east block is a shared use path. The city would like to extend this east to Water St.",
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
    notes:
      "Lots of hill. Traffic is light despite little calming (only at Sunset Park). Unfortunately there's no way to continue north or east at the north tip.",
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
    notes:
      "There's nothing saying you need to use the right side, but it's awkward to pass cyclists/pedestrians so I wouldn't recommend it. However, the west end is much more convenient as it's the only direct connection away from Stewardson.",
  },
  railway: {
    name: "Railway Ave",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.railwayNb, southbound: VIDEOS.railwaySb },
      },
    ],
    notes:
      "Very flat. The painted lanes are beside the curb. Might as well use Railway Greenway, though that has a speed limit of 15 km/h, and briefly disappears in Steveston.",
  },
  railwayGreenway: {
    name: "Railway Greenway",
    regions: [REGIONS.richmond],
    legs: [{ videos: { southbound: VIDEOS.railwayGreenwaySb } }],
    notes:
      "Very flat. Unfortunately, there's a gap in Steveston and you need to either walk, or use the road. The speed limit is 15 km/h (which, like street speed limits, is never enforced), and it's shared with pedestrians, so the painted lanes on the road may be preferable to some.",
  },
  richards: {
    name: "Richards",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.richardsNb,
          southbound: VIDEOS.richardsSb,
        },
      },
    ],
    notes:
      "Steep hill at the north end, and also no connection to anything at the north end. Very similar to Hornby.",
  },
  ridgeway: {
    name: "Ridgeway",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { westbound: VIDEOS.ridgewayWb } }],
    notes:
      "An odd route with lots of hills. It mostly overlaps with various other routes (like Off Broadway and Midtown). It also splits into 2 branches between 22nd and Yew, which is not clearly signed - the north/east branch is more direct, but more confusing and less comfortable. The east section of the route, on 45th, has way too many cars using it.",
  },
  riverPkwy: {
    name: "River Pkwy",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: {
          northbound: VIDEOS.riverPkwyNb,
          southbound: VIDEOS.riverPkwySb,
        },
      },
    ],
    notes:
      "Very flat. This brand new road replaces an old train track. Sadly, given that it was designed/built from scratch, the implementation is quite poor, with just flimsy posts separating you from cars. Use Middle Arm Trail instead.",
  },
  royalOak: {
    name: "Royal Oak",
    shortName: "Royal Oak",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.royalOakSb } }],
    notes:
      "Very steep, but very quiet. Unfortunately, it doesn't quite take you all the way to Metrotown, BC Parkway, or any other useful destination/connection (besides the school).",
  },
  rumble: {
    name: "Rumble Street Urban Trail",
    shortName: "Rumble Urban Trail",
    regions: [REGIONS.burnaby],
    legs: [
      { videos: { eastbound: VIDEOS.rumbleEb, westbound: VIDEOS.rumbleWb } },
    ],
    notes:
      "Gradual hill. For some reason there's a gap in the middle (even though there's plenty of space for a wide path) and you need to share the busy road with cars. Transitioning between the road and path at either end of this gap can be awkward. Generally, the intersections are bad, cars often block the crossing. The crossing signals won't automatically change, so you're essentially guaranteed to have to stop and press the buttons. And there are too many driveways along the path. Plus it doesn't connect to anything in Vancouver.",
  },
  rupert: {
    name: "Rupert St",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.rupertNb, southbound: VIDEOS.rupertSb },
      },
    ],
    notes:
      "Very steep, right between parked cars and fast traffic (except north of Grandview Hwy which is beside the curb). Everything it connects to, besides Central Valley Greenway, is even worse. There is often a car parked at the end of the northbound lane.",
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
    notes:
      "An uncomfortable highway shoulder beside fast traffic. Watch out for cars illegally using the shoulder to pass other cars. Use the Sea Island shared use path instead.",
  },
  stAndrews: {
    name: "St Andrews Ave",
    isIncomplete: true,
    regions: [REGIONS.northVancouver],
    legs: [{ videos: {} }],
    notes:
      "Very steep. This route continues north to 23rd St, just short of Trans-Canada Highway.",
  },
  stGeorge: {
    name: "St George Rainway",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { northbound: VIDEOS.stGeorgeNb } }],
    notes:
      "Opened July 2025. A nice car-free/car-light street with rainwater infrastructure. Will eventually continue further south, hopefully to 14th/Prince Edward.",
  },
  stJohns: {
    name: "Saint Johns St Path",
    regions: [REGIONS.portMoody],
    legs: [{ videos: { eastbound: VIDEOS.stJohnsEb } }],
    notes:
      "A new mostly-flat path as of 2024. The east-most block still looks/feels temporary.",
  },
  seaIslandConnector: {
    name: "Sea Island Connector",
    shortName: "Sea Island Conn.",
    regions: [REGIONS.richmond],
    isOneWay: true,
    legs: [{ videos: { westbound: VIDEOS.seaIslandConnectorWb } }],
    notes:
      "A small climb out of Richmond, beside fast traffic. Still the second best way to access Sea Island, after No. 2 Rd Bridge.",
  },
  seaIslandPath: {
    name: "Sea Island Path",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.seaIslandPathNb } }],
    notes:
      "Very flat. Mostly quite good, some the sections under bridges can be quite low quality. At Templeton Station it turns into a regular sidewalk and it's not obvious that it's still a shared use path, but it is.",
  },
  seaIslandWay: {
    name: "Sea Island Way",
    regions: [REGIONS.richmond],
    isOneWay: true,
    legs: [
      { videos: { eastbound: VIDEOS.seaIslandWayEb25 } },
      {
        name: "Moray Channel Bridge",
        videos: { eastbound: VIDEOS.seaIslandWayEb },
      },
    ],
    notes:
      "Relatively flat, beside fast traffic. Best to access from the path at Miller Rd. The bridge shoulder often has debris. I wouldn't recommend continuing beyond No. 3 Rd.",
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
      {
        name: "Laurel Landbridge",
        videos: { northbound: VIDEOS.laurelLandbridgeNb },
      },
    ],
    notes:
      "Flat. Includes the well-known Seawall. There are some brief sections on quiet roads (in Kitsilano). Besides Jericho & Spanish Banks, the majority has separation from pedestrians. Can get crowded at times when sunny. A portion near Science World is closed indefinitely, but there's a detour set up.",
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
          westbound: VIDEOS.seasideBypassExpoWb25,
        },
      },
      {
        name: "Pacific/Expo (Old)",
        videos: {
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
        videos: {
          eastbound: VIDEOS.seasideBypassMarine4thEb,
          westbound: VIDEOS.seasideBypassMarine4thWb,
        },
      },
      { name: "Whyte", videos: { westbound: VIDEOS.seasideBypassWhyteWb } },
    ],
    notes:
      "A faster, more direct, slightly hillier, less comfortable alternative to Seaside. It is not signed very well. The parts with a busy shared lane (Marine, 4th, Quebec) are unpleasant, and it's beside parked cars for much of Pacific, but the rest is mostly pretty good. The gap between Beach/Jervis and Thurlow has been filled with a protected lane (eastbound/uphill only) as of 2025.",
  },
  seaToRiver: {
    name: "Sea to River",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { northbound: VIDEOS.seaToRiverNb } }],
    notes:
      "This route varies a lot in comfort and clarity, but is usually very hilly. It's not clear where it ends at the south end, nor how you're intended to connect to Glenlyon Urban Trail - either a steep low quality muddy path, or an alley plus busy road. The worst part is Patterson; at Central Park, you can use the shared path around the park instead, and north of Kingsway you can use Inman instead - but Inman has no connections at Kingsway so it's not practical (and is further). The section between Dawson and 1st was quite confusing and bad, but was being improved in late 2024.",
  },
  seaview: {
    name: "Seaview",
    regions: [REGIONS.westVancouver],
    legs: [
      { videos: { eastbound: VIDEOS.seaviewEb, westbound: VIDEOS.seaviewWb } },
    ],
    notes:
      "A nice flat path, formerly a train track (which now goes through a tunnel instead). Tends to have plenty of dogs. The east end is only accessible via a steep gravel hill (with optional stairs), and only connects to Marine Dr.",
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
    notes:
      "Trucks on the road will sometimes buffer you with wind and dust, and the climb is long, but besides that it's alright. The switchbacks arriving in Vancouver force you to slow down. The adjacent Skeena tunnel in Vancouver is very narrow.",
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
    notes:
      "Almost entirely shared use paths, with plenty of hills. Unfortunately they don't quite connect to each other except at Gaglardi.",
  },
  shellRoadTrail: {
    name: "Shell Rd Trail",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: { northbound: VIDEOS.shellNb, southbound: VIDEOS.shellSb },
      },
    ],
    notes:
      "Very flat, and feels more like a pedestrian trail which bikes are allowed to use. The north end abruptly ends, forcing you onto the busy road.",
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
    notes:
      "Very hilly. Originally just a one-way connection from the Cambie Bridge to Richards, a 'quick build' 2-way extension to Haro at Thurlow was added around 2022. The lights timing is designed for cars going uphill, and don't work well for cyclists in either direction.",
  },
  southDyke: {
    name: "South Dyke Rd",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { eastbound: VIDEOS.southDykeEb } }],
    notes:
      "Very flat and mostly quiet since cars cannot connect with Derwent - bikes can, it has a shoulder.",
  },
  southeast: {
    name: "Southeast",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.southeastEb,
          westbound: VIDEOS.southeastWb,
        },
      },
    ],
    notes:
      "Some minor hills. The east portion is quite bad, and only connects to Cariboo. The west block, between BC Parkway and Griffiths Dr, was upgraded in 2024. Gets busy around Mary St during school start/end.",
  },
  spiritTrail: {
    name: "Spirit Trail",
    regions: [REGIONS.westVancouver, REGIONS.northVancouver],
    legs: [{ videos: { eastbound: VIDEOS.spiritTrailEb } }],
    notes:
      "Mostly quite flat, though the Moodyville section is high up, and the portion just west of here has a few brief branches which can be confusing. The shipyards section get very busy with pedestrians. Harbourside construction will (apparently) last until 2025. There are plans to extend the trail all the way to Deep Cove, but the route has not been determined.",
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
    notes:
      "Very flat. Several narrow points where you might get stuck behind slower cyclists, and a few dismount points.",
  },
  stevestonHwy: {
    name: "Steveston Hwy Path",
    regions: [REGIONS.richmond],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.stevestonEb,
          westbound: VIDEOS.stevestonWb,
        },
      },
    ],
    notes:
      "Very flat. Finished in 2025. Might eventually be extended to No. 5 Rd.",
  },
  sunrise: {
    name: "Sunrise",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.sunriseNb, southbound: VIDEOS.sunriseSb },
      },
    ],
    notes:
      "Several steep hills. There are multiple busy/uncomfortable sections, such as Elliott St, Earles St, and (parts of) Slocan St. You can skip around Earles St via Wales Duchess.",
  },
  tatlow: {
    name: "Tatlow",
    regions: [REGIONS.northVancouver],
    legs: [{ videos: { northbound: VIDEOS.tatlowNb } }],
    notes:
      "Very flat. A brief protected lane to avoid the parking lot at the park. The route ends at Marine but you can continue north then turn left to access Lions Gate Village or Capilano Rd.",
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
    notes:
      "A mild hill over the skytrain. Quite busy with several slip lanes, which makes it uncomfortable. Connecting to/from Templeton Station Rd or the path south of Miller is not the most intuitive.",
  },
  terminalPath: {
    name: "Terminal Ave Path",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { eastbound: VIDEOS.terminalEb, westbound: VIDEOS.terminalWb },
      },
    ],
    notes:
      "A short, flat path - but there is no way to connect to any other bike routes! You need to ride on Main St or Terminal Ave to enter/exit the area, both of which are terrible.",
  },
  thunderbird: {
    name: "Thunderbird Blvd/Osoyoos Cr",
    shortName: "Thunderbird Blvd",
    regions: [REGIONS.ubc],
    legs: [{ videos: {} }],
    notes:
      "A mild hill at the west end. The only designated connection from Thunderbird Blvd is around Osoyoos Cr, which is a bit indirect. You could continue east on Fairview Pl, but there are chains fully blocking the road at one point, requiring a dismount. It appears a connection to University Blvd may be added along Ortona Rd.",
  },
  transCanadaHwy: {
    name: "Trans Canada Hwy",
    isIncomplete: true,
    regions: [REGIONS.westVancouver],
    legs: [
      {
        name: "West Vancouver",
        videos: {
          eastbound: VIDEOS.transCanadaHwyEb,
          westbound: VIDEOS.transCanadaHwyWb,
        },
      },
    ],
    notes:
      "Many hills. Bikes are banned from many portions of this highway through Metro Vancouver, but they are allowed in West Vancouver - you cannot continue east beyond Capilano Rd though. The West Vancouver portion is quite bad - occasionally the shoulder almost completely disappears at an on-/off-ramp, or is full of branches/gravel/debris. Marine Dr is probably better. At the west end, you should connect with Horseshoe Bay Dr rather than directly with Sea-to-Sky Highway (it rejoins it later).",
  },
  transCanadaTrail: {
    name: "Trans Canada Trail",
    isIncomplete: true,
    regions: [REGIONS.vancouver, REGIONS.burnaby],
    legs: [{ name: "Burnaby", videos: { westbound: VIDEOS.seaToRiverNb } }],
    notes:
      "This is a route across Canada. In Metro Vancouver, many portions overlap with other routes (so I haven't properly mapped it all out) and other portions it only exists for pedestrians (for example, at Sperling Ave near Hastings, you need to use the sidewalk). I've only mapped out the most connected/useful section, in Burnaby.",
  },
  university: {
    name: "University Blvd",
    regions: [REGIONS.ubc],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.universityEb,
          westbound: VIDEOS.universityWb,
        },
      },
    ],
    notes:
      "Mostly flat-ish. The west portion is mostly pedestrianized and gets crowded during classes. The painted east portion is beside the curb.",
  },
  universityDrE: {
    name: "University Dr E",
    regions: [REGIONS.burnaby],
    isOneWay: true,
    legs: [{ videos: { eastbound: VIDEOS.universityDrEEb } }],
    notes:
      "A shoulder beside fast traffic, up a bit of a hill. Abruptly ends without connecting to anything. Better to use the adjacent shared use path anyway.",
  },
  uptownDowntown: {
    name: "Uptown/Downtown",
    regions: [REGIONS.newWestminster],
    legs: [{ videos: { southbound: VIDEOS.uptownDowntownSb } }],
    notes:
      "Unclear if this route has a name, but signs point you to 'Uptown' or 'Downtown' depending on the direction of travel. The south half is a steep hill.",
  },
  valley: {
    name: "Valley",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { northbound: VIDEOS.valleyNb, southbound: VIDEOS.valleySb } },
    ],
    notes:
      "The middle is very flat, but either end has hills. A steep hill up 33rd Ave to connect with the Arbutus Greenway at the south end. No traffic calming, but quiet.",
  },
  victory: {
    name: "Victory",
    regions: [REGIONS.burnaby],
    legs: [
      { videos: { eastbound: VIDEOS.victoryEb, westbound: VIDEOS.victoryWb } },
    ],
    notes:
      "Some minor hills. No traffic calming, and almost every major road crossing just has a stop sign, so you can get stuck waiting forever. Rumble St Urban Trail is an alternative.",
  },
  walesDuchess: {
    name: "Wales Duchess",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: {
          northbound: VIDEOS.walesDuchessNb,
          southbound: VIDEOS.walesDuchessSb,
        },
      },
    ],
    notes:
      "Some minor hills. 'Built' as an alternative to Earles St, which is part of Midtown and Sunrise. Pedestrians often walk in the path along Kingsway. It should definitely access 29th Ave Station via Duchess St, but instead goes way out of the way to Todd St - especially annoying if you want to use Sunrise.",
  },
  water: {
    name: "Water St",
    regions: [REGIONS.vancouver],
    legs: [
      { videos: { eastbound: VIDEOS.waterEb, westbound: VIDEOS.waterWb } },
    ],
    notes:
      "Bike 'infrastructure' (mostly paint) added May 2025 as part of car-free days pilot for summer 2025.",
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
    notes:
      "A wide road which encourages high speeds. Very flat, besides the overpass at the east end. The west portion is under the convention center and can be very dark. Unfortunately, its the only water-adjacent east-west connection here - Dunsmuir is far away, and up a steep hill.",
  },
  wesbrook: {
    name: "Wesbrook Mall",
    regions: [REGIONS.ubc],
    legs: [{ videos: { southbound: VIDEOS.wesbrookSb } }],
    notes:
      "Mostly flat, minor hill to the south. Some of the painted lanes are beside parked cars. The north portion was partially upgraded around 2022, but is far from perfect. The south portion can be uncomfortable at times.",
  },
  westDyke: {
    name: "West Dyke Trail",
    regions: [REGIONS.richmond],
    legs: [{ videos: { northbound: VIDEOS.westDykeNb } }],
    notes:
      "Very flat, but the surface is gravel and varies a bit in quality. There's no clear signage on how to connect to other bike routes in Steveston at the south end.",
  },
  westMall: {
    name: "West Mall",
    regions: [REGIONS.ubc],
    legs: [{ videos: { southbound: VIDEOS.westMallSb } }],
    notes:
      "Flat and direct. There seems to always be light traffic. A portion appears to be one-way southbound for the foreseeable future due to construction.",
  },
  westminsterHwy: {
    name: "Westminster Hwy",
    regions: [REGIONS.richmond],
    legs: [{ videos: { westbound: VIDEOS.westminsterWb } }],
    notes:
      "Very flat. The only east-west connection. The painted lanes are beside the curb. The middle section is a reasonably nice shared use path. The west section is a standard shoulder. The shoulders in the east section are much less comfortable; westbound you are sandwiched between two highways. The East-West Connector overpass is quite bad.",
  },
  westportMathers: {
    name: "Westport/Southridge/Westmount/Mathers+",
    shortName: "Westport/Mathers+",
    regions: [REGIONS.westVancouver],
    legs: [
      {
        videos: {
          eastbound: VIDEOS.westportMathersEb,
          westbound: VIDEOS.westportMathersWb,
        },
      },
    ],
    notes:
      "One of three ways to get to Horseshoe Bay, though it doesn't actually go all the way. Lots of steep hills, though the uphill sections tend to be a painted lane. The painted lanes are beside the curb. Lots of turns, but the signs are mostly well-placed at intersections - though the route has no name and it's just a picture of a bike so you can't distinguish which way to go when it intersects another bike route.",
  },
  williams: {
    name: "Williams Rd",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.williamsEb } }],
    notes:
      "Very flat, lots of traffic. The only full east-west connection in south Richmond unfortunately. It's not great. The painted lanes are beside the curb.",
  },
  willingdonLinear: {
    name: "Willingdon Linear Park Urban Trail",
    shortName: "Willingdon L. Park",
    regions: [REGIONS.burnaby],
    legs: [
      {
        videos: {
          northbound: VIDEOS.willingdonLinearNb,
          southbound: VIDEOS.willingdonLinearSb,
        },
      },
    ],
    notes:
      "A gentle hill. The city slowly bought all the corner lots over decades then added this path. It may host a skytrain above it in the distant future. Unfortunately, neither end properly connects to other bike routes - going south, you'll be stuck at the end on the wrong side of the road.",
  },
  willingdon: {
    name: "Willingdon Urban Trail",
    shortName: "Willingdon Trail",
    regions: [REGIONS.burnaby],
    legs: [{ videos: { southbound: VIDEOS.willingdonSb } }],
    notes:
      "Some hills. The section by the gas station at Canada Way is silly. Drivers at Costco will probably block the path. The crossing signals won't automatically change, so you're essentially guaranteed to have to stop and press the buttons.",
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
    notes:
      "A short, flat connection to Hastings Park and the PNE. The city plans to extend this southwards, initially on Lillooet to create a 'greenway' called the Eastside Crosscut (though it will be almost entirely on-street).",
  },
  windsor: {
    name: "Windsor",
    regions: [REGIONS.vancouver],
    legs: [
      {
        videos: { northbound: VIDEOS.windsorNb, southbound: VIDEOS.windsorSb },
      },
    ],
    notes: "The north portion is a steady hill, steep at first.",
  },
  woodwardsSaunders: {
    name: "Woodwards/Saunders",
    shortName: "Woodwards",
    regions: [REGIONS.richmond],
    legs: [{ videos: { eastbound: VIDEOS.woodwardsSaundersEb } }],
    notes:
      "Very flat. Too much traffic between Railway Ave and No. 2 Rd. It's an alley between Gilbert Rd and No. 3 Rd, with some easy-to-miss turns and a brief narrow path.",
  },
  york: {
    name: "York",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { eastbound: VIDEOS.yorkEb, westbound: VIDEOS.yorkWb } }],
    notes:
      "A short steep hill at the west and, and a gradual hill in the middle. Quiet.",
  },
  yukon: {
    name: "Yukon",
    regions: [REGIONS.vancouver],
    legs: [{ videos: { southbound: VIDEOS.yukonSb } }],
    notes:
      "A long hill, steep at times. Plenty of traffic north of 12th unfortunately. The painted lanes are often beside parked cars. A bit annoying to cross Broadway during the subway construction. The crossing/intersections at King Edward Ave were upgraded around 2023.",
  },
};
