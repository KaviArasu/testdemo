// 4 steps involed here
//Need:this will create a new object which will have
//the interaction with servers via api
//step 04: takes two parameters: "HTTP METHOD","API URL"


var request=new XMLHttpRequest();                                                                                   //step 01:create a XHR object
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");     //step 02: opening a request
request.send();                                                                                                     //step 03: sending a request
request.onload=function(){
    var data=JSON.parse(request.response);
    
    for(i=0;i<data.length;i++){
        console.log(`${data[i].name} ${data[i].flag}`)
    }
    
    for(i=0;i<data.length;i++){
        console.log(`${data[i].name} ${data[i].region} ${data[i].subregion} ${data[i].population}`)
    }
    
    }