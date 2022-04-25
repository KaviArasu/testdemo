// 4 steps involed here
//step 01:create a XHR object
//Need:this will create a new object which will have
//the interaction with servers via api
var request=new XMLHttpRequest();
//step 02: opening a request
//takes two parameters: "HTTP METHOD","API URL"
request.open("GET","https://api.covid19api.com/total/country/india");
//step 03: sending a request
request.send();
//step 04:once data successfully loaded from server
//or status code is 200
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    console.log(data[10].active+""+data[0].deaths);
    //i want to print all the country name and their capital in console
    //print the countires flag in the console
    // print the active cases,deaths,recovered using covidapi

}