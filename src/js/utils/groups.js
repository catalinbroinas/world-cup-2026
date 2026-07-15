import {
  QUALIFIED_PLACES,
  PLAYOFF_PLACE,
  PLACE_CLASS
} from "../constants/groups";

export const getPlaceStatusClass = (place) => {
  if (place <= QUALIFIED_PLACES) {
    return PLACE_CLASS.qualified;
  }

  if (place === PLAYOFF_PLACE) {
    return PLACE_CLASS.playoff;
  }

  return PLACE_CLASS.eliminated;
};

export const calcMatchesPlayed = (victory, draw, lost) => victory + draw + lost;
export const calcPoints = (victory, draw) => victory * 3 + draw;
export const calcGoalDifference = (scored, concede) => scored - concede;
