const VIDEOS = {
  alexanderEb: "5pjlcdGKa10",
  bcParkwayBurnabyEb: "a9Rwmtu7SI0",
  bcParkwayVancouverEb: "3giKczCLloI",
  cambieBridgeNelsonSb: "FWN1apBAy3g",
  cambieBridgeSmithNb: "i_GE3QKQZBA",
  cambieSeparatedNb: "c0Yjyt4isPs",
  carrallNb: "1KNO98tWduE",
  chilcoSb: "WZIDTdlVxZY",
  comoxHelmckenEb: "_u16UGWH4VQ",
  comoxHelmckenWb: "PgJUF6B4BMQ",
  dunbarNb: "jonrkkkL57o",
  fortyFifthWb: "LWue1j2Ir4c",
  fourthEb: "19BLtcs-t7U",
  gardenCityNb: "CqETe9mI-SM",
  gardenCitySb: "3oyKPM5u3Ao",
  haroWb: "gdsFxEtuepY",
  highburyNb: "3gJObODNRPw",
  hillcrestEb: "gwZnVGbA4x4",
  hillcrestWb: "wnFFioj6OVA",
  invernessSb: "eim5zDSdA2I",
  lionsGateBridgeNb: "KbhPPsdOzIE",
  lionsGateBridgeSb: "eHio3HMRIMw",
  masumiMitsuiEb: "QVK6E_hmQFc",
  midtownVancouverEb: "3qGbnTOYyL0",
  nicolaNb: "2kPXYw2lzug",
  northArmBridgeNb: "SANpYy0-wFc",
  northArmBridgeSb: "ujANKTjcu1A",
  offBroadwayWb: "7nKl_moRiog",
  pandoraEb: "-vNVdK9fnMU",
  powellEb: "vTtdPgHQCp0",
  sixtySeventhPlusWb: "z5GzRN2_iNc",
  tenthEb: "wgLoXc7ydDA",
  tenthWb: "R9Im8PUzSlM",
  thirdEb: "B5KPg3I32Ws",
  twentySecondEb: "4vjaCs_VJTg",
  valleySb: "SDClkLpfIHc",
  yorkEb: "kLMm6tBVuXc",
};

const urlPrefix = "https://www.youtube.com/embed/";

// ! extract this to a helper function?
Object.entries(VIDEOS).forEach(
  ([route, id]) => (VIDEOS[route] = `${urlPrefix}${id}`)
);

export { VIDEOS };
