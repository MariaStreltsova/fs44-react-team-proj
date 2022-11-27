import theme from 'theme';

// создание объекта название-расход-цвет для таблицы
function statTableDataCreating(expenses) {
  const tableData = expenses;
  tableData.forEach((item, index) => (item.color = theme.chartColors[index]));
  return tableData;
}

export default statTableDataCreating;
