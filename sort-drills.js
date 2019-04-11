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

*/