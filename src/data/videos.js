const VIDEOS = {
  tenthWb: "R9Im8PUzSlM",
  tenthEb: "wgLoXc7ydDA",
  hillcrestEb: "gwZnVGbA4x4",
  hillcrestWb: "wnFFioj6OVA",
  carrallNb: "1KNO98tWduE",
  alexanderEb: "5pjlcdGKa10",
  powellEb: "vTtdPgHQCp0",
  pandoraEb: "-vNVdK9fnMU",
  cambieBridgeSmithNb: "i_GE3QKQZBA",
  cambieBridgeNelsonSb: "FWN1apBAy3g",
  sixtySeventhPlusWb: "z5GzRN2_iNc",
  masumiMitsuiEb: "QVK6E_hmQFc",
  offBroadwayWb: "7nKl_moRiog",
  fourthEb: "19BLtcs-t7U",
  thirdEb: "B5KPg3I32Ws",
  midtownVancouverEb: "3qGbnTOYyL0",
  twentySecondEb: "4vjaCs_VJTg",
  comoxHelmckenWb: "PgJUF6B4BMQ",
  comoxHelmckenEb: "_u16UGWH4VQ",
  haroWb: "gdsFxEtuepY",
  lionsGateBridgeNb: "KbhPPsdOzIE",
  lionsGateBridgeSb: "eHio3HMRIMw",
};

const urlPrefix = "https://www.youtube.com/embed/";

Object.entries(VIDEOS).forEach(
  ([route, id]) => (VIDEOS[route] = `${urlPrefix}${id}`)
);

export { VIDEOS };
