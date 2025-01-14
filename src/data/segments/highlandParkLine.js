import {
  BULLER_BERESFORD_W,
  EDMONDS_KINGSWAY_SW,
  SALISBURY_BERESFORD_S_E,
  SAMPLES_HIGHLAND_PARK_LINE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GRIFFITHS_HIGHLAND_E = [49.21696, -122.96068];

export const HIGHLAND_PARK_LINE = [
  {
    routeNames: [ROUTES.highlandParkLine.name],
    description: "west of sample's path",
    type: "mixed",
    videoIds: [VIDEOS.highlandParkLineEb.id, VIDEOS.highlandParkLineWb.id],
    videoIdsStartAtStart: [VIDEOS.highlandParkLineEb.id],
    videoIdsEndAtStart: [VIDEOS.highlandParkLineWb.id],
    positions: [
      BULLER_BERESFORD_W,
      [49.21776, -122.97773],
      [49.21798, -122.9777],
      [49.21794, -122.97748],
      [49.21794, -122.97733],
      [49.21779, -122.97661],
      [49.21765, -122.97589],
      [49.2175, -122.97442],
      [49.2175, -122.97399],
      [49.21748, -122.97336],
      [49.21744, -122.97326],
      [49.21731, -122.9732],
      [49.21728, -122.97234],
      [49.21725, -122.97216],
      [49.21724, -122.97201],
      [49.21725, -122.97188],
      [49.21732, -122.9717],
      [49.2173, -122.97086],
      [49.21724, -122.97038],
      [49.2172, -122.96974],
      [49.21724, -122.96942],
      [49.21724, -122.96919],
      [49.21719, -122.96897],
      [49.21717, -122.96873],
      [49.21718, -122.96854],
      [49.21721, -122.96815],
      [49.21719, -122.96767],
      [49.21713, -122.96728],
      [49.21711, -122.96706],
      [49.2171, -122.96653],
      [49.21713, -122.96608],
      [49.21708, -122.9656],
      [49.21712, -122.96526],
      [49.21711, -122.96501],
      [49.21705, -122.96474],
      [49.21699, -122.96413],
      [49.21698, -122.96386],
      [49.217, -122.96369],
      [49.21705, -122.96343],
      [49.21704, -122.96277],
      SAMPLES_HIGHLAND_PARK_LINE,
    ],
  },
  {
    routeNames: [ROUTES.highlandParkLine.name],
    description: "sample's path to griffiths",
    type: "mixed",
    videoIds: [
      VIDEOS.highlandParkLineEb.id,
      VIDEOS.highlandParkLineWb.id,
      VIDEOS.edmondsSamplesSb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.edmondsSamplesSb.id],
    positions: [
      SAMPLES_HIGHLAND_PARK_LINE,
      [49.217, -122.96207],
      [49.21701, -122.96188],
      [49.21699, -122.96158],
      [49.21692, -122.96121],
      [49.21686, -122.96113],
      [49.21685, -122.96083],
      GRIFFITHS_HIGHLAND_E,
    ],
  },
  {
    routeNames: [ROUTES.highlandParkLine.name],
    description: "east of griffiths",
    type: "mixed",
    videoIds: [VIDEOS.highlandParkLineEb.id, VIDEOS.highlandParkLineWb.id],
    positions: [
      GRIFFITHS_HIGHLAND_E,
      [49.21695, -122.96037],
      [49.21688, -122.96006],
      [49.21686, -122.95947],
      [49.21692, -122.95904],
      [49.21691, -122.95795],
      [49.21689, -122.95766],
      [49.21687, -122.95761],
      SALISBURY_BERESFORD_S_E,
      [49.21683, -122.95649],
      [49.21682, -122.9561],
      [49.21683, -122.95565],
      [49.21693, -122.95491],
      [49.21707, -122.95435],
      [49.21717, -122.95405],
      [49.21725, -122.95389],
      [49.21741, -122.95354],
      [49.21737, -122.95338],
      [49.21766, -122.95288],
      [49.21795, -122.95242],
      [49.21806, -122.95225],
      EDMONDS_KINGSWAY_SW,
    ],
  },
];
