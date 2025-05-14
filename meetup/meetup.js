export function meetup(year, month, descriptor, dayOfWeek) {
  const daysOfWeekMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const weekday = daysOfWeekMap[dayOfWeek];
  const monthIndex = month - 1; // JS Date months are 0-based

  let day;

  switch (descriptor) {
    case "teenth":
      for (let d = 13; d <= 19; d++) {
        const date = new Date(year, monthIndex, d);
        if (date.getDay() === weekday) {
          return date;
        }
      }
      break;

    case "first":
      day = getNthWeekdayOfMonth(year, monthIndex, weekday, 1);
      break;
    case "second":
      day = getNthWeekdayOfMonth(year, monthIndex, weekday, 2);
      break;
    case "third":
      day = getNthWeekdayOfMonth(year, monthIndex, weekday, 3);
      break;
    case "fourth":
      day = getNthWeekdayOfMonth(year, monthIndex, weekday, 4);
      break;
    case "fifth":
      day = getNthWeekdayOfMonth(year, monthIndex, weekday, 5);
      break;
    case "last":
      for (let d = new Date(year, month, 0).getDate(); d >= 1; d--) {
        const date = new Date(year, monthIndex, d);
        if (date.getDay() === weekday) {
          return date;
        }
      }
      break;
  }

  return new Date(year, monthIndex, day);
}

function getNthWeekdayOfMonth(year, month, weekday, nth) {
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break; // prevent overflow
    if (date.getDay() === weekday) {
      count++;
      if (count === nth) return day;
    }
  }
  throw new Error("That weekday does not occur enough times in the month.");
}
