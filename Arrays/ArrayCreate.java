import java.util.*;

class ArrayCreate
{
    public static void main(String arg[])
    {
        int[] arr = new int[5];
        arr[0] = 2;
        arr[1] = 4;
        arr[2] = 6;
        arr[3] = 8;
        arr[4] = 10;
        
        for (int i = 0; i < arr.length; i++)
        {
            System.out.println("Element at index " + i + " : " + arr[i]+"\n");
        }
    }
}
