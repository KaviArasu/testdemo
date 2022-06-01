// 1. Write a loop that makes seven calls to console.log to output the following triangle

var temp= "";
for(var i=0; i<7;i++){
    temp = temp + "#";
    console.log(temp);
}

// 2. Get the first item, the middle item and the last item of the array

arr = ["John", "Ralph", "Lal", "Vignesh", "Mahesh"];

firstitem = arr[0];
middleitem = arr[Math.floor(arr.length/2)];
lastitem = arr[arr.length-1];

console.log(firstitem,middleitem,lastitem);

// 3. Add your name to the end of the friends array, and add another name to beginning.

arr.splice(arr.length,0,"Kavi");

arr.splice(0,0,"Ashok");

console.log(arr);

// 4. Add Mr or Ms to the names in the friends array.

for(i=0;i< arr.length;i++){
    arr[i] = "Mr."+ arr[i]; 
}

console.log(arr);

// 5. Concat all the names the friends array and return as comma “,” seperated string

var temp = arr[0]
for(var i=0;i<arr.length;i++){
    if(i==0){
    temp = temp+arr[i];
    } else {
    temp = temp + "," + arr[i];
    }
}
    console.log(temp);

// 6. Find the friends names who has letter ‘a’ and return the list.
arr2 = [];
for(var i=0; i<arr.length;i++){
    if(arr[i].includes("a")){
        arr2.push(arr[i])
    }
}
console.log(arr2);