import {
  QUALIFIED_PLACES,
  PLAYOFF_PLACE,
  PLACE_STATUS
} from "../constants/groups";

export const getPlaceStatus = (place) => {
  if (place <= QUALIFIED_PLACES) {
    return PLACE_STATUS.QUALIFIED;
  }

  if (place === PLAYOFF_PLACE) {
    return PLACE_STATUS.PLAYOFF;
  }

  return PLACE_STATUS.ELIMINATED;
};

export const calcMatchesPlayed = (victory, draw, lost) => victory + draw + lost;
export const calcPoints = (victory, draw) => victory * 3 + draw;
export const calcGoalDifference = (scored, concede) => scored - concede;
