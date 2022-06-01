// 1. Retrive Channel Information

let apiKey ='AIzaSyAoDVvDUQeXEJo-zbC2AcAgvDSFti1lHkI'
var base = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`


var form2=document.createElement("form");
form2.setAttribute("id","myform");

var input2=document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("id","searchTerm2");
input2.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("type","submit");
sub.setAttribute("value","Enter Channel ID");

form2.append(input2,sub);
document.body.append(form2);

var formres2=document.getElementById("myform");

formres2.addEventListener("submit",(event)=>{
    event.preventDefault();
    var searchTerm2=document.getElementById("searchTerm2").value;
    var url= `${base}${searchTerm2}&key=${apiKey}`;
    console.log(url);
    channeldata(url);
})


async function channeldata(url){
    let response=await fetch(url);
    let data=await response.json()
    console.log(data);
}
