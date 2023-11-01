function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const inputArray = [5, 1, 9, 3, 7];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray);
