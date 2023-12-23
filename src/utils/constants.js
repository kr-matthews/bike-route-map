import {
  BLACK,
  DARK_BLUE,
  DARK_BROWN,
  DARK_GREEN,
  DARK_GREY,
  LIGHT_GREEN,
  LIGHT_GREY,
  LIGHT_YELLOW,
  ORANGE_BROWN,
  PURPLE,
  RED,
} from "./colours";

// weights

export const WEIGHT_NARROW = 4;
export const WEIGHT_WIDE = 8;
export const WEIGHT_UNDERGROUND = 0;
export const WEIGHT_BORDER_ADD_ON = 4;

// dashes

export const DASH_PATTERN = "6, 10";

// zoom

export const ZOOMED_IN_A_BIT = 16;
export const ZOOMED_IN_A_LOT = 18;

// colours

export const COLOUR_COMFORTABLE = DARK_GREEN;
export const COLOUR_COMFORTABLE_ONE_WAY = LIGHT_GREEN;
export const COLOUR_PAINTED_ONE_WAY = DARK_BLUE;
export const COLOUR_SHARED_ONE_WAY = LIGHT_YELLOW;
export const COLOUR_SHOULDER_ONE_WAY = DARK_BROWN;
export const COLOUR_OTHER = DARK_GREY;
export const COLOUR_OTHER_ONE_WAY = LIGHT_GREY;

export const COLOUR_CLOSED = RED;
export const COLOUR_VIDEO = PURPLE;
export const COLOUR_NO_VIDEO = LIGHT_GREY;

export const COLOUR_ELEVATED_BORDER = BLACK;
export const COLOUR_UNDERGROUND_BORDER = ORANGE_BROWN;

// !!!
// green: dedicated lane (richards); combined path (arbutus greenway); mixed-use path (willingdon); quiet street (adanac)
// blue: painted lane (cambie);
// yellow/orange?: shared lane (nw marine);
// brown: shoulder (sw marine);
// grey: other - narrow trail/sidewalk not designed for bikes (oak, knight, sea to river end, willingdon bit)
// (red: closed)

// darker: two-way
// lighter: one-way
// still have arrows when sufficiently zoomed

// thick: hover
// opacity?? if possible: selected (otherwise maybe thick as well)
