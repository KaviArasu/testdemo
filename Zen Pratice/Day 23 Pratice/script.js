// var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// console.log(res);
// res.then((data)=>console.log(data.json()));

// res.then((data)=>{
//     return data.json();
// }).then((value)=>console.log(value))


// res.then((data)=>data.json()).then((value)=>console.log(value));

// res.then((data)=>{ return data.json();
// }).then((value)=>console.log(value)).catch((error)=>console.log(error));

// res.then((data)=>data.json())
// .then((value)=>{
//     console.log(value);
//     result(value);
// }).
// catch((error)=>console.log(error));

// function result(res){
//         let csia= res.filter((ele) => ele.region==="Asia");
//         console.log(csia);
  
//             var count = 0;
//             csia.forEach((element)=>{count += element.population;});
//             console.log(count);

//              let sumof = csia.reduce((sum,currentvalue)=> sum + currentvalue.population,0);
//              console.log(sumof);
// }

// for(let i=0;i<csia.length;i++){
//     console.log(`${csia[i].name} ${csia[i].capital} ${csia[i].flag}`);


// var res = fetch("https://api.covid19api.com/dayone/country/india");

// res.then((data)=>data.json())
// .then((value)=>{
//     console.log(value);
//     result(value);
// }).
// catch((error)=>console.log(error));

// function result(res){
//         // let csia= res.filter((ele) => ele.region==="Asia");
//         // console.log(csia);
  
//             res.forEach((ele)=>console.log(ele.recovered))
            
//             //  let sumof = csia.reduce((sum,currentvalue)=> sum + currentvalue.population,0);
//             //  console.log(sumof);
// }



// MockApi Task

var res = fetch("https://627dfc98271f386cefeedd6b.mockapi.io/students");

var url="https://627dfc98271f386cefeedd6b.mockapi.io/students";

fetch(url).then((data)=>data.json()).then((res)=>console.log(res));
