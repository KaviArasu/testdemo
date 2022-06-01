// Functions to create elements
function createTableElement(type, content) {
  let ele = document.createElement(type);
  ele.innerHTML = content;
  return ele;
}

function creteFormElement(type, attribute, name) {
  let ele = document.createElement(type);
  ele.setAttribute(attribute, name);
  return ele;
}

function createFormLabel(type, attribute, name, content) {
  let ele = document.createElement(type);
  ele.setAttribute(attribute, name);
  ele.innerHTML = content;
  return ele;
}

// Main Div Creation for Flexbox Property
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "box");
document.body.append(mainDiv);

let subDiv = document.createElement("div");
subDiv.setAttribute("class", "container");
mainDiv.append(subDiv);

let rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");
subDiv.append(rowDiv);

//Form Creation using DOM:

let formDiv = document.createElement("form");
formDiv.setAttribute("id", "myform");
formDiv.setAttribute("class", "col");
rowDiv.append(formDiv);

let div1 = document.createElement("div");
div1.setAttribute("class", "form-group");
let fnameLabel = createFormLabel("label", "for", "firstName", "First Name");
let inputFName = creteFormElement("input", "id", "firstName");
inputFName.setAttribute("class", "form-control");
inputFName.setAttribute("required", "true");
div1.append(fnameLabel, inputFName);

let div2 = document.createElement("div");
div2.setAttribute("class", "form-group");
let lnameLabel = createFormLabel("label", "for", "lastName", "Last Name");
let inputLName = creteFormElement("input", "id", "lastName");
inputLName.setAttribute("class", "form-control");
inputLName.setAttribute("required", "true");
div2.append(lnameLabel, inputLName);

let div3 = document.createElement("div");
div3.setAttribute("class", "form-group");
let addressLabel = createFormLabel("label", "for", "address", "Address");
let inputAddress = creteFormElement("input", "id", "address");
inputAddress.setAttribute("class", "form-control");
inputAddress.setAttribute("required", "true");
div3.append(addressLabel, inputAddress);

let div4 = document.createElement("div");
div4.setAttribute("class", "form-group");
let pinLabel = createFormLabel("label", "for", "pin", "Pin");
let inputPin = creteFormElement("input", "id", "pin");
inputPin.setAttribute("class", "form-control");
inputPin.setAttribute("type", "number");
inputPin.setAttribute("required", "true");
div4.append(pinLabel, inputPin);

let div5 = document.createElement("div");
div5.setAttribute("class", "form-group");
let genderLabel = createFormLabel("label", "for", "gender", "Gender");
let inputGender = creteFormElement("select", "id", "gender");
let empty3 = document.createElement("option");
let opt1 = createFormLabel("option", "value", "Male", "Male");
let opt2 = createFormLabel("option", "value", "Female", "Female");
let opt3 = createFormLabel(
  "option",
  "value",
  "Prefer Not To Say",
  "Prefer Not To Say"
);
inputGender.setAttribute("class", "form-control");
inputGender.setAttribute("required", "true");
inputGender.append(empty3, opt1, opt2, opt3);
div5.append(genderLabel, inputGender);

let div6 = document.createElement("div");
div5.setAttribute("class", "form-group");
let foodLabel = createFormLabel("label", "for", "food", "Food");
let inputFood = creteFormElement("select", "id", "food");
inputFood.setAttribute("class", "form-control");
inputFood.setAttribute("required", "true");
let empty1 = document.createElement("option");
let option1 = createFormLabel("option", "value", "Idli", "Idli");
let option2 = createFormLabel("option", "value", "Masala Dosa", "Masala Dosa");
let option3 = createFormLabel("option", "value", "Dal Makhani", "Dal Makhani");
let option4 = createFormLabel("option", "value", "Vada Pav", "Vada Pav");
let option5 = createFormLabel("option", "value", "Briyani", "Briyani");
inputFood.append(empty1, option1, option2, option3, option4, option5);
let inputFood2 = creteFormElement("select", "id", "food2");
inputFood2.setAttribute("class", "form-control");
inputFood2.setAttribute("required", "true");
let empty2 = document.createElement("option");
let option6 = createFormLabel("option", "value", "Idli", "Idli");
let option7 = createFormLabel("option", "value", "Masala Dosa", "Masala Dosa");
let option8 = createFormLabel("option", "value", "Dal Makhani", "Dal Makhani");
let option9 = createFormLabel("option", "value", "Vada Pav", "Vada Pav");
let option10 = createFormLabel("option", "value", "Briyani", "Briyani");
inputFood2.append(empty2, option8, option9, option6, option7, option10);
div6.append(foodLabel, inputFood, inputFood2);

let div7 = document.createElement("div");
div7.setAttribute("class", "form-group");
let stateLabel = createFormLabel("label", "for", "state", "State");
let inputState = creteFormElement("input", "id", "state");
inputState.setAttribute("class", "form-control");
inputState.setAttribute("required", "true");

div7.append(stateLabel, inputState);

let div8 = document.createElement("div");
div8.setAttribute("class", "form-group");
let countryLabel = createFormLabel("label", "for", "country", "Country");
let inputCountry = creteFormElement("input", "id", "country");
inputCountry.setAttribute("class", "form-control");
inputCountry.setAttribute("required", "true");
div8.append(countryLabel, inputCountry);

let div9 = document.createElement("div");
div9.setAttribute("class", "form-group");
let sub = document.createElement("input");
sub.setAttribute("type", "submit");
sub.setAttribute("class", "btn-primary");
sub.setAttribute("value", "Submit");
div9.append(sub);

formDiv.append(div1, div2, div3, div4, div5, div6, div7, div8, div9);

//Creating Table Head using DOM:
let count = 0;
let div = document.createElement("div");
div.setAttribute("class", "table-responsive-sm");
div.setAttribute("class", "col");
rowDiv.append(div);

let table = document.createElement("table");
table.setAttribute("id", "table");
table.setAttribute("class", "table table-hover");
div.append(table);

let thead = document.createElement("thead");
table.append(thead);

let thelements = document.createElement("tr");
thead.append(thelements);

let hash = createTableElement("th", "#");
hash.setAttribute("scope", "col");
let firstName = createTableElement("th", "First Name");
firstName.setAttribute("scope", "col");
let lastName = createTableElement("th", "Last Name");
lastName.setAttribute("scope", "col");
let address = createTableElement("th", "Address");
address.setAttribute("scope", "col");
let pinCode = createTableElement("th", "Pin Code");
pinCode.setAttribute("scope", "col");
let gender = createTableElement("th", "Gender");
gender.setAttribute("scope", "col");
let foodChoice = createTableElement("th", "Choice Of Food");
foodChoice.setAttribute("scope", "col");
let state = createTableElement("th", "State");
state.setAttribute("scope", "col");
let country = createTableElement("th", "Country");
country.setAttribute("scope", "col");
thelements.append(
  hash,
  firstName,
  lastName,
  address,
  pinCode,
  gender,
  foodChoice,
  state,
  country
);

// Creating tbody

let tbody = document.createElement("tbody");
table.append(tbody);

// Displaying the input via Table

let formres = document.getElementById("myform");
formres.addEventListener("submit", (submit) => {
  event.preventDefault();

  //Creation of Table Elements using DOM:

  let trdata = document.createElement("tr");
  tbody.append(trdata);

  count++;
  let counter = document.createElement("td");
  counter.innerHTML = count;
  counter.setAttribute("scope", "row");
  let firstName_Push = document.createElement("td");
  let lastName_Push = document.createElement("td");
  let address_Push = document.createElement("td");
  let pinCode_Push = document.createElement("td");
  let gender_Push = document.createElement("td");
  let foodChoice_Push = document.createElement("td");
  let state_Push = document.createElement("td");
  let country_Push = document.createElement("td");
  trdata.append(
    counter,
    firstName_Push,
    lastName_Push,
    address_Push,
    pinCode_Push,
    gender_Push,
    foodChoice_Push,
    state_Push,
    country_Push
  );

  let firstName = document.getElementById("firstName").value;
  firstName_Push.innerHTML = firstName;
  let lastName = document.getElementById("lastName").value;
  lastName_Push.innerHTML = lastName;
  let address = document.getElementById("address").value;
  address_Push.innerHTML = address;
  let pin = document.getElementById("pin").value;
  pinCode_Push.innerHTML = pin;
  let gender = document.getElementById("gender").value;
  gender_Push.innerHTML = gender;
  let food = `${document.getElementById("food").value} ,${
    document.getElementById("food2").value
  }`;
  foodChoice_Push.innerHTML = food;
  let state = document.getElementById("state").value;
  state_Push.innerHTML = state;
  let country = document.getElementById("country").value;
  country_Push.innerHTML = country;
});

formres.addEventListener("submit", (submit) => {
  event.preventDefault();
  document.getElementById("myform").reset();
});
