// 1. How to compare two JSON have the same properties without order?
//      a. var obj1= {name: "Person 1", age:5};
//      b. var obj2={age:5, name:"Person 2"};

// Solution: Using for in loop we can compare if key in obj1 is there in key in obj2 and check if there are of same values
// in this program objects are compared by their reference
var obj1 = {name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};

                                                    // 

if(Object.keys(obj1).length==Object.keys(obj2).length){             // Step 01: we check if obj1 and obj2 have the same number of fields usin .length property
    for(var key in obj1) {                                          // Step 02: Initialize for in loop to take fields in obj1 for comparison
        if(obj1[key] == obj2[key]) {                                // Step 03: Checks if initialized field & value of obj1 is present in obj2  
            var flag = true;
        }
        else {
            flag=false;                                             // Inititalize flag to flase if key values obj1 not found in obj2 
            break;                                                  // Breaks the for in loop even if one comparison fails
        }
    }
}
else {
    flag=false;                                                     // breaks the if loop if two json objects does not have the same number of fields.
}
console.log(`is object equal ${flag}`);                                         

    