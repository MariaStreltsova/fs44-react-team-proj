import theme from 'theme';

// создание объекта название-расход-цвет для таблицы
function statTableDataCreating(expenses, categoryList) {
  const list = categoryList.map(item => item.name);
  const tableData = Object.values(expenses).sort((a, b) =>
    a.category > b.category ? 1 : -1
  );

  tableData.forEach((item, index) => {
    item.color = theme.chartColors[index];
    item.categoryName = list[item.category];
  });
  return tableData;
}

export default statTableDataCreating;
