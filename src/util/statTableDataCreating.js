import theme from 'theme';

// создание объекта название-расход-цвет для таблицы
function statTableDataCreating(expenses, categoryList) {
  // сортируем расходы по номеру категории
  const tableData = Object.values(expenses).sort((a, b) =>
    a.category.category_id > b.category.category_id ? 1 : -1
  );

  // добавляем в объект цвета категорий
  tableData.forEach((item, index) => {
    item.color = theme.chartColors[index];
  });

  return tableData;
}

export default statTableDataCreating;
