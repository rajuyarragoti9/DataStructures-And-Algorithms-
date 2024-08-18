function findElement(arr,n,key)
{
    let i;
    for(i=0;i<n;i++)
    {
        if(arr[i]==key)
        {
            return i;
        }
    }
    return -1;
}
let arr=[1,2,3,4,43,23];
let n=arr.length;
let key=23;
let position=findElement(arr,n,key);
if (position == - 1)
    console.log("Element not found");
else
    console.log("Element Found at Position: " 
         + (position + 1));