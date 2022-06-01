
// 2.a Print odd numbers in an array using Arrow Function

var oddnumbers=(arr)=> {
    let oddarray = [];
    let evenarray = [];
    for(var i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i]/2)){
        evenarray.push(arr[i]);           
    }
    else {
        oddarray.push(arr[i]);            
        }
        
    }
    console.log(oddarray);                  
    }

    oddnumbers([1, 2, 3, 4, 5, 6]);


    //2.b Convert all the strings to title caps in a string array using Arrow Function

    var titlecaps =(arr)=> {
    
        tcasearray = [];
        for(i=0;i<arr.length;i++){
        brr = arr[i];
        crr = brr.split("");
        drr = `${crr[0].toUpperCase()}${crr.splice(1,crr.length).join('')}`;
        tcasearray.push(drr);
    }
    console.log(tcasearray);
        }
    
    titlecaps(['apple','ball','cat','doll']);

    
    //2.c Sum of all number in an array Arrow Function
    
    
    var sumarr=(arr) => {
        var sum = 0;
        for(var i=0;i<arr.length;i++){
          sum += arr[i];
        }
        console.log(sum)
      }
        sumarr([1, 2, 3, 4]);


    //2.d Return all the Prime Numbers in an array using Arrow Function

    
    var prime = (arr) => { 
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


        //1.e Return all the palindromes in an array using Arrow Function

        var Palindrome=() => {
            var arr = ['racecar', 'level', 'number', 'radar']
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
            console.log(Palindrome())
        