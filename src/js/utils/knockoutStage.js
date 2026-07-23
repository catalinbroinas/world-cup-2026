
export const getKnockoutStageTabs = (stages) => (
  Object.values(stages).map((stage) => ({
    id: stage.id,
    label: stage.label
  }))
);
