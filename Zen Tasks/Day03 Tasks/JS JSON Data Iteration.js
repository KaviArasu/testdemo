// 4 steps involed here
//Need:this will create a new object which will have
//the interaction with servers via api
//step 04: takes two parameters: "HTTP METHOD","API URL"


var request=new XMLHttpRequest();                                                                                   //step 01:create a XHR object
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");     //step 02: opening a request
request.send();                                                                                                     //step 03: sending a request
request.onload=function(){
    var data=JSON.parse(request.response);
    
    
    //Task1.1: Iterating over for loop
    for(var i=0;i<15;i++){

        console.log(`${data[i].name}   ${data[i].capital}`);    // prints first 15 countries and its capital inside console
}
    //Task1.2: Iterating over for in loop
    for (let i in data) {
        console.log(`${data[i].name}   ${data[i].subregion}    ${data[i].population}`);    // prints all the country name, subregion and its population inside console
    }

    //Task1.3: Iterating over for of loop
    for(var rcdata of data){
        console.log(rcdata)   // prints all of the objects data received in JSON file inside console
    }
  
    //Task1.4: Iterating over forEach loop
    let tcountries = 0;
    data.forEach((element) => {tcountries++;});
        console.log(`Total Countries in this JSON API is ${tcountries}`); // adds total number of countries in json file and prints the same inside console

    
  
    
    }


    