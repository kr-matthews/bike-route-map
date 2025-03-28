import {
  BC_PARKWAY_BYRNE_CREEK,
  BC_PARKWAY_MISSION,
  BC_PARKWAY_SOUTHRIDGE_TRAIL,
  BYRNE_CREEK_MARINE_S,
  BYRNE_MARINE_NW,
  BYRNE_MARINE_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BYRNEPARK_SOUTHRIDGE = [49.20584, -122.96852];
const MISSION_BYRNE_CREEK = [49.21085, -122.96531];
const BYRNE_CREEK_MARINE_SS = [49.2029, -122.98337];

export const BYRNE_CREEK = [
  {
    description: "marine way connection",
    type: "other",
    positions: [BYRNE_CREEK_MARINE_SS, BYRNE_CREEK_MARINE_S],
  },
  {
    description: "mission connection",
    type: "mixed",
    positions: [
      BC_PARKWAY_MISSION,
      [49.20571, -122.95845],
      [49.20577, -122.95858],
      [49.20588, -122.95879],
      [49.20599, -122.95895],
      [49.20617, -122.9592],
      [49.20629, -122.95937],
      [49.20649, -122.95976],
      [49.20659, -122.95994],
      [49.20681, -122.96023],
      [49.20691, -122.96024],
      [49.20734, -122.96082],
      [49.20779, -122.96137],
      [49.20796, -122.96161],
      [49.20805, -122.96177],
      [49.2081, -122.96199],
      [49.2082, -122.96204],
      [49.20832, -122.9623],
      [49.20851, -122.96256],
      [49.20867, -122.96265],
      [49.20885, -122.96293],
      [49.20896, -122.96309],
      [49.20918, -122.96335],
      [49.20941, -122.96352],
      [49.20976, -122.96398],
      [49.21001, -122.96432],
      [49.21084, -122.96531],
      MISSION_BYRNE_CREEK,
    ],
  },
  {
    description: "southridge connection",
    type: "mixed",
    positions: [
      BYRNEPARK_SOUTHRIDGE,
      [49.20583, -122.96831],
      [49.20588, -122.96799],
      [49.20584, -122.96636],
      [49.20583, -122.96596],
      [49.20581, -122.96555],
      [49.20579, -122.96455],
      [49.20578, -122.96391],
      [49.20577, -122.96324],
      [49.2057, -122.96227],
      [49.20532, -122.96048],
      [49.2049, -122.95911],
      [49.20493, -122.95909],
      [49.20512, -122.95939],
      [49.20516, -122.9594],
      [49.20518, -122.95934],
      [49.20507, -122.95894],
      [49.20505, -122.95876],
      BC_PARKWAY_SOUTHRIDGE_TRAIL,
    ],
  },
  {
    routeNames: [ROUTES.byrneCreek.name],
    description: "primary",
    type: "mixed",
    videoIds: [VIDEOS.byrneCreekWb.id],
    videoIdsEndAtStart: [VIDEOS.byrneCreekWb.id],
    positions: [
      [49.19977, -122.98921],
      [49.2008, -122.98736],
      [49.20212, -122.98508],
      [49.20253, -122.98465],
      [49.20266, -122.98435],
      [49.20281, -122.9841],
      [49.2029, -122.98386],
      [49.20292, -122.9836],
      BYRNE_CREEK_MARINE_SS,
      [49.20229, -122.98267],
      BYRNE_MARINE_SW,
      BYRNE_MARINE_NW,
      [49.20229, -122.98184],
      [49.20239, -122.98147],
      [49.20372, -122.97905],
      [49.20439, -122.9778],
      [49.20457, -122.97744],
      [49.20463, -122.97732],
      [49.20483, -122.97687],
      [49.20487, -122.97669],
      [49.2049, -122.97656],
      [49.20496, -122.97624],
      [49.20501, -122.97601],
      [49.20515, -122.97597],
      [49.20511, -122.97538],
      [49.20575, -122.97134],
      [49.20581, -122.97086],
      [49.20585, -122.97023],
      BYRNEPARK_SOUTHRIDGE,
      [49.20624, -122.96854],
      [49.20647, -122.96861],
      [49.20679, -122.96875],
      [49.20699, -122.96881],
      [49.20715, -122.96881],
      [49.20731, -122.96877],
      [49.20746, -122.96867],
      [49.20762, -122.96853],
      [49.20773, -122.96839],
      [49.20787, -122.9681],
      [49.20791, -122.96798],
      [49.20813, -122.96773],
      [49.2082, -122.96759],
      [49.20822, -122.96741],
      [49.20822, -122.96723],
      [49.20829, -122.96704],
      [49.20838, -122.96686],
      [49.20848, -122.96657],
      [49.20901, -122.96649],
      [49.20945, -122.96639],
      [49.21016, -122.96602],
      [49.21075, -122.96556],
      MISSION_BYRNE_CREEK,
      [49.21114, -122.9646],
      [49.21137, -122.96396],
      [49.21155, -122.96332],
      [49.21181, -122.96271],
      [49.21199, -122.96214],
      [49.21199, -122.96188],
      [49.21207, -122.96162],
      [49.21231, -122.96119],
      [49.21239, -122.96094],
      BC_PARKWAY_BYRNE_CREEK,
    ],
  },
];
