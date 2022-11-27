// создание массива сумм для чарта
function chartDataCreating(expenses) {
  const expenseSummary = [];
  expenses.forEach((item, index) => (expenseSummary[index] = item.summary));
  return expenseSummary;
}

export default chartDataCreating;
