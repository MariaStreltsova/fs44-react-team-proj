// создание массива сумм для чарта
function chartDataCreating(expenses) {
  const expenseSummary = [];
  // создаем массив сумм по порядку возрастания порядкового номера расхода
  expenses.forEach(item => {
    expenseSummary[item.category.category_id - 1] = item.totalSum;
  });
  return expenseSummary;
}

export default chartDataCreating;
