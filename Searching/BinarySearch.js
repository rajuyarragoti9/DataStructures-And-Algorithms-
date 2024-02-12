function binarySearch(arr, left, right, item) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === item) {
            return mid;
        }
        if (arr[mid] < item) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let array = [10, 20, 30, 40, 50, 60, 70, 80];
let item = 30;
let size = array.length;
let position = binarySearch(array, 0, size - 1, item);

if (position === -1) {
    console.log("Element not found");
} else {
    console.log(`The value ${item} found at position: ${position}`);
}
