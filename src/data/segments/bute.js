import {
  BUTE_BURNABY,
  BUTE_COMOX,
  BUTE_HARO,
  BUTE_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";

export const BUTE = [
  {
    routes: [ROUTES.bute.name],
    description: "primary",
    positions: [
      BUTE_BURNABY,
      [49.28179, -123.13337],
      [49.2825, -123.13232],
      BUTE_COMOX,
      [49.28391, -123.13018],
      BUTE_NELSON,
      [49.28462, -123.12911],
      BUTE_HARO,
      [49.28599, -123.12698],
    ],
  },
];
