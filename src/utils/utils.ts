export function addCommaToNumber(amount: number | undefined): string | null {
  if (typeof amount === "number") {
    const numberStr = String(amount);
    const parts = numberStr.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedNumber = parts.join(".");
    return formattedNumber;
  }

  return null;
}

// Пример использования
//   let number = 10000;
//   let formattedNumber = addCommaToNumber(number);
//   console.log(formattedNumber); // Вывод: 10,000
