function binarySearch(arr, val){

    if (val> arr[arr.length/2]){
        for(var i=arr[arr.length/2]; i<arr.length; i++){
            if(val == arr[i]){                               
                return  i;          //This was on the back half.
            }
        }
    }else{
        for (var i = 0; i<arr.length/2; i++){
            if (val == arr[i]){
                return  i;          //This was on the front half.
            }
        }
    }
    return -1;
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));