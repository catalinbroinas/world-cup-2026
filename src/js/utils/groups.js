import {
  QUALIFIED_PLACES,
  PLAYOFF_PLACE,
  PLACE_STATUS,
  GROUP_MATCH_DAYS
} from "../constants/groups";

export const getPlaceStatus = (
  place,
  {
    qualifiedPlaces = QUALIFIED_PLACES,
    playoffPlace = PLAYOFF_PLACE
  } = {}
) => {
  if (place <= qualifiedPlaces) {
    return PLACE_STATUS.QUALIFIED;
  }

  if (place === playoffPlace) {
    return PLACE_STATUS.PLAYOFF;
  }

  return PLACE_STATUS.ELIMINATED;
};

export const calcMatchesPlayed = (victory, draw, lost) => victory + draw + lost;
export const calcPoints = (victory, draw) => victory * 3 + draw;
export const calcGoalDifference = (scored, concede) => scored - concede;

const compareTeams = (teamA, teamB) => {
  const points = calcPoints(teamB.W, teamB.D) - calcPoints(teamA.W, teamA.D);
  const goalDifference =
    calcGoalDifference(teamB.GF, teamB.GA) -
    calcGoalDifference(teamA.GF, teamA.GA);
  const goalsScored = teamB.GF - teamA.GF;

  return points || goalDifference || goalsScored;
};

export const getGroupTabs = (groups) => (
  groups.map((group) => ({
    id: group.id,
    label: group.shortNme || group.id
  }))
);

export const getGroupStanding = (teams) => [...teams].sort(compareTeams);

export const getGroup = (groups, activeGroupId) => (
  groups.find(group => group.id === activeGroupId)
);

const getThirdPlaceGroup = (groups) => ({
  id: "third-places",
  name: "Third-Placed Teams",
  shortNme: "3rd",
  teams: groups.map((group) => getGroupStanding(group.teams)[2])
});

export const getDisplayGroups = (groups) => [
  ...groups,
  getThirdPlaceGroup(groups)
];

export const getGroupMatches = (matches, activeGroupId) => (
  matches.filter((match) => match.groupId === activeGroupId)
);

export const getGroupMatchDays = (groupMatches) => (
  GROUP_MATCH_DAYS.map((round) => (
    {
      id: round,
      title: `Match day ${round}`,
      matches: groupMatches.filter((match) => match.round === round)
    }
  )).filter((matchDay) => matchDay.matches.length > 0)
);
