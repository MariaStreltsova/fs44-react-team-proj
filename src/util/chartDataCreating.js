// создание массива сумм для чарта
function chartDataCreating(expenses) {
  const expenseSummary = [];
  expenses.forEach(item => {
    expenseSummary[item.category - 1] = item.totalSum;
  });
  return expenseSummary;
}

export default chartDataCreating;
