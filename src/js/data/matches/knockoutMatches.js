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
  },

  // Round of 16
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_16.id,

    homeTeam: {
      name: "Canada",
      flag: "canada",
      result: 0
    },

    awayTeam: {
      name: "Morocco",
      flag: "morocco",
      result: 3
    },

    extraTime: null,
    penalties: null,

    stadium: "NRG Stadium",
    referee: "Oliver M..",
    date: "2026-07-04"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_16.id,

    homeTeam: {
      name: "Paraguay",
      flag: "paraguay",
      result: 0
    },

    awayTeam: {
      name: "France",
      flag: "france",
      result: 1
    },

    extraTime: null,
    penalties: null,

    stadium: "Lincoln Financial Field",
    referee: "Tantashev I.",
    date: "2026-07-05"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.ROUND_OF_16.id,

    homeTeam: {
      name: "Brazil",
      flag: "brazil",
      result: 1
    },

    awayTeam: {
      name: "Norway",
      flag: "norway",
      result: 2
    },

    extraTime: null,
    penalties: null,

    stadium: "MetLife Stadium",
    referee: "Elfath I.",
    date: "2026-07-05"
  },

  // Quarter-finals
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.QUARTER_FINAL.id,

    homeTeam: {
      name: "France",
      flag: "france",
      result: 2
    },

    awayTeam: {
      name: "Morocco",
      flag: "morocco",
      result: 0
    },

    extraTime: null,
    penalties: null,

    stadium: "Gillette Stadium",
    referee: "Tello F.",
    date: "2026-07-09"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.QUARTER_FINAL.id,

    homeTeam: {
      name: "Spain",
      flag: "spain",
      result: 2
    },

    awayTeam: {
      name: "Belgium",
      flag: "belgium",
      result: 1
    },

    extraTime: null,
    penalties: null,

    stadium: "SoFi Stadium",
    referee: "Oliver M.",
    date: "2026-07-10"
  },

  // Semi-finals
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.SEMI_FINAL.id,

    homeTeam: {
      name: "France",
      flag: "france",
      result: 0
    },

    awayTeam: {
      name: "Spain",
      flag: "spain",
      result: 2
    },

    extraTime: null,
    penalties: null,

    stadium: "AT&T Stadium",
    referee: "Barton I.",
    date: "2026-07-14"
  },
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.SEMI_FINAL.id,

    homeTeam: {
      name: "England",
      flag: "england",
      result: 1
    },

    awayTeam: {
      name: "Argentina",
      flag: "argentina",
      result: 2
    },

    extraTime: null,
    penalties: null,

    stadium: "Mercedes-Benz",
    referee: "Elfath I.",
    date: "2026-07-15"
  },

  // Third Place
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.THIRD_PLACE.id,

    homeTeam: {
      name: "France",
      flag: "france",
      result: 4
    },

    awayTeam: {
      name: "England",
      flag: "england",
      result: 6
    },

    extraTime: null,
    penalties: null,

    stadium: "Hard Rock Stadium",
    referee: "Valenzuela J.",
    date: "2026-07-19"
  },

  // Final
  {
    id: crypto.randomUUID(),
    stage: KNOCKOUT_STAGE.FINAL.id,

    homeTeam: {
      name: "Spain",
      flag: "spain",
      result: 0
    },

    awayTeam: {
      name: "Argentina",
      flag: "argentina",
      result: 0
    },

    extraTime: {
      homeResult: 1,
      awayResult: 0
    },
    penalties: null,

    stadium: "MetLife Stadium",
    referee: "Vincic S.",
    date: "2026-07-19"
  }
];
