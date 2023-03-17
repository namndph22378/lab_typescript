var arrNum = [10, 4, 3, 5, 8, 2];
var arrString = ["e", "h", "d", "ca"];
function cloneSort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback) {
                if (callback(arr[i], arr[j])) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            else {
                if (arr[i].toString().localeCompare(arr[j].toString()) > 0) {
                    var temp = arr[i];
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
cloneSort(arrNum, function (a, b) {
    return a > b;
});
console.log(arrNum);
// arrString.sort();
cloneSort(arrString, function (a, b) {
    return a > b;
});
console.log(arrString);
