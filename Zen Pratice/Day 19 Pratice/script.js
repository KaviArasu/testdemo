// var button=document.createElement("button");
// button.setAttribute("type","button");
// button.className="btn btn-primary";
// button.innerHTML="Click Me";
// button.addEventListener("click",foo);
// doucument.body.append(button);

// function foo(){
//     alert("this is the alert window");
// }


// var parent=document.createElement("div");
// var child1=document.createElement("p");
// child1.innerHTML="this is p";

// var child2=document.createElement("span");
// child2.innerHTML="tis is span"


// // Task 2:

// var button=document.createElement("button");
// button.setAttribute("type","button");
// button.className="btn btn-primary";
// button.innerHTML="Click me";
// button.addEventListener("click",foo);
// document.body.append(button);



// function foo(){
//     var res=prompt("enter your name");
//     var span=document.createElement("span")
//     span.innerHTML=res;
//     document.body.append(span);
    
// }

// Task 4:

// var button=document.createElement("button");
// button.setAttribute("type","button");
// button.className="btn btn-primary";
// button.innerHTML="Click me";
// button.addEventListener("click",foo);
// document.body.append(button);

// var count=document.createElement("var")
// count.innerHTML= "parseInt(0)"



// function foo(){
//     var res=alert("Count Number of Clicks");
//     count++;
//     console.log(count);  
// }


// // task 2.1:

//  var button=document.createElement("button");
//  button.setAttribute("type","button");
//  button.className="btn btn-primary";
//  button.innerHTML="Click me";
//  button.addEventListener("click",foo);
//  document.body.append(button);

//  function foo(){
//      var res=prompt("read input")
//      var span=document.createElement("span");
//      span.style.color="red";
//      span.innerHTML=res;
//      document.body.append(span);
//  }


document.querySelector("#txt").addEventListener("keyup",foo);
function foo(event){
    console.log(event.target.value.length);
}