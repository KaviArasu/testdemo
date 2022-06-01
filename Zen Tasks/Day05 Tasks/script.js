// 1.a Print odd numbers in an array using anonymous function
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



// Using IIFE function
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


    //2.b Convert all the strings to title caps in a string array using IIFE Function

    (function titlecaps(arr){
    
    tcasearray = [];
    for(i=0;i<arr.length;i++){
    brr = arr[i];
    crr = brr.split("");
    drr = `${crr[0].toUpperCase()}${crr.splice(1,crr.length).join('')}`;
    tcasearray.push(drr);
}
console.log(tcasearray);
    })(['apple','ball','cat','doll']);


    
    //2.c Sum of all number in an array
    
    
    (function sumarr(arr){
        var sum = 0;
        for(var i=0;i<arr.length;i++){
          sum += arr[i];
        }
        console.log(sum)
      })([1, 2, 3, 4]);


    //2.d Return all the Prime Numbers in an array using IIFE Function

    
    (function prime(arr){    
    var primearr = [];
    for(var i=0;i<arr[i];i++){
        var count = 0;
        for(var j=1; j<=arr[i];j++){
            if(Number.isInteger(arr[i]/j))
            count++;
        }
            if(count===2)
            primearr.push(arr[i]);
            }
             
        console.log(primearr);
})([1, 2, 3, 4, 5, 6]);


        //2.e Return all the palindromes in an array

        function checkPalindrome(arr) {
            var palarr = [];
            for(var i=0;i<arr[i].length;i++){
              for(var j=0;j<arr[i].length/2;j++){
                var string = arr[i].split("");
                if(string[j] !== string[arr[i].length -1 -j]){
                  break;
                }
                
          }
          palarr.push(arr[i]);
          }
          console.log(palsrr);
          }
          var arr = ['madam', 'sir'];
          console.log(checkPalindrome(arr));