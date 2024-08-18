

class ArraySearch{
    public static int findElement(int arr[],int n,int key)
    {
        for(int i=0;i<n;i++)
        {
            if(arr[i]==key)
            {
                return i;
            }
        }
        return -1;
    }
    public static void main(String args[])
    {
        int arr[]={12,3,4,53,12,32};
        int n=arr.length;
        int key=4;
        int position=findElement(arr,n,key);
        if(position==-1)
        {
            System.out.println("Element Not found");
        }
        else{
            System.out.println("Element Found at position :"+(position+1));
        }

    }
}