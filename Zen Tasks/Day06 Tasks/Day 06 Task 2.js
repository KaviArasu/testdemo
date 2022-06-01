// 1. Square of a number

function square(num){
    return num * num
}
console.log(square(5));


// 2. Swapping two numbers

var a=5;
var b=10;

[a, b] = [b, a];   // swapping two variables using destructuring
console.log(a);

// 3. Addition of 3 numbers

function sumofthree(arr)
{
    return arr[0]+arr[1]+arr[2];
}

console.log(sumofthree([1, 2, 3]));

// 4. Celsius to Fahrenheit conversion

function tofarenheit(celsius){
    return (celsius * 1.8) +32;
}

console.log(tofarenheit(5));

// 5. Meter to miles

function tomiles(meter){
    return (meter * 0.00062137).toFixed(4);
}

console.log(tomiles(532));

// 6. Pounds to KG

function toKG(pounds){
    return pounds * 0.453592;
}
console.log(toKG(4.4));

// 7. Calculate Batting Average

    function battingaverage(hits,bats){
        return  hits/bats;
    }

    console.log(battingaverage(60,100));


// 8. Calculate five test scores and print their average

    function testave(arr){
        return (arr[0]+arr[1]+arr[2]+arr[3]+arr[4])/5;
    }

    console.log(`Avergae of five test is ${testave([75, 85, 90, 70, 80])}`);