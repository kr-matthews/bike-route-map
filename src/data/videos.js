const VIDEOS = {
  adanacWb: "ZDvPnT7PrUo",
  alderNb: "ixJ03H36AII",
  alexanderEb: "5pjlcdGKa10",
  arthurLaingSb: "JtDYj7aNwJo",
  bcParkwayBurnabyEb: "a9Rwmtu7SI0",
  bcParkwayVancouverEb: "3giKczCLloI",
  beattySb: "Kqxlkrkb33s",
  burrardNb: "62m58RRdHcg",
  burrardSb: "pFj4NnJ80Fk",
  cambieSb: "RNDV1Zc8rB8",
  cambieBridgeNelsonSb: "FWN1apBAy3g",
  cambieBridgeSmithNb: "i_GE3QKQZBA",
  cambieGastownNb: "kLbDio3XorY",
  cambieSeparatedNb: "c0Yjyt4isPs",
  carrallNb: "1KNO98tWduE",
  centralValleyVancouverEb: "UkRTUCueaYA",
  chilcoSb: "WZIDTdlVxZY",
  columbiaNb: "4E3xRV-qHOc",
  comoxHelmckenEb: "_u16UGWH4VQ",
  comoxHelmckenWb: "PgJUF6B4BMQ",
  dumfriesNb: "g0qsUEDx--8",
  dunbarNb: "jonrkkkL57o",
  fortyFifthWb: "LWue1j2Ir4c",
  fortySecondEb: "Mz7lLKjdmQw",
  fourteenthWb: "_13c2Bcl_4Y",
  fourthEb: "19BLtcs-t7U",
  gardenCityNb: "CqETe9mI-SM",
  gardenCitySb: "3oyKPM5u3Ao",
  gladstoneNb: "zOUHEenuUnQ",
  haroWb: "gdsFxEtuepY",
  heatherSb: "IOQ6E28a5CE",
  highburyNb: "3gJObODNRPw",
  hillcrestEb: "gwZnVGbA4x4",
  hillcrestWb: "wnFFioj6OVA",
  homerNb: "1zkLD7aOBUc",
  hornbyNb: "QOtjHMY7_B8",
  invernessSb: "eim5zDSdA2I",
  keeferEb: "X6E2j8v1EMU",
  kerrSb: "A_MpEUYNWxE",
  knightStBridgeSb: "wzeQhznjo6U",
  lakewoodNb: "xKlYQByxty4",
  lionsGateBridgeNb: "KbhPPsdOzIE",
  lionsGateBridgeSb: "eHio3HMRIMw",
  masumiMitsuiEb: "QVK6E_hmQFc",
  masumiMitsuiWb: "lc-lYIQvaww",
  midtownVancouverEb: "3qGbnTOYyL0",
  moray: "wSwMTjMlKt4",
  mosaicSb: "uDSSzA4ZN0Q",
  nanaimoSb: "oeVjaawbtNc",
  nicolaNb: "2kPXYw2lzug",
  northArmBridgeNb: "SANpYy0-wFc",
  northArmBridgeSb: "ujANKTjcu1A",
  offBroadwayWb: "7nKl_moRiog",
  ontarioNb: "ZWmusAetxP0",
  pandoraEb: "-vNVdK9fnMU",
  penderEb: "V1_06Q29Yzo",
  powellEb: "vTtdPgHQCp0",
  princeEdwardNb: "A91bdcMUC98",
  rupertNb: "VYxXQDWhq5Q",
  seasideKitsWb: "htrdfMC4NBg",
  sixtySeventhPlusWb: "z5GzRN2_iNc",
  sunriseNb: "YGhkRf0VmKw",
  swMarineEb: "l-DWh9zHOAo",
  tenthEb: "wgLoXc7ydDA",
  tenthWb: "R9Im8PUzSlM",
  thirdEb: "B5KPg3I32Ws",
  twentyNinthWb: "ReFbPGbBm38",
  twentySecondEb: "4vjaCs_VJTg",
  valleySb: "SDClkLpfIHc",
  walesDuchessSb: "q-4HxNr0aWA",
  waterfrontEb: "TUIhsGIyJdI",
  windsorNb: "azxidzxMgzI",
  yorkEb: "kLMm6tBVuXc",
  yukonSb: "-XZwVM_8zBY",
};

const urlPrefix = "https://www.youtube.com/embed/";

// ! extract this to a helper function?
Object.entries(VIDEOS).forEach(
  ([route, id]) => (VIDEOS[route] = `${urlPrefix}${id}`)
);

export { VIDEOS };
