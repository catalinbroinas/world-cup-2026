
export const getKnockoutStageTabs = (stages) => (
  Object.values(stages).map((stage) => ({
    id: stage.id,
    label: stage.label
  }))
);

export const getKnockoutMatches = (matches, stage) => (
  matches.filter((match) => match.stage === stage)
);
