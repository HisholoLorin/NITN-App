export const getStageNumber = (stage) => {
  const stage_map = {
    "Request Issued": 1,
    "Request Received": 2,
    "Personel Dispatched": 3,
    "Request Completed": 4,
  };
  return stage_map[stage];
};
