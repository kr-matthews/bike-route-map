import {
  BC_PARKWAY_10TH,
  BC_PARKWAY_29TH_STATION,
  BOUNDARY_VANNESS,
  CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT,
  CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
  CENTRAL_PARK_LOOP_NW,
  EARLES_VANNESS,
  GLADSTONE_BC_PARKWAY,
  JOYCE_BC_PARKWAY_SPLIT_EAST,
  JOYCE_BC_PARKWAY_SPLIT_WEST,
  LAKEWOOD_GRANDVIEW,
  LAKEWOOD_MOSAIC,
  NANAIMO_BC_PARKWAY_SPLIT_EAST,
  NANAIMO_BC_PARKWAY_SPLIT_WEST,
  SLOCAN_29TH,
  SLOCAN_BC_PARKWAY,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const BC_PARKWAY = [
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Vancouver"],
    description: "primary",
    videos: [VIDEOS.bcParkwayVancouverEb],
    positions: [
      LAKEWOOD_GRANDVIEW,
      [49.2595, -123.06208],
      [49.25859, -123.06209],
      LAKEWOOD_MOSAIC,
      [49.25791, -123.06212],
      [49.25789, -123.06087],
      [49.25782, -123.06049],
      [49.25762, -123.06018],
      [49.25706, -123.06019],
      [49.25663, -123.06043],
      [49.25636, -123.06048],
      [49.25599, -123.06025],
      [49.25567, -123.06026],
      [49.25524, -123.06017],
      [49.25487, -123.06022],
      [49.25433, -123.06017],
      [49.25409, -123.06031],
      [49.25389, -123.06037],
      [49.25372, -123.06026],
      [49.25363, -123.05994],
      [49.25351, -123.05987],
      [49.25332, -123.0598],
      [49.25307, -123.05982],
      [49.25248, -123.06014],
      [49.25218, -123.05909],
      [49.25029, -123.06026],
      GLADSTONE_BC_PARKWAY,
      [49.24971, -123.05944],
      NANAIMO_BC_PARKWAY_SPLIT_WEST,
      [49.24943, -123.05889],
      [49.24866, -123.05709],
      NANAIMO_BC_PARKWAY_SPLIT_EAST,
      [49.24876, -123.0565],
      [49.24837, -123.05649],
      [49.24808, -123.05583],
      [49.24806, -123.05564],
      SLOCAN_BC_PARKWAY,
      SLOCAN_29TH,
      [49.24452, -123.04957],
      [49.24452, -123.04718],
      BC_PARKWAY_29TH_STATION,
      [49.24415, -123.0463],
      [49.24401, -123.04609],
      [49.24364, -123.04521],
      [49.24372, -123.04514],
      EARLES_VANNESS,
      [49.24263, -123.04252],
      [49.24223, -123.04152],
      [49.24187, -123.04068],
      [49.24148, -123.03975],
      [49.24109, -123.03876],
      [49.2407, -123.03779],
      [49.24071, -123.03766],
      [49.23949, -123.03465],
      [49.23937, -123.03436],
      [49.23933, -123.03412],
      [49.23911, -123.03351],
      [49.23912, -123.03333],
      [49.23854, -123.03161],
      [49.23804, -123.03041],
      JOYCE_BC_PARKWAY_SPLIT_WEST,
      [49.23755, -123.02958],
      JOYCE_BC_PARKWAY_SPLIT_EAST,
      [49.23659, -123.02797],
      [49.235, -123.02452],
      [49.23471, -123.02397],
      BOUNDARY_VANNESS,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Vancouver"],
    description: "Nanaimo alt",
    positions: [
      NANAIMO_BC_PARKWAY_SPLIT_WEST,
      [49.24954, -123.05865],
      [49.24883, -123.05683],
      NANAIMO_BC_PARKWAY_SPLIT_EAST,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Vancouver"],
    description: "29th alt",
    positions: [
      SLOCAN_29TH,
      [49.24463, -123.04702],
      [49.2445, -123.04699],
      [49.24437, -123.04673],
      BC_PARKWAY_29TH_STATION,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Vancouver"],
    description: "Joyce alt",
    positions: [
      JOYCE_BC_PARKWAY_SPLIT_WEST,
      [49.23774, -123.03046],
      JOYCE_BC_PARKWAY_SPLIT_EAST,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Burnaby"],
    description: "west of central park split",
    videos: [VIDEOS.bcParkwayBurnabyEb],
    positions: [
      BOUNDARY_VANNESS,
      [49.23435, -123.02333],
      [49.2339, -123.02317],
      [49.23312, -123.02315],
      [49.23298, -123.02331],
      [49.23219, -123.02329],
      [49.232, -123.02293],
      CENTRAL_PARK_LOOP_NW,
      [49.2321, -123.02198],
      [49.23216, -123.02003],
      [49.23206, -123.0196],
      [49.23216, -123.01928],
      CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Burnaby"],
    description: "south central park split",
    videos: [VIDEOS.bcParkwayBurnabyEb],
    positions: [
      CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
      [49.23131, -123.01722],
      CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Burnaby"],
    description: "north central park split",
    positions: [
      CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
      [49.23222, -123.01865],
      CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT,
    ],
  },
  {
    routes: [ROUTES.bcParkway.name],
    legs: ["Burnaby"],
    description: "east of central park split",
    videos: [VIDEOS.bcParkwayBurnabyEb],
    positions: [
      CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT,
      [49.22954, -123.01273],
      [49.22857, -123.01057],
      [49.22757, -123.00841],
      [49.22762, -123.0079],
      [49.22744, -123.00751],
      [49.22717, -123.00746],
      [49.22652, -123.00583],
      [49.2261, -123.00509],
      [49.22504, -123.00271],
      [49.22398, -123.00043],
      [49.22263, -122.99738],
      [49.22185, -122.99731],
      [49.22185, -122.99569],
      [49.22153, -122.99512],
      [49.22128, -122.99416],
      [49.22105, -122.99359],
      [49.22072, -122.99208],
      [49.22003, -122.98868],
      [49.21988, -122.98864],
      [49.21987, -122.98784],
      [49.2193, -122.98505],
      [49.21885, -122.9829],
      [49.21866, -122.98158],
      [49.21838, -122.98053],
      [49.21809, -122.97904],
      [49.21757, -122.97755],
      [49.21745, -122.97755],
      [49.21582, -122.97408],
      [49.21566, -122.97407],
      [49.21567, -122.97369],
      [49.21521, -122.97261],
      [49.21495, -122.97243],
      [49.21484, -122.97209],
      [49.21484, -122.97069],
      [49.21481, -122.96742],
      [49.21492, -122.9637],
      [49.21488, -122.96274],
      [49.21475, -122.96227],
      [49.21475, -122.96185],
      [49.21456, -122.9617],
      [49.21409, -122.961],
      [49.21399, -122.96074],
      [49.21371, -122.96051],
      [49.21344, -122.96071],
      [49.21291, -122.96093],
      [49.21253, -122.96059],
      [49.21234, -122.96049],
      [49.21225, -122.96027],
      [49.21168, -122.95969],
      [49.21157, -122.95936],
      [49.21131, -122.95923],
      [49.20994, -122.9582],
      [49.20909, -122.95759],
      [49.20825, -122.9571],
      [49.20765, -122.95702],
      [49.20693, -122.95735],
      [49.20568, -122.95839],
      [49.20443, -122.95896],
      [49.20429, -122.95913],
      [49.20403, -122.95923],
      [49.20382, -122.95901],
      [49.20299, -122.95898],
      [49.2025, -122.95882],
      BC_PARKWAY_10TH,
    ],
  },
];
