/*
1. Understanding merge sort
input: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
                        [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
        [21, 1, 26, 45, 29, 28, 2, 9,]                               [16, 49, 39, 27, 43, 34, 46, 40]
   [21, 1, 26, 45]            [29, 28, 2, 9,]                     
    
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
                        [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
        [21, 1, 26, 45, 29, 28, 2, 9,]                               [16, 49, 39, 27, 43, 34, 46, 40]
   [21, 1, 26, 45]            [29, 28, 2, 9,]                 [16, 49, 39, 27]               [43, 34, 46, 40]
[21, 1]       [26, 45]      [29, 28]       [2, 9]        [16, 49]         [39, 27]       [43, 34]       [46, 40]
[21] [1]      [26] [45]     [29] [28]      [2] [9]       [16] [49]        [39] [27]      [43] [34]      [46] [40]

What are the first 2 lists to be merged?
1st merge: [1,21]
2nd merge: [26,45]

Which two lists would be merged on the 7th merge?
the lists:  [21, 1, 26, 45] and [29, 28, 2, 9,]  


2. Understanding quicksort
2a.order: 3 9 1 14 17 24 22 20
The correct statement is "The pivot could have been either 14 or 17" because either side of the array from 14 or 17 are less than or greater.

2b. Order: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12   pivot = 12  j=0  
When using the last item on the list as a pivot:
           10, 3, 9, 12, 19, 14, 17, 16, 13, 15  pivot = 12  j=3
           [10, 3, 9, 12] [19, 14, 17, 16, 13, 15]  

                            10, 3, 9, 12    pivot = 9 j=2
 result for 2nd partition:  3, 9, 10, 12     

 When using the first item on the list as a pivot:

            14, 17, 13, 15, 19, 10, 3, 16, 9, 12   pivot = 14  j=1;    // i=2 
            12, 13  10  3   9  14  15 16  19  17

                            12, 13  10  3   9          pivot = 12  j=1
result for 2nd partition:   9  10   3  12   13
*/

//3. Implementing quicksort

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function qSort(array, start=0, end=array.length){
    if(start >= end){
        return array;
    }

    const middle = partition(array, start, end)
        
    array = qSort(array, start, middle)
    array = qSort(array, middle+1, end);

    return array;
}

function swap(array, i, j){
    let tempI = array[i];
    let tempJ = array[j];
    array[i] = tempJ;
    array[j] = tempI;

    return array;
}

function partition(array, start, end){
    const pivot = array[end-1];
    let j=start;

    for(let i = start; i < end-1; i++){
        if(array[i]<=pivot){
            swap(array, i, j)
            j++;
        }
    }
    swap(array, end-1, j);
    return j
}


// console.log(qSort(data));