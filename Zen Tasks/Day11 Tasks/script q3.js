function foo(){
    var ele1=document.getElementById("name").value;
    var ele2=document.getElementById("email").value;
    var ele3=document.getElementById("contact").value;
    var ele4=document.getElementById("company").value;
    var ele5=document.getElementById("message").value;
    console.log(ele1);
    console.log(ele2);
    console.log(ele3);
    console.log(ele4);
    console.log(ele5);
}

var types = document.getElementsByName('emtype');
var emtype_value;
for(var i = 0; i < types.length; i++){
    if(types[i].checked){
        emtype_value = types[i].value;
    }
}

console.log(emtype_value);