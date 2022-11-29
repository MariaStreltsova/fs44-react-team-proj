// переводит обычные десятичные дроби в формат денег - 2 знака после запятой + выделение разрядов
function numberToMoney(num) {
  let numStr = num.toLocaleString('ru-RU');
  if (numStr.slice(-3, -2) === ',') numStr = numStr.slice(0, numStr.length - 3);
  if (numStr.slice(-2, -1) === ',') numStr = numStr.slice(0, numStr.length - 2);

  return numStr + num.toFixed(2).slice(-3);
}

export default numberToMoney;
