import { WINDERMERE_ADANAC, WINDERMERE_HASTINGS } from "../intersections";
import { ROUTES } from "../routes";

export const WINDERMERE = [
  {
    routeNames: [ROUTES.windermere.name],
    description: "primary",
    positions: [
      WINDERMERE_ADANAC,
      [49.27784, -123.03622],
      [49.27825, -123.03621],
      [49.27907, -123.03621],
      [49.28021, -123.03621],
      WINDERMERE_HASTINGS,
    ],
  },
];
