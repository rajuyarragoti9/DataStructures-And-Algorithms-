def linear_search(arr, item):
    for i in range(len(arr)):
        if arr[i] == item:
            print(f"{item} Found at index : {i}")
            return
    print("Not found")

if __name__ == "__main__":
    arr = [12, 5, 18, 25, -3, 19]
    item = 25
    linear_search(arr, item)
