let apiKey ='AIzaSyAoDVvDUQeXEJo-zbC2AcAgvDSFti1lHkI';
var base = `https://www.googleapis.com/youtube/v3/search/?part=snippet&channelId=UC8butISFwT-Wl7EV0hUK0BQ&key=${apiKey}&q=`;

var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","searchTerm");
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");

form.append(input,sub);
document.body.append(form);

let division=document.createElement("div");
division.setAttribute("id","searchResult");
document.body.append(division);

var myList=document.createElement("div");
form.append(myList);


var formres=document.getElementById("myform");

formres.addEventListener("submit",(event)=>{
    event.preventDefault();
    var searchTerm=document.getElementById("searchTerm").value;
    var url= `${base}${searchTerm}&maxResults=20`;

    ytsearch(url);
})


async function ytsearch(url){
    let response=await fetch(url);
    let data=await response.json();
    addData(data.items);
}

function addData(arr){
    myList.innerHTML='';
    let yt='https://youtu.be/';

    arr.forEach((res)=>{
        if(res.id.videoId){
        let main = document.createElement('div');
        main.style.border = '1px solid #ddd';
        main.style.padding='10px';
        main.style.width='20vw';
        main.style.display = 'inline-block';
        main.style.height = '30vw';
        main.style.overflow='scroll';
        myList.append(main);
        // main.textContent = res.id.videoId;
        myLink = document.createElement('a');
        myLink.textContent=res.id.videoId;
        myLink.setAttribute('href',yt+res.id.videoId);
        myLink.setAttribute('target','_blank');
        console.log(res.snippet);


        let thumb=document.createElement('img');
        main.append(thumb);
        thumb.setAttribute('src',res.snippet.thumbnails.medium.url);
        thumb.classList.add('box');
        
        console.log(res.snippet.description);

        let des = document.createElement('p');
        main.append(des);
        des.innerHTML = `<h3>${res.snippet.title}</h3><small>${res.snippet.description}</small>`;
        des.append(myLink);
        }
    })
}




// 1. Retrive Channel Information
let channelId= 'UC38z3fT9RO4yugLJoCZLygw';
var channelInfo =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`;

async function channelSearch(channelInfo){
    let response=await fetch(channelInfo);
    let data=await response.json();
    console.log(data);
    var playlistId =data.items[0].contentDetails.relatedPlaylists.uploads;
    var uploads = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${apiKey}`
    console.log(playlistId);
    Uploaded(uploads);
};

channelSearch(channelInfo);





// 2. Uploaded videos and system-generated playlists

async function Uploaded(uploads){
    let response=await fetch(uploads);
    let data=await response.json();
    console.log(data);
}



// 3. Retrieve Subscriptions and user activity

var apiKey2 = '997458920195-u0p0l369tc6iuh6c8tl69oj4b872pkan.apps.googleusercontent.com';
var userActivity = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=${channelId}=${apiKey2}`;

async function activity(userActivity){
    let response=await fetch(userActivity);
    let data=await response.json();
    console.log(data);
}
// activity(userActivity);



// 4. functionality for topic-based searching and search for playlists or channels 

var searchTerm = 'JavaScript'
var YTsearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${apiKey}`;
console.log(YTsearch)
async function search(YTsearch){
    let response=await fetch(YTsearch);
    let data=await response.json();
    console.log(data);
}

search(YTsearch);