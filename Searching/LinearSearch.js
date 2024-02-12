function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            console.log(item + " Found at index : " + i);
            return;
        }
    }
    console.log("Not found");
}

let arr = [12, 5, 18, 25, -3, 19];
let item = 25;
linearSearch(arr, item)