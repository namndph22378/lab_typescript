const arrNum = [10, 4, 3, 5, 8, 2];
const arrString = ["e", "h", "d", "ca"];

function cloneSort<T>(arr: T[], callback?: (a: T, b: T) => boolean) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (callback) {
        if (callback(arr[i], arr[j])) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      } else {
        if (arr[i].toString().localeCompare(arr[j].toString()) > 0) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
}

  // arrNum.sort((a, b) => {
  //   return a - b;
  // });


cloneSort<number>(arrNum, (a, b) => {
  return a > b;
});
console.log(arrNum);

// arrString.sort();
cloneSort<string>(arrString, (a, b) => {
  return a > b;
});
console.log(arrString);