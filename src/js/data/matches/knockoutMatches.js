import { KNOCKOUT_STAGE } from "../../constants/knockoutStage";

export const knockoutMatches = [
  // Round of 32
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_32.id,

    homeTeam: {
      name: "South Africa",
      flag: "south-africa",
      result: 0
    },

    awayTeam: {
      name: "Canada",
      flag: "canada",
      result: 1
    },

    extraTime: null,
    penalties: null,

    stadium: "SoFi Stadium",
    referee: "Pinheiro J.",
    date: "2026-06-28"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_32.id,

    homeTeam: {
      name: "Brazil",
      flag: "brazil",
      result: 2
    },

    awayTeam: {
      name: "Japan",
      flag: "japan",
      result: 1
    },

    extraTime: null,
    penalties: null,

    stadium: "NRG Stadium",
    referee: "Mariani M.",
    date: "2026-06-29"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_32.id,

    homeTeam: {
      name: "Germany",
      flag: "germany",
      result: 1
    },

    awayTeam: {
      name: "Paraguay",
      flag: "paraguay",
      result: 1
    },

    extraTime: {
      homeResult: 1,
      awayResult: 1
    },
    penalties: {
      homeResult: 3,
      awayResult: 4
    },

    stadium: "Gillette Stadium",
    referee: "Jayed J.",
    date: "2026-06-29"
  },

  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_32.id,

    homeTeam: {
      name: "Belgium",
      flag: "belgium",
      result: 2
    },

    awayTeam: {
      name: "Senegal",
      flag: "senegal",
      result: 2
    },

    extraTime: {
      homeResult: 3,
      awayResult: 2
    },
    penalties: null,

    stadium: "Lumen Field",
    referee: "Martinez S.",
    date: "2026-07-01"
  }
];
