// a.1 Print odd numbers in an array using anonymous function
var oddnumbers=function(arr){
    let oddarray = [];
    let evenarray = [];
    for(var i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i]/2)){
        evenarray.push(arr[i]);           
    }
    else {
        oddarray.push(arr[i]);            // Pushes Odd number into oddarray
        }
        
    }
    return oddarray;                  // Prints oddarray holding the values of odd numbers only
    }
    var arr = [1, 2, 3, 4, 5, 6];
    console.log(oddnumbers(arr));



//a.2 Print odd numbers in an array using IIFE function
(function oddnumbers(arr){
    let oddarray = [];
    let evenarray = [];
    for(var i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i]/2)){
        evenarray.push(arr[i]);           
    }
    else {
        oddarray.push(arr[i]);            // Pushes Odd number into oddarray
        }
        
    }
    console.log(oddarray);                  // Prints oddarray holding the values of odd numbers only
    })([1, 2, 3, 4, 5, 6]); 