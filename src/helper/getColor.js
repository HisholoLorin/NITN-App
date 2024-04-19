export const getColor = (index) => {
  const months = [
    "#D677D8",
    "#FFBC57",
    "#88E970",
    "#FF82DC",
    "#FF5757",
    "#60D3E3",
    "#FFA500",
  ];

  if (index < months.length) return months[index];
  else {
    index = index % months.length
    return months[index];
  }
};
