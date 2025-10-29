export function isSubsequence(str1, str2) {
  let ind1 = 0;
  let ind2 = 0;
  while (ind1 < str1.length) {
    if (ind2 === str2.length) {
      return false;
    }
    if (str1[ind1] === str2[ind2]) {
      ind1 = ind1 + 1;
    }
    ind2 = ind2 + 1;
  }
  return true;
}

export function removeWhiteSpaces(str) {
  return str.replace(/\s+/g, "");
}

export const disclaimer =
  "Disclaimer: While efforts are made to keep the data here accurate and up-to-date, no guarantees are provided and conditions may have changed.";

export const formatDirection = (direction) => {
  switch (direction) {
    case "counterclockwise":
      return "C-Clockwise";

    default:
      return direction;
  }
};

export const formatDistance = (meters) => `${(meters / 1000).toFixed(1)} km`;

export const formatPercent = (decimal) => `${(decimal * 100).toFixed(0)}%`;

export const formatDate = (date) =>
  date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

export const formatDuration = (minutes) => `${minutes} min`;
