#include <stdio.h>

int insertAtEnd(int arr[], int key, int n, int size)
{
    if (n >= size)
    {
        return n;
    }
    arr[n] = key;
    return (n + 1);
}

int main()
{
    int arr[6] = {12, 3, 34, 35, 5}; 
    int size = sizeof(arr) / sizeof(arr[0]);
    int n = 5; 
    int i, key = 26;

    printf("\nBefore Insertion: ");
    for (i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }

    n = insertAtEnd(arr, key, n, size);

    printf("\nAfter Insertion: ");
    for (i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }

    return 0;
}