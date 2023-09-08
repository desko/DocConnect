export const generateDatesOneMonthLaterWithoutWeekends = () => {
  // Get the current date
  const currentDate = new Date();

  // Add one day to the current date to get tomorrow's date
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);

  // Add one month to tomorrow's date
  const oneMonthAfterTomorrow = new Date(tomorrow);
  oneMonthAfterTomorrow.setMonth(tomorrow.getMonth() + 1);

  // Initialize an array to store the generated dates
  const dateList = [];
  const currentDateIterator = new Date(tomorrow);

  // Loop through and generate dates for each day in the range
  while (currentDateIterator <= oneMonthAfterTomorrow) {
    // Check if the current date is not a Saturday (6) or Sunday (0)
    if (currentDateIterator.getDay() !== 0 && currentDateIterator.getDay() !== 6) {
      dateList.push({
        day: currentDateIterator.getDay(),
        date: currentDateIterator.getDate(),
        month: currentDateIterator.getMonth(),
        year: currentDateIterator.getFullYear(),
      });
    }

    // Move to the next day
    currentDateIterator.setDate(currentDateIterator.getDate() + 1);
  }

  return dateList;
};

export const dateFormatter = (locale, dateObject) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  // Create a new Date object using the provided properties
  const date = new Date(dateObject.year, dateObject.month, dateObject.date);

  // Format the date according to the specified locale
  return date.toLocaleDateString(locale, options);
};

export const getDayNameFromDateObject = (locale, dateObject) => {
  const options = {weekday: 'long'};

  // Create a new Date object using the provided properties
  const date = new Date(dateObject.year, dateObject.month, dateObject.date);

  // Get the day name from the date object
  const dayName = date.toLocaleDateString(locale, options);

  return dayName;
};


export const checkDateCollission = (date, dateList) => {
  const match = dateList.find((el) => {
    if (
      el.date === date.date &&
      el.month === date.month &&
      el.hour === date.hour &&
      el.year === date.year
    ) {
      return true;
    }

    return false;
  });

  return !!match;
};
