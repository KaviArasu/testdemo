// console.log("app is started....");
// setTimeout(()=>console.log("this is delayed"),2000);
// console.log("second");
// setTimeout(()=>console.log())

// var arr=[12,13,14,15];
// var res=arr.map((ele)=>ele*2);
// console.log(res);


// function foo(names,saybye){
//     console.log("Welcome to foo!!!");
//     saybye(names);
// }

// function bar(names){
//     console.log("welcome to bar function!!!"+names);
// }

// setTimeout(foo,100,"john doe",bar);

var ele1=createele("div","class","main","this is div");
document.body.append(ele1);





function createele(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

