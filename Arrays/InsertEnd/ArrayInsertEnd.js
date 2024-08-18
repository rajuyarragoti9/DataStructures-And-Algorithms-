function insertAtEnd(arr,n,key,size)
{
    if(n>=size)
    {
        return n;
    }
    arr[n]=key;
    return (n+1);
}
let arr = new Array(20);
    arr[0] = 12;
    arr[1] = 16;
    arr[2] = 20;
    arr[3] = 40;
    arr[4] = 50;
    arr[5] = 70;
    let capacity = 20;
    let n = 6;
    let i, key = 26;

    console.log("Before Insertion: ");
    for (i = 0; i < n; i++)
      console.log(arr[i]+" ");
    console.log("</br>");

    // Inserting key
    n = insertAtEnd(arr, n, key, capacity);

    console.log("After Insertion: ");
    for (i = 0; i < n; i++)
      console.log(arr[i]+" ");