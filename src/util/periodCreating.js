function periodCreating(date) {
  // получаем текущий месяц и год
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // получаем месяц и год начала работы в системе
  date = new Date(date);
  const startMonth = date.getMonth();
  const startYear = date.getFullYear();
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const period = [];

  for (let year = startYear; year <= currentYear; year++) {
    let months = []; // массив месяцев в году
    let start = 0; // первый месяц по умолчанию
    let finish = 11; // последний месяц по умолчанию
    if (year === startYear) start = startMonth;
    if (year === currentYear) finish = currentMonth;
    for (let i = start; i <= finish; i++) months.push(monthsNames[i]);
    period.push({ year: year, months: months });
  }

  return {
    period,
  };
}

export default periodCreating;
