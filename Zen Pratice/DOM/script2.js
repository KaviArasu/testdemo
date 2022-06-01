// //functions based writing
// var container=createele("div","class","container");
// var row=createele("div","class","row");
// var col=createele("div","class","col");
// row.append(col);
// container.append(row);
// document.body.append(container);





// //createele("div","class","container");
// //<div class="container"></div>
// //<div class="row"></div>
// //<div class="col"></div>
// function createele(tagname,attrname,attrval){ 
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrval);
// return ele;

// }


//Creating a Simple form using HTML
// var label1=labelcreate("firstname","for","fname","First Name");
// var b1=linebreak();
// var input1=createinput("input","type","fname","id","fname");
// var b2=linebreak();
// var label2=labelcreate("middlename","for","mname","Middle Name");
// var b3=linebreak();
// var input2=createinput("input","type","mname","id","mname");
// var b4=linebreak();
// var label3=labelcreate("lastname","for","lname","Last Name");
// var b5=linebreak();
// var input3=createinput("input","type","lname","id","lname");
// var b6=linebreak();
// var b7=linebreak();


// document.body.append(label1,b1,input1,b2,label2,b3,input2,b4,label3,b5,input3,b6,b7);


// function labelcreate(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;

// }
// function linebreak(){
//     var br=document.createElement("br");
//     return br;
// }
// function createinput(tagname1,attrname1,attrvalue1,attrname2,attrvalue2){
// var element=document.createElement(tagname1);
// element.setAttribute(attrname1,attrvalue1);
// element.setAttribute(attrname2,attrvalue2);
// return element;

// }

var table=document.createElement("table");
table.className="table";
var thead=document.createElement("thead")
thead.className="thead-dark";


var tr1=document.createElement("tr");
var th1=createele("th","First Name");
var th2=createele("th","Last Name");
tr1.append(th1,th2);
thead.append(tr1);
var tbody=document.createElement("tbody");


var tr2=document.createElement("tr");
var td1=createele("td","John");
var td2=createele("td","Doe");
tr2.append(td1,td2);
tbody.append(tr2);
table.append(thead,tbody);
document.body.append(table);


var tr3=document.createElement("tr");
var td3=createele("td","Kavi");
var td4=createele("td","Arasu");

tr3.append(td3,td4);
tbody.append(tr3);
table.append(thead,tbody);
document.body.append(table);



function createele(elementname,value){
    var ele=document.createElement(elementname);
    ele.innerHTML=value;
    return ele;
}