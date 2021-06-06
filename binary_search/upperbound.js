function binarysearch_upper(arr, target)
{
    // find the first index that > target
    var l = 0;
    var r = arr.length;
    while(l<r)
    {
        var mid = Math.floor((l+r)/2);
        if( arr[mid]<=target)
        {
            l = mid+1;
        }
        else
        {
            r= mid;
        }
    }
    return l;
}