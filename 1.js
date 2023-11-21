// Декларативный подход с использованием метода массива
const array = [4, 2, 5, 1, 3];

// Сортировка массива в порядке возрастания
const sortedArrayDeclarative = array.slice().sort((a, b) => a - b);

// Сортировка массива в порядке убывания
const reverseSortedArrayDeclarative = array.slice().sort((a, b) => b - a);

console.log('Отсортированный массив (возрастание):', sortedArrayDeclarative);
console.log('Отсортированный массив (убывание):', reverseSortedArrayDeclarative);




// Императивный подход с использованием цикла и временного массива
// Функция сортировки в порядке возрастания
function sortArrayAscending(arr) {
  const tempArray = arr.slice();
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        const temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
      }
    }
  }
  return tempArray;
}

// Функция сортировки в порядке убывания
function sortArrayDescending(arr) {
  const tempArray = arr.slice();
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      if (tempArray[j] < tempArray[j + 1]) {
        const temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
      }
    }
  }
  return tempArray;
}

const sortedArrayImperative = sortArrayAscending(array);
const reverseSortedArrayImperative = sortArrayDescending(array);

console.log('Отсортированный массив (возрастание):', sortedArrayImperative);
console.log('Отсортированный массив (убывание):', reverseSortedArrayImperative);
