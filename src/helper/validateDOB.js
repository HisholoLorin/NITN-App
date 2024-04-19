const dobHelper = (data) => {
  return data > 10 ? data : "0" + data;
};

export const validateDay = (day) => {
  if (day >= 1 && day <= 31) return day;
  else if (day == 0) return "01";
  else return 31;
};

export const validateMonthAndDay = (monthAndDay) => {
  let [day, month] = monthAndDay.split("/");

  //Validating month
  if (month >= 1 && month <= 12) month = month;
  else if (month == 0) month = "01";
  else month = 12;

  //Validating day
  const monthDayList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day <= monthDayList[month - 1]) day = day;
  else if (day == 0) day = "01";
  else day = monthDayList[month - 1];

  return `${day}/${month}`;
};

export const validateYearMonthAndDay = (yearAndDay) => {
  const [currentMonth, currentDay, currentYear] = new Date()
    .toLocaleDateString()
    .split("/");
  let [day, month, year] = yearAndDay.split("/").map(Number);

  //Validating year
  if (year >= 1900 && year <= currentYear) year = year;
  else if (year < 1900) year = "1900";
  else {
    year = currentYear;
    month = currentMonth;
    day = currentDay;
  }

  //Validating leap year
  if (year % 4 != 0 && month == 2 && day == 29) day = 28;

  //Validating month and day
  if (year == currentYear && month > currentMonth) {
    month = currentMonth;
    if (day > currentDay) day = currentDay;
  }
  return `${dobHelper(day)}/${dobHelper(month)}/${dobHelper(year)}`;
};
