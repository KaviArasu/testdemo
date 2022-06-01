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


    //1.b Convert all the strings to title caps in a string array using anonymous function

    var titlecaps=function(arr){
    
    tcasearray = [];
    for(i=0;i<arr.length;i++){
    brr = arr[i];
    crr = brr.split("");
    drr = `${crr[0].toUpperCase()}${crr.splice(1,crr.length).join('')}`;
    tcasearray.push(drr);
}
    return tcasearray;
    }
   
    console.log(titlecaps(['apple','ball','cat','doll']));

    
    //1.c Sum of all number in an array using anonymous function
    
    
    var sumarr=function(arr){
        var sum = 0;
        for(var i=0;i<arr.length;i++){
          sum += arr[i];
        }
        return sum;
      }
        console.log(sumarr([1, 2, 3, 4]));

    //1.d Return all the Prime Numbers in an array using anonymous function

    
    var prime=function(arr){    
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
             
        return primearr;
}
    console.log(prime([1, 2, 3, 4, 5, 6]));

        //1.e Return all the palindromes in an array using anonymous function

        var Palindrome=function(arr){

            var crr = [];
            var len = arr.length
            
            for(var i=0;i<len;i++){
            var len2 = (arr[i].length/2).toFixed(0);
                var brr = arr[i].split("");
                    if(brr.slice(0,len2).join() === brr.slice(-len2).reverse().join())
                    crr.push(arr[i]);
            }
            return crr;
            
            }
        
                console.log(Palindrome(['racecar', 'level', 'number', 'radar']));


        //1.f Return median of two sorted arrays of same size using anonymous function

        var medianof=function(arr1,arr2){
            len1 = arr1.length
            median = (arr1[len1-1] + arr2[0]) / 2
            return median;
            
            }
                console.log(medianof([1, 5, 7 ,10, 14, 15],[17, 25, 31, 35, 11, 12]));

        
        //1.g Remove duplicates from an array using anonymous function

        var remduplicate=function(arr){
            var unichar = [];
            arr.forEach((ele) => {
                if (!unichar.includes(ele)) {
                    unichar.push(ele);
                }
                
            });
            return unichar;
            }

            console.log(remduplicate(['apple', 'cat', 'ball', 'apple', 'lion']))

        //1.h Rotate an array by k times using IIFE Function

            var rotatektimes=function(oriarr){
                var rotatearr = oriarr.slice(0);
                var k= 2;
                for(let i=0;i<k;i++){
                        var len = rotatearr.length;
                        var lastele = rotatearr[len-1];
                        var remele = rotatearr.slice(0,len-1);
                        var rotate = [].concat(lastele, remele);
                        rotatearr = rotate;
                        }
                return rotatearr;
                }
                console.log(rotatektimes([1, 2, 3, 4, 5]));