def binary_search(arr, left, right, item):
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == item:
            return mid
        if arr[mid] < item:
            left = mid + 1
        else:
            right = mid - 1
    return -1

array = [10, 20, 30, 40, 50, 60, 70, 80]
item = 70
size = len(array)
position = binary_search(array, 0, size - 1, item)

if position == -1:
    print("Element not found")
else:
    print(f"The value {item} found at position: {position}")
