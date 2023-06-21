import {
  BOUNDARY_CVG,
  COMMERCIAL_GRANDVIEW,
  GRANDVIEW_8TH,
  VICTORIA_BROADWAY,
} from "./intersections";
import { SVG_OFF_BROADWAY } from "./overlaps";

export const CVG = {
  name: "Central Valley Greenway",
  legs: [
    {
      name: "Vancouver",
      videos: {
        eastbound: null,
        westbound: null,
      },
      segments: [
        // TODO: add vcc alternates
        {
          description: "west",
          directions: ["eastbound", "westbound"],
          positions: [
            [49.27198, -123.10433],
            [49.27151, -123.10434],
            [49.27022, -123.1044],
            [49.27018, -123.10261],
            [49.27014, -123.10066],
            [49.27007, -123.10036],
            [49.26921, -123.09887],
            [49.26837, -123.09735],
            [49.26778, -123.0981],
            [49.26728, -123.09724],
            [49.26716, -123.09697],
            [49.26702, -123.09656],
            [49.26693, -123.09623],
            [49.26688, -123.09588],
            [49.26686, -123.09561],
            [49.26684, -123.09308],
            [49.26682, -123.09084],
            [49.26682, -123.08983],
            [49.26677, -123.08933],
            [49.26673, -123.08908],
            [49.26625, -123.08662],
            [49.26531, -123.08175],
            [49.26527, -123.08135],
            [49.26524, -123.07941],
            [49.26514, -123.0794],
            [49.26512, -123.07739],
            [49.26601, -123.07737],
            [49.26606, -123.07721],
            [49.26609, -123.07698],
            [49.26563, -123.07557],
            ...SVG_OFF_BROADWAY,
          ],
        },
        {
          description: "broadway eastbound",
          directions: ["eastbound"],
          positions: [
            COMMERCIAL_GRANDVIEW,
            [49.26345, -123.0691],
            [49.26313, -123.06833],
            [49.26257, -123.06697],
            [49.26251, -123.06688],
            [49.26241, -123.06681],
            [49.26219, -123.06681],
            [49.26218, -123.06599],
            VICTORIA_BROADWAY,
          ],
        },
        {
          description: "broadway westbound",
          directions: ["westbound"],
          positions: [
            VICTORIA_BROADWAY,
            [49.26236, -123.06579],
            [49.26237, -123.0662],
            [49.26239, -123.06631],
            [49.26245, -123.06639],
            [49.26259, -123.06674],
            [49.26262, -123.06687],
            [49.26277, -123.06724],
            GRANDVIEW_8TH,
          ],
        },
        {
          description: "east",
          directions: ["eastbound", "westbound"],
          positions: [
            // [49.26216, -123.06578],
            VICTORIA_BROADWAY,
            [49.26188, -123.06507],
            [49.26173, -123.06476],
            [49.26161, -123.06448],
            [49.26155, -123.06424],
            [49.26146, -123.06399],
            [49.26069, -123.06208],
            [49.26069, -123.06208],
            [49.26036, -123.06117],
            [49.25995, -123.0602],
            [49.25984, -123.05998],
            [49.25946, -123.05902],
            [49.25935, -123.05879],
            [49.25923, -123.05863],
            [49.25916, -123.05844],
            [49.25914, -123.05825],
            [49.25846, -123.05658],
            [49.25832, -123.05602],
            [49.25823, -123.05554],
            [49.25822, -123.05475],
            [49.25819, -123.05304],
            [49.25822, -123.05062],
            [49.25835, -123.04974],
            [49.25834, -123.04959],
            [49.25829, -123.0495],
            [49.25863, -123.04704],
            [49.25876, -123.04612],
            [49.25881, -123.04602],
            [49.25892, -123.04588],
            [49.25902, -123.04555],
            [49.25911, -123.04504],
            [49.25914, -123.04481],
            [49.25914, -123.04431],
            [49.25917, -123.04361],
            [49.25925, -123.0425],
            [49.25955, -123.04013],
            [49.25986, -123.03791],
            [49.2599, -123.0377],
            [49.2602, -123.03522],
            [49.26036, -123.03432],
            [49.26044, -123.03397],
            [49.26064, -123.03396],
            [49.26067, -123.03351],
            [49.26076, -123.03344],
            [49.26089, -123.03301],
            [49.26089, -123.03267],
            [49.26133, -123.03109],
            [49.26204, -123.02896],
            [49.26229, -123.02809],
            [49.26243, -123.02734],
            [49.26249, -123.02672],
            [49.2625, -123.02565],
            BOUNDARY_CVG,
          ],
        },
      ],
    },
    {
      name: "Burnaby",
      videos: {
        eastbound: null,
        westbound: null,
      },
      segments: [
        {
          description: "east",
          directions: ["eastbound", "westbound"],
          positions: [BOUNDARY_CVG, [49.26244, -123.02309]],
        },
      ],
    },
  ],
};
