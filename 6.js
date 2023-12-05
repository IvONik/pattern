// бинарный поиск
const sortArr = [1, 2, 3, 4, 5, 6, 7, 9, 11];

const binarySearch = (array, number) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      
      if(number === array[middleIndex]) {
        return console.log(`индекс: ${middleIndex}`);
      }
      if(number > array[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      if(number < array[middleIndex]) {       
        endIndex = middleIndex - 1;
      }    
    }
    
    console.log(-1);
  }
binarySearch(sortArr, 4);
